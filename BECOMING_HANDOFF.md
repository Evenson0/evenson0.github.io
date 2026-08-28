# Becoming — état du projet et consignes de reprise

Dernière mise à jour : 27 août 2026.

## À lire avant toute modification

Ce document sert de mémoire de reprise pour `/becoming`. Lors d'une nouvelle conversation, lire ce fichier, puis `BECOMING.md`, avant de modifier le projet. Ne pas recommencer l'implémentation et ne pas remplacer l'architecture existante.

## Intention du projet

`/becoming` décrit une progression personnelle à long terme inspirée des systèmes de progression des jeux vidéo, sans vocabulaire enfantin ni gamification artificielle. Le système doit rester élégant, motivant, concret, professionnel et très facile à utiliser sur téléphone.

Il doit répondre à deux questions :

1. Que dois-je faire cette semaine ?
2. Où ces actions me conduisent-elles à long terme ?

La preuve est la source de vérité : un objectif important n'est terminé que lorsque ses conditions et ses preuves sont réellement remplies.

## Expérience actuelle

Il existe seulement deux pages visibles :

- `/becoming/` : programme de la semaine ;
- `/becoming/roadmap/` : progression complète à long terme.

Il n'y a plus de page Journal, de menu Journal, de recherche, de filtre Status/Type, ni de distinction visible entre « quêtes principales » et « quêtes secondaires ».

### Cette semaine

La page présente le cycle, les douze semaines et un petit nombre d'objectifs concrets. La semaine 1 contient seulement :

- FM : 50 exercices sur la théorie de l'intérêt et un diagnostic mixte ;
- Recherche : lire l'introduction de Molnar et rédiger une note concise ;
- Anglais : une conversation de 60 minutes ;
- Physique : 4 séances de musculation, 3 courses et 12 000 à 15 000 pas par jour.

Les cartes hebdomadaires sont de simples rappels. Elles n'affichent plus d'accordéon, d'étapes ni de « preuves attendues ». Éviter les longues listes et les intitulés grandiloquents tels que « établir le point de départ » ou « interprétabilité par construction ». Préférer des formulations directes : quantité, sujet et action.

Les semaines futures sont condensées par domaine dans l'interface. Les données détaillées restent dans les fichiers hebdomadaires.

### Roadmap

La Roadmap affiche :

- les objectifs légendaires ;
- un sélecteur de domaines ;
- le chemin complet du domaine sélectionné ;
- un panneau de détails au clic avec prérequis, progression, preuves et déblocages.

Tous les objectifs d'un domaine sont montrés sans bouton « afficher davantage ». ACAS est séparé du sous-parcours FM.

Objectifs légendaires importants :

- FCAS ;
- Chercheur indépendant ;
- Auteur publié ;
- Contributeur Lean ;
- Aisance professionnelle en anglais ;
- Millionnaire — 1 M$ d'actifs investissables ;
- Atteindre 80 kg.

`Independent Scholar` et `Actuary–Researcher` ont été supprimés car ils faisaient doublon avec `Independent Researcher`. Le domaine du futur travail de recherche doit rester libre.

## Contenu actuel

- 10 domaines ;
- 162 objectifs ;
- 12 semaines ;
- Cycle 01 — Foundations, du 30 août au 21 novembre 2026 ;
- semaines du dimanche au samedi ;
- aucune dépendance circulaire.

Domaines actifs pendant le premier cycle : FM, Recherche et Physique. Anglais est en maintenance. Les autres domaines restent disponibles dans la Roadmap sans devenir une charge hebdomadaire.

Le parcours Mathématiques contient désormais une branche de théorie des nombres : fondements, congruences et fonctions arithmétiques, équations diophantiennes, étude avancée et portfolio de preuves.

Le parcours physique part de 138 kg et vise 80 kg. Le programme hebdomadaire choisi est de 4 séances de musculation, 3 courses et 12 000 à 15 000 pas par jour. Ce sont des objectifs personnels, pas des prescriptions médicales.

## Langues

Le sélecteur FR/EN doit traduire toute l'interface visible. Quand FR est actif, aucun libellé d'interface ne doit rester en anglais ; quand EN est actif, l'inverse s'applique. Les titres bibliographiques officiels peuvent rester dans leur langue originale.

