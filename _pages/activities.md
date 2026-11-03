---
title: Activities
permalink: /activities/
layout: single
author_profile: false
published: true
sitemap: false
excerpt: "Un carnet de défis, de décisions et de découvertes, relié à Becoming et à la Liste 100."
---

<link rel="stylesheet" href="{{ '/assets/css/activities.css' | relative_url }}?v=1">

<div class="activities-app" id="activities-app" data-lang="fr">
  <header class="act-hero">
    <p class="act-eyebrow" data-copy="eyebrow">LE CARNET DES POSSIBLES</p>
    <h2 data-copy="hero">De l’intention à l’expérience.</h2>
    <p id="act-intro">Des défis pour apprendre, oser et vivre davantage.</p>
    <div class="act-hero-foot">
      <p data-copy="promise">Je propose. Tu choisis. On garde la trace.</p>
      <div class="act-language" aria-label="Language / Langue">
        <button type="button" data-act-lang="fr" aria-pressed="true">FR</button>
        <button type="button" data-act-lang="en" aria-pressed="false">EN</button>
      </div>
    </div>
  </header>

  <aside class="act-mentor" aria-labelledby="act-mentor-title">
    <span class="act-eyebrow" id="act-mentor-title" data-copy="mentor">LE POINT DE DÉPART</span>
    <p id="act-mentor-note"></p>
    <small data-copy="load">Les défis réutilisent les séances de Becoming. Les grands horizons se construisent avec les petites actions.</small>
  </aside>

  <div class="act-stats" id="act-stats" aria-label="Progression"></div>
  <nav class="act-horizons" id="act-horizons" aria-label="Horizons"></nav>
  <p class="act-cadence" id="act-cadence"></p>

  <div class="act-toolbar">
    <div class="act-views" role="group" aria-label="View / Vue">
      <button type="button" data-act-view="challenges" aria-pressed="true" data-copy="challenges">Les défis</button>
      <button type="button" data-act-view="journal" aria-pressed="false" data-copy="journal">Le journal</button>
    </div>
    <label class="act-filter"><span data-copy="filter">État</span>
      <select id="act-status-filter"></select>
    </label>
    <label class="act-search"><span data-copy="search">Rechercher</span>
      <input type="search" id="act-search" autocomplete="off">
    </label>
  </div>
  <p id="act-results-count" class="act-result-count" aria-live="polite"></p>
  <section id="act-cards" class="act-grid" aria-label="Challenges / Défis"></section>
  <section id="act-journal" hidden aria-label="History / Historique"></section>

  <section class="act-report" aria-labelledby="act-report-heading">
    <div>
      <p class="act-eyebrow" data-copy="yourturn">À TOI DE JOUER</p>
      <h2 id="act-report-heading" data-copy="reportTitle">Ton prochain retour</h2>
      <p data-copy="reportHelp">Choisis « Répondre » sur un défi, ou dis-moi directement ici ce que tu acceptes, refuses, reportes ou réalises.</p>
      <p class="act-local-hint" data-copy="localHint">Les réponses saisies ici restent sur cet appareil. Copie ton bilan dans notre conversation pour que je mette à jour l’historique partagé. Évite les détails personnels que tu ne souhaites pas publier.</p>
    </div>
    <div>
      <label for="act-report-text" data-copy="reportLabel">Bilan à transmettre</label>
      <textarea id="act-report-text" rows="6" readonly></textarea>
      <button type="button" id="act-copy-report" class="act-primary" data-copy="copy">Copier mon bilan</button>
      <p id="act-notice" class="act-notice" role="status" aria-live="polite"></p>
    </div>
  </section>

  <details class="act-method">
    <summary data-copy="methodTitle">Comment les défis évoluent</summary>
    <ol>
      <li data-copy="rule1">Chaque semaine : jusqu’à trois propositions, ajustées à ta disponibilité et à tes retours.</li>
      <li data-copy="rule2">Deux défis mensuels et un par grand horizon. Une action peut faire avancer plusieurs objectifs ; elle n’est pas comptée plusieurs fois comme travail supplémentaire.</li>
      <li data-copy="rule3">Tu décides. Un refus ou un report reste une décision utile. Une échéance dépassée appelle un bilan, jamais un échec automatique.</li>
      <li data-copy="rule4">L’historique conserve les propositions, décisions et leçons. Ton récit suffit ; aucune preuve publique n’est exigée.</li>
    </ol>
    <div class="act-links">
      <a href="{{ '/becoming/' | relative_url }}">Becoming ↗</a>
      <a href="{{ '/list-100/' | relative_url }}" data-copy="listLink">Liste 100 ↗</a>
      <a href="{{ '/memories/' | relative_url }}" data-copy="memoriesLink">Memories ↗</a>
    </div>
  </details>
  <noscript>
    <p>Active JavaScript pour filtrer les défis et préparer ton bilan. Voici les propositions :</p>
    <ul>{% for challenge in site.data.activities.challenges %}<li><strong>{{ challenge.id | escape }} — {{ challenge.title.fr | escape }}</strong> ({{ challenge.due | escape }}) : {{ challenge.action.fr | escape }}</li>{% endfor %}</ul>
  </noscript>
</div>
<script id="activities-data" type="application/json">{{ site.data.activities | jsonify | replace: '<', '\u003c' }}</script>
<script defer src="{{ '/assets/js/activities.js' | relative_url }}?v=1"></script>
