# Becoming - état du projet et consignes de reprise

Dernière mise à jour : septembre 2026.

## 1. Règle de reprise

Ce fichier est la mémoire de reprise du projet Becoming.

Avant toute modification liée à Becoming :

1. lire `BECOMING_HANDOFF.md` ;
2. lire `BECOMING.md` ;
3. inspecter les fichiers réellement utilisés ;
4. comprendre l'état actuel avant de proposer une modification.

Ne jamais recommencer l'implémentation à zéro simplement parce qu'une autre architecture semble plus élégante.

Ne jamais moderniser, restructurer ou complexifier Becoming sans problème concret à résoudre.

Une revue peut parfaitement se terminer par :

> Aucune modification importante nécessaire.

---

## 2. Intention

`/becoming/` représente une progression personnelle à long terme traduite en actions concrètes.

L'inspiration vient des arbres de progression des jeux de stratégie ou RPG, mais sans gamification artificielle.

Le système doit rester :

- sérieux ;
- élégant ;
- concret ;
- motivant ;
- professionnel ;
- utilisable rapidement sur téléphone ;
- fondé sur des preuves réelles de progression.

Il doit répondre à trois questions :

1. Que dois-je faire aujourd'hui ?
2. Que dois-je accomplir cette semaine ?
3. Où ce travail me conduit-il à long terme ?

La Roadmap donne la direction.

La semaine donne les priorités.

La journée donne l'action.

Becoming n'est pas un simple habit tracker.

Une tâche quotidienne cochée ne signifie pas automatiquement qu'un objectif de la Roadmap est accompli.

Ne jamais inventer une réussite, un examen réussi, une publication, une contribution, une certification, un résultat de recherche, une progression ou une preuve.

Les plans futurs sont des plans, pas des accomplissements.

Becoming est aussi le journal et la liste de tâches personnels d'Evenson.
Il décide lui-même de ce qu'il a accompli. Ne pas exiger de justificatifs
publics ni ajouter de contrôle obligatoire des preuves. L'absence de bilan
ou de preuve dans GitHub ne signifie pas qu'une tâche n'a pas été faite.

---

## 3. Pages visibles

Il existe deux pages principales :

```text
/becoming/
/becoming/roadmap/
```

### `/becoming/`

La page contient :

- le cycle actuel ;
- les semaines ;
- les objectifs hebdomadaires ;
- le plan quotidien ;
- les tâches cochables ;
- le protocole physique permanent.

### `/becoming/roadmap/`

La Roadmap représente la progression complète :

- domaines ;
- nœuds ;
- dépendances ;
- statuts ;
- critères ;
- déblocages ;
- grands objectifs.

Ne pas transformer la Roadmap en liste de tâches quotidiennes.

---

## 4. Architecture

Becoming comporte quatre couches principales.

### Domains

Source :

```text
_data/becoming/domains.yml
```

Domaines actuels :

- research ;
- actuarial ;
- mathematics ;
- lean ;
- writing ;
- career ;
- building ;
- english ;
- capital ;
- physical.

Les domaines peuvent être actifs, en maintenance ou dormants.

Tout ne doit pas être poursuivi activement en même temps.

### Trees

Source :

```text
_data/becoming/trees/
```

Fichiers particulièrement importants :

```text
_data/becoming/trees/actuarial.yml
_data/becoming/trees/research.yml
_data/becoming/trees/physical.yml
_data/becoming/trees/english.yml
_data/becoming/trees/lean.yml
```

Structure typique :

```yaml
- id:
  title:
  title_fr:
  type:
  status:
  requires:
  description:
  description_fr:
  unlock_requirements:
```

Les dépendances décrivent la logique de progression.

Ne pas les contourner uniquement pour rendre un plan hebdomadaire plus simple.

### Cycles

Source :

```text
_data/becoming/cycles.yml
```

Cycle actuel :

```text
foundations-01
```

Dates :

```text
2026-09-21 -> 2026-12-13
```

Domaines principaux :

- actuarial ;
- research ;
- physical.

