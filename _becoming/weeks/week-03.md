---
title: Continuous Random Variables · Building an Insurance GLM
title_fr: Variables aléatoires continues · Construction d'un GLM d'assurance

cycle: foundations-01
cycle_week: 3

start_date: 2026-10-05
end_date: 2026-10-11

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-workflow
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-theorem-proving
  - writing-literary-note

user_inputs:
  literary_book: Le Rouge et le Noir
  finance_book: The Intelligent Investor

quests:

  - domain: actuarial
    node: actuarial-exam-1
    task: >
      Build a strong foundation in continuous random variables,
      densities, distribution functions, expectation, variance,
      and the major continuous distributions used on Exam P.
    task_fr: >
      Construire une base solide sur les variables aléatoires
      continues, les densités, les fonctions de répartition,
      l'espérance, la variance et les principales distributions
      continues de l'examen P.

    completion:
      - Understand probability density functions
      - Understand cumulative distribution functions
      - Move fluently between PDFs and CDFs
      - Compute expectations and variances
      - Review uniform distributions
      - Review exponential distributions
      - Review normal distributions
      - Complete one timed continuous-probability set
      - Rework recurring errors

    completion_fr:
      - Comprendre les fonctions de densité
      - Comprendre les fonctions de répartition
      - Passer avec aisance des densités aux fonctions de répartition
      - Calculer espérances et variances
      - Revoir les distributions uniformes
      - Revoir les distributions exponentielles
      - Revoir les distributions normales
      - Compléter une série chronométrée de probabilité continue
      - Refaire les erreurs récurrentes

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: >
      Keep FM warm with two short sessions focused on previously
      studied interest concepts.
    task_fr: >
      Maintenir FM actif avec deux courtes séances centrées sur
      les concepts d'intérêt déjà étudiés.

    completion:
      - Complete two short FM sessions
      - Review rate conversions
      - Review present and accumulated values
      - Update the FM error log if necessary

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir les conversions de taux
      - Revoir les valeurs actuelles et accumulées
      - Mettre à jour le journal d'erreurs FM si nécessaire

  - domain: research
    node: research-actuarial-glm-workflow
    task: >
      Read Goldburd pages 31–42 and design the workflow for a
      future public-data insurance GLM reproduction.
    task_fr: >
      Lire les pages 31 à 42 de Goldburd et concevoir le processus
      d'une future reproduction GLM sur données publiques.

    completion:
      - Understand the model-building process
      - Understand data preparation
      - Understand train-validation-test splitting
      - Write a modeling objective
      - Sketch the future reproduction workflow
      - Identify the outputs the reproduction should produce

    completion_fr:
      - Comprendre le processus de construction du modèle
      - Comprendre la préparation des données
      - Comprendre la séparation entraînement-validation-test
      - Écrire un objectif de modélisation
      - Esquisser le processus de la future reproduction
      - Identifier les résultats que la reproduction devra produire

  - domain: writing
    node: writing-literary-note
    task: >
      Revisit Le Rouge et le Noir and write 300–500 original words
      about one feature of a passage already read; finish reading
      first if needed.
    task_fr: >
      Revenir sur Le Rouge et le Noir et écrire 300 à 500 mots
      originaux sur un aspect d’un passage déjà lu ; terminer
      d’abord la lecture si nécessaire.

    completion:
      - Continue the week's literary reading
      - Select one stylistic or thematic feature
      - Write 300–500 original words
      - Avoid producing only a plot summary

    completion_fr:
      - Poursuivre la lecture littéraire de la semaine
      - Sélectionner un aspect stylistique ou thématique
      - Écrire 300 à 500 mots originaux
      - Éviter de produire seulement un résumé de l'intrigue

  - domain: lean
    node: lean-theorem-proving
    task: >
      Study propositions and proofs and add one small logical
      proof to your Lean work.
    task_fr: >
      Étudier les propositions et les preuves et ajouter une
      petite preuve logique au travail Lean.

  - domain: english
    node: english-conversation-practice
    task: >
      Practice everyday situations and spontaneous follow-up
      questions during one English conversation.
    task_fr: >
      Travailler des situations quotidiennes et des questions
      spontanées pendant une conversation en anglais.

  - domain: physical
    node: physical-training-consistency
    task: Complete another consistent week of the current physical protocol.
    task_fr: Compléter une nouvelle semaine régulière du protocole physique actuel.

    completion:
      - Morning routine followed consistently
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed consistently
      - Recovery problems recorded if they appear

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Problèmes de récupération notés s'ils apparaissent

  - domain: writing
    node: writing-reading-practice
    task: >
      Read portions 15–21 of 31 equal page portions of The
      Intelligent Investor. Start September 21 and finish
      October 21, including the commentary and appendices
      you intend to read. Divide the chosen page range into
      31; take brief notes within the reading session.
    task_fr: >
      Lire les portions 15 à 21 sur 31 portions égales de
      L’Investisseur intelligent. Commencer le 21 septembre
      et terminer le 21 octobre, commentaires et annexes
      à lire compris. Diviser la plage de pages choisie
      par 31 ; intégrer les notes brèves à la lecture.

