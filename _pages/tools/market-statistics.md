---
title: "Market Statistics"
permalink: /tools/market-statistics/
layout: single
author_profile: true
tool_theme: marketstats
---

<link rel="stylesheet" href="/assets/css/market-statistics.css?v=1">

<div class="ms-shell" id="marketStatistics">
  <header class="ms-hero">
    <div class="ms-eyebrow">Quantitative desk / market intelligence</div>
    <h1>Market<br>Statistics</h1>
    <p>Search an index, ETF or equity. Examine its return, risk, trend, drawdown and relationship to a benchmark.</p>
    <div class="ms-search-row">
      <label class="ms-search">
        <span>Instrument</span>
        <input id="msSearch" list="msUniverse" value="^GSPC" autocomplete="off" aria-label="Search an instrument">
        <datalist id="msUniverse"></datalist>
      </label>
      <button id="msAnalyze" type="button">Analyze <span>→</span></button>
    </div>
    <div class="ms-quick" id="msQuick" aria-label="Popular instruments"></div>
  </header>

  <div class="ms-status" id="msStatus" role="status">Loading the market dataset…</div>

  <main class="ms-workspace" id="msWorkspace" hidden>
    <section class="ms-identity">
      <div>
        <span id="msAssetType">Index</span>
        <h2 id="msAssetName">S&amp;P 500</h2>
        <p><b id="msAssetSymbol">^GSPC</b><i></i><span id="msAssetMarket">United States</span><i></i><span id="msUpdated">—</span></p>
      </div>
      <div class="ms-quote">
        <strong id="msLast">—</strong>
        <span id="msDay">—</span>
      </div>
    </section>

    <section class="ms-controls" aria-label="Analysis controls">
      <div class="ms-periods" id="msPeriods">
        <button data-period="63">3M</button><button data-period="126">6M</button><button class="active" data-period="252">1Y</button><button data-period="756">3Y</button><button data-period="all">5Y</button>
      </div>
      <label>Benchmark<select id="msBenchmark"></select></label>
    </section>

    <section class="ms-kpis" id="msKpis"></section>

    <section class="ms-grid">
      <article class="ms-card ms-chart-card ms-price-card">
        <header><div><span>Price study</span><h3>Trend & moving averages</h3></div><div class="ms-legend"><i class="price"></i>Price <i class="ma50"></i>50D <i class="ma200"></i>200D</div></header>
        <div class="ms-chart" id="msPriceChart"></div>
      </article>

      <article class="ms-card ms-regime-card">
        <header><div><span>Composite reading</span><h3>Market regime</h3></div></header>
        <div class="ms-gauge" id="msGauge"><div><strong>—</strong><span>/ 100</span></div></div>
        <h4 id="msRegimeLabel">Assessing</h4>
        <p id="msRegimeSummary"></p>
        <div class="ms-drivers" id="msDrivers"></div>
      </article>

      <article class="ms-card">
        <header><div><span>Capital path</span><h3>Drawdown</h3></div><strong id="msDrawdownNow">—</strong></header>
        <div class="ms-chart ms-small-chart" id="msDrawdownChart"></div>
      </article>

      <article class="ms-card">
        <header><div><span>Relative behaviour</span><h3>Rolling correlation</h3></div><strong id="msCorrelationNow">—</strong></header>
        <div class="ms-chart ms-small-chart" id="msCorrelationChart"></div>
      </article>

      <article class="ms-card ms-table-card">
        <header><div><span>Technical state</span><h3>Trend dashboard</h3></div></header>
        <div id="msTrendTable"></div>
      </article>

      <article class="ms-card ms-table-card">
        <header><div><span>Return profile</span><h3>Distribution</h3></div></header>
        <div class="ms-chart ms-histogram" id="msHistogram"></div>
        <div class="ms-distribution" id="msDistribution"></div>
      </article>
    </section>
  </main>

  <footer class="ms-note"><span>METHOD</span><p>Adjusted daily closes. Statistics are historical estimates, not forecasts. The regime score combines observable trend, momentum, volatility and participation signals; it does not represent investor advice or a survey of investor opinion.</p></footer>
</div>

<script src="/assets/js/market-statistics.js?v=1" defer></script>