Les traductions proviennent des champs `title_fr`, `description_fr`, `why_fr`, `evidence_fr`, des chaînes d'interface de `assets/js/becoming.js` et d'un dictionnaire de secours pour certains anciens titres.

## Direction visuelle

Style recherché : laboratoire académique, interface de progression élégante et jeu de stratégie sérieux.

Le design actuel utilise :

- dégradés turquoise et accents dorés ;
- halo suivant discrètement le pointeur ;
- révélations au défilement ;
- ligne de progression animée ;
- pulsation de l'étape active ;
- cartes légendaires avec profondeur et reflet ;
- transitions de semaines et de domaines ;
- panneau latéral animé ;
- support du mode sombre et de `prefers-reduced-motion`.

Ne pas revenir à une page plate, mais ne pas ajouter de confettis, XP arbitraire, sons, mascottes ou effets qui nuisent à la lecture. Sur téléphone, les interactions doivent rester tactiles, rapides et lisibles.

## Architecture

Le site est un projet Jekyll fondé sur Academic Pages / Minimal Mistakes.

Fichiers principaux :

- `_pages/becoming.md` : page Cette semaine ;
- `_pages/becoming-roadmap.md` : page Roadmap ;
- `_includes/becoming/app.html` : structure partagée et sérialisation des données ;
- `assets/css/becoming.scss` : design, responsive et animations ;
- `assets/js/becoming.js` : langues, semaines, roadmap, dépendances et détails ;
- `_data/becoming/current.yml` : semaine actuellement affichée ;
- `_data/becoming/achievements.yml` : objectifs légendaires ;
- `_data/becoming/domains.yml` : domaines ;
- `_data/becoming/trees/*.yml` : objectifs de chaque domaine ;
- `_data/becoming/cycles.yml` : cycles ;
- `_data/becoming/readings.yml` : lectures ;
- `_becoming/weeks/week-01.md` à `week-12.md` : données hebdomadaires ;
- `scripts/new_becoming_week.py` : génération de la prochaine semaine ;
- `scripts/validate_becoming.rb` : validation des données ;
- `BECOMING.md` : documentation d'utilisation détaillée.

Les données de progression restent dans YAML/Markdown, jamais dans un gros objet JavaScript écrit à la main. JavaScript ne gère que le rendu et les interactions.

## Confidentialité

Le dépôt peut être public. Une page non publiée n'est pas privée.

- Les structures d'objectifs 138 kg, 80 kg et 1 M$ peuvent être visibles.
- Les mesures actuelles, valeurs financières exactes, résultats d'examens privés, réflexions personnelles et journaux détaillés doivent rester dans `_data/becoming/private.yml`.
- `_data/becoming/private.yml` est ignoré par Git.
- Ne jamais inventer de résultat, réussite, publication, utilisateur ou preuve.

## Publication et aperçu local

La page est encore `published: false` et absente de la navigation principale.

Lancer l'aperçu local avec :

```bash
cd ~/Downloads/evenson0.github.io
./scripts/serve_local.sh
```

Puis ouvrir :

```text
http://127.0.0.1:4000/becoming/
```

Si le navigateur conserve une ancienne version : `Command + Shift + R`.

## Validation obligatoire après une modification

```bash
ruby scripts/validate_becoming.rb
node --check assets/js/becoming.js
PATH="/usr/local/opt/ruby@3.2/bin:$PATH" \
RUBYOPT="-r/Users/phoenix/Downloads/evenson0.github.io/scripts/jekyll_taint_patch.rb" \
bundle exec jekyll build --unpublished
git diff --check
```

État au moment de cette note : validation réussie pour 162 objectifs, 12 semaines, 1 cycle et aucune dépendance circulaire. Le build Jekyll réussit.

## Phrase de reprise recommandée

Dans une nouvelle conversation, écrire :

> Lis `BECOMING_HANDOFF.md` et `BECOMING.md` dans mon dépôt, inspecte l'état actuel de `/becoming`, puis continue à partir de cette version sans recommencer le projet. Je veux modifier : [décrire le changement].
