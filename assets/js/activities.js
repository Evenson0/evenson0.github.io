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
      const status = item.status === 'completed' ? 'completed' : '';
      const note = typeof item.note === 'string' ? item.note.slice(0, 1200) : '';
      if (status === 'completed') result[challenge.id] = {status, note};
    });
    return result;
  }
  function visibleChallenges(data, horizon, status, query, lang, category = 'all', periodWindow = 'all', referenceDate = '') {
    const term = query.trim().toLocaleLowerCase();
    return data.challenges.filter(challenge => {
      const current = statusOf(challenge.id, data.events);
      return (periodWindow !== 'current' || (challenge.period_start <= referenceDate && challenge.due >= referenceDate)) &&
        (horizon === 'all' || challenge.horizon === horizon) &&
        (category === 'all' || challenge.category === category) &&
        (status === 'all' || (status === 'open' ? !CLOSED.has(current) : current === status)) &&
        (!term || [challenge.id, challenge.title[lang], challenge.action[lang]].join(' ').toLocaleLowerCase().includes(term));
    });
  }
  function latestWeeklyChallenges(challenges, date) {
    const eligible = challenges.filter(c => c.horizon === 'week' && c.period_start <= date);
    if (!eligible.length) return [];
    const current = eligible.reduce((max, c) => c.period_start > max ? c.period_start : max, '');
    return eligible.filter(c => c.period_start === current);
  }
  function buildReport(data, drafts, labels, lang, today) {
    const lines = data.challenges.filter(c => drafts[c.id]?.status === 'completed' && statusOf(c.id, data.events) !== 'completed').map(c => {
      const draft = drafts[c.id];
      return c.id + ' — ' + c.title[lang] + '\n' +
        labels.completed +
        (draft.note.trim() ? '\n' + draft.note.trim() : '');
    });
    return lines.length ? 'Activities · ' + today + '\n\n' + lines.join('\n\n') : '';
  }
  if (typeof module === 'object' && module.exports) {
    module.exports = {statusOf, cleanDrafts, visibleChallenges, buildReport, latestWeeklyChallenges};
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
      markDone: '✓ Je l’ai réalisé', alreadyDone: '✓ Déjà enregistré', optionalNote: 'Ajouter une note (facultatif)', allPeriods: 'Voir aussi les périodes passées et futures',
      catalogChallenges: 'défis', catalogHorizons: 'horizons', catalogDomains: 'domaines', catalogSources: 'inspirations',
      inspirationTitle: 'Ils ont osé avant toi : les inspirations', inspirationIntro: 'Des parcours vérifiables pour inventer tes propres défis, sans chercher à copier une vie entière.',
      axisMind: 'Esprit', axisBody: 'Corps', axisCourage: 'Courage', axisCreation: 'Création',
      yearCta: 'Explorer mes grandes ambitions', moreChallenges: 'Afficher 12 défis de plus', showWeekAll: 'Voir toutes les missions de la semaine', showWeekLess: 'Réduire la sélection', weeklyFocus: 'Missions de la semaine', annualLead: 'Une année extraordinaire n’exige pas de tout faire : choisis 2 ou 3 grandes quêtes.', weekTab: 'Cette semaine', exploreTab: 'Explorer les défis', domain: 'Domaine', allDomains: 'Tous les domaines', moreFilters: 'Recherche et filtres', weekHint: 'Tu peux tenter tous les défis qui t’inspirent. Dimanche, coche uniquement ceux que tu as réellement terminés.', exploreHint: 'Retrouve les défis de la période en cours, ou affiche les périodes passées et futures.', journalHint: 'Ton histoire conserve les tentatives, les choix et les leçons.', tryIt: 'Je le tente', editChoice: 'Modifier mon choix', draftAction: 'Choix local · pense à copier ton bilan', moreHistory: 'Voir tout l’historique', lessHistory: 'Afficher moins',
      eyebrow: 'ACTIVITIES · PROTOCOLE D’AUDACE', hero: 'Deviens capable de ce qui te paraît impossible aujourd’hui.', promise: 'Des exploits qui comptent, pas des points à collectionner.',
      mentor: 'LE MOT DU MENTOR', load: 'Les défis réutilisent les séances de Becoming. Les grands horizons se construisent avec les petites actions.',
      challenges: 'Les défis', journal: 'Le journal', filter: 'État', search: 'Rechercher', yourturn: 'À TOI DE JOUER',
      reportTitle: 'Ton retour', reportHelp: 'En fin de semaine ou de période, coche seulement les défis réellement accomplis, puis copie le bilan dans notre conversation.',
      localHint: 'Tes coches sont sauvegardées sur cet appareil, pas sur GitHub. Envoie le bilan ici pour que je mette à jour le carnet public.',
      reportLabel: 'Bilan à transmettre', copy: 'Copier mes réalisations', methodTitle: 'Comment ça marche ?',
      rule1: 'Aucune inscription préalable. Essaie les défis qui t’attirent, sans t’obliger à tous les terminer.',
      rule2: 'Le dimanche, coche uniquement les défis achevés, y compris ceux des horizons plus longs si tu les as terminés.',
      rule3: 'Les défis non cochés restent disponibles ; ils ne deviennent ni des échecs ni des obligations reportées.',
      rule4: 'Copie le bilan dans notre conversation pour l’enregistrer dans l’historique public et préparer la période suivante.',
      listLink: 'Liste 100 ↗', memoriesLink: 'Memories ↗', all: 'Tous les horizons', allStates: 'Tous les états', open: 'À suivre',
      proposed: 'Proposé', accepted: 'Accepté', in_progress: 'En cours', completed: 'Réalisé', declined: 'Refusé', deferred: 'Reporté', stopped: 'Arrêté',
      easy: 'Accessible', focused: 'Approfondissement', stretch: 'Sortie de confort', ambitious: 'Ambitieux',
      proposedCount: 'propositions ouvertes', activeCount: 'défis engagés', doneCount: 'réalisations racontées',
      allCadence: 'Chaque horizon a sa propre période. Les réalisations sont validées à la fin de celle-ci.',
      results: 'défi(s)', entries: 'entrée(s)', due: 'Cible', review: 'À revoir ensemble', criterion: 'Le défi est réussi si…', details: 'Variantes et détails',
      why: 'Ce que cela construit', minimum: 'Version courte', stretchLabel: 'Pour aller plus loin', toward: 'Un pas vers',
      parent: 'Fait avancer', reply: 'Ajouter une note', decision: 'Ta décision', choose: 'Choisir…', noteLabel: 'Détail de la réalisation (facultatif)',
      notePlaceholder: 'Une phrase sur la réalisation (facultatif). Ne partage pas de données privées.', clear: 'Effacer ce brouillon',
      draft: 'Brouillon local · à transmettre', empty: 'Aucun défi pour ces filtres. Essaie un autre horizon ou affiche tous les états.',
      noHistory: 'Aucune entrée pour ces filtres.', noReport: 'Aucune réalisation cochée pour le moment. À la fin de la période, sélectionne ce que tu as fait.',
      noteOnly: 'Retour sans changement d’état', copied: 'Bilan copié. Colle-le dans notre conversation pour mettre à jour l’historique.',
      copyFallback: 'Sélectionne le texte du bilan et copie-le avec Ctrl+C ou Cmd+C.', noDrafts: 'Coche d’abord au moins un défi réalisé.',
      storageError: 'La sauvegarde locale est indisponible. Copie ton bilan avant de quitter la page.', saved: 'Brouillon conservé sur cet appareil.',
      sourceMentor: 'Proposition du mentor', sourceUser: 'Retour d’Evenson', noCompletion: 'Les décisions partagées sont conservées ici, sans résultat inventé.'
    },
    en: {
      markDone: '✓ I completed it', alreadyDone: '✓ Already recorded', optionalNote: 'Add a note (optional)', allPeriods: 'Also show past and future periods',
      catalogChallenges: 'challenges', catalogHorizons: 'horizons', catalogDomains: 'domains', catalogSources: 'inspirations',
      inspirationTitle: 'They dared: sources of inspiration', inspirationIntro: 'Verifiable journeys that inspire your own challenges, without trying to copy an entire life.',
      axisMind: 'Mind', axisBody: 'Body', axisCourage: 'Courage', axisCreation: 'Creation',
      yearCta: 'Explore my biggest ambitions', moreChallenges: 'Show 12 more challenges', showWeekAll: 'Show all weekly missions', showWeekLess: 'Show fewer missions', weeklyFocus: 'This week’s missions', annualLead: 'An extraordinary year does not require doing everything: choose 2 or 3 major quests.', weekTab: 'This week', exploreTab: 'Explore challenges', domain: 'Category', allDomains: 'All categories', moreFilters: 'Search and filters', weekHint: 'Try any challenges that inspire you. On Sunday, tick only the ones you truly completed.', exploreHint: 'Browse the current period, or show past and future periods when needed.', journalHint: 'Your story keeps attempts, choices and lessons.', tryIt: 'I’ll try it', editChoice: 'Edit my choice', draftAction: 'Local choice · remember to copy your check-in', moreHistory: 'View full history', lessHistory: 'Show less',
      eyebrow: 'ACTIVITIES · THE COURAGE PROTOCOL', hero: 'Become capable of what seems impossible today.', promise: 'Achievements that matter, not points to collect.',
      mentor: 'FROM YOUR MENTOR', load: 'Challenges reuse Becoming sessions. Longer horizons grow from small actions.',
      challenges: 'Challenges', journal: 'Journal', filter: 'Status', search: 'Search', yourturn: 'YOUR TURN',
      reportTitle: 'Your check-in', reportHelp: 'At the end of a week or period, tick only completed challenges and paste the copied summary into our conversation.',
      localHint: 'Checkmarks are saved on this device, not to GitHub. Share the summary here to update the public journal.',
      reportLabel: 'Check-in to share', copy: 'Copy completed challenges', methodTitle: 'How it works',
      rule1: 'No prior commitment required. Try what interests you without having to finish everything.',
      rule2: 'On Sunday, tick completed challenges, including longer-term goals when they are truly finished.',
      rule3: 'Unchecked challenges remain available; they are neither failures nor mandatory carryovers.',
      rule4: 'Paste the summary into our conversation so the public journal can be updated and the next period prepared.',
      listLink: 'List 100 ↗', memoriesLink: 'Memories ↗', all: 'All horizons', allStates: 'All statuses', open: 'To follow up',
      proposed: 'Proposed', accepted: 'Accepted', in_progress: 'In progress', completed: 'Completed', declined: 'Declined', deferred: 'Deferred', stopped: 'Stopped',
      easy: 'Accessible', focused: 'Focused work', stretch: 'Outside your comfort zone', ambitious: 'Ambitious',
      proposedCount: 'open proposals', activeCount: 'engaged challenges', doneCount: 'reported completions',
      allCadence: 'Each horizon has its own timeframe. Completed work is reviewed at period-end.',
      results: 'challenge(s)', entries: 'entry/entries', due: 'Target', review: 'Review together', criterion: 'Success means…', details: 'Options and details',
      why: 'What this builds', minimum: 'Short version', stretchLabel: 'Go further', toward: 'A step toward',
      parent: 'Helps advance', reply: 'Add a note', decision: 'Your decision', choose: 'Choose…', noteLabel: 'Completion detail (optional)',
      notePlaceholder: 'A brief completion note (optional). Do not include private data.', clear: 'Clear this draft',
      draft: 'Local draft · ready to share', empty: 'No challenges match these filters. Try another horizon or display all statuses.',
      noHistory: 'No entries match these filters.', noReport: 'Nothing marked complete yet. At the end of the period, tick what you have done.',
      noteOnly: 'Reflection without a status change', copied: 'Check-in copied. Paste it into our conversation to update the history.',
      copyFallback: 'Select the check-in text and copy it with Ctrl+C or Cmd+C.', noDrafts: 'First tick at least one completed challenge.',
      storageError: 'Local saving is unavailable. Copy your check-in before leaving the page.', saved: 'Draft saved on this device.',
      sourceMentor: 'Mentor proposal', sourceUser: 'Evenson’s report', noCompletion: 'Shared decisions are kept here, without invented outcomes.'
    }
  };
  const KEY = 'evenson.activities.drafts.v3';
  let storageOK = true;
  let rawDrafts;
  try { rawDrafts = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) { storageOK = false; }
  const drafts = cleanDrafts(rawDrafts, data.challenges);
  let lang = 'fr';
  try { lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('evenson.site.language') || document.documentElement.dataset.siteLang || 'fr'; } catch (_) {}
  if (!COPY[lang]) lang = 'fr';
  let horizon = 'all', status = 'all', query = '', category = 'all', view = 'challenges', showAllHistory = false, shownCount = 12, showWeekAll = false, showAllPeriods = false;
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
  function saveCompletion(id, checked, note) {
    if (checked) drafts[id] = {status: 'completed', note: note.slice(0, 1200)};
    else delete drafts[id];
    try { localStorage.setItem(KEY, JSON.stringify(drafts)); storageOK = true; }
    catch (_) { storageOK = false; }
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
    if (c.inspiration) {
      const model = (data.inspirations || []).find(item => item.id === c.inspiration);
      if (model && /^https:\/\//.test(model.url)) {
        const source = el('a', 'act-source-link', model.name);
        source.href = model.url;
        source.rel = 'noopener noreferrer';
        source.target = '_blank';
        details.append(el('p', 'act-meta', source));
      }
    }
    (c.parents || []).forEach(id => {
      if (byId[id]) details.append(button(t('parent') + ' · ' + loc(byId[id].title), () => openChallenge(id)));
    });
    details.append(el('p', 'act-id', c.id));

    const draft = drafts[c.id];
    const alreadyReported = published === 'completed';
    const completion = el('label', 'act-completion-toggle');
    completion.htmlFor = c.id + '-complete';
    const checked = el('input');
    checked.type = 'checkbox';
    checked.id = completion.htmlFor;
    checked.checked = alreadyReported || draft?.status === 'completed';
    checked.disabled = alreadyReported;
    const completionText = el('span', 'act-completion-text', t(alreadyReported ? 'alreadyDone' : 'markDone'));
    completion.append(checked, completionText);
    completion.classList.toggle('is-checked', checked.checked);

    const response = el('details', 'act-response');
    response.append(el('summary', '', t('optionalNote')));
    const noteLabel = el('label', '', t('noteLabel'));
    noteLabel.htmlFor = c.id + '-note';
    const note = el('textarea');
    note.id = noteLabel.htmlFor;
    note.rows = 3;
    note.maxLength = 1200;
    note.placeholder = t('notePlaceholder');
    note.value = draft?.note || '';
    note.disabled = alreadyReported;
    response.append(noteLabel, note);

    checked.addEventListener('change', () => {
      saveCompletion(c.id, checked.checked, note.value);
      completion.classList.toggle('is-checked', checked.checked);
    });
    note.addEventListener('input', () => {
      if (checked.checked && !alreadyReported) saveCompletion(c.id, true, note.value);
    });
    card.append(top, title, meta, el('p', 'act-action', loc(c.action)), criterion, completion, details, response);
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
    $('act-year-cta').textContent = t('yearCta');
    $('act-year-heading').textContent = loc(data.config.annual_vision.headline);
    $('act-year-subtitle').textContent = loc(data.config.annual_vision.subtitle);
    $('act-stats').textContent = [
      data.challenges.length + ' ' + t('catalogChallenges'),
      data.config.horizons.length + ' ' + t('catalogHorizons'),
      (data.config.categories || []).length + ' ' + t('catalogDomains'),
      (data.inspirations || []).length + ' ' + t('catalogSources')
    ].join(' · ');
    const inspirationList = $('act-inspiration-list');
    if (inspirationList) {
      inspirationList.replaceChildren();
      (data.inspirations || []).forEach(item => {
        const card = el('article', 'act-inspiration-item');
        card.append(el('strong', '', item.name), el('p', '', loc(item.archetype)), el('p', '', loc(item.lesson)));
        if (/^https:\/\//.test(item.url)) {
          const link = el('a', '', t('inspirationTitle') + ' · ' + item.name);
          link.href = item.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          card.append(link);
        }
        inspirationList.append(card);
      });
    }
    $('act-view-hint').textContent = t(view === 'challenges' ? 'weekHint' : view === 'explore' ? 'exploreHint' : 'journalHint');
    $('act-discovery-controls').hidden = view !== 'explore';
    $('act-all-periods').checked = showAllPeriods;

    const horizons = $('act-horizons');
    horizons.replaceChildren();
    [{id: 'all', label: {fr: COPY.fr.all, en: COPY.en.all}}, ...data.config.horizons].forEach(h => {
      const btn = button(loc(h.label), () => { horizon = h.id; shownCount = 12; render(); });
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
      const selection = latestWeeklyChallenges(data.challenges, today());
      selection.slice(0, showWeekAll ? selection.length : 4).forEach(c => cards.append(renderCard(c)));
      if (selection.length > 4) {
        cards.append(button(t(showWeekAll ? 'showWeekLess' : 'showWeekAll') + ' (' + selection.length + ')', () => {
          showWeekAll = !showWeekAll;
          render();
        }, 'act-load-more act-week-toggle'));
      }
      if (!selection.length) cards.append(el('p', 'act-empty', t('empty')));
      $('act-results-count').textContent = t('weeklyFocus') + ' · ' + selection.length + ' ' + t('results');
    } else if (view === 'explore') {
      const rank = {week: 0, month: 1, quarter: 2, season: 3, halfyear: 4, year: 5};
      const selected = visibleChallenges(data, horizon, status, query, lang, category, showAllPeriods ? 'all' : 'current', today()).sort((a, b) =>
        rank[a.horizon] - rank[b.horizon] || a.due.localeCompare(b.due));
      selected.slice(0, shownCount).forEach(c => cards.append(renderCard(c)));
      if (selected.length > shownCount) cards.append(button(t('moreChallenges'), () => { shownCount += 12; render(); }, 'act-load-more'));
      if (!selected.length) cards.append(el('p', 'act-empty', t('empty')));
      $('act-results-count').textContent = Math.min(selected.length, shownCount) + ' / ' + selected.length + ' ' + t('results');
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
  $('act-year-cta').addEventListener('click', () => {
    view = 'explore'; horizon = 'year'; category = 'all'; status = 'all'; query = ''; shownCount = 12;
    $('act-search').value = ''; render();
    $('act-discovery-controls').scrollIntoView({block: 'start', behavior: 'smooth'});
  });
  $('act-all-periods').addEventListener('change', event => { showAllPeriods = event.target.checked; shownCount = 12; render(); });
  $('act-status-filter').addEventListener('change', event => { status = event.target.value; shownCount = 12; render(); });
  $('act-category-filter').addEventListener('change', event => { category = event.target.value; shownCount = 12; render(); });
  $('act-search').addEventListener('input', event => { query = event.target.value; shownCount = 12; render(); });
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
