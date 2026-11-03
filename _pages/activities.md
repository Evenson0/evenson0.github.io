---
title: Activities
permalink: /activities/
layout: single
author_profile: false
published: true
sitemap: false
excerpt: "Un carnet de défis qui me pousse à créer, découvrir, bouger et progresser."
---

<link rel="stylesheet" href="{{ '/assets/css/activities.css' | relative_url }}?v=2">

<div class="activities-app" id="activities-app" data-lang="fr">
  <header class="act-hero">
    <div class="act-hero-bar">
      <span class="act-eyebrow" data-copy="eyebrow">ACTIVITIES · LE CARNET DES POSSIBLES</span>
      <div class="act-language" aria-label="Language / Langue">
        <button type="button" data-act-lang="fr" aria-pressed="true">FR</button>
        <button type="button" data-act-lang="en" aria-pressed="false">EN</button>
      </div>
    </div>
    <h2 data-copy="hero">Des défis qui donnent envie d'oser.</h2>
    <p id="act-intro">Choisis un défi, tente-le et garde une trace de ce que tu as appris.</p>
    <p class="act-promise" data-copy="promise">Pas de points artificiels. Des expériences et des réalisations.</p>
  </header>

  <aside class="act-mentor" aria-labelledby="act-mentor-title">
    <span class="act-eyebrow" id="act-mentor-title" data-copy="mentor">LE MOT DU MENTOR</span>
    <p id="act-mentor-note"></p>
  </aside>

  <nav class="act-views" aria-label="Parcourir Activities">
    <button type="button" data-act-view="challenges" aria-pressed="true" data-copy="weekTab">Cette semaine</button>
    <button type="button" data-act-view="explore" aria-pressed="false" data-copy="exploreTab">Explorer les défis</button>
    <button type="button" data-act-view="journal" aria-pressed="false" data-copy="journal">Mon carnet</button>
  </nav>
  <p class="act-view-hint" id="act-view-hint" aria-live="polite"></p>

  <div id="act-discovery-controls" class="act-discovery-controls" hidden>
    <nav class="act-horizons" id="act-horizons" aria-label="Durée des défis"></nav>
    <div class="act-toolbar">
      <label class="act-filter">
        <span data-copy="domain">Domaine</span>
        <select id="act-category-filter"></select>
      </label>
      <details class="act-more-filters">
        <summary data-copy="moreFilters">Recherche et filtres</summary>
        <div class="act-extra-filters">
          <label class="act-filter"><span data-copy="filter">État</span>
            <select id="act-status-filter"></select>
          </label>
          <label class="act-search"><span data-copy="search">Rechercher</span>
            <input type="search" id="act-search" autocomplete="off">
          </label>
        </div>
      </details>
    </div>
    <p class="act-cadence" id="act-cadence"></p>
  </div>

  <p id="act-results-count" class="act-result-count" aria-live="polite"></p>
  <section id="act-cards" class="act-grid" aria-label="Défis"></section>
  <section id="act-journal" hidden aria-label="Historique des défis"></section>

  <section class="act-report" id="act-report" aria-labelledby="act-report-heading">
    <div>
      <span class="act-eyebrow" data-copy="yourturn">À TOI DE JOUER</span>
      <h2 id="act-report-heading" data-copy="reportTitle">Ton retour</h2>
      <p data-copy="reportHelp">Choisis « Je le tente » sur un défi, puis copie ton bilan pour me l'envoyer dans notre conversation.</p>
      <p class="act-local-hint" data-copy="localHint">Un choix ici reste un brouillon sur cet appareil : rien n'est envoyé ou publié automatiquement.</p>
    </div>
    <div>
      <label for="act-report-text" data-copy="reportLabel">Bilan prêt à transmettre</label>
      <textarea id="act-report-text" rows="5" readonly></textarea>
      <button type="button" id="act-copy-report" class="act-primary" data-copy="copy">Copier le bilan</button>
      <p id="act-notice" class="act-notice" role="status" aria-live="polite"></p>
    </div>
  </section>

  <details class="act-method">
    <summary data-copy="methodTitle">Comment ça marche ?</summary>
    <ol>
      <li data-copy="rule1">Choisis un défi parmi les propositions, sans obligation d'en accumuler.</li>
      <li data-copy="rule2">Tente-le à ton rythme : une version courte et une version ambitieuse sont proposées.</li>
      <li data-copy="rule3">Raconte-moi ce que tu as tenté ou décide de le reporter, sans échec automatique.</li>
      <li data-copy="rule4">Le carnet garde les décisions et les leçons. Toi seul valides tes réalisations.</li>
    </ol>
    <div class="act-links">
      <a href="{{ '/becoming/' | relative_url }}">Becoming</a>
      <a href="{{ '/list-100/' | relative_url }}" data-copy="listLink">Liste 100</a>
      <a href="{{ '/memories/' | relative_url }}" data-copy="memoriesLink">Memories</a>
    </div>
  </details>
  <noscript>
    <p>Active JavaScript pour parcourir les défis. Voici les propositions :</p>
    <ul>{% for challenge in site.data.activities.challenges %}<li><strong>{{ challenge.title.fr | escape }}</strong> : {{ challenge.action.fr | escape }}</li>{% endfor %}</ul>
  </noscript>
</div>
<script id="activities-data" type="application/json">{{ site.data.activities | jsonify | replace: '<', '\u003c' }}</script>
<script defer src="{{ '/assets/js/activities.js' | relative_url }}?v=2"></script>
