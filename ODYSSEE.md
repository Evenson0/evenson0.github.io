# ODYSSÉE — 12 semaines pour prouver le progrès

**Programme :** lundi 9 novembre 2026 au dimanche 31 janvier 2027.  
**Page publique :** https://evenson0.github.io/activities/  
**Statut :** 71 épreuves *proposées*, aucune réalisation présumée. Les 60 épreuves de compétence et 11 épreuves de terrain facultatives sont intégrées dans `_data/activities/challenges.yml`, avec `series: odyssee`, `level`, `axis`, `measure`. L'historique antérieur est conservé : il n'est pas supprimé mais apparaît dans les archives.

## Pourquoi remplacer les défis vagues

Les anciennes idées (« faire une conversation », « développer une réflexion ») souffraient d'un défaut : elles ne définissaient ni durée, ni résultat, ni comparaison. Une épreuve Odyssée contient désormais :

1. **Un travail réellement spécifique** (15 questions en 90 minutes, une page déployée avec 3 tests, une prise de 3 minutes, 600 mots originaux, 20 minutes de marche/course-marche).
2. **Un livrable** (feuille de score, commit, audio privé, texte daté, relevé de sortie), sans publication forcée de données intimes.
3. **Une mesure que l'utilisateur note**, non une performance inventée par l'assistant.
4. **Une progression sur douze semaines**, avec un benchmark initial et des contrôles intermédiaires.
5. **Une mission de terrain dite « boss »**, facultative et parfois dépendante d'un tiers : elle n'est accomplie que si les conditions de réussite sont réellement réunies.