days:

  - date: 2026-10-05
    weekday: monday
    title: Actuarial focus · Monday
    title_fr: Priorité actuarielle · Lundi

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: >
          Exam P - introduce continuous random variables,
          PDFs, CDFs, expectation, and variance.
        text_fr: >
          Examen P - introduire les variables aléatoires
          continues, densités, fonctions de répartition,
          espérance et variance.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 30–45 min
        text: >
          Read Goldburd pages 31–34 and identify the main
          stages of model building.
        text_fr: >
          Lire les pages 31 à 34 de Goldburd et identifier
          les principales étapes de construction d'un modèle.

      - domain: writing
        node: writing-literary-note
        time: 30 min
        text: >
          Revisit a passage already read in Le Rouge et le Noir,
          or continue if unfinished.
        text_fr: >
          Revenir sur un passage déjà lu du Rouge et le Noir,
          ou poursuivre si le livre n’est pas terminé.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 15/31 of The Intelligent Investor;
          cumulative target 15/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 15/31 de L’Investisseur intelligent ;
          cible cumulée 15/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-10-06
    weekday: tuesday
    title: Actuarial focus · Tuesday
    title_fr: Priorité actuarielle · Mardi

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: >
          Exam P - study uniform and exponential distributions
          and complete 20–25 focused problems.
        text_fr: >
          Examen P - étudier les distributions uniforme et
          exponentielle et compléter 20 à 25 exercices ciblés.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 30–45 min
        text: Read Goldburd pages 35–38 and take notes on data preparation.
        text_fr: Lire les pages 35 à 38 de Goldburd et prendre des notes sur la préparation des données.

      - domain: writing
        node: writing-literary-note
        time: 25–30 min
        text: Continue Le Rouge et le Noir and mark one passage worth analyzing.
        text_fr: Poursuivre Le Rouge et le Noir et repérer un passage qui mérite d'être analysé.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 16/31 of The Intelligent Investor;
          cumulative target 16/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 16/31 de L’Investisseur intelligent ;
          cible cumulée 16/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-10-07
    weekday: wednesday
    title: Actuarial focus · Wednesday
    title_fr: Priorité actuarielle · Mercredi

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: >
          Exam P - study the normal distribution,
          standardization, probabilities, and related problems.
        text_fr: >
          Examen P - étudier la loi normale, la standardisation,
          les probabilités et les problèmes associés.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - review rate conversions and present-value relationships.
        text_fr: Entretien FM - revoir les conversions de taux et les relations de valeur actuelle.

      - domain: writing
        node: writing-literary-note
        time: 25–30 min
        text: Continue literary reading.
        text_fr: Poursuivre la lecture littéraire.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 17/31 of The Intelligent Investor;
          cumulative target 17/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 17/31 de L’Investisseur intelligent ;
          cible cumulée 17/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-10-08
    weekday: thursday
    title: Actuarial focus · Thursday
    title_fr: Priorité actuarielle · Jeudi

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: >
          Exam P - mixed problems requiring movement between
          PDFs, CDFs, probabilities, expectation, and variance.
        text_fr: >
          Examen P - problèmes mixtes demandant de passer entre
          densités, fonctions de répartition, probabilités,
          espérance et variance.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 45–60 min
        text: >
          Read Goldburd pages 39–42 and sketch the complete
          GLM reproduction workflow.
        text_fr: >
          Lire les pages 39 à 42 de Goldburd et esquisser
          le processus complet de reproduction GLM.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Study propositions and simple proof structure in Lean.
        text_fr: Étudier les propositions et la structure de preuves simples dans Lean.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 18/31 of The Intelligent Investor;
          cumulative target 18/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 18/31 de L’Investisseur intelligent ;
          cible cumulée 18/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-10-09
    weekday: friday
    title: Actuarial focus · Friday
    title_fr: Priorité actuarielle · Vendredi

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: >
          Exam P - solve difficult continuous-distribution
          problems and rework recurring errors.
        text_fr: >
          Examen P - résoudre des problèmes difficiles
          de distributions continues et refaire les erreurs
          récurrentes.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 45 min
        text: >
          Write the modeling objective and define the expected
          outputs of the future reproduction.
        text_fr: >
          Rédiger l'objectif de modélisation et définir
          les résultats attendus de la future reproduction.

      - domain: writing
        node: writing-literary-note
        time: 45 min
        text: Draft 300–500 original words about one feature of Le Rouge et le Noir.
        text_fr: Rédiger 300 à 500 mots originaux sur un aspect de Le Rouge et le Noir.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 19/31 of The Intelligent Investor;
          cumulative target 19/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 19/31 de L’Investisseur intelligent ;
          cible cumulée 19/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-10-10
    weekday: saturday
    title: Actuarial focus · Saturday
    title_fr: Priorité actuarielle · Samedi

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: >
          Complete one timed Exam P set focused on continuous
          random variables and fully review every error.
        text_fr: >
          Compléter une série P chronométrée centrée sur les
          variables aléatoires continues et revoir entièrement
          chaque erreur.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - complete one short mixed set.
        text_fr: Entretien FM - compléter une courte série mixte.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: >
          Complete one general English conversation with
          spontaneous follow-up questions.
        text_fr: >
          Compléter une conversation générale en anglais
          avec des questions spontanées.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 20/31 of The Intelligent Investor;
          cumulative target 20/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 20/31 de L’Investisseur intelligent ;
          cible cumulée 20/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-10-11
    weekday: sunday
    title: Actuarial focus · Sunday
    title_fr: Priorité actuarielle · Dimanche

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: >
          Exam P - complete a cumulative set combining general
          probability, discrete random variables, and continuous
          random variables.
        text_fr: >
          Examen P - compléter une série cumulative combinant
          probabilité générale, variables aléatoires discrètes
          et variables aléatoires continues.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 45–60 min
        text: Finalize the future public-data GLM reproduction workflow.
        text_fr: Finaliser le processus de la future reproduction GLM sur données publiques.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Add one small logical proof that you understand completely.
        text_fr: Ajouter une petite preuve logique entièrement comprise.

      - domain: writing
        node: writing-literary-note
        time: 30 min
        text: Revise the 300–500 word literary note.
        text_fr: Réviser la note littéraire de 300 à 500 mots.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 04.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 04.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 21/31 of The Intelligent Investor;
          cumulative target 21/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 21/31 de L’Investisseur intelligent ;
          cible cumulée 21/31 de la plage de pages choisie.
          Garder les notes brèves.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
