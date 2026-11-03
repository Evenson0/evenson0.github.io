/* Activities: published decisions come from events; browser inputs are drafts only. */
(function () {
  'use strict';
  const STATES = ['proposed', 'accepted', 'in_progress', 'completed', 'declined', 'deferred', 'stopped'];
  const CLOSED = new Set(['completed', 'declined', 'stopped']);
  function statusOf(id, events) {
    const history = events.filter(event => event.challenge === id);
    return history.length ? history[history.length - 1].status : 'proposed';
  }
  function cleanDrafts(raw, challenges) {
    const result = Object.create(null);
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return result;
    challenges.forEach(challenge => {
      const item = raw[challenge.id];
      if (!item || typeof item !== 'object') return;
      const status = STATES.includes(item.status) && item.status !== 'proposed' ? item.status : '';
      const note = typeof item.note === 'string' ? item.note.slice(0, 1200) : '';
      if (status || note.trim()) result[challenge.id] = {status, note};
    });
    return result;
  }
  function visibleChallenges(data, horizon, status, query, lang) {
    const term = query.trim().toLocaleLowerCase();
    return data.challenges.filter(challenge => {
      const current = statusOf(challenge.id, data.events);
      return (horizon === 'all' || challenge.horizon === horizon) &&
        (status === 'all' || (status === 'open' ? !CLOSED.has(current) : current === status)) &&
        (!term || [challenge.id, challenge.title[lang], challenge.action[lang]].join(' ').toLocaleLowerCase().includes(term));
    });
  }
  function buildReport(data, drafts, labels, lang, today) {
    const lines = data.challenges.filter(c => drafts[c.id]).map(c => {
      const draft = drafts[c.id];
      return c.id + ' — ' + c.title[lang] + '\n' +
        (draft.status ? labels[draft.status] : labels.noteOnly) +
        (draft.note.trim() ? '\n' + draft.note.trim() : '');
    });
    return lines.length ? 'Activities · ' + today + '\n\n' + lines.join('\n\n') : '';
  }
  if (typeof module === 'object' && module.exports) {
    module.exports = {statusOf, cleanDrafts, visibleChallenges, buildReport};
    return;
  }
  const root = document.getElementById('activities-app');
  if (!root) return;
  let data;
  try { data = JSON.parse(document.getElementById('activities-data').textContent); }
  catch (_) {
    document.getElementById('act-cards').textContent = 'Les défis ne peuvent pas être chargés. Réessaie après avoir rechargé la page. / Unable to load challenges. Please reload.';
    return;
  }
  const COPY = {
    fr: {
      eyebrow: 'LE CARNET DES POSSIBLES', hero: 'De l’intention à l’expérience.', promise: 'Je propose. Tu choisis. On garde la trace.',
      mentor: 'LE POINT DE DÉPART', load: 'Les défis réutilisent les séances de Becoming. Les grands horizons se construisent avec les petites actions.',
      challenges: 'Les défis', journal: 'Le journal', filter: 'État', search: 'Rechercher', yourturn: 'À TOI DE JOUER',
      reportTitle: 'Ton prochain retour', reportHelp: 'Choisis « Répondre » sur un défi, ou dis-moi directement ici ce que tu acceptes, refuses, reportes ou réalises.',
      localHint: 'Les réponses saisies ici restent sur cet appareil. Copie ton bilan dans notre conversation pour que je mette à jour l’historique partagé. Évite les détails personnels que tu ne souhaites pas publier.',
      reportLabel: 'Bilan à transmettre', copy: 'Copier mon bilan', methodTitle: 'Comment les défis évoluent',
      rule1: 'Chaque semaine : jusqu’à trois propositions, ajustées à ta disponibilité et à tes retours.',
      rule2: 'Deux défis mensuels et un par grand horizon. Une action peut faire avancer plusieurs objectifs ; elle n’est pas comptée plusieurs fois comme travail supplémentaire.',
      rule3: 'Tu décides. Un refus ou un report reste une décision utile. Une échéance dépassée appelle un bilan, jamais un échec automatique.',
      rule4: 'L’historique conserve les propositions, décisions et leçons. Ton récit suffit ; aucune preuve publique n’est exigée.',
      listLink: 'Liste 100 ↗', memoriesLink: 'Memories ↗', all: 'Tous les horizons', allStates: 'Tous les états', open: 'À suivre',
      proposed: 'Proposé', accepted: 'Accepté', in_progress: 'En cours', completed: 'Réalisé', declined: 'Refusé', deferred: 'Reporté', stopped: 'Arrêté',
      easy: 'Accessible', focused: 'Approfondissement', stretch: 'Sortie de confort', ambitious: 'Ambitieux',
      proposedCount: 'propositions ouvertes', activeCount: 'défis engagés', doneCount: 'réalisations racontées',
      allCadence: '3 / semaine · 2 / mois · 1 / trimestre, saison, semestre et année. Des propositions, pas des obligations.',
      results: 'défi(s)', entries: 'entrée(s)', due: 'Cible', review: 'À revoir ensemble', criterion: 'Le repère concret', details: 'Pourquoi, variantes et liens',
      why: 'Ce que cela construit', minimum: 'Version courte', stretchLabel: 'Pour aller plus loin', toward: 'Un pas vers',
      parent: 'Fait avancer', reply: 'Répondre', decision: 'Ta décision', choose: 'Choisir…', noteLabel: 'Ton retour (facultatif)',
      notePlaceholder: 'Ce que tu as fait, découvert ou décidé. Tu peux aussi proposer une autre date.', clear: 'Effacer ce brouillon',
      draft: 'Brouillon local · à transmettre', empty: 'Aucun défi pour ces filtres. Essaie un autre horizon ou affiche tous les états.',
      noHistory: 'Aucune entrée pour ces filtres.', noReport: 'Tes réponses apparaîtront ici. Tu peux aussi me répondre directement dans la conversation.',
      noteOnly: 'Retour sans changement d’état', copied: 'Bilan copié. Colle-le dans notre conversation pour mettre à jour l’historique.',
      copyFallback: 'Sélectionne le texte du bilan et copie-le avec Ctrl+C ou Cmd+C.', noDrafts: 'Choisis d’abord un défi ou écris une note.',
      storageError: 'La sauvegarde locale est indisponible. Copie ton bilan avant de quitter la page.', saved: 'Brouillon conservé sur cet appareil.',
      sourceMentor: 'Proposition du mentor', sourceUser: 'Retour d’Evenson', noCompletion: 'Les décisions partagées sont conservées ici, sans résultat inventé.'
    },
    en: {
      eyebrow: 'A NOTEBOOK OF POSSIBILITIES', hero: 'From intention to experience.', promise: 'I propose. You choose. We keep the story.',
      mentor: 'THE STARTING POINT', load: 'Challenges reuse Becoming sessions. Longer horizons grow from small actions.',
      challenges: 'Challenges', journal: 'Journal', filter: 'Status', search: 'Search', yourturn: 'YOUR TURN',
      reportTitle: 'Your next check-in', reportHelp: 'Choose “Reply” on a challenge, or tell me in our conversation what you accept, decline, defer or complete.',
      localHint: 'Responses entered here stay on this device. Copy your check-in into our conversation so I can update the shared history. Leave out personal details you do not want published.',
      reportLabel: 'Check-in to share', copy: 'Copy my check-in', methodTitle: 'How challenges evolve',
      rule1: 'Each week: up to three proposals, adapted to your availability and feedback.',
      rule2: 'Two monthly challenges and one per longer horizon. One action may advance several goals; it is not counted repeatedly as extra work.',
      rule3: 'You decide. Declining or deferring is a useful decision. A passed date calls for a review, never an automatic failure.',
      rule4: 'The history keeps proposals, decisions and lessons. Your account is enough; public evidence is never required.',
      listLink: 'List 100 ↗', memoriesLink: 'Memories ↗', all: 'All horizons', allStates: 'All statuses', open: 'To follow up',
      proposed: 'Proposed', accepted: 'Accepted', in_progress: 'In progress', completed: 'Completed', declined: 'Declined', deferred: 'Deferred', stopped: 'Stopped',
      easy: 'Accessible', focused: 'Focused work', stretch: 'Outside your comfort zone', ambitious: 'Ambitious',
      proposedCount: 'open proposals', activeCount: 'engaged challenges', doneCount: 'reported completions',
      allCadence: '3 / week · 2 / month · 1 / quarter, season, half-year and year. Proposals, not obligations.',
      results: 'challenge(s)', entries: 'entry/entries', due: 'Target', review: 'Review together', criterion: 'The concrete milestone', details: 'Purpose, alternatives and links',
      why: 'What this builds', minimum: 'Short version', stretchLabel: 'Go further', toward: 'A step toward',
      parent: 'Helps advance', reply: 'Reply', decision: 'Your decision', choose: 'Choose…', noteLabel: 'Your reflection (optional)',
      notePlaceholder: 'What you did, discovered or decided. You can also suggest a different date.', clear: 'Clear this draft',
      draft: 'Local draft · ready to share', empty: 'No challenges match these filters. Try another horizon or display all statuses.',
      noHistory: 'No entries match these filters.', noReport: 'Your responses will appear here. You can also reply directly in our conversation.',
      noteOnly: 'Reflection without a status change', copied: 'Check-in copied. Paste it into our conversation to update the history.',
      copyFallback: 'Select the check-in text and copy it with Ctrl+C or Cmd+C.', noDrafts: 'Choose a challenge or write a note first.',
      storageError: 'Local saving is unavailable. Copy your check-in before leaving the page.', saved: 'Draft saved on this device.',
      sourceMentor: 'Mentor proposal', sourceUser: 'Evenson’s report', noCompletion: 'Shared decisions are kept here, without invented outcomes.'
    }
  };
  const KEY = 'evenson.activities.drafts.v1';
  let storageOK = true;
  let rawDrafts;
  try { rawDrafts = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) { storageOK = false; }
  const drafts = cleanDrafts(rawDrafts, data.challenges);
  let lang = 'fr';
  try { lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('evenson.site.language') || document.documentElement.dataset.siteLang || 'fr'; } catch (_) {}
  if (!COPY[lang]) lang = 'fr';
  let horizon = 'week', status = 'all', query = '', view = 'challenges';
  const byId = Object.fromEntries(data.challenges.map(c => [c.id, c]));
  const targets = Object.fromEntries(data.config.targets.map(t => [t.id, t]));
  const $ = id => document.getElementById(id);
  const t = key => COPY[lang][key] || key;
  const loc = value => value[lang] || value.fr;
  const today = () => new Intl.DateTimeFormat('en-CA', {timeZone: data.config.timezone, year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date());
  const displayDate = value => new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'}).format(new Date(value + 'T12:00:00Z'));
  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function button(text, action, cls) {
    const node = el('button', cls, text); node.type = 'button'; node.addEventListener('click', action); return node;
  }
  function notice(message) { $('act-notice').textContent = message; }
  function updateReport() {
    const report = buildReport(data, drafts, COPY[lang], lang, today());
    $('act-report-text').value = report;
    $('act-report-text').placeholder = t('noReport');
  }
  function saveDraft(id, select, note, badge) {
    if (select.value || note.value.trim()) drafts[id] = {status: select.value, note: note.value};
    else delete drafts[id];
    try { localStorage.setItem(KEY, JSON.stringify(drafts)); storageOK = true; }
    catch (_) { storageOK = false; }
    badge.textContent = drafts[id] ? t('draft') : '';
    notice(t(storageOK ? 'saved' : 'storageError'));
    updateReport();
  }
  function openChallenge(id) {
    horizon = 'all'; status = 'all'; query = ''; view = 'challenges';
    $('act-status-filter').value = status; $('act-search').value = '';
    render();
    const card = document.getElementById(id);
    if (card) { card.scrollIntoView({block: 'start'}); card.focus({preventScroll: true}); }
    history.replaceState(null, '', location.pathname + location.search + '#' + id);
  }
  function renderCard(c) {
    const card = el('article', 'act-card'); card.id = c.id; card.tabIndex = -1;
    const current = statusOf(c.id, data.events);
    const top = el('div', 'act-card-top');
    top.append(el('span', 'act-id', c.id), el('span', 'act-tag', t(c.difficulty)));
    const title = el('h3', '', loc(c.title)); title.id = c.id + '-title'; card.setAttribute('aria-labelledby', title.id);
    const meta = el('p', 'act-meta');
    meta.append(el('span', 'act-status', t(current)), el('span', '', t('due') + ' · ' + displayDate(c.due)));
    if (c.due < today() && !CLOSED.has(current)) meta.append(el('span', 'act-waiting', t('review')));
    const criterion = el('p', 'act-criterion'); criterion.append(el('strong', '', t('criterion')), document.createTextNode(loc(c.done_when)));
    const details = el('details'); details.append(el('summary', '', t('details')));
    const dl = el('dl');
    [['why', c.why], ['minimum', c.minimum], ['stretchLabel', c.stretch]].forEach(([key, value]) => dl.append(el('dt', '', t(key)), el('dd', '', loc(value))));
    details.append(dl);
    const links = el('div', 'act-links');
    c.targets.forEach(id => {
      const target = targets[id];
      if (!target) return;
      const a = el('a', '', loc(target.label) + ' ↗');
      a.href = target.url; a.title = target.source;
      links.append(a);
    });
    details.append(el('p', 'act-meta', t('toward')), links);
    (c.parents || []).forEach(id => {
      if (byId[id]) details.append(button(t('parent') + ' · ' + loc(byId[id].title), () => openChallenge(id)));
    });
    const response = el('details', 'act-response'); response.append(el('summary', '', t('reply')));
    const draft = drafts[c.id]; response.open = !!draft;
    const selectLabel = el('label', '', t('decision')); selectLabel.htmlFor = c.id + '-decision';
    const select = el('select'); select.id = selectLabel.htmlFor;
    const placeholder = el('option', '', t('choose')); placeholder.value = ''; select.append(placeholder);
    STATES.filter(s => s !== 'proposed').forEach(s => { const option = el('option', '', t(s)); option.value = s; select.append(option); });
    select.value = draft ? draft.status : '';
    const noteLabel = el('label', '', t('noteLabel')); noteLabel.htmlFor = c.id + '-note';
    const note = el('textarea'); note.id = noteLabel.htmlFor; note.maxLength = 1200; note.rows = 3; note.placeholder = t('notePlaceholder'); note.value = draft ? draft.note : '';
    const badge = el('p', 'act-draft-note', draft ? t('draft') : '');
    select.addEventListener('change', () => saveDraft(c.id, select, note, badge));
    note.addEventListener('input', () => saveDraft(c.id, select, note, badge));
    const clear = button(t('clear'), () => { select.value = ''; note.value = ''; saveDraft(c.id, select, note, badge); });
    response.append(selectLabel, select, noteLabel, note, badge, clear);
    card.append(top, title, meta, el('p', 'act-meta', loc(c.effort)), el('p', '', loc(c.action)), criterion, details, response);
    return card;
  }
  function render() {
    root.dataset.lang = lang;
    root.lang = lang;
    root.querySelectorAll('[data-copy]').forEach(node => { node.textContent = t(node.dataset.copy); });
    root.querySelectorAll('[data-act-lang]').forEach(node => node.setAttribute('aria-pressed', String(node.dataset.actLang === lang)));
    root.querySelectorAll('[data-act-view]').forEach(node => node.setAttribute('aria-pressed', String(node.dataset.actView === view)));
    $('act-intro').textContent = loc(data.config.intro);
    $('act-mentor-note').textContent = loc(data.config.mentor_note);
    const stats = $('act-stats'); stats.replaceChildren();
    const all = data.challenges.map(c => statusOf(c.id, data.events));
    [[all.filter(s => s === 'proposed').length, 'proposedCount'], [all.filter(s => ['accepted', 'in_progress'].includes(s)).length, 'activeCount'], [all.filter(s => s === 'completed').length, 'doneCount']].forEach(([count, label]) => {
      const item = el('div', 'act-stat'); item.append(el('strong', '', String(count)), el('span', '', t(label))); stats.append(item);
    });
    const horizons = $('act-horizons'); horizons.replaceChildren();
    [{id: 'all', label: {fr: COPY.fr.all, en: COPY.en.all}}, ...data.config.horizons].forEach(h => {
      const btn = button(loc(h.label), () => { horizon = h.id; render(); });
      btn.setAttribute('aria-pressed', String(horizon === h.id)); horizons.append(btn);
    });
    const period = data.config.horizons.find(h => h.id === horizon);
    $('act-cadence').textContent = period ? loc(period.cadence) : t('allCadence');
    const filter = $('act-status-filter'); filter.replaceChildren();
    ['all', 'open', ...STATES].forEach(s => { const option = el('option', '', t(s === 'all' ? 'allStates' : s)); option.value = s; filter.append(option); }); filter.value = status;
    const chosen = visibleChallenges(data, horizon, status, query, lang);
    const cards = $('act-cards'); const journal = $('act-journal');
    cards.hidden = view !== 'challenges'; journal.hidden = view !== 'journal';
    cards.replaceChildren(); journal.replaceChildren();
    if (view === 'challenges') {
      chosen.forEach(c => cards.append(renderCard(c)));
      if (!chosen.length) cards.append(el('p', 'act-empty', t('empty')));
      $('act-results-count').textContent = chosen.length + ' ' + t('results');
    } else {
      const ids = new Set(chosen.map(c => c.id));
      const events = data.events.filter(e => ids.has(e.challenge)).slice().reverse();
      journal.append(el('p', 'act-cadence', t('noCompletion')));
      const list = el('ol', 'act-timeline');
      events.forEach(e => {
        const item = el('li'); const date = el('time', '', displayDate(e.date)); date.dateTime = e.date;
        const content = el('div'); const heading = el('h3', '', t(e.status) + ' · ' + loc(byId[e.challenge].title));
        content.append(heading, el('p', '', loc(e.note)), el('p', 'act-meta', e.challenge + ' · ' + t(e.source === 'mentor' ? 'sourceMentor' : 'sourceUser')));
        item.append(date, content); list.append(item);
      });
      journal.append(list);
      if (!events.length) journal.append(el('p', 'act-empty', t('noHistory')));
      $('act-results-count').textContent = events.length + ' ' + t('entries');
    }
    updateReport();
    if (!storageOK) notice(t('storageError'));
  }
  $('act-status-filter').addEventListener('change', event => { status = event.target.value; render(); });
  $('act-search').addEventListener('input', event => { query = event.target.value; render(); });
  root.querySelectorAll('[data-act-view]').forEach(node => node.addEventListener('click', () => { view = node.dataset.actView; render(); }));
  root.querySelectorAll('[data-act-lang]').forEach(node => node.addEventListener('click', () => {
    lang = node.dataset.actLang;
    try { localStorage.setItem('evenson.site.language', lang); } catch (_) {}
    const url = new URL(location.href); url.searchParams.set('lang', lang);
    location.assign(url.pathname + url.search + url.hash);
  }));
  $('act-copy-report').addEventListener('click', async () => {
    const report = $('act-report-text');
    if (!report.value) { notice(t('noDrafts')); return; }
    try { await navigator.clipboard.writeText(report.value); notice(t('copied')); }
    catch (_) { report.focus(); report.select(); notice(t('copyFallback')); }
  });
  new MutationObserver(() => {
    const next = document.documentElement.dataset.siteLang;
    if (COPY[next] && next !== lang) { lang = next; render(); }
  }).observe(document.documentElement, {attributes: true, attributeFilter: ['data-site-lang']});
  window.addEventListener('storage', event => {
    if (event.key === KEY) {
      let next;
      try { next = cleanDrafts(JSON.parse(event.newValue || '{}'), data.challenges); } catch (_) { return; }
      Object.keys(drafts).forEach(id => delete drafts[id]); Object.assign(drafts, next); render();
    }
  });
  render();
  if (byId[location.hash.slice(1)]) openChallenge(location.hash.slice(1));
})();