Les douze semaines ne représentent pas une limite à Becoming.

Un cycle sert seulement à rendre le futur proche planifiable.

À la fin d'un cycle, la suite doit être construite à partir des résultats observés.

### Weeks and Days

Sources :

```text
_becoming/weeks/week-01.md
_becoming/weeks/week-02.md
_becoming/weeks/week-03.md
_becoming/weeks/week-04.md
_becoming/weeks/week-05.md
_becoming/weeks/week-06.md
_becoming/weeks/week-07.md
_becoming/weeks/week-08.md
_becoming/weeks/week-09.md
_becoming/weeks/week-10.md
_becoming/weeks/week-11.md
_becoming/weeks/week-12.md
```

Chaque semaine couvre exactement :

```text
Monday -> Sunday
```

Structure générale :

```yaml
---
title:
title_fr:

cycle:
cycle_week:

start_date:
end_date:

status:

active:
maintenance:

quests:

days:

completed:
---
```

Le plan quotidien reste dans le même fichier que la semaine.

Ne pas créer sept fichiers séparés pour les sept jours.

Exemple :

```yaml
days:

  - date: 2026-10-04
    weekday: sunday
    title: Example
    title_fr: Exemple

    tasks:

      - domain: actuarial
        node: some-node
        time: 90 min
        text: Example task.
        text_fr: Exemple de tâche.
```

Cette structure garde ensemble la stratégie de la semaine, son exécution quotidienne et sa revue.

---

## 5. Cycle actuariel actuel

Le cycle suit deux phases.

### Phase 1 - Exam P primary

Exam P est prévu le :

```text
2026-11-07
```

Avant cette date :

- P est la priorité actuarielle ;
- FM reste en maintenance légère ;
- la pratique devient progressivement plus mixte ;
- les simulations et la revue d'erreurs prennent de plus en plus d'importance ;
- la semaine de l'examen P ne contient pas de vraie séance FM.

### Phase 2 - FM primary

Après Exam P :

- faire une courte revue post-examen ;
- fermer la préparation active de P ;
- effectuer un nouveau diagnostic FM ;
- identifier les faiblesses principales ;
- faire de FM la priorité actuarielle.

La préparation FM se concentre ensuite notamment sur :

- théorie de l'intérêt ;
- annuités ;
- prêts ;
- obligations ;
- flux monétaires ;
- pratique cumulative ;
- pratique chronométrée.

FM est prévu en décembre 2026.

Ne pas inventer de date exacte tant qu'elle n'est pas confirmée.

---

## 6. Recherche actuelle

Le programme actif est centré sur la tarification IARD.

La progression actuelle passe notamment par :

1. GLM ;
2. workflow de construction ;
3. forme du modèle ;
4. refinement ;
5. validation ;
6. reproduction ;
7. alternatives flexibles ;
8. ANAM ;
9. interprétabilité ;
10. fairness / calibration ;
11. formulation de questions de recherche.

Source principale :

```text
_data/becoming/trees/research.yml
```

La recherche ne doit pas devenir une simple liste de lectures.

Une lecture sérieuse doit progressivement produire :

- compréhension ;
- notes ;
- reproduction ;
- critique ;
- comparaison ;
- expérience ;
- code ;
- questions ;
- synthèse ;
- projet ;
- article.

Les futures recherches importantes doivent émerger du travail précédent.

---

## 7. Système physique

Le protocole physique permanent est défini dans :

```text
_data/becoming/physical_protocol.yml
```

Il contient quatre composantes :

```text
morning
strength
movement
evening
```

La baseline quotidienne comprend :

- routine du matin ;
- mouvement quotidien ;
- routine du soir.

La séance de musculation dépend du jour.

Le programme actuel est :

```text
Arnold Volume Training - Variation 2
```

Le protocole physique est un système actuel, pas une règle éternelle.

Il peut évoluer lorsque l'expérience montre qu'un changement est réellement nécessaire.

Ne pas le modifier uniquement pour créer de la nouveauté.

Images :

```text
assets/images/becoming/physical/routine-du-matin.png
assets/images/becoming/physical/routine-du-soir.png
```

