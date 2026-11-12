const {test} = require('node:test');
const assert = require('node:assert/strict');
const model = require('../assets/js/activities.js');

const data = {
  challenges: [
    {id:'W1',category:'math',horizon:'week',period_start:'2026-11-09',due:'2026-11-15',title:{fr:'Un défi P',en:'An Exam P challenge'},action:{fr:'Expliquer',en:'Explain'}},
    {id:'M1',category:'build',horizon:'month',period_start:'2026-11-01',due:'2026-11-30',title:{fr:'Une application',en:'An app'},action:{fr:'Créer',en:'Create'}},
    {id:'Y1',category:'writing',horizon:'year',period_start:'2026-11-03',due:'2027-11-02',title:{fr:'Écrire',en:'Write'},action:{fr:'Un livre',en:'A book'}},
    {id:'LATER',category:'math',horizon:'week',period_start:'2026-11-16',due:'2026-11-22',title:{fr:'Un autre défi',en:'Another challenge'},action:{fr:'Tester',en:'Test'}}
  ],
  events: [
    {challenge:'W1',status:'proposed'},
    {challenge:'M1',status:'proposed'},
    {challenge:'Y1',status:'proposed'},
    {challenge:'LATER',status:'proposed'}
  ]
};

test('Proposals and dates never invent published completion', () => {
  const drafts = {W1:{status:'completed',note:'Terminé'}};
  assert.equal(model.statusOf('W1',data.events),'proposed');
  assert.ok(model.buildReport(data,drafts,{completed:'Réalisé'},'fr','2026-11-15').includes('Réalisé'));
  assert.equal(model.statusOf('W1',data.events),'proposed');
});

test('Local drafts accept only explicitly completed challenges', () => {
  const raw = {
    W1:{status:'completed',note:'x'.repeat(1300)},
    M1:{status:'accepted',note:'Je vais le faire'},
    Y1:{status:'',note:'Note seule'},
    LATER:{status:'invented',note:'Non'},
    unknown:{status:'completed',note:'Ignore'}
  };
  const result=model.cleanDrafts(raw,data.challenges);
  assert.deepEqual(Object.keys(result),['W1']);
  assert.equal(result.W1.note.length,1200);
  assert.deepEqual(Object.keys(model.cleanDrafts([],data.challenges)),[]);
});

test('Report contains only checked completions, not intentions or published successes', () => {
  const d={W1:{status:'completed',note:'Ma note'},M1:{status:'accepted',note:'À faire'},Y1:{status:'completed',note:''}};
  const report=model.buildReport(data,d,{completed:'Réalisé'},'fr','2026-11-15');
  assert.ok(report.includes('W1 — Un défi P\nRéalisé\nMa note'));
  assert.ok(report.includes('Y1 — Écrire\nRéalisé'));
  assert.ok(!report.includes('M1'));
  const published={...data,events:[...data.events,{challenge:'W1',status:'completed'}]};
  assert.ok(!model.buildReport(published,d,{completed:'Réalisé'},'fr','2026-11-15').includes('W1'));
  assert.equal(model.buildReport(data,{}, {completed:'Réalisé'},'fr','2026-11-15'),'');
});

test('Horizon, published status, category and bilingual search remain combinable', () => {
  const accepted={...data,events:[...data.events,{challenge:'Y1',status:'accepted'}]};
  assert.deepEqual(model.visibleChallenges(accepted,'year','accepted','book','en').map(c=>c.id),['Y1']);
  assert.deepEqual(model.visibleChallenges(accepted,'week','accepted','','fr').map(c=>c.id),[]);
  assert.deepEqual(model.visibleChallenges(data,'all','all','DÉFI','fr').map(c=>c.id),['W1','LATER']);
  assert.deepEqual(model.visibleChallenges(data,'all','all','','fr','math').map(c=>c.id),['W1','LATER']);
});