Ce protocole emprunte à la [Impossible List de Joel Runyon](https://impossiblehq.com/impossible-list/), à l'[Epic Quest de Steve Kamb](https://www.nerdfitness.com/blog/my-life-is-a-game-a-major-epic-quest-update-plus-a-request/), au [MIT Challenge de Scott H. Young](https://www.scotthyoung.com/blog/2012/09/27/mit-challenge-done/) et aux règles de travail de [mathlib](https://mathlib.org/contribute/how-to-contribute.html). Il ne copie pas leurs charges extrêmes et ne prétend pas qu'une inscription, une PR ou un examen sont automatiquement réussis.

## Les cinq axes et ce qui prouve une amélioration

| Compétence | Niveau 1 : mesure de départ | Ce qui progresse, objectivement | Niveau 12 : épreuve |
|---|---|---|---|
| **Précision actuarielle** | 15 questions publiques P / 90 min, score et erreurs classées | Erreurs récurrentes corrigées sur problèmes *nouveaux*, rétention à 48 h/7 j, simulations complètes ; attention : les blancs SOA n'ont pas forcément la même difficulté | Comparer deux GLM de fréquence sur données synthétiques avec métriques hors échantillon |
| **Fabrication** | 1 page P réellement utilisable + 3 tests | Cinq puis dix puis quinze exercices, tests de régression, reprise, retours réels ; après P, laboratoire de risques reproductible | Un lab v1.0 installable de zéro, 15 tests, 2 graphiques reproduits |
| **Anglais oral** | 3 min en une prise, pauses de plus de 3 s et passages au français comptés | 5, 6, 7, 8, 9, 10 puis 12 min sans script, objections et autocorrections ; l'aisance ne se réduit pas à la durée | Une défense scientifique de 12 minutes + 5 réponses évaluées |
| **Écriture originale** | 600 mots sans IA, deux versions | Nouveaux mots réellement utilisables, sections relues, contradictions corrigées, retours de lecteurs | Environ 13 300 mots nouveaux cumulés **si toutes les étapes ont été faites**, un manuscrit ordonné et trois faiblesses identifiées |
| **Endurance** | Sortie de 20 min : distance, effort perçu et récupération J+1 | Sorties répétables, comparaison sur la même durée à effort semblable aux semaines 1, 8, 12, sans augmentation forcée | Comparaison honnête W1/W8/W12 sur 20 min, ou marche équivalente si nécessaire |

**Important :** les objectifs sont ambitieux mais indépendants. Avec un emploi à temps plein, les cinq épreuves représentent souvent une dizaine d'heures supplémentaires par semaine. Cela ne veut pas dire cinq nouvelles obligations. Si seulement deux épreuves sont achevées, on publie seulement ces deux-là ; les autres restent proposées. Les données de santé individuelles, enregistrements personnels et manuscrits privés ne vont pas dans les événements publics.

## Les douze niveaux

| Niveau | Date de fin | Précision | Fabrication | Anglais | Écriture | Endurance | BOSS terrain |
|---:|---|---|---|---|---|---|---|
| 01 | 2026-11-15 | ÉTABLIR TON NIVEAU P : 15 QUESTIONS SANS FILET | METTRE EN LIGNE UNE PAGE QUI RÉSOUT UN VRAI PROBLÈME | ENREGISTRER 3 MINUTES D'ANGLAIS SANS SCRIPT | ÉCRIRE 600 MOTS SIGNÉS SANS UNE LIGNE D'IA | ÉTABLIR UNE BASE D'ENDURANCE MESURÉE | FAIRE TESTER TON SITE À TROIS VRAIES PERSONNES |
| 02 | 2026-11-22 | 20 QUESTIONS P CIBLÉES EN 110 MINUTES | PASSER D'UN DÉMO À 5 EXERCICES INTERACTIFS | 5 MINUTES : EXPLIQUER BAYES SANS FRANÇAIS | 900 MOTS : UN CHAPITRE AVEC UNE VRAIE FIN | DEUX SÉANCES D'ENDURANCE AVEC RÉCUPÉRATION | FAIRE RÉUSSIR UN PROBLÈME DE BAYES À DEUX NOVICES |
| 03 | 2026-11-29 | 25 QUESTIONS P ET 10 ERREURS ÉLIMINÉES | CRÉER UN MODE EXAMEN QUI SURVIT AU RECHARGEMENT | 6 MINUTES : DÉFENDRE UN CHOIX DE MODÈLE | 1 100 MOTS : ÉCRIRE L'OBJECTION QUI DÉTRUIT TA THÈSE | REFAIRE 25 MINUTES ET COMPARER L'EFFORT | ENVOYER TON PREMIER CORRECTIF OPEN SOURCE |
| 04 | 2026-12-06 | PREMIER EXAMEN P BLANC COMPLET | PUBLIER LA VERSION 0.1 DE L'ATELIER P | 7 MINUTES : EXPOSE TON OUTIL EN ANGLAIS À UNE PERSONNE | 1 200 MOTS + UNE RÉÉCRITURE QUI AMÉLIORE LE TEXTE | 30 MINUTES D'ENDURANCE RÉPÉTABLE | TON EXPOSÉ DE 12 MINUTES SOUS LE FEU DES QUESTIONS |
| 05 | 2026-12-13 | DEUXIÈME BLANC P : CHASSER LES ERREURS RÉCURRENTES | DES TESTS QUI CASSENT TON APPLICATION P | 8 MINUTES : EXPLIQUER UN RÉSULTAT SOUS QUESTIONS | 1 500 MOTS : LE CHAPITRE QUI RÉSISTE À LA CRITIQUE | COMPARER LA MÊME DISTANCE À UN EFFORT PLUS STABLE | SIMULER 5 000 RISQUES DE CATASTROPHE SANS DONNÉES EMPLOYEUR |
| 06 | 2026-12-20 | BLANC P + VÉRIFICATION DES 12 PLUS GRANDES LACUNES | FAIRE TESTER TA V0.2 PAR 2 PERSONNES | 9 MINUTES : SOUTENANCE ANGLAISE D'UN ALGORITHME | 1 700 MOTS : CONSTRUIRE LA PREMIÈRE PARTIE DU LIVRE | DEUX SORTIES FACILES ET UN BILAN DE RÉCUPÉRATION | FORMALISER ET FAIRE RELIRE UNE VRAIE PREUVE LEAN |
| 07 | 2026-12-27 | 20 QUESTIONS P : TESTER LA RÉTENTION À 7 JOURS | AJOUTER 5 CAS LIMITES ET UN RAPPORT DE TEST | 10 MINUTES : EXPOSÉ SANS NOTES SUR LE RISQUE | 1 800 MOTS : UNE SECTION QUE TU POURRAIS PUBLIER | PROTÉGER LA CONTINUITÉ D'ENDURANCE PENDANT LES FÊTES | UNE EXPÉDITION URBAINE DOCUMENTÉE À MONTRÉAL |
| 08 | 2027-01-03 | BLANC P #4 ET TABLEAU DE PROGRÈS SUR 4 SIMULATIONS | LANCER UNE VERSION P À 15 EXERCICES ORIGINAUX | 10 MINUTES : FAIRE FACE À 5 QUESTIONS IMPROVISÉES | RÉVISER 1 000 MOTS ET ÉCRIRE 1 200 MOTS NEUFS | TESTER LA MÊME SÉANCE QU'EN SEMAINE 1 | UNE NOTE ACTUARIELLE DE 1 200 MOTS ET TROIS FIGURES |
| 09 | 2027-01-10 | DERNIER GRAND BLANC P AVANT L'ÉPREUVE | VERROUILLER V0.3 : AUCUN NOUVEAU GROS CHANTIER | 6 MINUTES D'ANGLAIS : ANALYSER UN EXEMPLE P | 600 MOTS : ÉCRIRE PEU MAIS SANS IA | ENTRETENIR L'ENDURANCE SANS CRÉER DE FATIGUE | NEUF ERREURS P CORRIGÉES 72 H PLUS TARD |
| 10 | 2027-01-17 | EXAM P : SUIVRE LE PLAN ET FAIRE UN BILAN FACTUEL | OPTIONNEL : NE PAS CODER PENDANT P | OPTIONNEL : 3 MINUTES DE RETOUR EN ANGLAIS | OPTIONNEL : UNE PAGE DE JOURNAL SANS IA | OPTIONNEL : UNE MARCHE DE RÉCUPÉRATION | — |
| 11 | 2027-01-24 | CONSTRUIRE UN GLM POISSON SUR DONNÉES SIMULÉES | PUBLIER UNE EXPÉRIENCE GLM REPRODUCTIBLE | 10 MINUTES : DÉFENDRE LE GLM FACE À 4 OBJECTIONS | 1 200 MOTS : RETROUVER LE LIVRE APRÈS P | REPRENDRE UNE ROUTINE AÉROBIE APRÈS L'EXAMEN | SOUMETTRE UNE VRAIE QUESTION DE RECHERCHE À CRITIQUE |
| 12 | 2027-01-31 | COMPARER DEUX MODÈLES DE FRÉQUENCE HORS ÉCHANTILLON | LANCER UNE V1.0 DE TON LABORATOIRE DE RISQUE | 12 MINUTES : MICRO-SOUTENANCE SCIENTIFIQUE EN ANGLAIS | 1 500 MOTS ET BILAN DE 12 SEMAINES DE MANUSCRIT | 12 SEMAINES : MESURER LES GAINS SANS FAUSSER LES CHIFFRES | BOSS FINAL : TROIS UTILISATEURS, UN LAB, UNE AMÉLIORATION PUBLIÉE |

Les *boss* ne sont pas de simples cours. Exemples : faire tester un outil par trois personnes et corriger un défaut, enseigner un vrai problème à deux novices avec six questions d'évaluation, soumettre une première PR open source, donner une présentation devant deux auditeurs, simuler cinq mille expositions de catastrophe à partir de données fictives, proposer un lemme Lean à la critique, parcourir un itinéraire sûr avec douze observations, ou faire reproduire un laboratoire de risques par trois testeurs.

La semaine **11–17 janvier 2027 (niveau 10)** est volontairement allégée : l'Exam P reste prioritaire. L'épreuve est déclarée « passée » uniquement si elle a réellement eu lieu. Aucun résultat n'est présumé. Aucun boss supplémentaire cette semaine.

## Bilan chaque dimanche

L'utilisateur **ne sélectionne pas à l'avance** les missions : elles sont toutes proposées. En fin de semaine, il coche seulement ce qui est effectivement accompli. La note facultative de chaque défi devrait contenir la mesure annoncée dans « MESURE À NOTER » (score, temps, commit, nombre de tests, durée de prise, mots, effort, etc.).

Exemple de bilan à envoyer ici :

```text
ACT-OD26-01-P — réalisé
Résultat : 10/15 ; 88 minutes ; 3 erreurs de conditionnement.

ACT-OD26-01-BUILD — réalisé
Résultat : lien de commit ; 3 tests verts ; 1 cas limite.

ACT-OD26-01-EN — réalisé
Résultat : 3 min ; 7 pauses >3 s ; 2 passages au français.
```

Les chiffres ci-dessus sont **des exemples fictifs**, pas des données observées. Le mentor ne remplit jamais les cases à la place de l'utilisateur et n'infère jamais qu'une tâche est terminée depuis un nombre de jours écoulés.

Les coches sont des **brouillons du navigateur**, non des événements GitHub. Quand le bilan copié est transmis, le mentor ajoute uniquement des événements `source: user`, `status: completed` avec note publique appropriée, sans révéler de données privées. Le suivi visuel des niveaux distingue les accomplissements publiés et les coches locales.

## La suite du parcours

À partir de février 2027, la revue hebdomadaire doit construire un **nouveau cycle de difficulté adaptée aux résultats réels** : davantage de recherche actuarielle indépendante, de contributions Lean/mathlib, de développement d'outils et d'expériences de terrain. Ne pas créer de répétitions vides, ne pas réintroduire FM sans décision, et ne pas inventer de progrès si les données de référence manquent.

Le marathon, les grandes randonnées, les examens et le doctorat sont des ambitions à horizon long ; chaque progression physique respecte la récupération, les conditions et les avis appropriés. Une rédaction originale sans IA reste réellement écrite par l'auteur. Tout projet actuariel public emploie des données autorisées, ouvertes ou synthétiques.