---

## 8. Plan quotidien

Fichiers :

```text
_includes/becoming/daily.html
assets/js/becoming-daily.js
assets/css/becoming-daily.scss
```

Données utilisées :

```text
site.becoming
site.data.becoming.domains
site.data.becoming.physical_protocol
```

Le plan quotidien doit toujours suivre la semaine sélectionnée dans l'interface principale.

Il ne doit pas avoir son propre concept indépendant de semaine.

### Tâches cochables

Les tâches quotidiennes sont cochables.

Leur état est enregistré localement dans le navigateur avec `localStorage`.

Une tâche cochée signifie uniquement :

> cette action quotidienne a été effectuée.

Elle ne signifie pas automatiquement :

> le nœud correspondant de la Roadmap est accompli.

La progression permanente reste fondée sur les vraies conditions du nœud.

---

## 9. Langues

L'interface prend en charge :

```text
FR
EN
```

La préférence est stockée dans :

```text
becoming.language
```

Le système utilise notamment :

```yaml
title / title_fr
description / description_fr
task / task_fr
text / text_fr
```

La langue choisie doit rester synchronisée entre l'interface principale et le plan quotidien.

---

## 10. Fichiers principaux

### Pages

```text
_pages/becoming.md
_pages/becoming-roadmap.md
```

### Includes

```text
_includes/becoming/app.html
_includes/becoming/daily.html
```

### JavaScript

```text
assets/js/becoming.js
assets/js/becoming-daily.js
```

### CSS

```text
assets/css/becoming.scss
assets/css/becoming-daily.scss
```

### Données

```text
_data/becoming/domains.yml
_data/becoming/cycles.yml
_data/becoming/current.yml
_data/becoming/achievements.yml
_data/becoming/physical_protocol.yml
_data/becoming/trees/
```

### Semaines

```text
_becoming/weeks/
```

### Scripts

```text
scripts/new_becoming_week.py
scripts/validate_becoming.rb
```

---

## 11. Génération des futures semaines

Le script :

```text
scripts/new_becoming_week.py
```

prépare les futures semaines.

Une nouvelle semaine contient automatiquement sept jours :

```text
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
```

Le script ne doit pas prolonger silencieusement un cycle terminé.

À la fin du cycle :

1. faire la revue du cycle ;
2. décider des priorités suivantes ;
3. créer le cycle suivant ;
4. changer `current_cycle` ;
5. générer ensuite les nouvelles semaines.

Ne pas créer artificiellement une Week 13 dans `foundations-01` après le 13 décembre.

---

## 12. Validation

Le validateur principal est :

```text
scripts/validate_becoming.rb
```

Il vérifie notamment :

- IDs ;
- dépendances ;
- cycles ;
- domaines ;
- dates ;
- semaines lundi à dimanche ;
- nœuds actifs ;
- maintenance ;
- quests ;
- plans quotidiens ;
- 7 jours par semaine ;
- tâches quotidiennes ;
- cohérence domaine / nœud ;
- continuité des semaines ;
- limites du cycle ;
- protocole physique.

Après une modification structurelle, le validateur doit rester vert.

GitHub Pages constitue également un contrôle important du build réel.

Attention :

> un build Jekyll réussi ne garantit pas que le JavaScript fonctionne correctement.

---

## 13. Vérification visuelle

Après un changement d'interface, vérifier au minimum :

### `/becoming/`

- semaine affichée ;
- changement de semaine ;
- dates ;
- objectifs ;
- plan quotidien ;
- changement de jour ;
- checkboxes ;
- persistance après rafraîchissement ;
- protocole physique ;
- images ;
- FR / EN ;
- mobile.

### `/becoming/roadmap/`

- domaines ;
- nœuds ;
- statuts ;
- dépendances ;
- panneau de détails ;
- FR / EN ;
- mobile.

---

## 14. Direction visuelle

Style recherché :

- laboratoire académique ;
- tableau personnel de progression ;
- jeu de stratégie sérieux ;
- moderne sans être gadget ;
- dense mais lisible ;
- agréable sur mobile.

