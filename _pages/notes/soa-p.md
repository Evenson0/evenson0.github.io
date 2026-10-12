---
title: "SOA Exam P Notes"
permalink: /notes/soa-p/
layout: single
author_profile: false
classes: wide
mathjax: false
description: "Explore probability concepts through an interactive knowledge graph, structured notes, derivations and worked examples for SOA Exam P."
---

<link rel="stylesheet" href="{{ '/assets/css/soa-p-notes.css' | relative_url }}?v=atlas-20261012-p-clean">
<link rel="stylesheet" href="{{ '/assets/css/soa-p-atlas.css' | relative_url }}?v=atlas-20261012-p-clean">

<section class="p-atlas p-notes" id="p-atlas" aria-label="SOA Exam P Knowledge Atlas">
  <header class="p-atlas__hero">
    <p class="p-atlas__eyebrow"><span class="p-atlas__dot" aria-hidden="true"></span> Quantitative Laboratory / Probability</p>
    <h2>Probability, <span>mapped.</span></h2>
    <p class="p-atlas__lede">
      A connected library of Exam P notes: definitions, key identities,
      derivations and worked examples. Follow the graph when you want to explore;
      switch to the chapter outline when you want to read.
    </p>
    <div class="p-atlas__hero-bottom">
      <div class="p-atlas__metrics" aria-label="Notes statistics">
        <div class="p-atlas__metric"><strong id="pa-chapter-count">04</strong><small>Chapters</small></div>
        <div class="p-atlas__metric"><strong id="pa-topic-count">16</strong><small>Study notes</small></div>
        <div class="p-atlas__metric"><strong id="pa-reviewed-count">00</strong><small>Reviewed here</small></div>
      </div>
      <nav class="p-atlas__links" aria-label="Related Exam P resources">
        <a class="p-atlas__link p-atlas__link--primary" href="{{ '/tools/soa-p-practice/' | relative_url }}">Practice questions ↗</a>
        <a class="p-atlas__link" href="{{ '/notes/' | relative_url }}">All notes ↗</a>
        {% assign p_pdf = site.static_files | where: "path", "/assets/pdf/soa-p-notes.pdf" | first %}
        {% if p_pdf %}
        <a class="p-atlas__link" href="{{ '/assets/pdf/soa-p-notes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">PDF notes ↗</a>
        {% endif %}
      </nav>
    </div>
  </header>

  <div class="p-atlas__toolbar">
    <div class="p-atlas__search-box">
      <input class="p-atlas__search" id="pa-search" type="search"
        placeholder="Search topics, definitions, formulas..." autocomplete="off"
        aria-label="Search all Exam P notes">
    </div>
    <div class="p-atlas__switch" role="group" aria-label="Choose notes navigation">
      <button id="pa-graph-tab" type="button" aria-pressed="true">◈ Graph</button>
      <button id="pa-outline-tab" type="button" aria-pressed="false">☷ Outline</button>
    </div>
  </div>

  <div class="p-atlas__workspace">
    <aside class="p-atlas__explorer" aria-label="Explore Exam P topics">
      <div class="p-atlas__panel-heading">
        <h3 id="pa-explorer-title">Knowledge graph</h3>
        <span id="pa-result-count">16 / 16 topics</span>
      </div>

      <div id="pa-graph-panel">
        <div class="p-atlas__graph-stage">
          <svg class="p-atlas__map" id="pa-map" viewBox="0 0 440 520"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Interactive map of probability chapters and notes"></svg>
        </div>
        <div class="p-atlas__graph-footer">
          <span id="pa-map-subtitle">Select a chapter to explore its concepts.</span>
          <button class="p-atlas__back" id="pa-back-to-map" type="button" hidden>← All chapters</button>
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

    <main class="p-atlas__reader" id="pa-reader" aria-label="Selected Exam P note" tabindex="-1">
      <div class="p-atlas__reader-top">
        <span class="p-atlas__crumb" id="pa-crumb">Probability / Chapter</span>
        <div class="p-atlas__reader-actions">
          <button class="p-atlas__smallbtn" type="button" id="pa-reviewed" aria-pressed="false">Mark reviewed</button>
        </div>
      </div>

      <span class="p-atlas__reading-label" id="pa-reader-label">CHAPTER OVERVIEW</span>
      <h2 class="p-atlas__reader-title" id="pa-reader-title">Select a chapter</h2>
      <p class="p-atlas__reader-hint" id="pa-reading-hint">
        Explore the graph or browse the outline to open a topic.
      </p>
      <div class="p-atlas__reading-content" id="pa-reading-content" aria-live="off"><p>Select a chapter in the graph or outline to read its complete formulas and worked examples.</p></div>
      <div class="p-atlas__footer-nav" aria-label="Reading navigation">
        <button type="button" id="pa-prev" disabled>← <span id="pa-prev-label">Previous</span></button>
        <button type="button" id="pa-next">Next → <span id="pa-next-label">Next</span></button>
      </div>
    </main>
  </div>

  <noscript>
    <p>The interactive graph requires JavaScript. You can still read all Exam P notes below.</p>
    <div class="p-notes" id="p-atlas-static-notes">
      {% include soa-p-guide-sections.html %}
    </div>
  </noscript>
</section>

<!-- Single source of truth for the Exam P atlas and no-JavaScript reading fallback. -->
<template id="p-atlas-source">
{% include soa-p-guide-sections.html %}
</template>
<script defer src="{{ '/assets/js/soa-p-atlas.js' | relative_url }}?v=atlas-20261012-p-clean"></script>
