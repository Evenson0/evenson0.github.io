---
title: "Market Statistics"
permalink: /tools/market-statistics/
layout: single
author_profile: true
tool_theme: marketstats
---

<link rel="stylesheet" href="/assets/css/market-statistics.css?v=3">

<div class="ms-shell" id="marketStatistics">
  <header class="ms-hero">
    <div class="ms-eyebrow">Quantitative desk / market intelligence</div>
    <h1>Market<br>Statistics</h1>
    <p>Search an index, ETF or equity. Examine its return, risk, trend, drawdown and relationship to a benchmark.</p>
    <div class="ms-search-row">
      <label class="ms-search">
        <span>Global search</span>
        <input id="msSearch" list="msUniverse" value="^GSPC" placeholder="Ticker or name — AAPL, SPX, TSX…" autocomplete="off" aria-label="Search an index, ETF, or equity">
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

    <nav class="ms-view-tabs" id="msViewTabs" aria-label="Research views">
      <button class="active" data-view="overview">Overview</button><button data-view="market">Market &amp; indices</button><button data-view="financials">Financials</button><button data-view="economy">Macro &amp; micro</button><button data-view="news">News &amp; decision</button>
    </nav>

    <div class="ms-view active" data-panel="overview">
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
    </div>

    <div class="ms-view" data-panel="market">
      <section class="ms-detail-grid"><article class="ms-card"><header><div><span>Security identity</span><h3>Listing &amp; market</h3></div></header><div id="msListing"></div></article><article class="ms-card"><header><div><span>Benchmark map</span><h3>Index membership</h3></div></header><div id="msMemberships"></div></article><article class="ms-card ms-wide"><header><div><span>Relationship map</span><h3>Most correlated equities</h3></div><strong id="msCorrWindow">Selected period</strong></header><div id="msCorrelationLeaders"></div></article></section>
    </div>

    <div class="ms-view" data-panel="financials"><section class="ms-detail-grid"><article class="ms-card ms-wide"><header><div><span>Company reported</span><h3>Latest quarterly results</h3></div></header><div id="msFinancials"></div></article><article class="ms-card"><header><div><span>Market valuation</span><h3>Valuation context</h3></div></header><div id="msValuation"></div></article><article class="ms-card"><header><div><span>Evidence</span><h3>Data posture</h3></div></header><div id="msFinancialNote"></div></article></section></div>

    <div class="ms-view" data-panel="economy"><section class="ms-detail-grid"><article class="ms-card"><header><div><span>Top-down lens</span><h3>Macro sensitivities</h3></div></header><div id="msMacro"></div></article><article class="ms-card"><header><div><span>Bottom-up lens</span><h3>Micro drivers</h3></div></header><div id="msMicro"></div></article><article class="ms-card ms-wide"><header><div><span>Scenario monitor</span><h3>What to watch</h3></div></header><div id="msWatch"></div></article></section></div>

    <div class="ms-view" data-panel="news"><section class="ms-detail-grid"><article class="ms-card ms-wide"><header><div><span>Latest coverage</span><h3>Company news</h3></div></header><div id="msCompanyNews"></div></article><article class="ms-card"><header><div><span>Decision support</span><h3>Signal balance</h3></div></header><div id="msDecision"></div></article><article class="ms-card"><header><div><span>Discipline</span><h3>Proof &amp; invalidation</h3></div></header><div id="msProof"></div></article></section></div>
  </main>

  <footer class="ms-note"><span>METHOD</span><p>Adjusted daily closes. Statistics are historical estimates, not forecasts. The regime score combines observable trend, momentum, volatility and participation signals; it does not represent investor advice or a survey of investor opinion.</p></footer>
</div>

<script src="/assets/js/market-statistics.js?v=3" defer></script>