Éviter :

- confettis ;
- sons ;
- mascottes ;
- XP artificielle ;
- badges inutiles ;
- animations envahissantes ;
- surcharge visuelle ;
- gamification infantile.

Conserver :

- hiérarchie claire ;
- profondeur visuelle ;
- transitions discrètes ;
- mode sombre ;
- `prefers-reduced-motion` ;
- interactions tactiles correctes.

---

## 15. Confidentialité

Le repository peut être public.

Une page non publiée n'est pas privée.

Ne pas publier inutilement :

- mesures personnelles détaillées ;
- données financières privées ;
- journaux personnels ;
- résultats privés ;
- autres informations sensibles.

Une structure d'objectif peut être publique sans que toutes ses données courantes le soient.

Ne jamais inventer une donnée privée absente.

---

## 16. Revue hebdomadaire

Chaque fichier de semaine se termine par :

```markdown
## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
```

Cette revue sert à décider si :

- le rythme est réaliste ;
- une priorité doit changer ;
- une hypothèse était fausse ;
- une tâche doit être reportée ;
- un nœud doit changer d'état ;
- la Roadmap doit être adaptée.

Ne pas modifier la Roadmap chaque semaine simplement pour créer l'impression de progrès.

---

## 17. Principe anti-churn

Avant chaque changement, demander :

1. Quel problème concret existe ?
2. Le changement le résout-il ?
3. Existe-t-il déjà un mécanisme qui le résout ?
4. Le système sera-t-il plus clair ou seulement différent ?
5. Combien d'autres fichiers devront être modifiés pour soutenir ce changement ?

Si aucune raison sérieuse ne justifie une modification :

> Ne rien changer.

Becoming doit rester vivant, mais stable.

---

## 18. Workflow de maintenance

Workflow recommandé :

1. inspecter le repository ;
2. lire `BECOMING_HANDOFF.md` ;
3. lire `BECOMING.md` ;
4. inspecter les fichiers réellement utilisés ;
5. identifier les problèmes réels ;
6. modifier le moins de fichiers possible ;
7. valider ;
8. vérifier le site ;
9. documenter tout changement structurel.

Pour les modifications via GitHub Web, préférer un fichier complet lorsque cela réduit le risque d'erreur.

Ne pas modifier automatiquement le repository sans demande explicite.

---

## 19. État actuel à retenir

Becoming possède maintenant :

- une Roadmap de progression à long terme ;
- un cycle de 12 semaines ;
- 12 fichiers hebdomadaires ;
- un plan jour par jour ;
- des tâches quotidiennes cochables ;
- un protocole physique permanent ;
- une transition P -> FM ;
- une trajectoire de recherche en tarification IARD ;
- une interface FR / EN ;
- un validateur ;
- un générateur de futures semaines.

Le cycle actuel se termine le :

```text
2026-12-13
```

La suite doit être construite à partir de ce qui s'est réellement passé pendant le cycle, pas simplement en prolongeant mécaniquement le plan.

---

## 20. Phrase de reprise recommandée

Dans une nouvelle conversation :

> Lis d'abord `BECOMING_HANDOFF.md` puis `BECOMING.md`. Inspecte ensuite les fichiers actuellement utilisés par Becoming avant de proposer quoi que ce soit. Continue à partir de l'architecture existante, sans recommencer le projet ni modifier des éléments uniquement pour les moderniser. Je veux travailler sur : [décrire le changement].

## Calendar and reading update — 2026-09-18

The cycle runs September 21–December 13, 2026, Monday–Sunday. Reviews stay on Sunday evening. Exam P stays on November 7; FM stays in December (appointment day unconfirmed). P review is consolidated into seven weeks, with FM primary after P. No result or completion is inferred.

Le Rouge et le Noir: September 21–27, one seventh of the novel daily. The Intelligent Investor: September 21–October 21, one thirty-first of the selected edition daily, including the commentary and appendices intended for reading. Page counts and durations depend on the edition and observed reading speed.
