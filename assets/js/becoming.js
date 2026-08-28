(() => {
  'use strict';

  const root = document.getElementById('becoming-app');
  const dataNode = document.getElementById('becoming-data');
  if (!root || !dataNode) return;

  const data = JSON.parse(dataNode.textContent);
  root.classList.add('is-enhanced');
  const baseurl = root.dataset.baseurl || '';
  const domains = new Map(data.trees.map(tree => [tree.id, tree]));
  const allNodes = [];

  Object.entries(data.treeData).forEach(([treeId, treeData]) => {
    (treeData.nodes || []).forEach(node => allNodes.push({ tree: treeId, ...node }));
  });
  (data.achievements || []).forEach(node => allNodes.push({ tree: 'legendary', ...node }));

  const privateNodes = new Map(((data.private || {}).nodes || []).map(node => [node.id, node]));
  const nodes = allNodes.map(node => ({ ...node, ...(privateNodes.get(node.id) || {}) }));
  const byId = new Map(nodes.map(node => [node.id, node]));
  const dependents = new Map(nodes.map(node => [node.id, []]));
  nodes.forEach(node => (node.requires || []).forEach(id => dependents.get(id)?.push(node.id)));

  const explicitState = node => node.status || null;
  const stateOf = (node, trail = new Set()) => {
    if (['completed', 'in_progress', 'maintenance', 'paused', 'dormant'].includes(explicitState(node))) return explicitState(node);
    if (trail.has(node.id)) return 'locked';
    const nextTrail = new Set(trail).add(node.id);
    const requirements = node.requires || [];
    if (!requirements.length) return explicitState(node) === 'locked' ? 'locked' : 'available';
    return requirements.every(id => byId.has(id) && stateOf(byId.get(id), nextTrail) === 'completed') ? 'available' : 'locked';
  };

  nodes.forEach(node => { node.computedStatus = stateOf(node); });
  const translations = {
    active: 'Actif', maintenance: 'Maintenance', dormant: 'En sommeil', locked: 'Verrouillé',
    available: 'Disponible', in_progress: 'En cours', completed: 'Accompli', paused: 'En pause', planned: 'Prévue',
    read: 'Lire', reproduce: 'Reproduire', solve: 'Résoudre', project: 'Projet', reading: 'Lecture',
    exam: 'Examen', skill: 'Compétence', foundation: 'Fondation', legendary: 'Légendaire'
  };
  const label = value => language === 'fr' && translations[value] ? translations[value] : String(value || '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const frenchTitles = {
    'Own an Analysis': 'Prendre en charge une analyse', 'Own an End-to-End Project': 'Prendre en charge un projet de bout en bout', 'Present to Decision Makers': 'Présenter aux décideurs', 'Recommendation Implemented': 'Recommandation mise en œuvre', 'Measure Business Impact': "Mesurer l’impact opérationnel", 'Internal Subject-Matter Resource': 'Devenir une référence interne', 'Lead Cross-Functional Work': 'Diriger un travail transversal', 'Mentor Another Analyst': 'Accompagner un autre analyste', 'Technical Leadership': 'Leadership technique',
    'Polished Essay': 'Essai abouti', '10 Strong Essays': '10 essais solides', '25 Strong Essays': '25 essais solides', 'Long-Form Work': 'Texte long', 'Research Writer': 'Rédacteur scientifique', 'Book Thesis': 'Thèse du livre', 'Book Outline': 'Structure du livre', 'Three Finished Chapters': 'Trois chapitres terminés', '50% Manuscript': '50 % du manuscrit', 'Complete First Draft': 'Premier jet complet', 'Editorial Review': 'Révision éditoriale', 'Final Manuscript': 'Manuscrit final', 'Actual Publication': 'Publication réelle',
    '10-Minute Conversation': 'Conversation de 10 minutes', '30-Minute Conversation': 'Conversation de 30 minutes', '60-Minute Conversation': 'Conversation de 60 minutes', 'Explain a Technical Topic Clearly': 'Expliquer clairement un sujet technique', 'Mock Professional Interview': 'Entretien professionnel simulé', '15-Minute Technical Presentation': 'Présentation technique de 15 minutes', 'Defend Research Under Questions': 'Défendre une recherche sous les questions', 'B2 Functional Fluency': 'Aisance fonctionnelle B2', 'C1 Professional Fluency': 'Aisance professionnelle C1',
    'Investment Policy Written': "Politique d’investissement rédigée", 'Contribution System': 'Système de contributions', 'Risk Framework': 'Cadre de gestion du risque', 'Long-Term Record Keeping': 'Suivi à long terme', 'Periodic Portfolio Review': 'Révision périodique du portefeuille', '$10k Investable Assets': '10 k$ d’actifs investissables', '$25k Investable Assets': '25 k$ d’actifs investissables', '$50k Investable Assets': '50 k$ d’actifs investissables', '$100k Investable Assets': '100 k$ d’actifs investissables', '$250k Investable Assets': '250 k$ d’actifs investissables', '$500k Investable Assets': '500 k$ d’actifs investissables', '$750k Investable Assets': '750 k$ d’actifs investissables', '$1M Investable Assets': '1 M$ d’actifs investissables',
    'Working Prototype': 'Prototype fonctionnel', 'Tests': 'Tests', 'Documentation': 'Documentation', 'Public Release': 'Publication publique', 'Real User': 'Premier utilisateur réel', 'External Issue / Feedback': 'Problème ou retour externe', 'Multiple Useful Tools': 'Plusieurs outils utiles', 'Open-Source Builder': 'Créateur open source',
    'Exam 1 / Probability': 'Examen 1 / Probabilités', 'DISC Data and Analytics': 'DISC Données et analytique', 'DISC Risk Management and Insurance Operations': 'DISC Gestion du risque et opérations d’assurance', 'DISC Insurance Accounting': 'DISC Comptabilité d’assurance', 'PCPA Exam': 'Examen PCPA', 'PCPA Project': 'Projet PCPA',
    '130 kg milestone': 'Palier de 130 kg', '120 kg milestone': 'Palier de 120 kg', '110 kg milestone': 'Palier de 110 kg', 'Below 100 kg milestone': 'Passer sous 100 kg', '90 kg milestone': 'Palier de 90 kg', '85 kg milestone': 'Palier de 85 kg', 'User-Defined 80 kg Target': 'Objectif de 80 kg', 'Target Maintenance': 'Maintien du poids cible', 'Three Months Maintained': 'Maintien pendant trois mois', 'Six Months Maintained': 'Maintien pendant six mois', 'Transformation': 'Transformation', 'Physical Capacity — User Defined': 'Capacité physique — objectif personnel'
  };
  const localizedTitle = node => language === 'fr' ? (node.title_fr || frenchTitles[node.title] || node.title) : node.title;
  const copy = {
    fr: {
      eyebrow: 'Progression personnelle · preuves réelles', subtitle: 'Une carte de ce que j’apprends, construis et deviens.', principle: 'Une vision à long terme, traduite en objectifs concrets chaque semaine.',
      weekly_program: 'Programme concret', weekly_objectives: 'Objectifs de la semaine', weekly_help: 'Un rappel simple de ce qui compte cette semaine.', whole_path: 'Toute la progression',
      current_cycle: 'Cycle actuel', foundations_cycle: 'Fondations', week_of_cycle: 'Semaine 1 sur 12',
      current_range: 'Semaine 01 · 30 août – 5 septembre 2026', close: 'Fermer',
      this_week: 'Cette semaine', current_quests: 'Quêtes actuelles', active_chapters: 'Chapitres actifs', next_goals: 'Prochains objectifs',
      achievements: 'Accomplissements et preuves', legendary_goals: 'Objectifs légendaires', legendary_help: 'Les grandes destinations. Leur progression dépend automatiquement des étapes accomplies dans les domaines ci-dessous.', long_term_vision: 'Vision à long terme', domain_path: 'Parcours par domaine',
      progress_path: 'Chemin de progression', progress_help: "Tous les objectifs du domaine sont présentés dans leur ordre logique. Sélectionne une étape pour voir ses conditions, ses preuves et ce qu'elle débloque.",
      week_after_week: 'Une semaine après l’autre', quest_journal: 'Journal de progression', journal_intro: "Ici restent les objectifs choisis, les difficultés, les découvertes et les preuves créées. La revue n'exige pas une semaine parfaite — seulement une semaine honnêtement racontée."
    },
    en: {
      eyebrow: 'Personal progression · real evidence', subtitle: "A map of what I'm learning, building, and becoming.", principle: 'A long-term vision translated into concrete weekly objectives.',
      weekly_program: 'Concrete program', weekly_objectives: 'Objectives for the week', weekly_help: 'A simple reminder of what matters this week.', whole_path: 'The complete progression',
      current_cycle: 'Current cycle', foundations_cycle: 'Foundations', week_of_cycle: 'Week 1 of 12',
      current_range: 'Week 01 · Aug 30 – Sep 5, 2026', close: 'Close',
      this_week: 'This week', current_quests: 'Current quests', active_chapters: 'Active chapters', next_goals: 'Next goals',
      achievements: 'Achievements and evidence', legendary_goals: 'Legendary objectives', legendary_help: 'The major destinations. Their progress follows automatically from the completed steps below.', long_term_vision: 'Long-term vision', domain_path: 'Path by domain',
      progress_path: 'Progression path', progress_help: 'Every goal in the domain is shown in logical order. Select a step to see its requirements, evidence, and unlocks.',
      week_after_week: 'One week at a time', quest_journal: 'Progress log', journal_intro: 'This is where chosen goals, difficulties, discoveries, and evidence remain. The review does not require a perfect week—only an honestly recorded one.'
    }
  };
  let language = localStorage.getItem('becoming.language') || 'fr';
  const setLanguage = value => {
    language = value === 'en' ? 'en' : 'fr';
    localStorage.setItem('becoming.language', language);
    root.lang = language;
    root.querySelectorAll('[data-i18n]').forEach(node => { const value = copy[language][node.dataset.i18n]; if (value) node.textContent = value; });
    root.querySelectorAll('[data-title-en]').forEach(node => { node.textContent = language === 'fr' ? (node.dataset.titleFr || node.dataset.titleEn) : node.dataset.titleEn; });
    root.querySelectorAll('[data-language]').forEach(button => { button.classList.toggle('is-selected', button.dataset.language === language); button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
  };
  root.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.language);
    renderSelectedWeek();
    selectTree(selectedTree, false);
  }));
  setLanguage(language);
  const safeUrl = url => !url ? '' : (/^(https?:|mailto:)/.test(url) ? url : `${baseurl}${url}`);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const empty = (target, message) => { target.replaceChildren(el('p', 'becoming__empty', message)); };
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealObserver = !reducedMotion && 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -4% 0px' }) : null;
  const observeMotion = node => {
    if (!node) return;
    node.classList.add('becoming__reveal');
    if (revealObserver) revealObserver.observe(node); else node.classList.add('is-revealed');
  };
  if (!reducedMotion) {
    root.addEventListener('pointermove', event => {
      const bounds = root.getBoundingClientRect();
      root.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
      root.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
    }, { passive: true });
  }

  const showView = view => {
    document.querySelectorAll('.becoming__view').forEach(section => { section.hidden = section.id !== `becoming-${view}`; });
    document.querySelectorAll('.becoming__tabs [data-view]').forEach(link => {
      const selected = link.dataset.view === view;
      link.classList.toggle('is-selected', selected);
      if (selected) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
    });
    const url = new URL(location.href);
    if (view === 'overview') url.searchParams.delete('view'); else url.searchParams.set('view', view);
    history.replaceState({}, '', url);
  };

  document.querySelectorAll('.becoming__tabs [data-view]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    showView(link.dataset.view);
  }));

  const focusTarget = document.getElementById('becoming-focus');
  (data.current.focus || []).forEach(id => {
    const domain = domains.get(id);
    if (!domain) return;
    const item = el('button', `becoming__focus-item strategy-${domain.strategy}`);
    item.type = 'button'; item.dataset.tree = id;
    item.innerHTML = `<span data-title-en="${domain.title}" data-title-fr="${domain.title_fr || domain.title}">${language === 'fr' ? (domain.title_fr || domain.title) : domain.title}</span><small>${label(domain.strategy)}</small>`;
    item.addEventListener('click', () => selectTree(id));
    focusTarget.append(item);
  });
  const maintenanceTarget = document.getElementById('becoming-maintenance');
  (data.current.maintenance || []).forEach(id => {
    const domain = domains.get(id); if (!domain) return;
    const item = el('button', 'becoming__focus-item strategy-maintenance'); item.type = 'button'; item.dataset.tree = id;
    item.innerHTML = `<span data-title-en="${domain.title}" data-title-fr="${domain.title_fr || domain.title}">${language === 'fr' ? (domain.title_fr || domain.title) : domain.title}</span><small>${label('maintenance')}</small>`;
    item.addEventListener('click', () => selectTree(id)); maintenanceTarget.append(item);
  });

  const questTarget = document.getElementById('becoming-quests');
  const weekRail = document.getElementById('week-rail');
  const cycleWeeks = (data.weeks || []).filter(week => week.cycle_week).sort((a, b) => a.cycle_week - b.cycle_week);
  let selectedWeekIndex = Math.max(0, cycleWeeks.findIndex(week => week.cycle_week === data.current.cycle_week));
  const normalizeEvidence = value => Array.isArray(value) ? value : value ? [value] : [];
  const renderSelectedWeek = () => {
    if (!cycleWeeks.length || !questTarget) return;
    const week = cycleWeeks[selectedWeekIndex];
    const isCurrent = week.cycle_week === data.current.cycle_week;
    document.getElementById('selected-week-label').textContent = `${language === 'fr' ? 'Semaine' : 'Week'} ${String(week.cycle_week).padStart(2, '0')} · ${week.start_date} — ${week.end_date}`;
    document.getElementById('selected-week-title').textContent = language === 'fr' ? (week.title_fr || week.title) : week.title;
    const rawQuests = isCurrent ? (data.current.quests || []) : (week.quests || []);
    const quests = isCurrent ? rawQuests : [...new Set(rawQuests.map(quest => quest.tree || quest.domain))].map(treeId => {
      const linkedId = [...(week.active || []), ...(week.maintenance || [])].find(id => byId.get(id)?.tree === treeId);
      const linkedNode = byId.get(linkedId);
      if (treeId === 'physical') return { tree: treeId, node: linkedId, title: 'Physical — 4 strength sessions, 3 runs, 12,000–15,000 daily steps', title_fr: 'Physique — 4 séances de musculation, 3 courses, 12 000 à 15 000 pas par jour' };
      if (treeId === 'english') return { tree: treeId, node: linkedId, title: 'English — weekly conversation practice', title_fr: 'Anglais — conversation hebdomadaire' };
      return { tree: treeId, node: linkedId, title: linkedNode?.title || domains.get(treeId)?.title || treeId, title_fr: linkedNode ? localizedTitle(linkedNode) : (domains.get(treeId)?.title_fr || treeId) };
    });
    questTarget.replaceChildren();
    quests.forEach((quest, index) => {
      const treeId = quest.tree || quest.domain;
      const questNode = quest.node ? byId.get(quest.node) : null;
      const title = quest.title || quest.task || `Objective ${index + 1}`;
      const titleFr = quest.title_fr || quest.task_fr || title;
      const status = questNode?.computedStatus === 'completed' || week.status === 'completed' ? 'completed' : isCurrent ? (quest.status || 'planned') : 'locked';
      const item = el('article', `becoming__quest-card status-${status}`);
      const summary = el('div', 'becoming__quest-summary');
      const questDomain = domains.get(treeId);
      const questDomainTitle = language === 'fr' ? (questDomain?.title_fr || questDomain?.title || label(treeId)) : (questDomain?.title || label(treeId));
      summary.innerHTML = `<span class="becoming__quest-rune" aria-hidden="true">${status === 'completed' ? '✓' : String(index + 1).padStart(2, '0')}</span><span><small>${questDomainTitle} · ${label(status)}</small><strong data-title-en="${title}" data-title-fr="${titleFr}">${language === 'fr' ? titleFr : title}</strong></span>`;
      item.append(summary); questTarget.append(item); observeMotion(item);
    });
    weekRail?.querySelectorAll('button').forEach((button, index) => { button.classList.toggle('is-selected', index === selectedWeekIndex); button.setAttribute('aria-pressed', String(index === selectedWeekIndex)); });
  };
  cycleWeeks.forEach((week, index) => {
    const button = el('button', `status-${week.status || 'planned'}`); button.type = 'button';
    button.innerHTML = `<small>${String(week.cycle_week).padStart(2, '0')}</small><strong>${week.status === 'completed' ? '✓' : week.cycle_week === data.current.cycle_week ? '◆' : '○'}</strong>`;
    button.setAttribute('aria-label', `Week ${week.cycle_week}: ${week.title}`);
    button.addEventListener('click', () => { selectedWeekIndex = index; renderSelectedWeek(); button.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' }); }); weekRail?.append(button);
  });
  document.getElementById('previous-week')?.addEventListener('click', () => { selectedWeekIndex = Math.max(0, selectedWeekIndex - 1); renderSelectedWeek(); });
  document.getElementById('next-week')?.addEventListener('click', () => { selectedWeekIndex = Math.min(cycleWeeks.length - 1, selectedWeekIndex + 1); renderSelectedWeek(); });
  renderSelectedWeek();

  const nextTarget = document.getElementById('becoming-next');
  const nextNodes = nodes.filter(node => node.tree !== 'legendary' && ['available', 'in_progress'].includes(node.computedStatus)).slice(0, 7);
  nextNodes.forEach(node => nextTarget.append(nodeRow(node)));
  if (!nextNodes.length) empty(nextTarget, 'No available milestone. Check prerequisite records.');

  const evidenceTarget = document.getElementById('becoming-evidence');
  const evidence = nodes.flatMap(node => (node.evidence || []).map(record => ({ ...record, node }))).slice(0, 6);
  evidence.forEach(record => {
    const line = el('div', 'becoming__evidence-row');
    const link = el(record.url ? 'a' : 'span', '', record.title);
    if (record.url) link.href = safeUrl(record.url);
    line.append(link, el('small', '', `${label(record.type)} · ${record.node.title}`));
    evidenceTarget.append(line);
  });
  if (!evidence.length) empty(evidenceTarget, 'Evidence appears here when attached to nodes.');

  const legendaryTarget = document.getElementById('becoming-legendary');
  nodes.filter(node => node.tree === 'legendary' && !node.private).forEach(node => {
    const completed = (node.requires || []).filter(id => byId.get(id)?.computedStatus === 'completed').length;
    const card = el('button', `becoming__legendary-card status-${node.computedStatus}`); card.type = 'button';
    const total = (node.requires || []).length;
    const progress = total ? Math.round((completed / total) * 100) : 0;
    const displayTitle = localizedTitle(node);
    const statusFr = translations[node.computedStatus] || label(node.computedStatus);
    card.innerHTML = `<span class="becoming__legendary-status"><small data-title-en="${String(node.computedStatus).replace(/_/g, ' ')}" data-title-fr="${statusFr}">${label(node.computedStatus)}</small><b aria-hidden="true">${node.computedStatus === 'completed' ? '✓' : '○'}</b></span><strong data-title-en="${node.title}" data-title-fr="${node.title_fr || frenchTitles[node.title] || node.title}">${displayTitle}</strong><span data-title-en="${completed} / ${total} requirements completed" data-title-fr="${completed} / ${total} conditions accomplies">${completed} / ${total} ${language === 'fr' ? 'conditions accomplies' : 'requirements completed'}</span><i aria-hidden="true"><em style="width:${progress}%"></em></i>`;
    card.dataset.nodeId = node.id;
    card.addEventListener('click', () => openDetail(node)); legendaryTarget.append(card); observeMotion(card);
  });

  function nodeRow(node) {
    const button = el('button', `becoming__node-row status-${node.computedStatus}`); button.type = 'button';
    const displayTitle = localizedTitle(node);
    button.innerHTML = `<span class="becoming__state-mark" aria-hidden="true"></span><span><strong>${displayTitle}</strong><small>${label(node.computedStatus)} · ${label(node.type)}</small></span>`;
    button.setAttribute('aria-label', `${node.title}, ${label(node.computedStatus)}, ${label(node.type)}`);
    button.addEventListener('click', () => openDetail(node));
    return button;
  }

  const selector = document.getElementById('tree-selector');
  data.trees.forEach(domain => {
    const button = el('button', '', language === 'fr' ? (domain.title_fr || domain.title) : domain.title); button.type = 'button'; button.dataset.tree = domain.id; button.dataset.titleEn = domain.title; button.dataset.titleFr = domain.title_fr || domain.title;
    button.addEventListener('click', () => selectTree(domain.id)); selector.append(button);
  });

  let selectedTree = new URL(location.href).searchParams.get('tree') || localStorage.getItem('becoming.tree') || 'research';
  if (!domains.has(selectedTree)) selectedTree = 'research';

  function selectTree(treeId, updateHistory = true) {
    selectedTree = treeId; localStorage.setItem('becoming.tree', treeId);
    selector.querySelectorAll('button').forEach(button => {
      const selected = button.dataset.tree === treeId;
      button.classList.toggle('is-selected', selected); button.setAttribute('aria-pressed', String(selected));
    });
    const domain = domains.get(treeId);
    document.getElementById('tree-heading').textContent = language === 'fr' ? (domain.title_fr || domain.title) : domain.title;
    document.getElementById('tree-summary').textContent = `${label(domain.strategy)} · ${language === 'fr' ? (domain.description_fr || domain.description) : domain.description}`;
    if (updateHistory) {
      const url = new URL(location.href); url.searchParams.set('view', 'tree'); url.searchParams.set('tree', treeId); url.searchParams.delete('node'); history.pushState({ tree: treeId }, '', url);
    }
    renderTree();
  }

  const search = document.getElementById('node-search');
  const statusFilter = document.getElementById('status-filter');
  const typeFilter = document.getElementById('type-filter');
  [search, statusFilter, typeFilter].forEach(control => control.addEventListener('input', renderTree));

  let showFullTree = true;
  const nodeGroup = node => {
    if (node.tree !== 'actuarial') return node.tree;
    return node.id === 'actuarial-fm' || node.id.startsWith('actuarial-fm-') ? 'fm' : 'cas';
  };
  const groupTitle = group => ({ fm: language === 'fr' ? 'Préparation FM' : 'FM Preparation', cas: language === 'fr' ? 'Parcours CAS / ACAS' : 'CAS / ACAS Pathway' }[group] || '');
  function focusedNodeIds(treeNodes) {
    const current = treeNodes.find(node => node.computedStatus === 'in_progress') || treeNodes.find(node => node.computedStatus === 'maintenance') || treeNodes.find(node => node.computedStatus === 'available');
    if (!current) return new Set(treeNodes.slice(0, 5).map(node => node.id));
    const ids = new Set([current.id, ...(current.requires || [])]);
    const queue = [...(dependents.get(current.id) || [])];
    while (queue.length && ids.size < 6) { const id = queue.shift(); const node = byId.get(id); if (node?.tree === selectedTree) { ids.add(id); queue.push(...(dependents.get(id) || [])); } }
    const currentGroup = nodeGroup(current);
    const distant = [...treeNodes].reverse().find(node => nodeGroup(node) === currentGroup && ['boss', 'legendary', 'mastery', 'credential'].includes(node.type));
    if (distant) ids.add(distant.id);
    return ids;
  }
  function filteredNodes() {
    const query = search.value.trim().toLowerCase();
    const treeNodes = nodes.filter(node => node.tree === selectedTree);
    const focusIds = focusedNodeIds(treeNodes);
    return treeNodes
      .filter(node => showFullTree || query || statusFilter.value || typeFilter.value || focusIds.has(node.id))
      .filter(node => !query || [node.title, node.description, ...(node.tags || [])].join(' ').toLowerCase().includes(query))
      .filter(node => !statusFilter.value || node.computedStatus === statusFilter.value)
      .filter(node => !typeFilter.value || node.type === typeFilter.value);
  }

  function renderTree() {
    const treeNodes = nodes.filter(node => node.tree === selectedTree);
    const types = [...new Set(treeNodes.map(node => node.type))].sort();
    const oldType = typeFilter.value;
    typeFilter.replaceChildren(new Option('All', ''), ...types.map(type => new Option(label(type), type)));
    typeFilter.value = types.includes(oldType) ? oldType : '';
    const visible = filteredNodes();
    const list = document.getElementById('node-list');
    const rows = [];
    let previousGroup = null;
    visible.forEach(node => {
      const group = nodeGroup(node);
      if (selectedTree === 'actuarial' && group !== previousGroup) {
        const heading = el('li', 'becoming__path-group'); heading.textContent = groupTitle(group); rows.push(heading); previousGroup = group;
      }
      const li = el('li'); li.append(nodeRow(node)); rows.push(li);
    });
    list.replaceChildren(...rows);
    rows.forEach((row, index) => { row.style.setProperty('--reveal-order', index); observeMotion(row); });
    if (!visible.length) { const li = el('li'); li.append(el('p', 'becoming__empty', 'No milestone matches these filters.')); list.append(li); }
    renderMap(visible, treeNodes);
  }

  function renderMap(visible, treeNodes) {
    const map = document.getElementById('tree-map'); map.replaceChildren();
    const visibleIds = new Set(visible.map(node => node.id));
    const levels = new Map();
    const depth = (node, trail = new Set()) => {
      if (levels.has(node.id)) return levels.get(node.id);
      if (trail.has(node.id)) return 0;
      const own = (node.requires || []).filter(id => byId.get(id)?.tree === selectedTree);
      const value = own.length ? 1 + Math.max(...own.map(id => depth(byId.get(id), new Set(trail).add(node.id)))) : 0;
      levels.set(node.id, value); return value;
    };
    treeNodes.forEach(node => depth(node));
    const grouped = new Map(); visible.forEach(node => { const level = levels.get(node.id) || 0; if (!grouped.has(level)) grouped.set(level, []); grouped.get(level).push(node); });
    const width = Math.max(760, ...[...grouped.values()].map(group => group.length * 230));
    const height = Math.max(260, (Math.max(0, ...grouped.keys()) + 1) * 150);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', `0 0 ${width} ${height}`); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', `${domains.get(selectedTree).title} prerequisite map`);
    const positions = new Map();
    [...grouped.entries()].forEach(([level, group]) => group.forEach((node, index) => positions.set(node.id, { x: ((index + 1) * width) / (group.length + 1), y: 70 + level * 150 })));
    visible.forEach(node => (node.requires || []).forEach(req => {
      if (!visibleIds.has(req) || !positions.has(req)) return;
      const a = positions.get(req), b = positions.get(node.id);
      const line = document.createElementNS(svg.namespaceURI, 'path'); line.setAttribute('d', `M ${a.x} ${a.y + 32} C ${a.x} ${a.y + 80}, ${b.x} ${b.y - 80}, ${b.x} ${b.y - 32}`); line.setAttribute('class', 'becoming__edge'); line.dataset.from = req; line.dataset.to = node.id; svg.append(line);
    }));
    visible.forEach(node => {
      const pos = positions.get(node.id); const group = document.createElementNS(svg.namespaceURI, 'g'); group.setAttribute('class', `becoming__svg-node status-${node.computedStatus} type-${node.type}`); group.setAttribute('transform', `translate(${pos.x},${pos.y})`); group.setAttribute('tabindex', '0'); group.setAttribute('role', 'button'); group.setAttribute('aria-label', `${node.title}, ${label(node.computedStatus)}`);
      const rect = document.createElementNS(svg.namespaceURI, 'rect'); rect.setAttribute('x', '-94'); rect.setAttribute('y', '-32'); rect.setAttribute('width', '188'); rect.setAttribute('height', '64'); rect.setAttribute('rx', node.type === 'boss' ? '4' : '12');
      const title = document.createElementNS(svg.namespaceURI, 'text'); title.setAttribute('text-anchor', 'middle'); title.setAttribute('y', '-3'); title.textContent = node.short_title || node.title.slice(0, 27);
      const status = document.createElementNS(svg.namespaceURI, 'text'); status.setAttribute('class', 'becoming__svg-status'); status.setAttribute('text-anchor', 'middle'); status.setAttribute('y', '16'); status.textContent = label(node.computedStatus);
      group.append(rect, title, status); group.addEventListener('click', () => openDetail(node)); group.addEventListener('keydown', event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); openDetail(node); } }); svg.append(group);
    });
    map.append(svg);
  }

  document.getElementById('fit-tree').addEventListener('click', () => document.getElementById('tree-map').scrollTo({ left: 0, top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
  document.getElementById('toggle-full-tree').addEventListener('click', event => { showFullTree = !showFullTree; event.currentTarget.textContent = showFullTree ? 'Show current path' : 'Show complete tree'; renderTree(); });

  const detail = document.getElementById('node-detail'); const detailContent = document.getElementById('detail-content'); const scrim = document.getElementById('detail-scrim'); let priorFocus;
  function openDetail(node) {
    if (!node) return;
    root.querySelectorAll('.becoming__legendary-card').forEach(card => card.classList.toggle('is-active', card.dataset.nodeId === node.id));
    priorFocus = document.activeElement;
    const reqs = (node.requires || []).map(id => byId.get(id)).filter(Boolean);
    const unlocks = (dependents.get(node.id) || []).map(id => byId.get(id)).filter(Boolean);
    detailContent.replaceChildren();
    const detailDomain = domains.get(node.tree);
    const detailDomainTitle = language === 'fr' ? (detailDomain?.title_fr || detailDomain?.title || 'Légendaire') : (detailDomain?.title || 'Legendary');
    const displayTitle = localizedTitle(node);
    const eyebrow = el('p', 'becoming__label', `${detailDomainTitle} · ${label(node.type)}`);
    const title = el('h2', '', displayTitle); title.id = 'detail-title';
    detailContent.append(eyebrow, title, el('p', `becoming__status status-${node.computedStatus}`, label(node.computedStatus)));
    const description = language === 'fr' ? (node.description_fr || node.description) : node.description;
    const why = language === 'fr' ? (node.why_fr || node.why) : node.why;
    if (description) detailContent.append(el('p', 'becoming__detail-description', description));
    appendSection(language === 'fr' ? 'Pourquoi' : 'Why it matters', why ? [why] : []);
    appendNodes(language === 'fr' ? 'Prérequis' : 'Requires', reqs); appendSection(language === 'fr' ? 'Conditions' : 'Unlock requirements', node.unlock_requirements || []);
    if (node.progress) appendSection(language === 'fr' ? 'Progression' : 'Progress', [`${node.progress.current} / ${node.progress.target} ${node.progress.unit || ''}`]);
    appendSection(language === 'fr' ? 'Prochaines actions' : 'Next actions', node.next_actions || []); appendLinks(language === 'fr' ? 'Ressources' : 'Resources', node.resources || []); appendLinks(language === 'fr' ? 'Preuves' : 'Evidence', node.evidence || []); appendNodes(language === 'fr' ? 'Débloque' : 'Unlocks', unlocks);
    if (node.target_date || node.completed_at) appendSection('Dates', [`${node.target_date ? `${language === 'fr' ? 'Cible' : 'Target'} : ${node.target_date}` : ''}${node.target_date && node.completed_at ? ' · ' : ''}${node.completed_at ? `${language === 'fr' ? 'Terminé' : 'Completed'} : ${node.completed_at}` : ''}`]);
    const notes = language === 'fr' ? node.notes_fr : node.notes;
    if (notes) appendSection('Notes', [notes]);
    detail.classList.add('is-open'); detail.setAttribute('aria-hidden', 'false'); scrim.hidden = false; document.body.classList.add('becoming-detail-open'); document.getElementById('detail-close').focus();
    const url = new URL(location.href); url.searchParams.set('node', node.id); history.replaceState({}, '', url);
    function section(titleText) { const section = el('section'); section.append(el('h3', '', titleText)); detailContent.append(section); return section; }
    function appendSection(titleText, items) { if (!items.length) return; const target = section(titleText); const list = el('ul'); items.forEach(item => list.append(el('li', '', item))); target.append(list); }
    function appendNodes(titleText, items) { if (!items.length) return; const target = section(titleText); items.forEach(item => target.append(nodeRow(item))); }
    function appendLinks(titleText, items) { if (!items.length) return; const target = section(titleText); const list = el('ul'); items.forEach(item => { const li = el('li'); const link = el(item.url ? 'a' : 'span', '', item.title); if (item.url) link.href = safeUrl(item.url); li.append(link); if (item.type) li.append(el('small', '', ` · ${label(item.type)}`)); list.append(li); }); target.append(list); }
  }
  function closeDetail() { detail.classList.remove('is-open'); detail.setAttribute('aria-hidden', 'true'); scrim.hidden = true; root.querySelectorAll('.becoming__legendary-card.is-active').forEach(card => card.classList.remove('is-active')); document.body.classList.remove('becoming-detail-open'); const url = new URL(location.href); url.searchParams.delete('node'); history.replaceState({}, '', url); priorFocus?.focus(); }
  document.getElementById('detail-close').addEventListener('click', closeDetail); scrim.addEventListener('click', closeDetail); document.addEventListener('keydown', event => { if (event.key === 'Escape' && detail.classList.contains('is-open')) closeDetail(); });

  const timeline = document.getElementById('becoming-timeline');
  const events = nodes.filter(node => node.completed_at).map(node => ({ date: node.completed_at, title: node.title, kind: 'Milestone', node }));
  (data.weeks || []).filter(week => week.cycle_week && week.status === 'completed').forEach(week => events.push({ date: week.start_date, title: week.title || `Weekly review ${week.cycle_week}`, kind: `Week ${week.cycle_week}` }));
  events.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  if (timeline) {
    events.forEach(event => { const item = el(event.node ? 'button' : 'article', 'becoming__timeline-item'); if (event.node) { item.type = 'button'; item.addEventListener('click', () => openDetail(event.node)); } item.append(el('time', '', String(event.date)), el('strong', '', event.title), el('small', '', event.kind)); timeline.append(item); });
    if (!events.length) empty(timeline, 'Completed milestones and weekly reviews will form the chronology.');
  }

  addEventListener('popstate', () => { const params = new URL(location.href).searchParams; const tree = params.get('tree'); if (tree && domains.has(tree)) selectTree(tree, false); const node = params.get('node'); if (node && byId.has(node)) openDetail(byId.get(node)); });
  const params = new URL(location.href).searchParams;
  selectTree(selectedTree, false);
  if (params.get('node') && byId.has(params.get('node'))) openDetail(byId.get(params.get('node')));
})();