test('Current period includes week, month and year but not next week', () => {
  const current=model.visibleChallenges(data,'all','all','','fr','all','current','2026-11-12').map(c=>c.id);
  assert.deepEqual(current,['W1','M1','Y1']);
  const nextWeek=model.visibleChallenges(data,'week','all','','fr','all','current','2026-11-18').map(c=>c.id);
  assert.deepEqual(nextWeek,['LATER']);
  assert.equal(model.visibleChallenges(data,'month','all','','fr','build','current','2026-12-01').length,0);
  assert.equal(model.visibleChallenges(data,'all','all','','fr','all','all','2026-11-12').length,4);
});

test('Weekly view chooses the most recent started week without exposing future weeks', () => {
  const challenges = [
    {id:'old',horizon:'week',period_start:'2026-11-02'},
    {id:'current1',horizon:'week',period_start:'2026-11-09'},
    {id:'current2',horizon:'week',period_start:'2026-11-09'},
    {id:'future',horizon:'week',period_start:'2026-11-16'}
  ];
  assert.deepEqual(model.latestWeeklyChallenges(challenges,'2026-11-08').map(c=>c.id),['old']);
  assert.deepEqual(model.latestWeeklyChallenges(challenges,'2026-11-12').map(c=>c.id),['current1','current2']);
  assert.deepEqual(model.latestWeeklyChallenges(challenges,'2026-11-15').map(c=>c.id),['current1','current2']);
  assert.deepEqual(model.latestWeeklyChallenges(challenges,'2026-11-16').map(c=>c.id),['future']);
  assert.deepEqual(model.latestWeeklyChallenges(challenges,'2026-11-01'),[]);
  const expired=[
    {id:'prior',horizon:'week',period_start:'2026-11-02',due:'2026-11-08'},
    {id:'current',horizon:'week',period_start:'2026-11-09',due:'2026-11-15'}
  ];
  assert.deepEqual(model.latestWeeklyChallenges(expired,'2026-11-12').map(c=>c.id),['current']);
  assert.deepEqual(model.latestWeeklyChallenges(expired,'2026-11-16'),[]);
});

test('Odyssey takes precedence over vague legacy tasks in the same active week', () => {
  const items = [
    {id:'old1',horizon:'week',period_start:'2026-11-09',due:'2026-11-15'},
    {id:'OD1',horizon:'week',series:'odyssee',level:1,period_start:'2026-11-09',due:'2026-11-15'},
    {id:'OD2',horizon:'week',series:'odyssee',level:1,period_start:'2026-11-09',due:'2026-11-15'},
    {id:'next',horizon:'week',series:'odyssee',level:2,period_start:'2026-11-16',due:'2026-11-22'}
  ];
  assert.deepEqual(model.latestWeeklyChallenges(items,'2026-11-12').map(x=>x.id), ['OD1','OD2']);
  assert.deepEqual(model.latestWeeklyChallenges(items,'2026-11-16').map(x=>x.id), ['next']);
  assert.deepEqual(model.latestWeeklyChallenges(items.filter(x=>!x.series),'2026-11-12').map(x=>x.id), ['old1']);
});

test('The explorer hides old weekly proposals unless archive is explicitly requested', () => {
  const data = {
    challenges: [
      {id:'OD',series:'odyssee',horizon:'week',category:'math',period_start:'2026-11-09',due:'2026-11-15',title:{fr:'Épreuve chronométrée',en:'Timed trial'},action:{fr:'Chronométrer',en:'Time'}},
      {id:'legacy',horizon:'week',category:'math',period_start:'2026-11-09',due:'2026-11-15',title:{fr:'Exploration vague',en:'Vague exploration'},action:{fr:'Explorer',en:'Explore'}},
      {id:'annual',horizon:'year',category:'research',period_start:'2026-11-03',due:'2027-11-02',title:{fr:'Étude annuelle',en:'Annual study'},action:{fr:'Étudier',en:'Study'}}
    ],
    events:[]
  };
  assert.deepEqual(model.visibleChallenges(data,'all','all','','fr','all','current','2026-11-12',false).map(x=>x.id), ['OD','annual']);
  assert.deepEqual(model.visibleChallenges(data,'all','all','','fr','all','current','2026-11-12',true).map(x=>x.id), ['OD','legacy','annual']);
});
