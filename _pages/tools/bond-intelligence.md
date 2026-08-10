---
title: "Bonds"
permalink: /tools/bond-intelligence/
layout: single
author_profile: true
tool_theme: bonds
---
<link rel="stylesheet" href="/assets/css/bond-intelligence.css?v=5">
<div class="bi-shell">
  <header class="bi-hero"><span>Quantitative desk / fixed income</span><h1>Bonds</h1><p>Translate coupon, price, maturity and call terms into yield, interest-rate risk and scenario outcomes.</p></header>
  <section class="bi-curve"><div><span>Market reference</span><h2>Rates dashboard</h2><p id="biCurveDate">Loading cached rates…</p><strong id="biPolicyRate"></strong></div><div class="bi-curve-points" id="biCurve"></div></section>
  <main class="bi-main">
    <section class="bi-inputs"><header><span>01 / Market or manual</span><h2>Choose a bond or enter its terms</h2></header><div class="bi-picker"><div class="bi-picker-grid"><label>Market<select id="biMarket"></select></label><label>Category<select id="biCategory"></select></label><label>Issuer<select id="biIssuer"></select></label></div><label>Available bonds<select id="biBond" size="8"></select></label><p id="biBondMeta">Select a bond from the list to fill the analysis automatically, or choose Manual entry.</p></div><div class="bi-fields">
      <label>Face value<input id="biFace" type="number" value="1000" min="1"></label><label>Market price<input id="biPrice" type="number" value="980" min="0.01" step="0.01"></label><label>Coupon rate (%)<input id="biCoupon" type="number" value="4.5" step="0.01"></label><label>Years to maturity<input id="biYears" type="number" value="10" min="0.1" step="0.1"></label><label>Payments / year<select id="biFrequency"><option value="2">Semiannual</option><option value="1">Annual</option><option value="4">Quarterly</option></select></label><label>Call in years<input id="biCallYears" type="number" value="5" min="0" step="0.1"></label><label>Call price<input id="biCallPrice" type="number" value="1000" min="0" step="0.01"></label><label>Tax rate (%)<input id="biTax" type="number" value="0" min="0" max="100" step="0.1"></label>
    </div><button id="biAnalyze">Analyze bond →</button></section>
    <section class="bi-results"><header><span>02 / Analytics</span><h2>Yield & risk</h2></header><div class="bi-kpis" id="biKpis"></div><div class="bi-call-note" id="biCallNote"></div></section>
    <section class="bi-scenarios"><header><span>03 / Rate shocks</span><h2>Price sensitivity</h2></header><div class="bi-scenario-grid" id="biScenarios"></div></section>
    <section class="bi-guide"><header><span>04 / Decision framework</span><h2>How to read the result</h2></header><div class="bi-guide-grid" id="biGuide"></div></section>
  </main>
  <footer><b>METHOD</b><p>Yield-to-maturity and yield-to-call use discounted contractual cash flows. Yield-to-worst is the lower applicable yield. Prices exclude accrued interest. Verify credit quality, liquidity, call schedules, taxes and broker terms before trading.</p></footer>
</div>
<script src="/assets/js/bond-intelligence.js?v=4" defer></script>
