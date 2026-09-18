---
title: P Diagnostic · Insurance GLM · Physical System
title_fr: Diagnostic P · GLM en assurance · Système physique

cycle: foundations-01
cycle_week: 1

start_date: 2026-09-21
end_date: 2026-09-27

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-tweedie
  - physical-process

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-fundamentals
  - writing-reading-practice

user_inputs:
  literary_book: Le Rouge et le Noir
  finance_book: The Intelligent Investor

quests:

  - domain: actuarial
    node: actuarial-exam-1
    task: Complete an Exam P diagnostic, review general probability, and begin a structured error log.
    task_fr: Compléter un diagnostic de l'examen P, revoir la probabilité générale et commencer un journal d'erreurs structuré.

    completion:
      - Complete one mixed Exam P diagnostic
      - Identify the three weakest probability areas
      - Create an error log
      - Review general probability
      - Review conditional probability
      - Review independence
      - Complete cumulative practice

    completion_fr:
      - Compléter un diagnostic mixte de l'examen P
      - Identifier les trois principales faiblesses en probabilité
      - Créer un journal d'erreurs
      - Revoir la probabilité générale
      - Revoir la probabilité conditionnelle
      - Revoir l'indépendance
      - Compléter une pratique cumulative

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short practice sessions.
    task_fr: Maintenir FM actif avec deux courtes séances de pratique.

    completion:
      - Complete two short FM sessions
      - Review interest-theory fundamentals
      - Record any recurring FM errors

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir les bases de la théorie de l'intérêt
      - Noter les erreurs FM récurrentes

  - domain: research
    node: research-actuarial-glm-tweedie
    task: Read Goldburd pages 1–15 and write one page explaining the structure of an insurance GLM.
    task_fr: Lire les pages 1 à 15 de Goldburd et rédiger une page expliquant la structure d'un GLM d'assurance.

    completion:
      - Read Chapter 1 and Sections 2.1–2.4
      - Explain the random component
      - Explain the systematic component
      - Explain the link function
      - Understand continuous and categorical predictors
      - Write three technical questions
      - Produce one page of original notes

    completion_fr:
      - Lire le chapitre 1 et les sections 2.1 à 2.4
      - Expliquer la composante aléatoire
      - Expliquer la composante systématique
      - Expliquer la fonction de lien
      - Comprendre les variables continues et catégorielles
      - Écrire trois questions techniques
      - Produire une page de notes originales

  - domain: research
    task: Complete two focused sessions of the FUN MOOC Machine Learning in Python with scikit-learn.
    task_fr: Compléter deux séances ciblées du FUN MOOC Machine Learning in Python with scikit-learn.

  - domain: lean
    node: lean-fundamentals
    task: Set up Lean 4, review basic expressions and types, and add one small understood theorem.
    task_fr: Installer Lean 4, revoir les expressions et types de base et ajouter un petit théorème compris.

  - domain: english
    node: english-conversation-practice
    task: Complete one 60-minute general English conversation.
    task_fr: Compléter une conversation générale de 60 minutes en anglais.

  - domain: physical
    node: physical-process
    task: Establish and follow the current physical protocol throughout the week.
    task_fr: Mettre en place et suivre le protocole physique actuel pendant toute la semaine.

    completion:
      - Morning routine used consistently
      - Strength-training schedule followed
      - Daily movement target pursued
      - Evening routine used consistently
      - Weekly physical process reviewed

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Processus physique de la semaine revu

  - domain: writing
    node: writing-reading-practice
    task: >
      Read Le Rouge et le Noir from September 21 to September 27:
      one seventh of the novel each day.
    task_fr: >
      Lire Le Rouge et le Noir du 21 au 27 septembre :
      un septième du roman par jour..

  - domain: writing
    node: writing-reading-practice
    task: >
      Read portions 1–7 of 31 equal page portions of The Intelligent
      Investor. Start September 21 and finish October 21, including
      the commentary and appendices you intend to read.
    task_fr: >
      Lire les portions 1 à 7 sur 31 portions égales de
      L’Investisseur intelligent. Commencer le 21 septembre et
      terminer le 21 octobre, commentaires et annexes à lire compris.

