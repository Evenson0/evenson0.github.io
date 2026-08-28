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
    (treeData.nodes || []).forEach(node => {
      allNodes.push({
        tree: treeId,
        ...node
      });
    });
  });

  (data.achievements || []).forEach(node => {
    allNodes.push({
      tree: 'legendary',
      ...node
    });
  });

  const privateNodes = new Map(
    ((data.private || {}).nodes || []).map(node => [node.id, node])
  );

  const nodes = allNodes.map(node => ({
    ...node,
    ...(privateNodes.get(node.id) || {})
  }));

  const byId = new Map(nodes.map(node => [node.id, node]));
  const dependents = new Map(nodes.map(node => [node.id, []]));

  nodes.forEach(node => {
    (node.requires || []).forEach(id => {
      dependents.get(id)?.push(node.id);
    });
  });

  const explicitState = node => node.status || null;

  const stateOf = (node, trail = new Set()) => {
    if (
      [
        'completed',
        'in_progress',
        'maintenance',
        'paused',
        'dormant'
      ].includes(explicitState(node))
    ) {
      return explicitState(node);
    }

    if (trail.has(node.id)) {
      return 'locked';
    }

    const nextTrail = new Set(trail).add(node.id);
    const requirements = node.requires || [];

    if (!requirements.length) {
      return explicitState(node) === 'locked'
        ? 'locked'
        : 'available';
    }

    return requirements.every(id => (
      byId.has(id) &&
      stateOf(byId.get(id), nextTrail) === 'completed'
    ))
      ? 'available'
      : 'locked';
  };

  nodes.forEach(node => {
    node.computedStatus = stateOf(node);
  });

  const translations = {
    active: 'Actif',
    maintenance: 'Maintenance',
    dormant: 'En sommeil',
    locked: 'Verrouillé',
    available: 'Disponible',
    in_progress: 'En cours',
    completed: 'Accompli',
    paused: 'En pause',
    planned: 'Prévue',
    read: 'Lire',
    reproduce: 'Reproduire',
    solve: 'Résoudre',
    project: 'Projet',
    reading: 'Lecture',
    exam: 'Examen',
    skill: 'Compétence',
    foundation: 'Fondation',
    legendary: 'Légendaire'
  };

  let language =
    localStorage.getItem('becoming.language') || 'fr';

  const label = value => (
    language === 'fr' && translations[value]
      ? translations[value]
      : String(value || '')
          .replace(/_/g, ' ')
          .replace(/\b\w/g, c => c.toUpperCase())
  );

  const frenchTitles = {
    'Own an Analysis': 'Prendre en charge une analyse',
    'Own an End-to-End Project': 'Prendre en charge un projet de bout en bout',
    'Present to Decision Makers': 'Présenter aux décideurs',
    'Recommendation Implemented': 'Recommandation mise en œuvre',
    'Measure Business Impact': "Mesurer l’impact opérationnel",
    'Internal Subject-Matter Resource': 'Devenir une référence interne',
    'Lead Cross-Functional Work': 'Diriger un travail transversal',
    'Mentor Another Analyst': 'Accompagner un autre analyste',
    'Technical Leadership': 'Leadership technique'
  };

  const localizedTitle = node => (
    language === 'fr'
      ? (
          node.title_fr ||
          frenchTitles[node.title] ||
          node.title
        )
      : node.title
  );

  const copy = {
    fr: {
      eyebrow: 'Progression personnelle · travail réel',
      subtitle: 'Une carte de ce que j’apprends, construis et deviens.',
      principle: 'Une vision à long terme, traduite en objectifs concrets chaque semaine.',
      weekly_program: 'Programme concret',
      weekly_objectives: 'Objectifs de la semaine',
      weekly_help: 'Un rappel simple de ce qui compte cette semaine.',
      whole_path: 'Toute la progression',
      current_cycle: 'Période actuelle',
      current_range: 'Semaine 01 · 30 août – 5 septembre 2026',
      close: 'Fermer',
      this_week: 'Cette semaine',
      current_quests: 'Objectifs actuels',
      active_chapters: 'Domaines actifs',
      next_goals: 'Prochains objectifs',
      achievements: 'Accomplissements',
      legendary_goals: 'Objectifs légendaires',
      legendary_help: 'Les grandes destinations. Leur progression dépend automatiquement des étapes accomplies dans les domaines ci-dessous.',
      long_term_vision: 'Vision à long terme',
      domain_path: 'Parcours par domaine',
      progress_path: 'Chemin de progression',
      progress_help: "Tous les objectifs du domaine sont présentés dans leur ordre logique. Sélectionne une étape pour voir ses conditions et ce qu'elle débloque.",
      week_after_week: 'Une semaine après l’autre',
      quest_journal: 'Journal de progression',
      journal_intro: "Ici restent les objectifs choisis, les difficultés, les découvertes et les ajustements. La revue n'exige pas une semaine parfaite — seulement une semaine honnêtement racontée."
    },

    en: {
      eyebrow: 'Personal progression · real work',
      subtitle: "A map of what I'm learning, building, and becoming.",
      principle: 'A long-term vision translated into concrete weekly objectives.',
      weekly_program: 'Concrete program',
      weekly_objectives: 'Objectives for the week',
      weekly_help: 'A simple reminder of what matters this week.',
      whole_path: 'The complete progression',
      current_cycle: 'Current period',
      current_range: 'Week 01 · Aug 30 – Sep 5, 2026',
      close: 'Close',
      this_week: 'This week',
      current_quests: 'Current objectives',
      active_chapters: 'Active domains',
      next_goals: 'Next goals',
      achievements: 'Achievements',
      legendary_goals: 'Legendary objectives',
      legendary_help: 'The major destinations. Their progress follows automatically from the completed steps below.',
      long_term_vision: 'Long-term vision',
      domain_path: 'Path by domain',
      progress_path: 'Progression path',
      progress_help: 'Every goal in the domain is shown in logical order. Select a step to see its requirements and unlocks.',
      week_after_week: 'One week at a time',
      quest_journal: 'Progress log',
      journal_intro: 'This is where chosen goals, difficulties, discoveries, and adjustments remain. The review does not require a perfect week—only an honestly recorded one.'
    }
  };

  const setLanguage = value => {
    language = value === 'en' ? 'en' : 'fr';

    localStorage.setItem(
      'becoming.language',
      language
    );

    root.lang = language;

    root
      .querySelectorAll('[data-i18n]')
      .forEach(node => {
        const value =
          copy[language][node.dataset.i18n];

        if (value) {
          node.textContent = value;
        }
      });

    root
      .querySelectorAll('[data-title-en]')
      .forEach(node => {
        node.textContent =
          language === 'fr'
            ? (
                node.dataset.titleFr ||
                node.dataset.titleEn
              )
            : node.dataset.titleEn;
      });

    root
      .querySelectorAll('[data-language]')
      .forEach(button => {
        const selected =
          button.dataset.language === language;

        button.classList.toggle(
          'is-selected',
          selected
        );

        button.setAttribute(
          'aria-pressed',
          String(selected)
        );
      });
  };

  root
    .querySelectorAll('[data-language]')
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          setLanguage(
            button.dataset.language
          );

          renderSelectedWeek();
          selectTree(selectedTree, false);
        }
      );
    });

  setLanguage(language);

  const safeUrl = url => (
    !url
      ? ''
      : (
          /^(https?:|mailto:)/.test(url)
            ? url
            : `${baseurl}${url}`
        )
  );

  const el = (
    tag,
    className,
    text
  ) => {
    const node =
      document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (text !== undefined) {
      node.textContent = text;
    }

    return node;
  };

  const empty = (
    target,
    message
  ) => {
    target.replaceChildren(
      el(
        'p',
        'becoming__empty',
        message
      )
    );
  };

  const reducedMotion =
    matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  const revealObserver =
    !reducedMotion &&
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (!entry.isIntersecting) {
                return;
              }

              entry.target.classList.add(
                'is-revealed'
              );

              revealObserver.unobserve(
                entry.target
              );
            });
          },
          {
            threshold: 0.12,
            rootMargin: '0px 0px -4% 0px'
          }
        )
      : null;

  const observeMotion = node => {
    if (!node) return;

    node.classList.add(
      'becoming__reveal'
    );

    if (revealObserver) {
      revealObserver.observe(node);
    } else {
      node.classList.add(
        'is-revealed'
      );
    }
  };

  if (!reducedMotion) {
    root.addEventListener(
      'pointermove',
      event => {
        const bounds =
          root.getBoundingClientRect();

        root.style.setProperty(
          '--pointer-x',
          `${event.clientX - bounds.left}px`
        );

        root.style.setProperty(
          '--pointer-y',
          `${event.clientY - bounds.top}px`
        );
      },
      {
        passive: true
      }
    );
  }

  const focusTarget =
    document.getElementById(
      'becoming-focus'
    );

  (data.current.focus || [])
    .forEach(id => {
      const domain =
        domains.get(id);

      if (!domain || !focusTarget) {
        return;
      }

      const item = el(
        'button',
        `becoming__focus-item strategy-${domain.strategy}`
      );

      item.type = 'button';
      item.dataset.tree = id;

      item.innerHTML =
        `<span data-title-en="${domain.title}" data-title-fr="${domain.title_fr || domain.title}">${language === 'fr' ? (domain.title_fr || domain.title) : domain.title}</span>` +
        `<small>${label(domain.strategy)}</small>`;

      item.addEventListener(
        'click',
        () => selectTree(id)
      );

      focusTarget.append(item);
    });

  const maintenanceTarget =
    document.getElementById(
      'becoming-maintenance'
    );

  (data.current.maintenance || [])
    .forEach(id => {
      const domain =
        domains.get(id);

      if (
        !domain ||
        !maintenanceTarget
      ) {
        return;
      }

      const item = el(
        'button',
        'becoming__focus-item strategy-maintenance'
      );

      item.type = 'button';
      item.dataset.tree = id;

      item.innerHTML =
        `<span data-title-en="${domain.title}" data-title-fr="${domain.title_fr || domain.title}">${language === 'fr' ? (domain.title_fr || domain.title) : domain.title}</span>` +
        `<small>${label('maintenance')}</small>`;

      item.addEventListener(
        'click',
        () => selectTree(id)
      );

      maintenanceTarget.append(item);
    });

  const questTarget =
    document.getElementById(
      'becoming-quests'
    );

  const weekRail =
    document.getElementById(
      'week-rail'
    );

  const cycleWeeks =
    (data.weeks || [])
      .filter(week => week.cycle_week)
      .sort(
        (a, b) =>
          a.cycle_week -
          b.cycle_week
      );

  let selectedWeekIndex =
    Math.max(
      0,
      cycleWeeks.findIndex(
        week =>
          week.cycle_week ===
          data.current.cycle_week
      )
    );

  const renderSelectedWeek = () => {
    if (
      !cycleWeeks.length ||
      !questTarget
    ) {
      return;
    }

    const week =
      cycleWeeks[selectedWeekIndex];

    const isCurrent =
      week.cycle_week ===
      data.current.cycle_week;

    document
      .getElementById(
        'selected-week-label'
      )
      .textContent =
        `${language === 'fr' ? 'Semaine' : 'Week'} ` +
        `${String(week.cycle_week).padStart(2, '0')} · ` +
        `${week.start_date} — ${week.end_date}`;

    document
      .getElementById(
        'selected-week-title'
      )
      .textContent =
        language === 'fr'
          ? (
              week.title_fr ||
              week.title
            )
          : week.title;

    const rawQuests =
      isCurrent
        ? (
            data.current.quests ||
            []
          )
        : (
            week.quests ||
            []
          );

    const quests =
      isCurrent
        ? rawQuests
        : rawQuests;

    questTarget.replaceChildren();

    quests.forEach(
      (quest, index) => {
        const treeId =
          quest.tree ||
          quest.domain;

        const linkedNode =
          quest.node
            ? byId.get(quest.node)
            : null;

        const status =
          linkedNode?.computedStatus ||
          quest.status ||
          week.status ||
          'planned';

        const domain =
          domains.get(treeId);

        const domainTitle =
          language === 'fr'
            ? (
                domain?.title_fr ||
                domain?.title ||
                label(treeId)
              )
            : (
                domain?.title ||
                label(treeId)
              );

        const title =
          quest.title ||
          quest.task ||
          linkedNode?.title ||
          label(treeId);

        const titleFr =
          quest.title_fr ||
          quest.task_fr ||
          linkedNode?.title_fr ||
          title;

        const item = el(
          'article',
          `becoming__quest status-${status}`
        );

        const summary = el(
          'div',
          'becoming__quest-summary'
        );

        summary.innerHTML =
          `<span class="becoming__quest-rune" aria-hidden="true">${status === 'completed' ? '✓' : String(index + 1).padStart(2, '0')}</span>` +
          `<span>` +
          `<small>${domainTitle} · ${label(status)}</small>` +
          `<strong data-title-en="${title}" data-title-fr="${titleFr}">${language === 'fr' ? titleFr : title}</strong>` +
          `</span>`;

        item.append(summary);

        questTarget.append(item);
        observeMotion(item);
      }
    );

    weekRail
      ?.querySelectorAll('button')
      .forEach(
        (button, index) => {
          button.classList.toggle(
            'is-selected',
            index ===
              selectedWeekIndex
          );

          button.setAttribute(
            'aria-pressed',
            String(
              index ===
                selectedWeekIndex
            )
          );
        }
      );
  };

  cycleWeeks.forEach(
    (week, index) => {
      const button = el(
        'button',
        `status-${week.status || 'planned'}`
      );

      button.type = 'button';

      button.innerHTML =
        `<small>${String(week.cycle_week).padStart(2, '0')}</small>` +
        `<strong>${
          week.status === 'completed'
            ? '✓'
            : (
                week.cycle_week ===
                data.current.cycle_week
                  ? '◆'
                  : '○'
              )
        }</strong>`;

      button.setAttribute(
        'aria-label',
        `Week ${week.cycle_week}: ${week.title}`
      );

      button.addEventListener(
        'click',
        () => {
          selectedWeekIndex = index;

          renderSelectedWeek();

          button.scrollIntoView({
            behavior:
              reducedMotion
                ? 'auto'
                : 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      );

      weekRail?.append(button);
    }
  );

  document
    .getElementById(
      'previous-week'
    )
    ?.addEventListener(
      'click',
      () => {
        selectedWeekIndex =
          Math.max(
            0,
            selectedWeekIndex - 1
          );

        renderSelectedWeek();
      }
    );

  document
    .getElementById(
      'next-week'
    )
    ?.addEventListener(
      'click',
      () => {
        selectedWeekIndex =
          Math.min(
            cycleWeeks.length - 1,
            selectedWeekIndex + 1
          );

        renderSelectedWeek();
      }
    );

  renderSelectedWeek();

  const nextTarget =
    document.getElementById(
      'becoming-next'
    );

  const nextNodes =
    nodes
      .filter(
        node =>
          node.tree !== 'legendary' &&
          [
            'available',
            'in_progress'
          ].includes(
            node.computedStatus
          )
      )
      .slice(0, 7);

  if (nextTarget) {
    nextNodes.forEach(
      node =>
        nextTarget.append(
          nodeRow(node)
        )
    );

    if (!nextNodes.length) {
      empty(
        nextTarget,
        'No available milestone. Check prerequisite records.'
      );
    }
  }

  const legendaryTarget =
    document.getElementById(
      'becoming-legendary'
    );

  nodes
    .filter(
      node =>
        node.tree ===
          'legendary' &&
        !node.private
    )
    .forEach(node => {
      const completed =
        (node.requires || [])
          .filter(
            id =>
              byId.get(id)
                ?.computedStatus ===
              'completed'
          )
          .length;

      const total =
        (node.requires || []).length;

      const progress =
        total
          ? Math.round(
              (completed / total) *
                100
            )
          : 0;

      const card = el(
        'button',
        `becoming__legendary-card status-${node.computedStatus}`
      );

      card.type = 'button';

      const displayTitle =
        localizedTitle(node);

      const statusFr =
        translations[
          node.computedStatus
        ] ||
        label(
          node.computedStatus
        );

      card.innerHTML =
        `<span class="becoming__legendary-status">` +
        `<small data-title-en="${String(node.computedStatus).replace(/_/g, ' ')}" data-title-fr="${statusFr}">${label(node.computedStatus)}</small>` +
        `<b aria-hidden="true">${node.computedStatus === 'completed' ? '✓' : '○'}</b>` +
        `</span>` +
        `<strong data-title-en="${node.title}" data-title-fr="${node.title_fr || frenchTitles[node.title] || node.title}">${displayTitle}</strong>` +
        `<span data-title-en="${completed} / ${total} requirements completed" data-title-fr="${completed} / ${total} conditions accomplies">${completed} / ${total} ${language === 'fr' ? 'conditions accomplies' : 'requirements completed'}</span>` +
        `<i aria-hidden="true"><em style="width:${progress}%"></em></i>`;

      card.dataset.nodeId =
        node.id;

      card.addEventListener(
        'click',
        () => openDetail(node)
      );

      legendaryTarget?.append(
        card
      );

      observeMotion(card);
    });

  function nodeRow(node) {
    const button = el(
      'button',
      `becoming__node-row status-${node.computedStatus}`
    );

    button.type = 'button';

    const displayTitle =
      localizedTitle(node);

    button.innerHTML =
      `<span class="becoming__state-mark" aria-hidden="true"></span>` +
      `<span>` +
      `<strong>${displayTitle}</strong>` +
      `<small>${label(node.computedStatus)} · ${label(node.type)}</small>` +
      `</span>`;

    button.setAttribute(
      'aria-label',
      `${node.title}, ${label(node.computedStatus)}, ${label(node.type)}`
    );

    button.addEventListener(
      'click',
      () => openDetail(node)
    );

    return button;
  }

  const selector =
    document.getElementById(
      'tree-selector'
    );

  data.trees.forEach(domain => {
    const button = el(
      'button',
      '',
      language === 'fr'
        ? (
            domain.title_fr ||
            domain.title
          )
        : domain.title
    );

    button.type = 'button';
    button.dataset.tree = domain.id;
    button.dataset.titleEn =
      domain.title;
    button.dataset.titleFr =
      domain.title_fr ||
      domain.title;

    button.addEventListener(
      'click',
      () =>
        selectTree(domain.id)
    );

    selector?.append(button);
  });

  let selectedTree =
    new URL(location.href)
      .searchParams
      .get('tree') ||
    localStorage.getItem(
      'becoming.tree'
    ) ||
    'research';

  if (!domains.has(selectedTree)) {
    selectedTree = 'research';
  }

  function selectTree(
    treeId,
    updateHistory = true
  ) {
    selectedTree = treeId;

    localStorage.setItem(
      'becoming.tree',
      treeId
    );

    selector
      ?.querySelectorAll(
        'button'
      )
      .forEach(button => {
        const selected =
          button.dataset.tree ===
          treeId;

        button.classList.toggle(
          'is-selected',
          selected
        );

        button.setAttribute(
          'aria-pressed',
          String(selected)
        );
      });

    const domain =
      domains.get(treeId);

    if (!domain) return;

    document
      .getElementById(
        'tree-heading'
      )
      .textContent =
        language === 'fr'
          ? (
              domain.title_fr ||
              domain.title
            )
          : domain.title;

    document
      .getElementById(
        'tree-summary'
      )
      .textContent =
        `${label(domain.strategy)} · ${
          language === 'fr'
            ? (
                domain.description_fr ||
                domain.description ||
                ''
              )
            : (
                domain.description ||
                ''
              )
        }`;

    if (updateHistory) {
      const url =
        new URL(location.href);

      url.searchParams.set(
        'tree',
        treeId
      );

      url.searchParams.delete(
        'node'
      );

      history.pushState(
        {
          tree: treeId
        },
        '',
        url
      );
    }

    renderTree();
  }

  const search =
    document.getElementById(
      'node-search'
    );

  const statusFilter =
    document.getElementById(
      'status-filter'
    );

  const typeFilter =
    document.getElementById(
      'type-filter'
    );

  [
    search,
    statusFilter,
    typeFilter
  ]
    .filter(Boolean)
    .forEach(control => {
      control.addEventListener(
        'input',
        renderTree
      );
    });

  let showFullTree = true;

  const nodeGroup = node => {
    if (
      node.tree !==
      'actuarial'
    ) {
      return node.tree;
    }

    return (
      node.id ===
        'actuarial-fm' ||
      node.id.startsWith(
        'actuarial-fm-'
      )
    )
      ? 'fm'
      : 'cas';
  };

  const groupTitle = group => ({
    fm:
      language === 'fr'
        ? 'Préparation FM'
        : 'FM Preparation',

    cas:
      language === 'fr'
        ? 'Parcours CAS / ACAS'
        : 'CAS / ACAS Pathway'
  }[group] || '');

  function filteredNodes() {
    const query =
      search?.value
        ?.trim()
        ?.toLowerCase() ||
      '';

    return nodes
      .filter(
        node =>
          node.tree ===
          selectedTree
      )
      .filter(
        node =>
          !query ||
          [
            node.title,
            node.title_fr,
            node.description,
            node.description_fr,
            ...(node.tags || [])
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase()
            .includes(query)
      )
      .filter(
        node =>
          !statusFilter?.value ||
          node.computedStatus ===
            statusFilter.value
      )
      .filter(
        node =>
          !typeFilter?.value ||
          node.type ===
            typeFilter.value
      );
  }

  function renderTree() {
    const treeNodes =
      nodes.filter(
        node =>
          node.tree ===
          selectedTree
      );

    const types = [
      ...new Set(
        treeNodes.map(
          node => node.type
        )
      )
    ].sort();

    if (typeFilter) {
      const oldType =
        typeFilter.value;

      typeFilter.replaceChildren(
        new Option(
          'All',
          ''
        ),
        ...types.map(
          type =>
            new Option(
              label(type),
              type
            )
        )
      );

      typeFilter.value =
        types.includes(oldType)
          ? oldType
          : '';
    }

    const visible =
      filteredNodes();

    const list =
      document.getElementById(
        'node-list'
      );

    if (!list) return;

    const rows = [];
    let previousGroup = null;

    visible.forEach(node => {
      const group =
        nodeGroup(node);

      if (
        selectedTree ===
          'actuarial' &&
        group !==
          previousGroup
      ) {
        const heading = el(
          'li',
          'becoming__path-group'
        );

        heading.textContent =
          groupTitle(group);

        rows.push(heading);

        previousGroup = group;
      }

      const li = el('li');

      li.append(
        nodeRow(node)
      );

      rows.push(li);
    });

    list.replaceChildren(
      ...rows
    );

    rows.forEach(
      (row, index) => {
        row.style.setProperty(
          '--reveal-order',
          index
        );

        observeMotion(row);
      }
    );

    if (!visible.length) {
      const li = el('li');

      li.append(
        el(
          'p',
          'becoming__empty',
          'No milestone matches these filters.'
        )
      );

      list.append(li);
    }
  }

  const detail =
    document.getElementById(
      'node-detail'
    );

  const detailContent =
    document.getElementById(
      'detail-content'
    );

  const scrim =
    document.getElementById(
      'detail-scrim'
    );

  let priorFocus;

  function openDetail(node) {
    if (
      !node ||
      !detail ||
      !detailContent ||
      !scrim
    ) {
      return;
    }

    root
      .querySelectorAll(
        '.becoming__legendary-card'
      )
      .forEach(card => {
        card.classList.toggle(
          'is-active',
          card.dataset.nodeId ===
            node.id
        );
      });

    priorFocus =
      document.activeElement;

    const reqs =
      (node.requires || [])
        .map(id =>
          byId.get(id)
        )
        .filter(Boolean);

    const unlocks =
      (
        dependents.get(node.id) ||
        []
      )
        .map(id =>
          byId.get(id)
        )
        .filter(Boolean);

    detailContent.replaceChildren();

    const detailDomain =
      domains.get(node.tree);

    const detailDomainTitle =
      language === 'fr'
        ? (
            detailDomain?.title_fr ||
            detailDomain?.title ||
            'Légendaire'
          )
        : (
            detailDomain?.title ||
            'Legendary'
          );

    const eyebrow = el(
      'p',
      'becoming__label',
      `${detailDomainTitle} · ${label(node.type)}`
    );

    const title = el(
      'h2',
      '',
      localizedTitle(node)
    );

    title.id = 'detail-title';

    detailContent.append(
      eyebrow,
      title,
      el(
        'p',
        `becoming__status status-${node.computedStatus}`,
        label(
          node.computedStatus
        )
      )
    );

    const description =
      language === 'fr'
        ? (
            node.description_fr ||
            node.description
          )
        : node.description;

    const why =
      language === 'fr'
        ? (
            node.why_fr ||
            node.why
          )
        : node.why;

    if (description) {
      detailContent.append(
        el(
          'p',
          'becoming__detail-description',
          description
        )
      );
    }

    appendSection(
      language === 'fr'
        ? 'Pourquoi'
        : 'Why it matters',
      why ? [why] : []
    );

    appendNodes(
      language === 'fr'
        ? 'Prérequis'
        : 'Requires',
      reqs
    );

    appendSection(
      language === 'fr'
        ? 'Conditions'
        : 'Unlock requirements',
      node.unlock_requirements ||
        []
    );

    if (node.progress) {
      appendSection(
        language === 'fr'
          ? 'Progression'
          : 'Progress',
        [
          `${node.progress.current} / ${node.progress.target} ${node.progress.unit || ''}`
        ]
      );
    }

    appendSection(
      language === 'fr'
        ? 'Prochaines actions'
        : 'Next actions',
      node.next_actions || []
    );

    appendLinks(
      language === 'fr'
        ? 'Ressources'
        : 'Resources',
      node.resources || []
    );

    appendNodes(
      language === 'fr'
        ? 'Débloque'
        : 'Unlocks',
      unlocks
    );

    if (
      node.target_date ||
      node.completed_at
    ) {
      appendSection(
        'Dates',
        [
          `${
            node.target_date
              ? `${language === 'fr' ? 'Cible' : 'Target'} : ${node.target_date}`
              : ''
          }${
            node.target_date &&
            node.completed_at
              ? ' · '
              : ''
          }${
            node.completed_at
              ? `${language === 'fr' ? 'Terminé' : 'Completed'} : ${node.completed_at}`
              : ''
          }`
        ]
      );
    }

    const notes =
      language === 'fr'
        ? (
            node.notes_fr ||
            node.notes
          )
        : node.notes;

    if (notes) {
      appendSection(
        'Notes',
        [notes]
      );
    }

    detail.classList.add(
      'is-open'
    );

    detail.setAttribute(
      'aria-hidden',
      'false'
    );

    scrim.hidden = false;

    document.body.classList.add(
      'becoming-detail-open'
    );

    document
      .getElementById(
        'detail-close'
      )
      ?.focus();

    const url =
      new URL(location.href);

    url.searchParams.set(
      'node',
      node.id
    );

    history.replaceState(
      {},
      '',
      url
    );

    function section(titleText) {
      const sectionNode =
        el('section');

      sectionNode.append(
        el(
          'h3',
          '',
          titleText
        )
      );

      detailContent.append(
        sectionNode
      );

      return sectionNode;
    }

    function appendSection(
      titleText,
      items
    ) {
      if (!items.length) return;

      const target =
        section(titleText);

      const list =
        el('ul');

      items.forEach(item => {
        list.append(
          el(
            'li',
            '',
            item
          )
        );
      });

      target.append(list);
    }

    function appendNodes(
      titleText,
      items
    ) {
      if (!items.length) return;

      const target =
        section(titleText);

      items.forEach(item => {
        target.append(
          nodeRow(item)
        );
      });
    }

    function appendLinks(
      titleText,
      items
    ) {
      if (!items.length) return;

      const target =
        section(titleText);

      const list =
        el('ul');

      items.forEach(item => {
        const li =
          el('li');

        const link = el(
          item.url
            ? 'a'
            : 'span',
          '',
          item.title
        );

        if (item.url) {
          link.href =
            safeUrl(item.url);
        }

        li.append(link);

        if (item.type) {
          li.append(
            el(
              'small',
              '',
              ` · ${label(item.type)}`
            )
          );
        }

        list.append(li);
      });

      target.append(list);
    }
  }

  function closeDetail() {
    if (
      !detail ||
      !scrim
    ) {
      return;
    }

    detail.classList.remove(
      'is-open'
    );

    detail.setAttribute(
      'aria-hidden',
      'true'
    );

    scrim.hidden = true;

    root
      .querySelectorAll(
        '.becoming__legendary-card.is-active'
      )
      .forEach(card => {
        card.classList.remove(
          'is-active'
        );
      });

    document.body.classList.remove(
      'becoming-detail-open'
    );

    const url =
      new URL(location.href);

    url.searchParams.delete(
      'node'
    );

    history.replaceState(
      {},
      '',
      url
    );

    priorFocus?.focus();
  }

  document
    .getElementById(
      'detail-close'
    )
    ?.addEventListener(
      'click',
      closeDetail
    );

  scrim?.addEventListener(
    'click',
    closeDetail
  );

  document.addEventListener(
    'keydown',
    event => {
      if (
        event.key === 'Escape' &&
        detail?.classList.contains(
          'is-open'
        )
      ) {
        closeDetail();
      }
    }
  );

  addEventListener(
    'popstate',
    () => {
      const params =
        new URL(
          location.href
        ).searchParams;

      const tree =
        params.get('tree');

      if (
        tree &&
        domains.has(tree)
      ) {
        selectTree(
          tree,
          false
        );
      }

      const node =
        params.get('node');

      if (
        node &&
        byId.has(node)
      ) {
        openDetail(
          byId.get(node)
        );
      }
    }
  );

  const params =
    new URL(
      location.href
    ).searchParams;

  selectTree(
    selectedTree,
    false
  );

  if (
    params.get('node') &&
    byId.has(
      params.get('node')
    )
  ) {
    openDetail(
      byId.get(
        params.get('node')
      )
    );
  }
})();
