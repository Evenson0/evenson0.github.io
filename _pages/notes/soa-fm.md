---
title: "SOA Exam FM Notes"
permalink: /notes/soa-fm/
layout: single
author_profile: false
classes: wide
mathjax: false
description: "Explore Exam FM financial mathematics through an interactive knowledge graph, cash-flow formulas, worked examples and derivations."
---

<link rel="stylesheet" href="{{ '/assets/css/soa-p-atlas.css' | relative_url }}?v=atlas-bilingual-20261012">
<link rel="stylesheet" href="{{ '/assets/css/soa-fm-atlas.css' | relative_url }}?v=atlas-bilingual-20261012">

<section class="p-atlas p-notes fm-atlas" id="fm-atlas" aria-label="SOA Exam FM Knowledge Atlas"
  data-practice-url="{{ '/assets/data/soa-fm-problems.json' | relative_url }}"
  data-practice-base-url="{{ '/tools/soa-fm-practice/' | relative_url }}">
  <header class="p-atlas__hero">
    <p class="p-atlas__eyebrow" data-i18n="eyebrowFM"><span class="p-atlas__dot" aria-hidden="true"></span> Quantitative Laboratory / Financial Mathematics</p>
    <h2 data-atlas-hero="FM">Financial math, <span>mapped.</span></h2>
    <p class="p-atlas__lede" data-i18n="ledeFM">
      A connected library of Exam FM notes: interest theory, annuities, loans,
      bonds, and asset-liability management. Explore the graph to connect formulas;
      switch to the chapter outline for focused reading and derivations.
    </p>
    <div class="p-atlas__hero-bottom">
      <div class="p-atlas__metrics" aria-label="Notes statistics">
        <div class="p-atlas__metric"><strong id="pa-chapter-count">05</strong><small data-i18n="chapters">Chapters</small></div>
        <div class="p-atlas__metric"><strong id="pa-topic-count">24</strong><small data-i18n="notes">Formula notes</small></div>
        <div class="p-atlas__metric"><strong id="pa-reviewed-count">00</strong><small data-i18n="reviewed">Reviewed here</small></div>
      </div>
      <nav class="p-atlas__links" aria-label="Related Exam FM resources">
        <a class="p-atlas__link p-atlas__link--primary" href="{{ '/tools/soa-fm-practice/' | relative_url }}" data-i18n="practice">Practice questions ↗</a>
        <a class="p-atlas__link" id="pa-classic-link" href="{{ '/notes/soa-fm/formula-boxes/' | relative_url }}" data-i18n="classic">Classic formula guide ↗</a>
        <a class="p-atlas__link" href="{{ '/notes/' | relative_url }}" data-i18n="allNotes">All notes ↗</a>
        {% assign p_pdf = site.static_files | where: "path", "/assets/pdf/soa-fm-notes.pdf" | first %}
        {% if p_pdf %}
        <a class="p-atlas__link" href="{{ '/assets/pdf/soa-fm-notes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" data-i18n="pdf">PDF notes ↗</a>
        {% endif %}
      </nav>
    </div>
  </header>

  <div class="p-atlas__toolbar">
    <div class="p-atlas__search-box">
      <input class="p-atlas__search" id="pa-search" data-i18n-placeholder="search" type="search"
        placeholder="Search topics, definitions, formulas..." autocomplete="off"
        aria-label="Search all Exam FM notes">
    </div>
    <div class="p-atlas__switch p-atlas__languages" role="group" aria-label="Language / Langue">
      <button id="pa-lang-fr" type="button" lang="fr" aria-pressed="false" aria-label="Français">FR</button>
      <button id="pa-lang-en" type="button" lang="en" aria-pressed="true" aria-label="English">EN</button>
    </div>
    <div class="p-atlas__switch" role="group" aria-label="Choose notes navigation">
      <button id="pa-graph-tab" data-i18n="graphTab" type="button" aria-pressed="true">◈ Graph</button>
      <button id="pa-outline-tab" data-i18n="outlineTab" type="button" aria-pressed="false">☷ Outline</button>
    </div>
  </div>

  <div class="p-atlas__workspace">
    <aside class="p-atlas__explorer" aria-label="Explore Exam FM topics">
      <div class="p-atlas__panel-heading">
        <h3 id="pa-explorer-title" data-i18n="graphTitle">Knowledge graph</h3>
        <span id="pa-result-count">24 / 24 topics</span>
      </div>

      <div id="pa-graph-panel">
        <div class="p-atlas__graph-stage">
          <svg class="p-atlas__map" id="pa-map" viewBox="0 0 440 520"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Interactive map of financial mathematics chapters and notes"></svg>
        </div>
        <div class="p-atlas__graph-footer">
          <span id="pa-map-subtitle">Select a chapter to explore its concepts.</span>
          <button class="p-atlas__back" id="pa-back-to-map" data-i18n="returnGraph" type="button" hidden>← All chapters</button>
        </div>
        <div class="p-atlas__legend" id="pa-legend" aria-label="Jump to a chapter"></div>
      </div>

      <div id="pa-outline-panel" hidden>
        <nav class="p-atlas__outline" id="pa-outline" aria-label="Chapter and topic list"></nav>
      </div>
      <p class="p-atlas__status" id="pa-status" role="status" aria-live="polite">
        Select a chapter or note to begin.
      </p>
    </aside>

    <main class="p-atlas__reader" id="pa-reader" aria-label="Selected Exam FM note" tabindex="-1">
      <div class="p-atlas__reader-top">
        <span class="p-atlas__crumb" id="pa-crumb">Probability / Chapter</span>
        <div class="p-atlas__reader-actions">
          <button class="p-atlas__smallbtn" type="button" id="pa-reviewed" aria-pressed="false" data-i18n="markReviewed">Mark reviewed</button>
          <a class="p-atlas__link" id="pa-chapter-link" href="{{ '/notes/soa-fm/formula-boxes/' | relative_url }}">Permanent section ↗</a>
        </div>
      </div>

      <span class="p-atlas__reading-label" id="pa-reader-label">CHAPTER OVERVIEW</span>
      <h2 class="p-atlas__reader-title" id="pa-reader-title">Select a chapter</h2>
      <p class="p-atlas__reader-hint" id="pa-reading-hint">
        Explore the graph or browse the outline to open a topic.
      </p>
      <div class="p-atlas__reading-content" id="pa-reading-content" aria-live="off"><p>Explore the graph or chapter outline above. If the interactive reader does not appear, you can still access the complete notes through the Classic formula guide.</p></div>
      <section class="fm-atlas__related" aria-labelledby="fm-related-heading">
        <div class="fm-atlas__related-heading">
          <div>
            <p class="p-atlas__reading-label" data-i18n="theoryPractice">FROM THEORY TO PRACTICE</p>
            <h3 id="fm-related-heading" data-i18n="related">Related FM exercises</h3>
          </div>
          <a class="p-atlas__smallbtn" href="{{ '/tools/soa-fm-practice/' | relative_url }}" data-i18n="allExercises">All exercises ↗</a>
        </div>
        <div id="fm-related-content" aria-live="polite">Finding related exercises...</div>
      </section>
      <div class="p-atlas__footer-nav" aria-label="Reading navigation">
        <button type="button" id="pa-prev" disabled>← <span id="pa-prev-label">Previous</span></button>
        <button type="button" id="pa-next">Next → <span id="pa-next-label">Next</span></button>
      </div>
    </main>
  </div>

  <noscript>
    <p>This interactive atlas requires JavaScript. All notes remain readable in the
      <a href="{{ '/notes/soa-fm/formula-boxes/' | relative_url }}">classic formula guide</a>.
    </p>
  </noscript>
</section>

<!-- Shared FM formula cards power both the interactive reader and classic guide. -->
<template id="fm-atlas-source">
{% include soa-fm-guide-cards.html %}
</template>
<script defer src="{{ '/assets/js/soa-atlas-language.js' | relative_url }}?v=atlas-bilingual-20261012"></script>
<script defer src="{{ '/assets/js/soa-fm-atlas.js' | relative_url }}?v=atlas-bilingual-20261012"></script>
