---
title: "Market Lab"
permalink: /tools/market-lab/
layout: single
author_profile: true
tool_theme: marketlab
---

<link rel="stylesheet" href="/assets/css/market-lab.css?v=1">

<div class="ml-shell" id="marketLab">
  <header class="ml-hero">
    <div>
      <div class="ml-kicker"><span></span> Global market intelligence</div>
      <h1>Market Lab</h1>
      <p>A live reading room for global sessions, cross-asset signals, macro conditions and corporate events.</p>
    </div>
    <div class="ml-sync-panel">
      <span class="ml-sync-label">Market snapshot</span>
      <strong id="mlUpdated">Loading data…</strong>
      <button class="ml-refresh" id="mlRefresh" type="button"><span>↻</span> Refresh</button>
    </div>
  </header>

  <section class="ml-clock-section" aria-labelledby="mlClockTitle">
    <div class="ml-section-head">
      <div><span class="ml-index">01</span><h2 id="mlClockTitle">The trading day</h2></div>
      <p>One orbit, six financial centres</p>
    </div>
    <div class="ml-clock-layout">
      <div class="ml-orbit" aria-label="Global market clock">
        <div class="ml-orbit-ring"></div>
        <div class="ml-orbit-core"><span id="mlLocalTime">--:--:--</span><small>Montréal</small></div>
        <div id="mlOrbitMarkets"></div>
      </div>
      <div class="ml-session-ledger" id="mlSessionLedger"></div>
    </div>
  </section>

  <div class="ml-tape" aria-label="Market ticker"><div id="mlTape"></div></div>

  <main class="ml-grid">
    <section class="ml-panel ml-briefing">
      <div class="ml-panel-head"><div><span>Briefing</span><h2>What is moving markets</h2></div><small id="mlNewsCount">0 stories</small></div>
      <div class="ml-stories" id="mlStories"><div class="ml-empty">Collecting the latest market signals…</div></div>
    </section>

    <section class="ml-panel ml-pulse">
      <div class="ml-panel-head"><div><span>Cross-asset</span><h2>Market pulse</h2></div><div class="ml-regime" id="mlRegime">Assessing</div></div>
      <div class="ml-pulse-list" id="mlPulse"></div>
      <div class="ml-breadth"><div><span>Risk breadth</span><strong id="mlBreadthValue">—</strong></div><div class="ml-breadth-track"><i id="mlBreadthBar"></i></div></div>
    </section>

    <section class="ml-panel ml-markets">
      <div class="ml-panel-head"><div><span>Price board</span><h2>Global markets</h2></div><nav class="ml-tabs" id="mlTabs" aria-label="Asset classes"></nav></div>
      <div class="ml-table-wrap">
        <table class="ml-table"><thead><tr><th>Instrument</th><th>Last</th><th>Day</th><th>Range</th><th>Signal</th></tr></thead><tbody id="mlMarketRows"></tbody></table>
      </div>
    </section>

    <section class="ml-panel ml-rates">
      <div class="ml-panel-head"><div><span>Fixed income</span><h2>Yield curve</h2></div><small>US Treasury proxies</small></div>
      <div class="ml-curve" id="mlCurve"></div>
      <div class="ml-curve-note"><span>Curve signal</span><strong id="mlCurveSignal">Awaiting observations</strong></div>
    </section>

    <section class="ml-panel ml-calendar">
      <div class="ml-panel-head"><div><span>Macro radar</span><h2>Economic watch</h2></div><small>Key recurring releases</small></div>
      <div class="ml-events" id="mlMacroEvents"></div>
    </section>

    <section class="ml-panel ml-earnings">
      <div class="ml-panel-head"><div><span>Corporate desk</span><h2>Earnings & filings</h2></div><small>Official links when available</small></div>
      <div class="ml-earnings-list" id="mlEarnings"></div>
    </section>
  </main>

  <section class="ml-desk">
    <div class="ml-section-head"><div><span class="ml-index">02</span><h2>Quantitative desk</h2></div><p>Move from observation to analysis</p></div>
    <div class="ml-tool-grid">
      <a href="/tools/market-statistics/"><span>Analytics</span><strong>Market Statistics</strong><p>Study performance, risk, trend, drawdown and correlation for indices, ETFs and equities.</p><i>Open terminal ↗</i></a>
      <a href="/tools/derivatives-explorer/"><span>Derivatives</span><strong>Derivatives Explorer</strong><p>Compare option chains, expirations, strategies and scenario payoffs.</p><i>Open terminal ↗</i></a>
      <a href="/tools/bond-intelligence/"><span>Fixed income</span><strong>Bonds</strong><p>Compare coupons, yields, duration, call risk and interest-rate scenarios.</p><i>Open terminal ↗</i></a>
    </div>
  </section>

  <footer class="ml-disclosure">
    <span>DATA NOTE</span>
    <p>Quotes may be delayed and are provided for education and market observation, not investment advice. Source links lead to their original publishers.</p>
  </footer>
</div>

<script src="/assets/js/market-lab.js?v=1" defer></script>
