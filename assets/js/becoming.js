(() => {
  'use strict';

  const root = document.getElementById('becoming-app');
  const dataNode = document.getElementById('becoming-data');

  if (!root || !dataNode) return;

  const data = JSON.parse(dataNode.textContent);

  root.classList.add('is-enhanced');

  const baseurl = root.dataset.baseurl || '';

  const domains = new Map(
    (data.trees || []).map(tree => [tree.id, tree])
  );

  const allNodes = [];

  Object.entries(data.treeData || {}).forEach(([treeId, treeData]) => {
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
    ((data.private || {}).nodes || []).map(node => [
      node.id,
      node
    ])
  );

  const nodes = allNodes.map(node => ({
    ...node,
    ...(privateNodes.get(node.id) || {})
  }));

  const byId = new Map(
    nodes.map(node => [node.id, node])
  );

  const dependents = new Map(
    nodes.map(node => [node.id, []])
  );

  nodes.forEach(node => {
    (node.requires || []).forEach(requiredId => {
      dependents.get(requiredId)?.push(node.id);
    });
  });

  const explicitState = node =>
    node.status || null;

  const stateOf = (node, trail = new Set()) => {
    const explicit = explicitState(node);

    if (
      [
        'completed',
        'in_progress',
        'maintenance',
        'paused',
        'dormant',
        'awaiting_result'
      ].includes(explicit)
    ) {
      return explicit;
    }

    if (trail.has(node.id)) {
      return 'locked';
    }

    const requirements =
      node.requires || [];

    if (!requirements.length) {
      return explicit === 'locked'
        ? 'locked'
        : 'available';
    }

    const nextTrail =
      new Set(trail);

    nextTrail.add(node.id);

    return requirements.every(requiredId => {
      const requiredNode =
        byId.get(requiredId);

      return (
        requiredNode &&
        stateOf(
          requiredNode,
          nextTrail
        ) === 'completed'
      );
    })
      ? 'available'
      : 'locked';
  };

  nodes.forEach(node => {
    node.computedStatus =
      stateOf(node);
  });

  let language =
    localStorage.getItem(
      'becoming.language'
    ) || 'fr';

  const translations = {
    active: 'Actif',
    maintenance: 'Maintenance',
    dormant: 'En sommeil',
    locked: 'Verrouillé',
    available: 'Disponible',
    in_progress: 'En cours',
    awaiting_result: 'En attente',
    completed: 'Accompli',
    paused: 'En pause',
    planned: 'Prévu',

    read: 'Lire',
    reading: 'Lecture',
    reproduce: 'Reproduire',
    solve: 'Résoudre',
    project: 'Projet',
    exam: 'Examen',
    practice: 'Pratique',
    skill: 'Compétence',
    foundation: 'Fondation',
    mastery: 'Maîtrise',
    credential: 'Titre',
    legendary: 'Légendaire',
    process: 'Processus',
    milestone: 'Étape'
  };

  const label = value => {
    if (
      language === 'fr' &&
      translations[value]
    ) {
      return translations[value];
    }

    return String(value || '')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, character =>
        character.toUpperCase()
      );
  };

  const localizedTitle = node =>
    language === 'fr'
      ? (
          node.title_fr ||
          node.title
        )
      : node.title;

  const localizedDescription = node =>
    language === 'fr'
      ? (
          node.description_fr ||
          node.description ||
          ''
        )
      : (
          node.description ||
          ''
        );

  const copy = {
    fr: {
      eyebrow: 'Progression personnelle',
      subtitle: 'Une carte de ce que j’apprends, construis et deviens.',
      principle: 'Une vision à long terme, traduite en objectifs concrets chaque semaine.',
      this_week: 'Cette semaine',
      weekly_program: 'Programme concret',
      weekly_objectives: 'Objectifs de la semaine',
      weekly_help: 'Un rappel simple de ce qui compte cette semaine.',
      whole_path: 'Toute la progression',
      current_cycle: 'Période actuelle',
      close: 'Fermer',
      long_term_vision: 'Vision à long terme',
      legendary_goals: 'Objectifs légendaires',
      legendary_help: 'Les grandes destinations. Leur progression dépend automatiquement des étapes accomplies dans les domaines ci-dessous.',
      domain_path: 'Parcours par domaine',
      progress_path: 'Chemin de progression',
      progress_help: "Tous les objectifs du domaine sont présentés dans leur ordre logique. Sélectionne une étape pour voir ses conditions et ce qu'elle débloque."
    },

    en: {
      eyebrow: 'Personal progression',
      subtitle: "A map of what I'm learning, building, and becoming.",
      principle: 'A long-term vision translated into concrete weekly objectives.',
      this_week: 'This week',
      weekly_program: 'Concrete program',
      weekly_objectives: 'Objectives for the week',
      weekly_help: 'A simple reminder of what matters this week.',
      whole_path: 'The complete progression',
      current_cycle: 'Current period',
      close: 'Close',
      long_term_vision: 'Long-term vision',
      legendary_goals: 'Legendary objectives',
      legendary_help: 'The major destinations. Their progress follows automatically from the completed steps below.',
      domain_path: 'Path by domain',
      progress_path: 'Progression path',
      progress_help: 'Every goal in the domain is shown in logical order. Select a step to see its requirements and unlocks.'
    }
  };

  const element = (
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

  const safeUrl = url => {
    if (!url) return '';

    if (
      /^(https?:|mailto:)/.test(url)
    ) {
      return url;
    }

    return `${baseurl}${url}`;
  };

  const reducedMotion =
    window.matchMedia(
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
            threshold: 0.1
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

  // ============================================================
  // WEEKS
  // ============================================================

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
      .filter(
        week =>
          week.cycle_week &&
          week.start_date &&
          week.end_date
      )
      .sort(
        (a, b) =>
          String(a.start_date)
            .localeCompare(
              String(b.start_date)
            )
      );

  const localIsoDate = () => {
    const now = new Date();

    const year =
      now.getFullYear();

    const month =
      String(
        now.getMonth() + 1
      ).padStart(2, '0');

    const day =
      String(
        now.getDate()
      ).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const today =
    localIsoDate();

  let currentWeekIndex =
    cycleWeeks.findIndex(
      week =>
        today >=
          String(week.start_date) &&
        today <=
          String(week.end_date)
    );

  if (
    currentWeekIndex < 0 &&
    cycleWeeks.length
  ) {
    const nextFutureWeek =
      cycleWeeks.findIndex(
        week =>
          today <
          String(week.start_date)
      );

    currentWeekIndex =
      nextFutureWeek >= 0
        ? nextFutureWeek
        : cycleWeeks.length - 1;
  }

  let selectedWeekIndex =
    Math.max(
      0,
      currentWeekIndex
    );

  const currentWeek =
    cycleWeeks[
      currentWeekIndex
    ] ||
    cycleWeeks[0] ||
    null;

  const cycleFor = cycleId =>
    (
      data.cycles?.cycles ||
      []
    ).find(
      cycle =>
        cycle.id === cycleId
    );

  const formatWeekRange = week => {
    if (!week) return '';

    const start =
      new Date(
        `${week.start_date}T12:00:00`
      );

    const end =
      new Date(
        `${week.end_date}T12:00:00`
      );

    if (language === 'fr') {
      const startFormatter =
        new Intl.DateTimeFormat(
          'fr-CA',
          {
            day: 'numeric',
            month: 'long'
          }
        );

      const endFormatter =
        new Intl.DateTimeFormat(
          'fr-CA',
          {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }
        );

      return (
        `${startFormatter.format(start)} – ` +
        `${endFormatter.format(end)}`
      );
    }

    const startFormatter =
      new Intl.DateTimeFormat(
        'en-US',
        {
          month: 'short',
          day: 'numeric'
        }
      );

    const endFormatter =
      new Intl.DateTimeFormat(
        'en-US',
        {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }
      );

    return (
      `${startFormatter.format(start)} – ` +
      `${endFormatter.format(end)}`
    );
  };

  const renderCurrentWeekHeader = () => {
    if (!currentWeek) return;

    const cycle =
      cycleFor(
        currentWeek.cycle
      );

    const cycleTitle =
      language === 'fr'
        ? (
            cycle?.title_fr ||
            cycle?.title ||
            ''
          )
        : (
            cycle?.title ||
            ''
          );

    const cycleTitleNode =
      document.getElementById(
        'current-cycle-title'
      );

    const weekPositionNode =
      document.getElementById(
        'current-week-position'
      );

    const weekRangeNode =
      document.getElementById(
        'current-week-range'
      );

    if (cycleTitleNode) {
      cycleTitleNode.textContent =
        cycleTitle;
    }

    if (weekPositionNode) {
      weekPositionNode.textContent =
        language === 'fr'
          ? `Semaine ${currentWeek.cycle_week} sur ${cycleWeeks.length}`
          : `Week ${currentWeek.cycle_week} of ${cycleWeeks.length}`;
    }

    if (weekRangeNode) {
      weekRangeNode.textContent =
        formatWeekRange(
          currentWeek
        );
    }
  };

  const questStatus = quest => {
    const linkedNode =
      quest.node
        ? byId.get(quest.node)
        : null;

    if (linkedNode) {
      return linkedNode.computedStatus;
    }

    return quest.status || 'planned';
  };

  const questDomain = quest => {
    if (quest.domain) {
      return quest.domain;
    }

    if (quest.tree) {
      return quest.tree;
    }

    const linkedNode =
      quest.node
        ? byId.get(quest.node)
        : null;

    return linkedNode?.tree || '';
  };

  const questTitle = quest => {
    if (language === 'fr') {
      return (
        quest.task_fr ||
        quest.title_fr ||
        quest.task ||
        quest.title ||
        localizedTitle(
          byId.get(quest.node) || {}
        )
      );
    }

    return (
      quest.task ||
      quest.title ||
      quest.task_fr ||
      quest.title_fr ||
      byId.get(quest.node)?.title ||
      ''
    );
  };

  const renderSelectedWeek = () => {
    if (
      !questTarget ||
      !cycleWeeks.length
    ) {
      return;
    }

    const week =
      cycleWeeks[
        selectedWeekIndex
      ];

    if (!week) return;

    const weekLabel =
      document.getElementById(
        'selected-week-label'
      );

    const weekTitle =
      document.getElementById(
        'selected-week-title'
      );

    if (weekLabel) {
      weekLabel.textContent =
        `${
          language === 'fr'
            ? 'Semaine'
            : 'Week'
        } ${String(
          week.cycle_week
        ).padStart(2, '0')} · ${
          formatWeekRange(week)
        }`;
    }

    if (weekTitle) {
      weekTitle.textContent =
        language === 'fr'
          ? (
              week.title_fr ||
              week.title
            )
          : week.title;
    }

    questTarget.replaceChildren();

    const quests =
      week.quests || [];

    quests.forEach(
      (quest, index) => {
        const domainId =
          questDomain(quest);

        const domain =
          domains.get(domainId);

        const domainTitle =
          language === 'fr'
            ? (
                domain?.title_fr ||
                domain?.title ||
                label(domainId)
              )
            : (
                domain?.title ||
                label(domainId)
              );

        const status =
          questStatus(quest);

        const card = element(
          'article',
          `becoming__quest status-${status}`
        );

        const summary = element(
          'div',
          'becoming__quest-summary'
        );

        const title =
          questTitle(quest);

        summary.innerHTML = `
          <span
            class="becoming__quest-rune"
            aria-hidden="true"
          >
            ${
              status === 'completed'
                ? '✓'
                : String(
                    index + 1
                  ).padStart(2, '0')
            }
          </span>

          <span>
            <small>
              ${domainTitle} · ${label(status)}
            </small>

            <strong>
              ${title}
            </strong>
          </span>
        `;

        card.append(summary);

        questTarget.append(card);

        observeMotion(card);
      }
    );

    weekRail
      ?.querySelectorAll(
        'button'
      )
      .forEach(
        (button, index) => {
          const selected =
            index ===
            selectedWeekIndex;

          button.classList.toggle(
            'is-selected',
            selected
          );

          button.setAttribute(
            'aria-pressed',
            String(selected)
          );
        }
      );
  };

  cycleWeeks.forEach(
    (week, index) => {
      const button = element(
        'button',
        `status-${week.status || 'planned'}`
      );

      button.type = 'button';

      let symbol = '○';

      if (
        week.status ===
        'completed'
      ) {
        symbol = '✓';
      } else if (
        index ===
        currentWeekIndex
      ) {
        symbol = '◆';
      }

      button.innerHTML = `
        <small>
          ${String(
            week.cycle_week
          ).padStart(2, '0')}
        </small>

        <strong>
          ${symbol}
        </strong>
      `;

      button.setAttribute(
        'aria-label',
        `Week ${week.cycle_week}: ${week.title}`
      );

      button.addEventListener(
        'click',
        () => {
          selectedWeekIndex =
            index;

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

  // ============================================================
  // CURRENT DOMAINS
  // ============================================================

  const focusTarget =
    document.getElementById(
      'becoming-focus'
    );

  const maintenanceTarget =
    document.getElementById(
      'becoming-maintenance'
    );

  if (currentWeek) {
    const activeDomains = [
      ...new Set(
        (currentWeek.active || [])
          .map(nodeId =>
            byId.get(nodeId)?.tree
          )
          .filter(Boolean)
      )
    ];

    activeDomains.forEach(
      domainId => {
        const domain =
          domains.get(domainId);

        if (
          !domain ||
          !focusTarget
        ) {
          return;
        }

        const item = element(
          'button',
          'becoming__focus-item strategy-active'
        );

        item.type = 'button';
        item.textContent =
          language === 'fr'
            ? (
                domain.title_fr ||
                domain.title
              )
            : domain.title;

        item.addEventListener(
          'click',
          () =>
            selectTree(domainId)
        );

        focusTarget.append(item);
      }
    );

    const maintenanceDomains = [
      ...new Set(
        (
          currentWeek.maintenance ||
          []
        )
          .map(nodeId =>
            byId.get(nodeId)?.tree
          )
          .filter(Boolean)
      )
    ];

    maintenanceDomains.forEach(
      domainId => {
        const domain =
          domains.get(domainId);

        if (
          !domain ||
          !maintenanceTarget
        ) {
          return;
        }

        const item = element(
          'button',
          'becoming__focus-item strategy-maintenance'
        );

        item.type = 'button';
        item.textContent =
          language === 'fr'
            ? (
                domain.title_fr ||
                domain.title
              )
            : domain.title;

        item.addEventListener(
          'click',
          () =>
            selectTree(domainId)
        );

        maintenanceTarget.append(
          item
        );
      }
    );
  }

  // ============================================================
  // ROADMAP
  // ============================================================

  function nodeRow(node) {
    const button = element(
      'button',
      `becoming__node-row status-${node.computedStatus}`
    );

    button.type = 'button';

    button.innerHTML = `
      <span
        class="becoming__state-mark"
        aria-hidden="true"
      ></span>

      <span>
        <strong>
          ${localizedTitle(node)}
        </strong>

        <small>
          ${label(node.computedStatus)} · ${label(node.type)}
        </small>
      </span>
    `;

    button.addEventListener(
      'click',
      () =>
        openDetail(node)
    );

    return button;
  }

  const legendaryTarget =
    document.getElementById(
      'becoming-legendary'
    );

  nodes
    .filter(
      node =>
        node.tree ===
        'legendary'
    )
    .forEach(node => {
      const requirements =
        node.requires || [];

      const completed =
        requirements.filter(
          requiredId =>
            byId.get(requiredId)
              ?.computedStatus ===
            'completed'
        ).length;

      const total =
        requirements.length;

      const progress =
        total
          ? Math.round(
              completed /
                total *
                100
            )
          : (
              node.computedStatus ===
              'completed'
                ? 100
                : 0
            );

      const card = element(
        'button',
        `becoming__legendary-card status-${node.computedStatus}`
      );

      card.type = 'button';

      card.dataset.nodeId =
        node.id;

      card.innerHTML = `
        <span class="becoming__legendary-status">
          <small>
            ${label(node.computedStatus)}
          </small>

          <b aria-hidden="true">
            ${
              node.computedStatus ===
              'completed'
                ? '✓'
                : '○'
            }
          </b>
        </span>

        <strong>
          ${localizedTitle(node)}
        </strong>

        <span>
          ${
            language === 'fr'
              ? `${completed} / ${total} conditions accomplies`
              : `${completed} / ${total} requirements completed`
          }
        </span>

        <i aria-hidden="true">
          <em
            style="width:${progress}%"
          ></em>
        </i>
      `;

      card.addEventListener(
        'click',
        () =>
          openDetail(node)
      );

      legendaryTarget?.append(
        card
      );

      observeMotion(card);
    });

  const treeSelector =
    document.getElementById(
      'tree-selector'
    );

  let selectedTree =
    new URL(
      window.location.href
    ).searchParams.get(
      'tree'
    ) ||
    localStorage.getItem(
      'becoming.tree'
    ) ||
    'research';

  if (!domains.has(selectedTree)) {
    selectedTree = 'research';
  }

  (data.trees || []).forEach(
    domain => {
      const button = element(
        'button'
      );

      button.type = 'button';
      button.dataset.tree =
        domain.id;

      button.textContent =
        language === 'fr'
          ? (
              domain.title_fr ||
              domain.title
            )
          : domain.title;

      button.addEventListener(
        'click',
        () =>
          selectTree(domain.id)
      );

      treeSelector?.append(
        button
      );
    }
  );

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

  function selectTree(
    treeId,
    updateHistory = true
  ) {
    if (!domains.has(treeId)) {
      return;
    }

    selectedTree =
      treeId;

    localStorage.setItem(
      'becoming.tree',
      treeId
    );

    treeSelector
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

        const domain =
          domains.get(
            button.dataset.tree
          );

        button.textContent =
          language === 'fr'
            ? (
                domain?.title_fr ||
                domain?.title ||
                ''
              )
            : (
                domain?.title ||
                ''
              );
      });

    const domain =
      domains.get(treeId);

    const heading =
      document.getElementById(
        'tree-heading'
      );

    const summary =
      document.getElementById(
        'tree-summary'
      );

    if (heading) {
      heading.textContent =
        language === 'fr'
          ? (
              domain.title_fr ||
              domain.title
            )
          : domain.title;
    }

    if (summary) {
      const strategy =
        domain.strategy
          ? `${label(domain.strategy)} · `
          : '';

      const description =
        language === 'fr'
          ? (
              domain.description_fr ||
              domain.description ||
              ''
            )
          : (
              domain.description ||
              ''
            );

      summary.textContent =
        `${strategy}${description}`;
    }

    if (updateHistory) {
      const url =
        new URL(
          window.location.href
        );

      url.searchParams.set(
        'tree',
        treeId
      );

      url.searchParams.delete(
        'node'
      );

      history.replaceState(
        {},
        '',
        url
      );
    }

    renderTree();
  }

  function filteredTreeNodes() {
    const query =
      search?.value
        ?.trim()
        .toLowerCase() ||
      '';

    return nodes
      .filter(
        node =>
          node.tree ===
          selectedTree
      )
      .filter(node => {
        if (!query) return true;

        return [
          node.title,
          node.title_fr,
          node.description,
          node.description_fr,
          ...(node.tags || [])
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(query);
      })
      .filter(node => {
        if (
          !statusFilter?.value
        ) {
          return true;
        }

        return (
          node.computedStatus ===
          statusFilter.value
        );
      })
      .filter(node => {
        if (
          !typeFilter?.value
        ) {
          return true;
        }

        return (
          node.type ===
          typeFilter.value
        );
      });
  }

  function renderTree() {
    const allTreeNodes =
      nodes.filter(
        node =>
          node.tree ===
          selectedTree
      );

    if (typeFilter) {
      const currentValue =
        typeFilter.value;

      const types = [
        ...new Set(
          allTreeNodes.map(
            node => node.type
          )
        )
      ].sort();

      typeFilter.replaceChildren(
        new Option(
          language === 'fr'
            ? 'Tous'
            : 'All',
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
        types.includes(
          currentValue
        )
          ? currentValue
          : '';
    }

    const list =
      document.getElementById(
        'node-list'
      );

    if (!list) return;

    const visible =
      filteredTreeNodes();

    list.replaceChildren();

    let previousActuarialGroup =
      null;

    visible.forEach(
      (node, index) => {
        if (
          selectedTree ===
          'actuarial'
        ) {
          const group =
            (
              node.id ===
                'actuarial-fm' ||
              node.id.startsWith(
                'actuarial-fm-'
              )
            )
              ? 'fm'
              : 'cas';

          if (
            group !==
            previousActuarialGroup
          ) {
            const heading =
              element(
                'li',
                'becoming__path-group'
              );

            heading.textContent =
              group === 'fm'
                ? (
                    language === 'fr'
                      ? 'Préparation FM'
                      : 'FM Preparation'
                  )
                : (
                    language === 'fr'
                      ? 'Parcours CAS / ACAS'
                      : 'CAS / ACAS Pathway'
                  );

            list.append(
              heading
            );

            previousActuarialGroup =
              group;
          }
        }

        const item =
          element('li');

        item.style.setProperty(
          '--reveal-order',
          index
        );

        item.append(
          nodeRow(node)
        );

        list.append(item);

        observeMotion(item);
      }
    );

    if (!visible.length) {
      const item =
        element('li');

      item.append(
        element(
          'p',
          'becoming__empty',
          language === 'fr'
            ? 'Aucun objectif ne correspond à ces filtres.'
            : 'No milestone matches these filters.'
        )
      );

      list.append(item);
    }
  }

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

  // ============================================================
  // DETAILS
  // ============================================================

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

  let priorFocus = null;

  function openDetail(node) {
    if (
      !node ||
      !detail ||
      !detailContent ||
      !scrim
    ) {
      return;
    }

    priorFocus =
      document.activeElement;

    detailContent.replaceChildren();

    const domain =
      domains.get(node.tree);

    const domainTitle =
      node.tree === 'legendary'
        ? (
            language === 'fr'
              ? 'Légendaire'
              : 'Legendary'
          )
        : (
            language === 'fr'
              ? (
                  domain?.title_fr ||
                  domain?.title ||
                  ''
                )
              : (
                  domain?.title ||
                  ''
                )
          );

    const eyebrow =
      element(
        'p',
        'becoming__label',
        `${domainTitle} · ${label(node.type)}`
      );

    const title =
      element(
        'h2',
        '',
        localizedTitle(node)
      );

    title.id =
      'detail-title';

    detailContent.append(
      eyebrow,
      title,
      element(
        'p',
        `becoming__status status-${node.computedStatus}`,
        label(
          node.computedStatus
        )
      )
    );

    const description =
      localizedDescription(node);

    if (description) {
      detailContent.append(
        element(
          'p',
          'becoming__detail-description',
          description
        )
      );
    }

    const section = titleText => {
      const sectionNode =
        element('section');

      sectionNode.append(
        element(
          'h3',
          '',
          titleText
        )
      );

      detailContent.append(
        sectionNode
      );

      return sectionNode;
    };

    const appendTextList = (
      titleText,
      items
    ) => {
      if (!items?.length) {
        return;
      }

      const target =
        section(titleText);

      const list =
        element('ul');

      items.forEach(item => {
        list.append(
          element(
            'li',
            '',
            String(item)
          )
        );
      });

      target.append(list);
    };

    const appendNodes = (
      titleText,
      nodeItems
    ) => {
      if (!nodeItems.length) {
        return;
      }

      const target =
        section(titleText);

      nodeItems.forEach(
        linkedNode => {
          target.append(
            nodeRow(linkedNode)
          );
        }
      );
    };

    const appendLinks = (
      titleText,
      items
    ) => {
      if (!items?.length) {
        return;
      }

      const target =
        section(titleText);

      const list =
        element('ul');

      items.forEach(item => {
        const row =
          element('li');

        const link =
          element(
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

        row.append(link);

        if (item.type) {
          row.append(
            element(
              'small',
              '',
              ` · ${label(item.type)}`
            )
          );
        }

        list.append(row);
      });

      target.append(list);
    };

    const why =
      language === 'fr'
        ? (
            node.why_fr ||
            node.why
          )
        : node.why;

    if (why) {
      appendTextList(
        language === 'fr'
          ? 'Pourquoi'
          : 'Why it matters',
        [why]
      );
    }

    const requirements =
      (node.requires || [])
        .map(id => byId.get(id))
        .filter(Boolean);

    appendNodes(
      language === 'fr'
        ? 'Prérequis'
        : 'Requires',
      requirements
    );

    appendTextList(
      language === 'fr'
        ? 'Conditions'
        : 'Unlock requirements',
      node.unlock_requirements ||
        []
    );

    if (node.progress) {
      appendTextList(
        language === 'fr'
          ? 'Progression'
          : 'Progress',
        [
          `${node.progress.current} / ${node.progress.target} ${node.progress.unit || ''}`
        ]
      );
    }

    appendTextList(
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

    const unlocked =
      (
        dependents.get(node.id) ||
        []
      )
        .map(id =>
          byId.get(id)
        )
        .filter(Boolean);

    appendNodes(
      language === 'fr'
        ? 'Débloque'
        : 'Unlocks',
      unlocked
    );

    if (
      node.target_date ||
      node.completed_at
    ) {
      const dates = [];

      if (node.target_date) {
        dates.push(
          `${
            language === 'fr'
              ? 'Cible'
              : 'Target'
          } : ${node.target_date}`
        );
      }

      if (node.completed_at) {
        dates.push(
          `${
            language === 'fr'
              ? 'Terminé'
              : 'Completed'
          } : ${node.completed_at}`
        );
      }

      appendTextList(
        'Dates',
        dates
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
      appendTextList(
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

    scrim.hidden =
      false;

    document.body.classList.add(
      'becoming-detail-open'
    );

    document
      .getElementById(
        'detail-close'
      )
      ?.focus();

    const url =
      new URL(
        window.location.href
      );

    url.searchParams.set(
      'node',
      node.id
    );

    history.replaceState(
      {},
      '',
      url
    );
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

    scrim.hidden =
      true;

    document.body.classList.remove(
      'becoming-detail-open'
    );

    const url =
      new URL(
        window.location.href
      );

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

  // ============================================================
  // LANGUAGE
  // ============================================================

  const setLanguage = value => {
    language =
      value === 'en'
        ? 'en'
        : 'fr';

    localStorage.setItem(
      'becoming.language',
      language
    );

    root.lang =
      language;

    root
      .querySelectorAll(
        '[data-i18n]'
      )
      .forEach(node => {
        const value =
          copy[language][
            node.dataset.i18n
          ];

        if (value) {
          node.textContent =
            value;
        }
      });

    root
      .querySelectorAll(
        '[data-language]'
      )
      .forEach(button => {
        const selected =
          button.dataset.language ===
          language;

        button.classList.toggle(
          'is-selected',
          selected
        );

        button.setAttribute(
          'aria-pressed',
          String(selected)
        );
      });

    renderCurrentWeekHeader();
    renderSelectedWeek();
    selectTree(
      selectedTree,
      false
    );
  };

  root
    .querySelectorAll(
      '[data-language]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          setLanguage(
            button.dataset.language
          );
        }
      );
    });

  // ============================================================
  // INITIAL RENDER
  // ============================================================

  setLanguage(language);

  const params =
    new URL(
      window.location.href
    ).searchParams;

  const requestedNode =
    params.get('node');

  if (
    requestedNode &&
    byId.has(requestedNode)
  ) {
    openDetail(
      byId.get(
        requestedNode
      )
    );
  }

  window.addEventListener(
    'popstate',
    () => {
      const currentParams =
        new URL(
          window.location.href
        ).searchParams;

      const tree =
        currentParams.get(
          'tree'
        );

      if (
        tree &&
        domains.has(tree)
      ) {
        selectTree(
          tree,
          false
        );
      }

      const nodeId =
        currentParams.get(
          'node'
        );

      if (
        nodeId &&
        byId.has(nodeId)
      ) {
        openDetail(
          byId.get(nodeId)
        );
      }
    }
  );
})();
