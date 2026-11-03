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
  function visibleChallenges(data, horizon, status, query, lang, category = 'all') {
    const term = query.trim().toLocaleLowerCase();
    return data.challenges.filter(challenge => {
      const current = statusOf(challenge.id, data.events);
      return (horizon === 'all' || challenge.horizon === horizon) &&
        (category === 'all' || challenge.category === category) &&
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
      weekTab: 'Cette semaine', exploreTab: 'Explorer les défis', domain: 'Domaine', allDomains: 'Tous les domaines', moreFilters: 'Recherche et filtres', weekHint: 'Trois propositions pour commencer. Un seul défi suffit.', exploreHint: 'Explore à ton rythme : fais ton choix parmi les horizons et les domaines.', journalHint: 'Ton histoire conserve les tentatives, les choix et les leçons.', tryIt: 'Je le tente', editChoice: 'Modifier mon choix', draftAction: 'Choix local · pense à copier ton bilan', moreHistory: 'Voir tout l’historique', lessHistory: 'Afficher moins',
      eyebrow: 'ACTIVITIES · LE CARNET DES POSSIBLES', hero: 'Des défis qui donnent envie d’oser.', promise: 'Pas de points artificiels. Des expériences et des réalisations.',
      mentor: 'LE MOT DU MENTOR', load: 'Les défis réutilisent les séances de Becoming. Les grands horizons se construisent avec les petites actions.',
      challenges: 'Les défis', journal: 'Le journal', filter: 'État', search: 'Rechercher', yourturn: 'À TOI DE JOUER',
      reportTitle: 'Ton retour', reportHelp: 'Clique sur « Je le tente » puis copie ton bilan pour me l’envoyer dans notre conversation.',
      localHint: 'Tes choix restent des brouillons sur cet appareil : rien n’est envoyé ou publié automatiquement.',
      reportLabel: 'Bilan à transmettre', copy: 'Copier le bilan', methodTitle: 'Comment ça marche ?',
      rule1: 'Chaque semaine : jusqu’à trois propositions, ajustées à ta disponibilité et à tes retours.',
      rule2: 'Deux défis mensuels et un par grand horizon. Une action peut faire avancer plusieurs objectifs ; elle n’est pas comptée plusieurs fois comme travail supplémentaire.',
      rule3: 'Tu décides. Un refus ou un report reste une décision utile. Une échéance dépassée appelle un bilan, jamais un échec automatique.',
      rule4: 'L’historique conserve les propositions, décisions et leçons. Ton récit suffit ; aucune preuve publique n’est exigée.',
      listLink: 'Liste 100 ↗', memoriesLink: 'Memories ↗', all: 'Tous les horizons', allStates: 'Tous les états', open: 'À suivre',
      proposed: 'Proposé', accepted: 'Accepté', in_progress: 'En cours', completed: 'Réalisé', declined: 'Refusé', deferred: 'Reporté', stopped: 'Arrêté',
      easy: 'Accessible', focused: 'Approfondissement', stretch: 'Sortie de confort', ambitious: 'Ambitieux',
      proposedCount: 'propositions ouvertes', activeCount: 'défis engagés', doneCount: 'réalisations racontées',
      allCadence: 'Des défis sur plusieurs horizons. Aucun n’est obligatoire : choisis ce qui te motive.',
      results: 'défi(s)', entries: 'entrée(s)', due: 'Cible', review: 'À revoir ensemble', criterion: 'Le défi est réussi si…', details: 'Variantes et détails',
      why: 'Ce que cela construit', minimum: 'Version courte', stretchLabel: 'Pour aller plus loin', toward: 'Un pas vers',
      parent: 'Fait avancer', reply: 'Faire un bilan', decision: 'Ta décision', choose: 'Choisir…', noteLabel: 'Ton retour (facultatif)',
      notePlaceholder: 'Ce que tu as fait, découvert ou décidé. Tu peux aussi proposer une autre date.', clear: 'Effacer ce brouillon',
      draft: 'Brouillon local · à transmettre', empty: 'Aucun défi pour ces filtres. Essaie un autre horizon ou affiche tous les états.',
      noHistory: 'Aucune entrée pour ces filtres.', noReport: 'Tes réponses apparaîtront ici. Tu peux aussi me répondre directement dans la conversation.',
      noteOnly: 'Retour sans changement d’état', copied: 'Bilan copié. Colle-le dans notre conversation pour mettre à jour l’historique.',
      copyFallback: 'Sélectionne le texte du bilan et copie-le avec Ctrl+C ou Cmd+C.', noDrafts: 'Choisis d’abord un défi ou écris une note.',
      storageError: 'La sauvegarde locale est indisponible. Copie ton bilan avant de quitter la page.', saved: 'Brouillon conservé sur cet appareil.',
      sourceMentor: 'Proposition du mentor', sourceUser: 'Retour d’Evenson', noCompletion: 'Les décisions partagées sont conservées ici, sans résultat inventé.'
    },
    en: {
      weekTab: 'This week', exploreTab: 'Explore challenges', domain: 'Category', allDomains: 'All categories', moreFilters: 'Search and filters', weekHint: 'Three ideas to start. Taking on one is plenty.', exploreHint: 'Explore at your own pace: choose a time horizon and theme.', journalHint: 'Your story keeps attempts, choices and lessons.', tryIt: 'I’ll try it', editChoice: 'Edit my choice', draftAction: 'Local choice · remember to copy your check-in', moreHistory: 'View full history', lessHistory: 'Show less',
      eyebrow: 'ACTIVITIES · THE POSSIBILITY JOURNAL', hero: 'Challenges worth taking on.', promise: 'No artificial points. Real experiences and achievements.',
      mentor: 'FROM YOUR MENTOR', load: 'Challenges reuse Becoming sessions. Longer horizons grow from small actions.',
      challenges: 'Challenges', journal: 'Journal', filter: 'Status', search: 'Search', yourturn: 'YOUR TURN',
      reportTitle: 'Your check-in', reportHelp: 'Choose “I’ll try it”, then copy your check-in into our conversation.',
      localHint: 'Choices remain drafts on this device: nothing is sent or published automatically.',
      reportLabel: 'Check-in to share', copy: 'Copy check-in', methodTitle: 'How it works',
      rule1: 'Each week: up to three proposals, adapted to your availability and feedback.',
      rule2: 'Two monthly challenges and one per longer horizon. One action may advance several goals; it is not counted repeatedly as extra work.',
      rule3: 'You decide. Declining or deferring is a useful decision. A passed date calls for a review, never an automatic failure.',
      rule4: 'The history keeps proposals, decisions and lessons. Your account is enough; public evidence is never required.',
      listLink: 'List 100 ↗', memoriesLink: 'Memories ↗', all: 'All horizons', allStates: 'All statuses', open: 'To follow up',
      proposed: 'Proposed', accepted: 'Accepted', in_progress: 'In progress', completed: 'Completed', declined: 'Declined', deferred: 'Deferred', stopped: 'Stopped',
      easy: 'Accessible', focused: 'Focused work', stretch: 'Outside your comfort zone', ambitious: 'Ambitious',
      proposedCount: 'open proposals', activeCount: 'engaged challenges', doneCount: 'reported completions',
      allCadence: 'Challenges across several horizons. None are mandatory: choose what motivates you.',
      results: 'challenge(s)', entries: 'entry/entries', due: 'Target', review: 'Review together', criterion: 'Success means…', details: 'Options and details',
      why: 'What this builds', minimum: 'Short version', stretchLabel: 'Go further', toward: 'A step toward',
      parent: 'Helps advance', reply: 'Add a check-in', decision: 'Your decision', choose: 'Choose…', noteLabel: 'Your reflection (optional)',
      notePlaceholder: 'What you did, discovered or decided. You can also suggest a different date.', clear: 'Clear this draft',
      draft: 'Local draft · ready to share', empty: 'No challenges match these filters. Try another horizon or display all statuses.',
      noHistory: 'No entries match these filters.', noReport: 'Your responses will appear here. You can also reply directly in our conversation.',
      noteOnly: 'Reflection without a status change', copied: 'Check-in copied. Paste it into our conversation to update the history.',
      copyFallback: 'Select the check-in text and copy it with Ctrl+C or Cmd+C.', noDrafts: 'Choose a challenge or write a note first.',
      storageError: 'Local saving is unavailable. Copy your check-in before leaving the page.', saved: 'Draft saved on this device.',
      sourceMentor: 'Mentor proposal', sourceUser: 'Evenson’s report', noCompletion: 'Shared decisions are kept here, without invented outcomes.'
    }
  };
  const KEY = 'evenson.activities.drafts.v2';
  let storageOK = true;
  let rawDrafts;
  try { rawDrafts = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) { storageOK = false; }
  const drafts = cleanDrafts(rawDrafts, data.challenges);
  let lang = 'fr';
  try { lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('evenson.site.language') || document.documentElement.dataset.siteLang || 'fr'; } catch (_) {}
  if (!COPY[lang]) lang = 'fr';
  let horizon = 'all', status = 'all', query = '', category = 'all', view = 'challenges', showAllHistory = false;
  const byId = Object.fromEntries(data.challenges.map(c => [c.id, c]));
  const targets = Object.fromEntries(data.config.targets.map(t => [t.id, t]));
  const categories = Object.fromEntries((data.config.categories || []).map(c => [c.id, c]));
  const horizonLabels = Object.fromEntries(data.config.horizons.map(h => [h.id, h]));
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
    horizon = 'all'; status = 'all'; category = 'all'; query = ''; view = 'explore';
    $('act-status-filter').value = status; $('act-search').value = '';
    render();
    const card = document.getElementById(id);
    if (card) { card.scrollIntoView({block: 'start'}); card.focus({preventScroll: true}); }
    history.replaceState(null, '', location.pathname + location.search + '#' + id);
  }
  function renderCard(c) {
    const card = el('article', 'act-card');
    card.id = c.id;
    card.tabIndex = -1;
    const published = statusOf(c.id, data.events);
    const top = el('div', 'act-card-top');
    const cat = categories[c.category];
    top.append(
      el('span', 'act-topic', cat ? loc(cat.label) : c.category),
      el('span', 'act-period', horizonLabels[c.horizon] ? loc(horizonLabels[c.horizon].label) : c.horizon)
    );
    const title = el('h3', '', loc(c.title));
    title.id = c.id + '-title';
    card.setAttribute('aria-labelledby', title.id);
    const meta = el('p', 'act-meta');
    meta.append(
      el('span', '', loc(c.effort)),
      el('span', '', t('due') + ' · ' + displayDate(c.due))
    );
    if (published !== 'proposed') meta.append(el('span', 'act-status', t(published)));
    else if (c.due < today()) meta.append(el('span', 'act-waiting', t('review')));
    const criterion = el('p', 'act-criterion');
    criterion.append(el('strong', '', t('criterion')), document.createTextNode(loc(c.done_when)));

    const details = el('details', 'act-details');
    details.append(el('summary', '', t('details')));
    const dl = el('dl');
    [['why', c.why], ['minimum', c.minimum], ['stretchLabel', c.stretch]].forEach(([key, value]) => {
      dl.append(el('dt', '', t(key)), el('dd', '', loc(value)));
    });
    details.append(dl);
    const links = el('div', 'act-links');
    c.targets.forEach(id => {
      const target = targets[id];
      if (!target) return;
      const a = el('a', '', loc(target.label));
      a.href = target.url;
      a.title = target.source;
      links.append(a);
    });
    if (links.childNodes.length) details.append(el('p', 'act-meta', t('toward')), links);
    (c.parents || []).forEach(id => {
      if (byId[id]) details.append(button(t('parent') + ' · ' + loc(byId[id].title), () => openChallenge(id)));
    });
    details.append(el('p', 'act-id', c.id));

    const response = el('details', 'act-response');
    response.id = c.id + '-response';
    response.append(el('summary', '', t('reply')));
    const draft = drafts[c.id];
    response.open = !!draft;
    const selectLabel = el('label', '', t('decision'));
    selectLabel.htmlFor = c.id + '-decision';
    const select = el('select');
    select.id = selectLabel.htmlFor;
    const placeholder = el('option', '', t('choose'));
    placeholder.value = '';
    select.append(placeholder);
    STATES.filter(state => state !== 'proposed').forEach(state => {
      const option = el('option', '', t(state));
      option.value = state;
      select.append(option);
    });
    select.value = draft ? draft.status : '';
    const noteLabel = el('label', '', t('noteLabel'));
    noteLabel.htmlFor = c.id + '-note';
    const note = el('textarea');
    note.id = noteLabel.htmlFor;
    note.maxLength = 1200;
    note.rows = 3;
    note.placeholder = t('notePlaceholder');
    note.value = draft ? draft.note : '';
    const badge = el('p', 'act-draft-note', draft ? t('draftAction') : '');

    const choose = button(draft ? t('editChoice') : t('tryIt'), () => {
      if (!drafts[c.id]) {
        select.value = 'accepted';
        saveAndRefresh();
      }
      response.open = true;
      choose.textContent = t('editChoice');
      response.scrollIntoView({block: 'nearest'});
      select.focus({preventScroll: true});
    }, 'act-choose');
    choose.setAttribute('aria-controls', response.id);
    function saveAndRefresh() {
      saveDraft(c.id, select, note, badge);
      choose.textContent = drafts[c.id] ? t('editChoice') : t('tryIt');
      badge.textContent = drafts[c.id] ? t('draftAction') : '';
    }
    select.addEventListener('change', saveAndRefresh);
    note.addEventListener('input', saveAndRefresh);
    const clear = button(t('clear'), () => {
      select.value = '';
      note.value = '';
      saveAndRefresh();
    }, 'act-clear');
    response.append(selectLabel, select, noteLabel, note, badge, clear);
    card.append(top, title, meta, el('p', 'act-action', loc(c.action)), criterion, choose, details, response);
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
    $('act-view-hint').textContent = t(view === 'challenges' ? 'weekHint' : view === 'explore' ? 'exploreHint' : 'journalHint');
    $('act-discovery-controls').hidden = view !== 'explore';

    const horizons = $('act-horizons');
    horizons.replaceChildren();
    [{id: 'all', label: {fr: COPY.fr.all, en: COPY.en.all}}, ...data.config.horizons].forEach(h => {
      const btn = button(loc(h.label), () => { horizon = h.id; render(); });
      btn.setAttribute('aria-pressed', String(horizon === h.id));
      horizons.append(btn);
    });
    const period = data.config.horizons.find(h => h.id === horizon);
    $('act-cadence').textContent = period ? loc(period.cadence) : t('allCadence');

    const topics = $('act-category-filter');
    topics.replaceChildren();
    [{id: 'all', label: {fr: COPY.fr.allDomains, en: COPY.en.allDomains}}, ...(data.config.categories || [])].forEach(item => {
      const option = el('option', '', loc(item.label));
      option.value = item.id;
      topics.append(option);
    });
    topics.value = category;
    const filter = $('act-status-filter');
    filter.replaceChildren();
    ['all', 'open', ...STATES].forEach(state => {
      const option = el('option', '', t(state === 'all' ? 'allStates' : state));
      option.value = state;
      filter.append(option);
    });
    filter.value = status;
    const cards = $('act-cards');
    const journal = $('act-journal');
    cards.hidden = view === 'journal';
    journal.hidden = view !== 'journal';
    cards.replaceChildren();
    journal.replaceChildren();

    if (view === 'challenges') {
      const weeks = data.challenges.filter(c => c.horizon === 'week');
      const newest = weeks.reduce((date, c) => c.period_start > date ? c.period_start : date, '');
      const selection = weeks.filter(c => c.period_start === newest);
      selection.forEach(c => cards.append(renderCard(c)));
      if (!selection.length) cards.append(el('p', 'act-empty', t('empty')));
      $('act-results-count').textContent = selection.length + ' ' + t('results');
    } else if (view === 'explore') {
      const rank = {week: 0, month: 1, quarter: 2, season: 3, halfyear: 4, year: 5};
      const selected = visibleChallenges(data, horizon, status, query, lang, category).sort((a, b) =>
        rank[a.horizon] - rank[b.horizon] || a.due.localeCompare(b.due));
      selected.forEach(c => cards.append(renderCard(c)));
      if (!selected.length) cards.append(el('p', 'act-empty', t('empty')));
      $('act-results-count').textContent = selected.length + ' ' + t('results');
    } else {
      journal.append(el('p', 'act-cadence', t('noCompletion')));
      const history = (showAllHistory ? data.events : data.events.filter(e => e.source === 'user')).slice().reverse();
      const list = el('ol', 'act-timeline');
      history.forEach(event => {
        const challenge = byId[event.challenge];
        if (!challenge) return;
        const item = el('li');
        const date = el('time', '', displayDate(event.date));
        date.dateTime = event.date;
        const content = el('div');
        content.append(
          el('h3', '', t(event.status) + ' · ' + loc(challenge.title)),
          el('p', '', loc(event.note)),
          el('p', 'act-meta', event.challenge + ' · ' + t(event.source === 'mentor' ? 'sourceMentor' : 'sourceUser'))
        );
        item.append(date, content);
        list.append(item);
      });
      journal.append(list);
      if (!history.length) journal.append(el('p', 'act-empty', t('noHistory')));
      journal.append(button(t(showAllHistory ? 'lessHistory' : 'moreHistory'), () => {
        showAllHistory = !showAllHistory;
        render();
      }, 'act-history-button'));
      $('act-results-count').textContent = history.length + ' ' + t('entries');
    }
    updateReport();
    if (!storageOK) notice(t('storageError'));
  }
  $('act-status-filter').addEventListener('change', event => { status = event.target.value; render(); });
  $('act-category-filter').addEventListener('change', event => { category = event.target.value; render(); });
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
