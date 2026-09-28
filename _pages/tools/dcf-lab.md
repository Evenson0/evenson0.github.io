---
layout: single
title: "DCF Lab"
permalink: /tools/dcf-lab/
tool_theme: finance
author_profile: true
---

<style>
  .dcf-shell {
    max-width: 1080px;
    margin: 2rem auto;
    padding: 2.2rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 22px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.05),
      rgba(127,127,127,0.025)
    );
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
  }

  .dcf-lead {
    margin-bottom: 0.7rem;
    font-size: 1.05rem;
    line-height: 1.85;
    opacity: 0.92;
  }

  .dcf-sublead {
    margin-top: 0;
    line-height: 1.8;
    opacity: 0.75;
  }

  .dcf-rule {
    border: none;
    border-top: 1px solid rgba(127,127,127,0.22);
    margin: 2rem 0;
  }

  .dcf-section-title { margin: 0 0 0.4rem 0; }
  .dcf-section-desc { margin: 0 0 1.2rem 0; line-height: 1.75; opacity: 0.78; }
  .dcf-h3 { margin: 1.6rem 0 0.6rem 0; font-size: 1.05rem; }

  .dcf-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-bottom: 1.4rem;
  }

  .dcf-select, .dcf-input {
    padding: 0.6rem 0.7rem;
    font: inherit;
    font-size: 0.95rem;
    color: inherit;
    background: rgba(127,127,127,0.07);
    border: 1px solid rgba(127,127,127,0.25);
    border-radius: 10px;
  }

  .dcf-select { min-width: 220px; max-width: 100%; }
  .dcf-input { width: 110px; text-align: right; }
  .dcf-input:focus, .dcf-select:focus {
    outline: none;
    border-color: rgba(22,163,74,0.55);
    box-shadow: 0 0 0 2px rgba(22,163,74,0.15);
  }

  .dcf-btn {
    border: 1px solid rgba(127,127,127,0.20);
    border-radius: 12px;
    padding: 0.65rem 1rem;
    font: inherit;
    font-weight: 700;
    font-size: 0.92rem;
    cursor: pointer;
    background: linear-gradient(180deg, rgba(127,127,127,0.10), rgba(127,127,127,0.05));
    color: inherit;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .dcf-btn:hover {
    transform: translateY(-2px);
    border-color: rgba(22,163,74,0.35);
    box-shadow: 0 0 16px rgba(22,163,74,0.12);
  }

  .dcf-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 14px;
    margin-bottom: 1.4rem;
  }

  .dcf-field {
    border: 1px solid rgba(127,127,127,0.16);
    border-radius: 14px;
    padding: 0.9rem 1rem;
    background: rgba(127,127,127,0.03);
  }

  .dcf-field label {
    display: block;
    font-size: 0.82rem;
    font-weight: 700;
    opacity: 0.75;
    margin-bottom: 0.45rem;
    line-height: 1.4;
  }

  .dcf-field .dcf-input { width: 100%; box-sizing: border-box; }

  .dcf-field .dcf-auto {
    display: block;
    margin-top: 0.4rem;
    font-size: 0.78rem;
    opacity: 0.6;
  }

  .dcf-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
    margin-bottom: 1.6rem;
  }

  .dcf-card {
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 16px;
    padding: 1.1rem 1.2rem;
    background: rgba(127,127,127,0.03);
  }

  .dcf-card.base {
    border-color: rgba(22,163,74,0.4);
    background: rgba(22,163,74,0.06);
  }

  .dcf-card h4 { margin: 0 0 0.5rem 0; font-size: 0.9rem; opacity: 0.8; }

  .dcf-card .dcf-big {
    font-size: 1.7rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }

  .dcf-card .dcf-sub { font-size: 0.85rem; opacity: 0.75; line-height: 1.6; }

  .dcf-up { color: #16a34a; font-weight: 700; }
  .dcf-down { color: #dc2626; font-weight: 700; }

  .dcf-kv {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-bottom: 1.6rem;
  }

  .dcf-kv div {
    border: 1px solid rgba(127,127,127,0.14);
    border-radius: 12px;
    padding: 0.7rem 0.9rem;
    font-size: 0.88rem;
    background: rgba(127,127,127,0.02);
  }

  .dcf-kv b { display: block; font-size: 1.05rem; margin-top: 0.2rem; }
  .dcf-kv span { opacity: 0.7; font-size: 0.8rem; }

  .dcf-table-wrap {
    overflow-x: auto;
    margin-bottom: 1.4rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 16px;
    background: rgba(127,127,127,0.03);
  }

  table.dcf-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    margin: 0;
  }

  table.dcf-table th, table.dcf-table td {
    padding: 0.5rem 0.55rem;
    text-align: right;
    border-bottom: 1px solid rgba(127,127,127,0.12);
    white-space: nowrap;
  }

  table.dcf-table thead th {
    font-weight: 800;
    opacity: 0.85;
    border-bottom: 1px solid rgba(127,127,127,0.25);
  }

  table.dcf-table th.dcf-rowhead, table.dcf-table td.dcf-rowhead {
    text-align: left;
    font-weight: 700;
    position: sticky;
    left: 0;
    background: inherit;
  }

  table.dcf-table td.dcf-heat { font-weight: 700; }

  .dcf-bars { margin: 0.5rem 0 1.6rem 0; }

  .dcf-bar-row {
    display: grid;
    grid-template-columns: 90px 1fr 90px;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }

  .dcf-bar-track {
    position: relative;
    height: 26px;
    border-radius: 8px;
    background: rgba(127,127,127,0.10);
    overflow: visible;
  }

  .dcf-bar-fill {
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(22,163,74,0.55), rgba(22,163,74,0.85));
    min-width: 3px;
  }

  .dcf-bar-row.low .dcf-bar-fill {
    background: linear-gradient(90deg, rgba(220,38,38,0.45), rgba(220,38,38,0.75));
  }

  .dcf-bar-price {
    position: absolute;
    top: -4px;
    bottom: -4px;
    width: 2px;
    background: #111;
  }

  .dcf-bar-val { text-align: right; font-weight: 700; }

  .dcf-legend { font-size: 0.82rem; opacity: 0.7; margin-bottom: 1rem; }
  .dcf-legend .sw { display: inline-block; width: 14px; height: 4px; background: #111; vertical-align: middle; margin: 0 4px; }

  .dcf-formula {
    padding: 1.1rem 1.3rem;
    margin: 1rem 0;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 14px;
    background: rgba(127,127,127,0.04);
    line-height: 2.1;
    overflow-x: auto;
    white-space: nowrap;
  }

  .dcf-note { margin-top: 1rem; line-height: 1.85; opacity: 0.82; }
  .dcf-error { color: #ef4444; font-weight: 600; margin-bottom: 1rem; line-height: 1.7; }
  .dcf-loading { opacity: 0.7; padding: 2rem 0; text-align: center; }

  .dcf-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 2.3rem;
  }
  .dcf-nav a { text-decoration: none !important; }

  @media (max-width: 720px) {
    .dcf-shell { padding: 1.2rem; }
    .dcf-bar-row { grid-template-columns: 64px 1fr 76px; }
  }
</style>

<div class="dcf-shell">

  <h1 class="dcf-section-title">DCF Lab</h1>

  <p class="dcf-lead">
    Value any stock in your watchlists with a discounted cash flow model —
    no spreadsheets, no manual data entry.
  </p>
  <p class="dcf-sublead">
    Fundamentals are fetched automatically every trading day. Pick a company,
    review the pre-filled assumptions, change anything you disagree with, and
    watch the valuation respond. Data as of <span id="dcf-updated">…</span>.
  </p>

  <div class="dcf-loading" id="dcf-loading">Loading market data…</div>
  <div class="dcf-error" id="dcf-error" style="display:none;"></div>

  <div id="dcf-app" style="display:none;">

    <hr class="dcf-rule">

    <h2 class="dcf-section-title">1 · Company</h2>
    <p class="dcf-section-desc">
      Symbols are grouped by Yahoo Finance watchlist. Type to filter.
    </p>

    <div class="dcf-controls">
      <input class="dcf-input" style="width:200px;text-align:left;" id="dcf-filter"
             type="text" placeholder="Filter symbols…" aria-label="Filter symbols">
      <select class="dcf-select" id="dcf-symbol" aria-label="Select company"></select>
    </div>

    <div class="dcf-kv" id="dcf-snapshot"></div>

    <hr class="dcf-rule">

    <h2 class="dcf-section-title">2 · Assumptions</h2>
    <p class="dcf-section-desc">
      Every input starts from an automatic default computed from observed data
      (shown below each field). Override any of them — the valuation below
      recomputes instantly.
    </p>

    <div class="dcf-grid" id="dcf-assumptions"></div>

    <div class="dcf-controls">
      <button class="dcf-btn" id="dcf-reset">Reset to automatic defaults</button>
    </div>

    <hr class="dcf-rule">

    <h2 class="dcf-section-title">3 · Valuation</h2>
    <p class="dcf-section-desc" id="dcf-val-desc"></p>

    <div class="dcf-cards" id="dcf-cards"></div>

    <div class="dcf-legend">
      Bars show implied value per share by scenario; the
      <span class="sw"></span> line marks the observed market price.
    </div>
    <div class="dcf-bars" id="dcf-bars"></div>

    <div class="dcf-kv" id="dcf-extra"></div>

    <hr class="dcf-rule">

    <h2 class="dcf-section-title">4 · Sensitivity</h2>
    <p class="dcf-section-desc">
      How the base-case value per share moves when two key assumptions change.
      Green = above the base case, red = below.
    </p>

    <h3 class="dcf-h3">Discount rate × terminal growth</h3>
    <div class="dcf-table-wrap">
      <table class="dcf-table" id="dcf-sens1"></table>
    </div>

    <h3 class="dcf-h3">FCF growth × FCF margin</h3>
    <div class="dcf-table-wrap">
      <table class="dcf-table" id="dcf-sens2"></table>
    </div>
    <p class="dcf-section-desc" id="dcf-sens2-note" style="display:none;">
      Margin sensitivity needs revenue history, which is unavailable for this company.
    </p>

    <hr class="dcf-rule">

    <h2 class="dcf-section-title">How it works</h2>

    <div class="dcf-formula">
      FCF<sub>t</sub> = FCF<sub>0</sub> × (1 + g)<sup>t</sup>
      &nbsp;&nbsp;·&nbsp;&nbsp;
      PV = &Sigma;<sub>t=1..n</sub> FCF<sub>t</sub> / (1 + r)<sup>t</sup>
      &nbsp;&nbsp;·&nbsp;&nbsp;
      TV = FCF<sub>n</sub> × (1 + g<sub>term</sub>) / (r − g<sub>term</sub>)
    </div>
    <div class="dcf-formula">
      Enterprise value = PV(FCFs) + PV(TV)
      &nbsp;&nbsp;·&nbsp;&nbsp;
      Equity value = EV − net debt
      &nbsp;&nbsp;·&nbsp;&nbsp;
      Per share = equity / shares outstanding
    </div>

    <p class="dcf-note">
      <strong>Assumptions.</strong> Base FCF defaults to the latest observed
      annual free cash flow (or the average of positive years if the latest is
      not positive). Base growth defaults to the historical FCF CAGR, bounded
      between −5% and +15%. The discount rate defaults to a WACC built from
      CAPM (4% risk-free + β × 5% equity risk premium) and the observed cost of
      debt, falling back to the cost of equity when debt data is incomplete.
      High/low scenarios shift growth by ±5 points.
    </p>
    <p class="dcf-note">
      <strong>Limits.</strong> A DCF is only as good as its inputs: it assumes
      smooth exponential FCF growth, a stable capital structure, and that the
      past informs the future. Small changes in the discount rate or terminal
      growth move the answer a lot — the sensitivity tables exist to make that
      fragility visible. It is one lens among many, not a price target.
    </p>
    <p class="dcf-note" style="opacity:0.6;">
      For illustration and education only — not investment advice.
      Fundamentals via Yahoo Finance; data may be delayed or incomplete.
    </p>

    <div class="dcf-nav">
      <a href="/tools/chain-ladder/">← Previous</a>
      <a href="/tools/">Quantitative Laboratory →</a>
    </div>

  </div>
</div>

<script>
// DCF-START — pure valuation math; mirrors the public dcf.py framework.
function dcfValue(fcfBase, g, wacc, gTerm, years, netDebt, shares) {
  if (!(wacc > gTerm)) return null;
  let pvFcf = 0;
  const proj = [];
  for (let t = 1; t <= years; t++) {
    const f = fcfBase * Math.pow(1 + g, t);
    proj.push(f);
    pvFcf += f / Math.pow(1 + wacc, t);
  }
  const fcfN = proj[proj.length - 1];
  const vt = fcfN * (1 + gTerm) / (wacc - gTerm);
  const pvVt = vt / Math.pow(1 + wacc, years);
  const ve = pvFcf + pvVt;
  const equity = ve - netDebt;
  return {
    proj: proj, pvFcf: pvFcf, vt: vt, pvVt: pvVt, ve: ve, equity: equity,
    perShare: shares && shares > 0 ? equity / shares : null,
    terminalShare: ve ? pvVt / ve : null
  };
}

function dcfImpliedGrowth(fcfBase, wacc, gTerm, years, netDebt, shares, price) {
  if (!(shares > 0)) return null;
  const val = g => {
    const r = dcfValue(fcfBase, g, wacc, gTerm, years, netDebt, shares);
    return r ? r.perShare : null;
  };
  let lo = -0.30, hi = 0.60;
  const vLo = val(lo), vHi = val(hi);
  if (vLo == null || vHi == null) return null;
  if (!((vLo <= price && price <= vHi) || (vHi <= price && price <= vLo))) return null;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if ((val(lo) - price) * (val(mid) - price) <= 0) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}
// DCF-END

const DATA_URL = "{{ '/assets/data/dcf-lab.json' | relative_url }}";
let DCF = null;
let SYM = "SFM";
let AUTO = {};   // automatic defaults for the current symbol

function fmtMoney(x, cur) {
  if (x == null || !isFinite(x)) return "n/a";
  const s = cur === "CAD" ? "CA$" : "$";
  const a = Math.abs(x);
  if (a >= 1e9) return s + (x / 1e9).toFixed(2) + "B";
  if (a >= 1e6) return s + (x / 1e6).toFixed(1) + "M";
  if (a >= 1e3) return s + (x / 1e3).toFixed(1) + "K";
  return s + x.toFixed(2);
}

function fmtPct(x, d) {
  if (x == null || !isFinite(x)) return "n/a";
  return (x * 100).toFixed(d == null ? 1 : d) + "%";
}

function fmtPx(x, cur) {
  if (x == null || !isFinite(x)) return "n/a";
  const s = cur === "CAD" ? "CA$" : "$";
  return s + x.toFixed(2);
}

function el(id) { return document.getElementById(id); }

function showError(msg) {
  const e = el("dcf-error");
  if (msg) { e.textContent = msg; e.style.display = "block"; }
  else { e.style.display = "none"; }
}

function curSym() { return DCF.symbols[SYM]; }

function buildSymbolSelect() {
  const sel = el("dcf-symbol");
  const seen = new Set();
  let html = "";
  DCF.watchlists.forEach(wl => {
    const opts = wl.symbols.filter(s => DCF.symbols[s] && !seen.has(s));
    opts.forEach(s => seen.add(s));
    if (!opts.length) return;
    html += '<optgroup label="' + wl.name.replace(/"/g, "") + '">';
    opts.forEach(s => {
      const d = DCF.symbols[s];
      const label = d.error ? s + " (n/a)" : s + " — " + d.name;
      html += '<option value="' + s + '"' + (s === SYM ? " selected" : "") + ">" +
        label.replace(/</g, "&lt;") + "</option>";
    });
    html += "</optgroup>";
  });
  // Any symbol not in a watchlist (shouldn't happen, but be safe).
  Object.keys(DCF.symbols).forEach(s => {
    if (!seen.has(s)) {
      html += '<option value="' + s + '"' + (s === SYM ? " selected" : "") + ">" + s + "</option>";
    }
  });
  sel.innerHTML = html;
  sel.addEventListener("change", () => { SYM = sel.value; loadSymbol(); });
  el("dcf-filter").addEventListener("input", e => {
    const q = e.target.value.trim().toUpperCase();
    sel.querySelectorAll("option").forEach(o => {
      o.hidden = q && o.value.toUpperCase().indexOf(q) < 0 &&
                 o.textContent.toUpperCase().indexOf(q) < 0;
    });
  });
}

function snapshotHtml(d) {
  const fcf = (d.fcf_hist || []).map(v => fmtMoney(v, d.currency)).join(" · ") || "n/a";
  const rows = [
    ["Market price", fmtPx(d.price, d.currency)],
    ["Market cap", fmtMoney(d.market_cap, d.currency)],
    ["Beta", d.beta != null ? d.beta.toFixed(2) : "n/a"],
    ["Shares outstanding", d.shares != null ? (d.shares / 1e9).toFixed(2) + "B" : "n/a"],
    ["FCF history (annual)", fcf],
    ["Net debt", fmtMoney(d.dflt.net_debt, d.currency)],
  ];
  return "<div style='grid-column:1/-1;font-weight:800;font-size:1.05rem;'>" +
    d.name.replace(/</g, "&lt;") +
    " <span style='opacity:.6;font-weight:400;'>(" + SYM + " · " + d.currency + ")</span></div>" +
    rows.map(r => "<div><span>" + r[0] + "</span><b>" + r[1] + "</b></div>").join("");
}

const FIELDS = [
  { id: "g_base",  label: "Base FCF growth", unit: "%", get: a => a.g_base * 100,
    set: (a, v) => a.g_base = v / 100, auto: a => fmtPct(a.g_base) + " — historical FCF CAGR, bounded [−5%, +15%]" },
  { id: "g_high",  label: "High-scenario growth", unit: "%", get: a => a.g_high * 100,
    set: (a, v) => a.g_high = v / 100, auto: a => fmtPct(a.g_high) + " — base + 5 pts" },
  { id: "g_low",   label: "Low-scenario growth", unit: "%", get: a => a.g_low * 100,
    set: (a, v) => a.g_low = v / 100, auto: a => fmtPct(a.g_low) + " — base − 5 pts" },
  { id: "wacc",    label: "Discount rate (WACC)", unit: "%", get: a => a.wacc * 100,
    set: (a, v) => a.wacc = v / 100, auto: a => fmtPct(a.wacc) + " — CAPM + debt cost from observed data" },
  { id: "g_term",  label: "Terminal growth", unit: "%", get: a => a.g_term * 100,
    set: (a, v) => a.g_term = v / 100, auto: a => fmtPct(a.g_term) + " — framework default" },
  { id: "years",   label: "Projection years", unit: "", get: a => a.years,
    set: (a, v) => a.years = Math.max(1, Math.round(v)), auto: a => a.years + " — framework default",
    step: "1" },
  { id: "fcf_base", label: "Starting FCF", unit: "M$", get: a => a.fcf_base / 1e6,
    set: (a, v) => a.fcf_base = v * 1e6, auto: a => fmtMoney(a.fcf_base, curSym().currency) + " — latest observed annual FCF" },
];

function assumptionsHtml() {
  return FIELDS.map(f => {
    const v = f.get(AUTO);
    const disp = f.id === "years" ? Math.round(v) : (+v).toFixed(f.id === "fcf_base" ? 1 : 2);
    return '<div class="dcf-field"><label>' + f.label + (f.unit ? " (" + f.unit + ")" : "") + "</label>" +
      '<input class="dcf-input" type="number" step="' + (f.step || "0.1") + '" data-f="' + f.id +
      '" value="' + disp + '" aria-label="' + f.label + '">' +
      '<span class="dcf-auto">Auto: ' + f.auto(AUTO).replace(/</g, "&lt;") + "</span></div>";
  }).join("");
}

function readAssumptions() {
  const a = Object.assign({}, AUTO);
  document.querySelectorAll("#dcf-assumptions input.dcf-input").forEach(inp => {
    const f = FIELDS.find(x => x.id === inp.dataset.f);
    const v = parseFloat(inp.value);
    if (isFinite(v)) f.set(a, v);
  });
  return a;
}

function heatStyle(v, v0) {
  if (v == null || v0 == null || !isFinite(v) || !isFinite(v0) || v0 <= 0) return "";
  const r = v / v0;
  const t = Math.min(Math.abs(r - 1) / 0.5, 1);
  const col = r >= 1
    ? "rgba(22,163,74," + (0.08 + 0.35 * t).toFixed(2) + ")"
    : "rgba(220,38,38," + (0.08 + 0.35 * t).toFixed(2) + ")";
  return ' style="background:' + col + '"';
}

function sensTable1(a, d, v0) {
  const rates = [-0.03, -0.02, -0.01, 0, 0.01, 0.02, 0.03].map(x => a.wacc + x);
  const gs = [0, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035];
  let html = "<thead><tr><th class='dcf-rowhead'>r \\ g<sub>term</sub></th>" +
    gs.map(g => "<th>" + fmtPct(g, 1) + "</th>").join("") + "</tr></thead><tbody>";
  rates.forEach(w => {
    html += "<tr><th class='dcf-rowhead'>" + fmtPct(w, 1) + "</th>";
    gs.forEach(g => {
      if (w <= g) { html += "<td>–</td>"; return; }
      const r = dcfValue(a.fcf_base, a.g_base, w, g, a.years, a.net_debt, d.shares);
      const v = r ? r.perShare : null;
      html += "<td class='dcf-heat'" + heatStyle(v, v0) + ">" +
        (v == null ? "n/a" : fmtPx(v, d.currency)) + "</td>";
    });
    html += "</tr>";
  });
  return html + "</tbody>";
}

function sensTable2(a, d, v0) {
  const rev = (d.ca_hist && d.ca_hist.length) ? d.ca_hist[d.ca_hist.length - 1] : null;
  if (!(rev > 0)) return null;
  const m0 = a.fcf_base / rev;
  const gs = [...new Set([a.g_low - 0.05, a.g_low, a.g_base, a.g_high, a.g_high + 0.05])].sort((x, y) => x - y);
  const ms = [-0.04, -0.02, 0, 0.02, 0.04].map(x => m0 + x);
  let html = "<thead><tr><th class='dcf-rowhead'>g \\ margin</th>" +
    ms.map(m => "<th>" + fmtPct(m, 1) + "</th>").join("") + "</tr></thead><tbody>";
  gs.forEach(g => {
    html += "<tr><th class='dcf-rowhead'>" + fmtPct(g, 1) + "</th>";
    ms.forEach(m => {
      if (m <= 0) { html += "<td>–</td>"; return; }
      const r = dcfValue(rev * m, g, a.wacc, a.g_term, a.years, a.net_debt, d.shares);
      const v = r ? r.perShare : null;
      html += "<td class='dcf-heat'" + heatStyle(v, v0) + ">" +
        (v == null ? "n/a" : fmtPx(v, d.currency)) + "</td>";
    });
    html += "</tr>";
  });
  return html + "</tbody>";
}

function render() {
  const d = curSym();
  const a = readAssumptions();

  if (!(a.wacc > a.g_term)) {
    el("dcf-cards").innerHTML = "";
    el("dcf-bars").innerHTML = "";
    el("dcf-extra").innerHTML = "";
    el("dcf-sens1").innerHTML = "";
    el("dcf-sens2").innerHTML = "";
    showError("The discount rate must be above terminal growth — otherwise the Gordon perpetuity diverges.");
    return;
  }
  showError(null);

  const scen = {
    low: dcfValue(a.fcf_base, a.g_low, a.wacc, a.g_term, a.years, a.net_debt, d.shares),
    base: dcfValue(a.fcf_base, a.g_base, a.wacc, a.g_term, a.years, a.net_debt, d.shares),
    high: dcfValue(a.fcf_base, a.g_high, a.wacc, a.g_term, a.years, a.net_debt, d.shares),
  };
  const v0 = scen.base ? scen.base.perShare : null;

  el("dcf-val-desc").textContent =
    "Implied value per share under three FCF-growth scenarios, versus the observed market price of " +
    fmtPx(d.price, d.currency) + ".";

  const names = { low: "Low", base: "Base", high: "High" };
  el("dcf-cards").innerHTML = ["low", "base", "high"].map(k => {
    const r = scen[k];
    const v = r ? r.perShare : null;
    let sub;
    if (v == null || d.price == null) sub = "n/a";
    else {
      const chg = (v / d.price - 1) * 100;
      const cls = chg >= 0 ? "dcf-up" : "dcf-down";
      sub = '<span class="' + cls + '">' + (chg >= 0 ? "+" : "") + chg.toFixed(1) +
        "%</span> vs market";
    }
    return '<div class="dcf-card' + (k === "base" ? " base" : "") + '"><h4>' + names[k] +
      " scenario</h4><div class='dcf-big'>" + fmtPx(v, d.currency) +
      "</div><div class='dcf-sub'>" + sub + "<br>Equity value " +
      fmtMoney(r ? r.equity : null, d.currency) + "</div></div>";
  }).join("");

  // Bars vs market price.
  const vals = [scen.low, scen.base, scen.high].map(r => r ? r.perShare : null);
  const allV = vals.concat([d.price]).filter(v => v != null && isFinite(v));
  const mx = Math.max.apply(null, allV.map(Math.abs).concat([1e-9]));
  el("dcf-bars").innerHTML = ["low", "base", "high"].map((k, i) => {
    const v = vals[i];
    const w = v == null ? 0 : Math.min(Math.abs(v) / mx * 100, 100);
    const neg = v != null && v < 0;
    const px = d.price == null ? 0 : Math.min(Math.max(d.price / mx * 100, 0), 100);
    return '<div class="dcf-bar-row' + (k === "low" ? " low" : "") + '"><div>' + names[k] +
      "</div><div class='dcf-bar-track'><div class='dcf-bar-fill' style='width:" + w.toFixed(1) +
      "%;" + (neg ? "background:linear-gradient(90deg,rgba(120,113,108,.45),rgba(120,113,108,.75));" : "") +
      "'></div><div class='dcf-bar-price' style='left:" + px.toFixed(1) + "%;'></div></div>" +
      "<div class='dcf-bar-val'>" + fmtPx(v, d.currency) + "</div></div>";
  }).join("");

  const gImpl = dcfImpliedGrowth(a.fcf_base, a.wacc, a.g_term, a.years, a.net_debt, d.shares, d.price);
  el("dcf-extra").innerHTML = [
    ["Implied growth", gImpl == null ? "n/a (outside −30%…+60%)" : fmtPct(gImpl),
     "FCF growth that would justify the market price"],
    ["Terminal value share", scen.base && scen.base.terminalShare != null ? fmtPct(scen.base.terminalShare, 0) : "n/a",
     "Share of enterprise value from the perpetuity"],
    ["Enterprise value", fmtMoney(scen.base ? scen.base.ve : null, d.currency), "Base scenario"],
    ["Net debt", fmtMoney(a.net_debt, d.currency), "Total debt − cash"],
  ].map(r => "<div><span>" + r[0] + "</span><b>" + r[1] + "</b><br><span>" + r[2] + "</span></div>").join("");

  el("dcf-sens1").innerHTML = sensTable1(a, d, v0);
  const t2 = sensTable2(a, d, v0);
  if (t2) {
    el("dcf-sens2").innerHTML = t2;
    el("dcf-sens2-note").style.display = "none";
  } else {
    el("dcf-sens2").innerHTML = "";
    el("dcf-sens2-note").style.display = "block";
  }
}

function loadSymbol() {
  const d = curSym();
  if (!d || d.error) {
    el("dcf-snapshot").innerHTML = "";
    el("dcf-assumptions").innerHTML = "";
    el("dcf-cards").innerHTML = "";
    el("dcf-bars").innerHTML = "";
    el("dcf-extra").innerHTML = "";
    showError("DCF not applicable for " + SYM + ": " + (d ? d.error : "unknown symbol") + ".");
    return;
  }
  showError(null);
  AUTO = {
    g_base: d.dflt.g_base, g_high: d.dflt.g_high, g_low: d.dflt.g_low,
    wacc: d.dflt.wacc, g_term: d.dflt.g_term, years: d.dflt.years,
    fcf_base: d.dflt.fcf_base, net_debt: d.dflt.net_debt,
  };
  el("dcf-snapshot").innerHTML = snapshotHtml(d);
  el("dcf-assumptions").innerHTML = assumptionsHtml();
  document.querySelectorAll("#dcf-assumptions input.dcf-input").forEach(inp => {
    inp.addEventListener("input", render);
  });
  render();
}

function init(data) {
  DCF = data;
  const dt = new Date(data.updated_at);
  el("dcf-updated").textContent = dt.toLocaleDateString("en-US",
    { year: "numeric", month: "short", day: "numeric" }) + " (daily refresh)";
  if (!DCF.symbols[SYM]) SYM = Object.keys(DCF.symbols)[0];
  buildSymbolSelect();
  el("dcf-loading").style.display = "none";
  el("dcf-app").style.display = "block";
  el("dcf-reset").addEventListener("click", loadSymbol);
  loadSymbol();
}

fetch(DATA_URL)
  .then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
  .then(init)
  .catch(err => {
    el("dcf-loading").style.display = "none";
    showError("Could not load market data (" + err.message + "). " +
      "The daily refresh may still be running — please try again in a few minutes.");
  });
</script>
