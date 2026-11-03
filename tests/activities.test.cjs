const {test} = require('node:test');
const assert = require('node:assert/strict');
const model = require('../assets/js/activities.js');
const data = {
  challenges: [
    {id:'W1', category:'math', horizon:'week', due:'2020-01-01', title:{fr:'Un défi P',en:'A P challenge'},action:{fr:'Expliquer',en:'Explain'}},
    {id:'Y1', category:'writing', horizon:'year', title:{fr:'Écrire',en:'Write'},action:{fr:'Un article',en:'A paper'}}
  ],
  events: [{challenge:'W1',status:'proposed'}, {challenge:'Y1',status:'proposed'}, {challenge:'Y1',status:'accepted'}]
};
test('Dates and local responses never invent published completion', () => {
  const drafts = {W1:{status:'completed',note:'Done locally'}};
  assert.equal(model.statusOf('W1', data.events),'proposed');
  assert.equal(model.statusOf('Y1', data.events),'accepted');
  assert.equal(model.buildReport(data,drafts,{completed:'Réalisé'},'fr','2026-11-03').includes('Réalisé'),true);
  assert.equal(model.statusOf('W1',data.events),'proposed');
});
test('Drafts reject unknown IDs and invalid states and bound note length', () => {
  const result = model.cleanDrafts({W1:{status:'invented',note:'x'.repeat(1500)},Y1:{status:'declined',note:'Non'},unknown:{status:'completed',note:'bad'}},data.challenges);
  assert.deepEqual(Object.keys(result),['W1','Y1']);
  assert.equal(result.W1.status,''); assert.equal(result.W1.note.length,1200);
  assert.equal(result.Y1.status,'declined');
  assert.equal(Object.keys(model.cleanDrafts([],data.challenges)).length,0);
});
test('History remains accessible after declines and deferrals', () => {
  const copy = {...data,events:[...data.events,{challenge:'W1',status:'declined'}]};
  assert.equal(model.visibleChallenges(copy,'all','open','','fr').length,1);
  assert.equal(model.visibleChallenges(copy,'week','all','','fr')[0].id,'W1');
  assert.equal(model.statusOf('W1',copy.events),'declined');
  assert.equal(model.statusOf('W1',[...copy.events,{challenge:'W1',status:'deferred'}]),'deferred');
});
test('Horizon, status and bilingual search combine without changing history', () => {
  assert.equal(model.visibleChallenges(data,'year','accepted','paper','en')[0].id,'Y1');
  assert.equal(model.visibleChallenges(data,'week','accepted','','fr').length,0);
  assert.equal(model.visibleChallenges(data,'all','all','DÉFI','fr')[0].id,'W1');
});
test('Reports preserve user text and include notes without a decision', () => {
  const text = '<script>example</script>\nUne difficulté';
  const result = model.buildReport(data,{W1:{status:'',note:text}},{noteOnly:'Retour libre'},'fr','2026-11-03');
  assert.ok(result.includes('W1 — Un défi P\nRetour libre\n'+text));
  assert.equal(model.buildReport(data,{}, {},'fr','2026-11-03'),'');
});

test('Category filtering stays optional and composes with horizons', () => {
  assert.equal(model.visibleChallenges(data,'all','all','','fr','math').length,1);
  assert.equal(model.visibleChallenges(data,'all','all','','fr','writing')[0].id,'Y1');
  assert.equal(model.visibleChallenges(data,'week','all','','fr','writing').length,0);
  assert.equal(model.visibleChallenges(data,'all','all','','fr').length,2);
});