days:

  - date: 2026-09-21
    weekday: monday
    title: Establish the baseline
    title_fr: Établir le point de départ

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: Complete an Exam P diagnostic and identify the main weak areas.
        text_fr: Compléter un diagnostic P et identifier les principales faiblesses.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Read Goldburd pages 1–5.
        text_fr: Lire les pages 1 à 5 de Goldburd.

      - time: 15 min
        text: Review the Becoming week and identify the three most important outcomes.
        text_fr: Revoir la semaine Becoming et identifier les trois résultats les plus importants.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 1/7 of Le Rouge et le Noir.
          Target cumulative progress: 1/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 1/7 du Rouge et le Noir.
          Cible cumulée : 1/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 1/31 of The Intelligent Investor;
          cumulative target 1/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 1/31 de L’Investisseur intelligent ;
          cible cumulée 1/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-09-22
    weekday: tuesday
    title: Probability foundations
    title_fr: Fondements de la probabilité

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: >
          Review general probability and counting
          (permutations and combinations). Solve a manageable
          set and include corrections within the session.
        text_fr: >
          Revoir la probabilité générale et le dénombrement
          (permutations et combinaisons). Faire une série ciblée
          et inclure les corrections dans le créneau.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Read Goldburd pages 6–10.
        text_fr: Lire les pages 6 à 10 de Goldburd.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 2/7 of Le Rouge et le Noir.
          Target cumulative progress: 2/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 2/7 du Rouge et le Noir.
          Cible cumulée : 2/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 2/31 of The Intelligent Investor;
          cumulative target 2/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 2/31 de L’Investisseur intelligent ;
          cible cumulée 2/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-09-23
    weekday: wednesday
    title: Conditional probability
    title_fr: Probabilité conditionnelle

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P — conditional probability, independence, unions, and intersections.
        text_fr: Examen P — probabilités conditionnelles, indépendance, unions et intersections.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance — interest-theory and rate-conversion problems.
        text_fr: Entretien FM — théorie de l'intérêt et exercices de conversion des taux.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 3/7 of Le Rouge et le Noir.
          Target cumulative progress: 3/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 3/7 du Rouge et le Noir.
          Cible cumulée : 3/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 3/31 of The Intelligent Investor;
          cumulative target 3/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 3/31 de L’Investisseur intelligent ;
          cible cumulée 3/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-09-24
    weekday: thursday
    title: Produce something
    title_fr: Produire quelque chose

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: Exam P — complete a focused probability set and classify the errors.
        text_fr: Examen P — compléter une série ciblée de probabilité et classer les erreurs.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Read Goldburd pages 11–15 and identify the essential GLM concepts.
        text_fr: Lire les pages 11 à 15 de Goldburd et identifier les concepts essentiels des GLM.

      - domain: research
        time: 45–60 min
        text: Complete FUN MOOC Machine Learning in Python session 1.
        text_fr: Compléter la première séance du FUN MOOC Machine Learning in Python.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 4/7 of Le Rouge et le Noir.
          Target cumulative progress: 4/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 4/7 du Rouge et le Noir.
          Cible cumulée : 4/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 4/31 of The Intelligent Investor;
          cumulative target 4/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 4/31 de L’Investisseur intelligent ;
          cible cumulée 4/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-09-25
    weekday: friday
    title: Connect the concepts
    title_fr: Relier les concepts

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: Exam P — counting, conditional probability, independence, unions, and intersections in mixed problems.
        text_fr: Examen P — dénombrement, probabilités conditionnelles, indépendance, unions et intersections dans des problèmes mixtes.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 45–60 min
        text: Draft the one-page explanation of an insurance GLM.
        text_fr: Rédiger la première version de la page expliquant un GLM d'assurance.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 5/7 of Le Rouge et le Noir.
          Target cumulative progress: 5/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 5/7 du Rouge et le Noir.
          Cible cumulée : 5/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 5/31 of The Intelligent Investor;
          cumulative target 5/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 5/31 de L’Investisseur intelligent ;
          cible cumulée 5/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-09-26
    weekday: saturday
    title: Test and communicate
    title_fr: Tester et communiquer

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P — complete a mixed set and fully review every error.
        text_fr: Examen P — compléter une série mixte et revoir entièrement chaque erreur.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance — complete one short mixed set.
        text_fr: Entretien FM — compléter une courte série mixte.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete one general English conversation.
        text_fr: Compléter une conversation générale de 60 minutes en anglais.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 6/7 of Le Rouge et le Noir.
          Target cumulative progress: 6/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 6/7 du Rouge et le Noir.
          Cible cumulée : 6/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 6/31 of The Intelligent Investor;
          cumulative target 6/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 6/31 de L’Investisseur intelligent ;
          cible cumulée 6/31 de la plage de pages choisie.
          Garder les notes brèves.

  - date: 2026-09-27
    weekday: sunday
    title: Consolidate and review
    title_fr: Consolider et revoir

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P — complete a cumulative Week 01 set and review the full error log.
        text_fr: Examen P — compléter une série cumulative de la semaine 01 et revoir tout le journal d'erreurs.

      - domain: research
        time: 45–60 min
        text: Complete FUN MOOC Machine Learning in Python session 2.
        text_fr: Compléter la deuxième séance du FUN MOOC Machine Learning in Python.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30 min
        text: Finish and clean the one-page GLM explanation.
        text_fr: Terminer et nettoyer la page expliquant le GLM.

      - domain: lean
        node: lean-fundamentals
        time: 30–45 min
        text: Set up Lean 4, review basic expressions and types, and add one small theorem you understand completely.
        text_fr: Installer Lean 4, revoir les expressions et types de base et ajouter un petit théorème entièrement compris.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 02.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 02.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 7/7 of Le Rouge et le Noir.
          Target cumulative progress: 7/7 of the novel;
          finish on September 27.
        text_fr: >
          Lire la portion 7/7 du Rouge et le Noir.
          Cible cumulée : 7/7 du roman ;
          terminer le 27 septembre.

      - domain: writing
        node: writing-reading-practice
        time: According to edition / Selon édition
        text: >
          Read portion 7/31 of The Intelligent Investor;
          cumulative target 7/31 of the chosen page range.
          Keep notes brief.
        text_fr: >
          Lire la portion 7/31 de L’Investisseur intelligent ;
          cible cumulée 7/31 de la plage de pages choisie.
          Garder les notes brèves.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
