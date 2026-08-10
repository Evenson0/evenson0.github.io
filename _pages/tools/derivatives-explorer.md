---
title: "Derivatives Explorer"
permalink: /tools/derivatives-explorer/
layout: single
author_profile: true
tool_theme: derivatives
---
<link rel="stylesheet" href="/assets/css/derivatives-explorer.css?v=2">
<div class="dx-shell">
  <header class="dx-hero"><span>Quantitative desk / listed options</span><h1>Derivatives<br>Explorer</h1><p>Inspect expirations, strikes, liquidity and risk. Translate a market view into transparent option scenarios.</p></header>
  <section class="dx-controls"><label>Underlying<select id="dxSymbol"></select></label><label>Expiration<select id="dxExpiry"></select></label><label>Outlook<select id="dxOutlook"><option value="bullish">Bullish</option><option value="bearish">Bearish</option><option value="neutral">Neutral</option></select></label><button id="dxRun">Build scenario →</button></section>
  <div class="dx-status" id="dxStatus">Loading option chains…</div>
  <main id="dxWorkspace" hidden>
    <section class="dx-snapshot"><div><span>Underlying</span><strong id="dxName">—</strong></div><div><span>Spot</span><strong id="dxSpot">—</strong></div><div><span>Expiration</span><strong id="dxDate">—</strong></div><div><span>Days remaining</span><strong id="dxDte">—</strong></div></section>
    <nav class="dx-tabs" id="dxTabs"><button class="active" data-view="chain">Option chain</button><button data-view="strategy">Strategy lab</button><button data-view="scenario">Payoff scenarios</button><button data-view="method">Method & risk</button></nav>
    <section class="dx-view active" data-panel="chain"><div class="dx-chain-grid"><article><h2>Calls</h2><div class="dx-table-wrap"><table><thead><tr><th>Strike</th><th>Bid</th><th>Ask</th><th>IV</th><th>Delta</th><th>Volume</th><th>OI</th></tr></thead><tbody id="dxCalls"></tbody></table></div></article><article><h2>Puts</h2><div class="dx-table-wrap"><table><thead><tr><th>Strike</th><th>Bid</th><th>Ask</th><th>IV</th><th>Delta</th><th>Volume</th><th>OI</th></tr></thead><tbody id="dxPuts"></tbody></table></div></article></div></section>
    <section class="dx-view" data-panel="strategy"><div class="dx-strategy-grid" id="dxStrategies"></div></section>
    <section class="dx-view" data-panel="scenario"><article class="dx-panel"><h2 id="dxScenarioTitle">Selected structure</h2><div id="dxScenarioSummary"></div><div class="dx-payoff" id="dxPayoff"></div></article></section>
    <section class="dx-view" data-panel="method"><article class="dx-panel"><h2>How to use this desk</h2><div class="dx-method"><p><b>Market data</b> is delayed and cached. Confirm every quote, contract multiplier and trading permission with your broker.</p><p><b>Greeks</b> are Black–Scholes estimates using displayed implied volatility and a 4% reference rate.</p><p><b>Strategies</b> organize contracts around an outlook. They are educational comparisons, not personalized instructions or executable orders.</p><p><b>Risk</b> includes spread, assignment, early exercise, volatility crush, gap risk and total premium loss.</p></div></article></section>
  </main>
  <footer><b>DATA NOTE</b><p>Availability on IBKR depends on jurisdiction, account permissions and market-data subscriptions. Options can lose their full value.</p></footer>
</div>
<script src="/assets/js/derivatives-explorer.js?v=2" defer></script>
