---
title: "Portfolio Lab"
permalink: /tools/portfolio-lab/
layout: single
author_profile: false
tool_theme: portfolio-lab
---
<link rel="stylesheet" href="{{ '/assets/css/portfolio-lab.css' | relative_url }}">

<div class="pl-shell" id="plApp" data-source="{{ '/assets/data/portfolio-lab.json' | relative_url }}">
  <header class="pl-hero">
    <div class="pl-hero__top">
      <span class="pl-eyebrow" data-i18n="eyebrow">PUBLIC RESEARCH LEDGER</span>
      <div class="pl-lang" aria-label="Language">
        <button type="button" data-lang="en" class="is-active">EN</button>
        <button type="button" data-lang="fr">FR</button>
      </div>
    </div>

    <div class="pl-hero__grid">
      <div>
        <h1>Portfolio<br>Lab</h1>
        <p data-i18n="intro">
          A public research view of positions I am actively studying.
          Account balances, quantities, cash and deposits remain private.
        </p>
      </div>

      <div class="pl-hero__note">
        <span data-i18n="principleLabel">PRINCIPLE</span>
        <strong data-i18n="principle">Track the thesis, not the ego.</strong>
        <p data-i18n="principleCopy">
          A +10% level is a review trigger, not a promise, forecast,
          or reason to hold a broken thesis.
        </p>
      </div>
    </div>
  </header>

  <section class="pl-statusbar">
    <div><span data-i18n="asOf">Snapshot</span><strong id="plAsOf">—</strong></div>
    <div><span data-i18n="fx">USD/CAD</span><strong id="plFx">—</strong></div>
    <div><span data-i18n="tracked">Tracked positions</span><strong id="plTracked">—</strong></div>
    <div><span data-i18n="privacy">Privacy</span><strong data-i18n="privacyValue">Balances hidden</strong></div>
  </section>

  <main>
    <section class="pl-section">
      <div class="pl-section__head">
        <div>
          <span class="pl-kicker" data-i18n="monitoring">MONITORING</span>
          <h2 data-i18n="positionsTitle">Positions under review</h2>
        </div>
        <p data-i18n="positionsCopy">
          Prices are a dated snapshot. Select a position to inspect the thesis,
          catalyst, risks and exit discipline.
        </p>
      </div>
      <div class="pl-grid" id="plCards"></div>
    </section>

    <section class="pl-section pl-detail-section" id="plDetailSection">
      <div class="pl-detail" id="plDetail">
        <div class="pl-empty" data-i18n="selectPosition">
          Select a position above to open the research note.
        </div>
      </div>
    </section>

    <section class="pl-section">
      <div class="pl-section__head">
        <div>
          <span class="pl-kicker" data-i18n="ledger">LEDGER</span>
          <h2 data-i18n="tableTitle">Public tracking table</h2>
        </div>
        <p data-i18n="tableCopy">
          The review level is derived from a personal +10% rule.
          It is not a target price or investment recommendation.
        </p>
      </div>

      <div class="pl-table-wrap">
        <table>
          <thead>
            <tr>
              <th data-i18n="ticker">Ticker</th>
              <th data-i18n="priceUsd">Price USD</th>
              <th data-i18n="priceCad">CAD equivalent</th>
              <th data-i18n="reviewLevel">+10% review</th>
              <th data-i18n="distance">Distance</th>
              <th data-i18n="risk">Risk</th>
            </tr>
          </thead>
          <tbody id="plTable"></tbody>
        </table>
      </div>
    </section>

    <section class="pl-method">
      <div>
        <span class="pl-kicker" data-i18n="method">METHOD</span>
        <h2 data-i18n="methodTitle">What this page is measuring</h2>
      </div>

      <div class="pl-method__grid">
        <article>
          <span>01</span>
          <h3 data-i18n="m1Title">Thesis</h3>
          <p data-i18n="m1Copy">
            Why the security is worth following and what must be true for the idea to work.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3 data-i18n="m2Title">Evidence</h3>
          <p data-i18n="m2Copy">
            Operating metrics, earnings, catalysts and risks that can strengthen or weaken the thesis.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3 data-i18n="m3Title">Discipline</h3>
          <p data-i18n="m3Copy">
            A review rule prevents a price objective from replacing fundamental judgment.
          </p>
        </article>
      </div>
    </section>
  </main>

  <footer class="pl-footer">
    <strong>RESEARCH PROJECT</strong>
    <p data-i18n="footer">
      Personal research project. Not investment advice. Market data shown here may be delayed or stale.
    </p>
  </footer>
</div>

{% assign portfolio_lab_cache = site.github.build_revision | default: site.time %}
<script
  src="{{ '/assets/js/portfolio-lab.js' | relative_url }}?v={{ portfolio_lab_cache | date: '%s' }}"
  defer
></script>
