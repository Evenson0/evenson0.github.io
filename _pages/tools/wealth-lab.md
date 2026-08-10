---
title: "Personal Wealth Lab"
permalink: /tools/wealth-lab/
layout: single
author_profile: true
tool_theme: wealth
---
<link rel="stylesheet" href="/assets/css/wealth-lab.css?v=2">
<div class="wl-gate" id="wlGate"><div><span>Private simulation</span><h1>Personal Wealth Lab</h1><p>Enter the access code to open the calculator.</p><input id="wlCode" type="password" placeholder="Access code" autocomplete="current-password"><button id="wlUnlock">Unlock →</button><small id="wlGateError"></small></div></div>
<div class="wl-shell" id="wlShell" hidden>
 <header><span>Personal finance / annuities</span><h1>Wealth<br>Lab</h1><p>See how recurring contributions, time and compound returns build an account month by month.</p></header>
 <section class="wl-controls"><label>Start date<input id="wlStart" type="month" value="2026-08"></label><label>Initial amount ($)<input id="wlInitial" type="number" value="25"></label><label>Monthly contribution ($)<input id="wlMonthly" type="number" value="25"></label><label>Monthly return (%)<input id="wlRate" type="number" value="5" step="0.1"></label><label>Target ($)<input id="wlTarget" type="number" value="100000"></label><button id="wlRun">Calculate →</button></section>
 <main><section class="wl-kpis" id="wlKpis"></section><section class="wl-chart-card"><div><span>Account path</span><h2>Contributions vs growth</h2></div><div id="wlChart"></div></section><section class="wl-goals"><div><span>Goal solver</span><h2>What would it take?</h2></div><div id="wlGoals"></div></section><section class="wl-table-card"><div><span>Monthly ledger</span><h2>Every month of the account</h2></div><div class="wl-table-wrap"><table><thead><tr><th>Month</th><th>Contribution</th><th>Interest</th><th>Total contributed</th><th>Balance</th></tr></thead><tbody id="wlLedger"></tbody></table></div></section><section class="wl-formula"><span>Technical note</span><p id="wlFormula"></p></section></main>
 <footer><b>SIMULATION</b><p>Returns are assumed constant, compounded monthly, before taxes, fees and inflation. Actual market returns vary and losses are possible.</p></footer>
</div>
<script src="/assets/js/wealth-lab.js?v=2" defer></script>
