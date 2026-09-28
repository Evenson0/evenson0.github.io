---
layout: single
title: "Chain Ladder Lab"
permalink: /tools/chain-ladder/
tool_theme: actuarial
author_profile: true
---

<style>
  .cl-shell {
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

  .cl-lead {
    margin-bottom: 0.7rem;
    font-size: 1.05rem;
    line-height: 1.85;
    opacity: 0.92;
  }

  .cl-sublead {
    margin-top: 0;
    line-height: 1.8;
    opacity: 0.75;
  }

  .cl-rule {
    border: none;
    border-top: 1px solid rgba(127,127,127,0.22);
    margin: 2rem 0;
  }

  .cl-section-title {
    margin: 0 0 0.4rem 0;
  }

  .cl-section-desc {
    margin: 0 0 1.2rem 0;
    line-height: 1.75;
    opacity: 0.78;
  }

  .cl-table-wrap {
    overflow-x: auto;
    margin-bottom: 1.4rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 16px;
    background: rgba(127,127,127,0.03);
  }

  table.cl-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.92rem;
    margin: 0;
  }

  table.cl-table th,
  table.cl-table td {
    padding: 0.55rem 0.6rem;
    text-align: right;
    border-bottom: 1px solid rgba(127,127,127,0.12);
    white-space: nowrap;
  }

  table.cl-table thead th {
    font-weight: 800;
    opacity: 0.85;
    border-bottom: 1px solid rgba(127,127,127,0.25);
  }

  table.cl-table th.cl-rowhead,
  table.cl-table td.cl-rowhead {
    text-align: left;
    font-weight: 700;
    opacity: 0.85;
  }

  table.cl-table tr:last-child td,
  table.cl-table tr:last-child th {
    border-bottom: none;
  }

  table.cl-table tr.cl-total {
    font-weight: 800;
    background: rgba(59,130,246,0.07);
  }

  table.cl-table td.cl-projected {
    background: rgba(59,130,246,0.10);
    font-style: italic;
  }

  table.cl-table td.cl-na {
    opacity: 0.3;
    text-align: center;
  }

  .cl-input {
    width: 92px;
    padding: 0.4rem 0.5rem;
    font: inherit;
    font-size: 0.9rem;
    text-align: right;
    color: inherit;
    background: rgba(127,127,127,0.07);
    border: 1px solid rgba(127,127,127,0.25);
    border-radius: 8px;
  }

  .cl-input:focus {
    outline: none;
    border-color: rgba(59,130,246,0.55);
    box-shadow: 0 0 0 2px rgba(59,130,246,0.15);
  }

  .cl-input.cl-factor {
    width: 78px;
  }

  .cl-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-bottom: 1.6rem;
  }

  .cl-btn {
    border: 1px solid rgba(127,127,127,0.20);
    border-radius: 12px;
    padding: 0.65rem 1rem;
    font: inherit;
    font-weight: 700;
    font-size: 0.92rem;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.10),
      rgba(127,127,127,0.05)
    );
    color: inherit;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .cl-btn:hover {
    transform: translateY(-2px);
    border-color: rgba(59,130,246,0.35);
    box-shadow: 0 0 16px rgba(59,130,246,0.12);
  }

  .cl-btn.primary {
    border-color: rgba(59,130,246,0.35);
    background: linear-gradient(
      180deg,
      rgba(59,130,246,0.16),
      rgba(59,130,246,0.08)
    );
  }

  .cl-tail {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .cl-note {
    margin-top: 1rem;
    line-height: 1.85;
    opacity: 0.82;
  }

  .cl-note code {
    font-size: 0.88em;
  }

  .cl-formula {
    padding: 1.1rem 1.3rem;
    margin: 1rem 0;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 14px;
    background: rgba(127,127,127,0.04);
    line-height: 2;
    overflow-x: auto;
    white-space: nowrap;
  }

  .cl-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 2.3rem;
  }

  .cl-nav a {
    text-decoration: none !important;
  }

  .cl-error {
    color: #ef4444;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    .cl-shell {
      padding: 1.2rem;
    }
    .cl-input {
      width: 70px;
    }
  }
</style>

<div class="cl-shell">

  <h1 class="cl-section-title">Chain Ladder Lab</h1>

  <p class="cl-lead">
    Estimate unpaid claim liabilities with the chain-ladder method — the workhorse
    of non-life loss reserving.
  </p>
  <p class="cl-sublead">
    Edit the cumulative paid-loss triangle below (values in $000). Age-to-age
    factors are computed automatically as volume-weighted averages; override the
    selected factors or the tail factor to see how the reserve responds.
  </p>

  <hr class="cl-rule">

  <h2 class="cl-section-title">1 · Loss triangle</h2>
  <p class="cl-section-desc">
    Cumulative paid losses by accident year (rows) and development age in months
    (columns). Cells beyond the latest diagonal are not yet observed.
  </p>

  <div class="cl-table-wrap">
    <table class="cl-table" id="cl-triangle"></table>
  </div>

  <div class="cl-controls">
    <button class="cl-btn" id="cl-reset">Reset example</button>
    <button class="cl-btn" id="cl-clear">Clear triangle</button>
  </div>

  <div class="cl-error" id="cl-error" style="display:none;"></div>

  <hr class="cl-rule">

  <h2 class="cl-section-title">2 · Development factors</h2>
  <p class="cl-section-desc">
    The volume-weighted age-to-age factor for each development interval is
    computed from the triangle. The <em>selected</em> factors — the actuary's
    judgment — drive the projection and can be edited freely.
  </p>

  <div class="cl-table-wrap">
    <table class="cl-table" id="cl-factors"></table>
  </div>

  <div class="cl-controls">
    <button class="cl-btn primary" id="cl-copy-factors">Copy computed → selected</button>
    <label class="cl-tail">
      Tail factor
      <input class="cl-input cl-factor" type="number" id="cl-tail" value="1.000" step="0.001" min="1">
    </label>
  </div>

  <hr class="cl-rule">

  <h2 class="cl-section-title">3 · Completed triangle</h2>
  <p class="cl-section-desc">
    Observed values in normal type; projected values in
    <span style="font-style:italic; background:rgba(59,130,246,0.10); padding:0 6px; border-radius:6px;">highlight</span>.
  </p>

  <div class="cl-table-wrap">
    <table class="cl-table" id="cl-completed"></table>
  </div>

  <hr class="cl-rule">

  <h2 class="cl-section-title">4 · Ultimates &amp; reserves</h2>
  <p class="cl-section-desc">
    Ultimate loss = latest observed × loss development factor (LDF) to ultimate.
    Outstanding reserve = ultimate − paid to date.
  </p>

  <div class="cl-table-wrap">
    <table class="cl-table" id="cl-results"></table>
  </div>

  <hr class="cl-rule">

  <h2 class="cl-section-title">How it works</h2>

  <div class="cl-formula">
    f<sub>j</sub> = &Sigma;<sub>i</sub> C<sub>i,j+1</sub> / &Sigma;<sub>i</sub> C<sub>i,j</sub>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    LDF<sub>i</sub> = (&Pi; selected f<sub>j</sub>) × tail
    &nbsp;&nbsp;·&nbsp;&nbsp;
    U<sub>i</sub> = C<sub>i,latest</sub> × LDF<sub>i</sub>
  </div>

  <p class="cl-note">
    <strong>Assumptions.</strong> The chain ladder assumes that historical
    development patterns persist: no calendar-year effects (inflation, legal
    changes), a stable mix of business, and that past development predicts
    future development. The volume-weighted average gives more weight to larger
    accident years; alternatives include simple averages or averages excluding
    outliers.
  </p>
  <p class="cl-note">
    <strong>Limits.</strong> It extrapolates mechanically and reacts slowly to
    regime changes. In practice it is one method among several (Bornhuetter–Ferguson,
    expected loss ratio, Benktander) and selections are validated against
    diagnostics such as actual-vs-expected development.
  </p>
  <p class="cl-note" style="opacity:0.6;">
    For illustration and education only — not actuarial advice.
  </p>

  <div class="cl-nav">
    <a href="/tools/financial-math-calculator/">← Previous</a>
    <a href="/tools/">Quantitative Laboratory →</a>
  </div>

</div>

<script>
// MATH-START — pure calculation logic (no DOM); unit-tested via node.
const CL_YEARS = [2019, 2020, 2021, 2022, 2023, 2024];
const CL_DEVS = ["12", "24", "36", "48", "60", "72"];
const CL_DEFAULT = [
  [120, 175, 210, 230, 240, 245],
  [135, 190, 228, 250, 262, null],
  [150, 210, 252, 278, null, null],
  [165, 235, 285, null, null, null],
  [185, 260, null, null, null, null],
  [200, null, null, null, null, null]
];

function clIsNum(x) {
  return typeof x === "number" && isFinite(x);
}

// Volume-weighted age-to-age factors: f_j = sum C(i,j+1) / sum C(i,j)
// over accident years where both cells are observed.
function clComputeFactors(tri) {
  const n = tri.length;
  const factors = [];
  for (let j = 0; j < n - 1; j++) {
    let num = 0, den = 0, count = 0;
    for (let i = 0; i < n; i++) {
      const a = tri[i][j], b = tri[i][j + 1];
      if (clIsNum(a) && clIsNum(b) && a > 0) {
        num += b;
        den += a;
        count++;
      }
    }
    factors.push(count > 0 && den > 0 ? num / den : null);
  }
  return factors;
}

// Latest observed development index per accident year.
function clLatestIndex(tri) {
  return tri.map(row => {
    let idx = -1;
    for (let j = 0; j < row.length; j++) {
      if (clIsNum(row[j])) idx = j;
    }
    return idx;
  });
}

// LDF to ultimate for each accident year from selected factors + tail.
function clLDFs(tri, selected, tail) {
  const n = tri.length;
  const latest = clLatestIndex(tri);
  return latest.map(li => {
    if (li < 0) return null;
    let ldf = clIsNum(tail) && tail >= 1 ? tail : 1;
    for (let j = li; j < n - 1; j++) {
      const f = selected[j];
      if (!clIsNum(f) || f <= 0) return null;
      ldf *= f;
    }
    return ldf;
  });
}

// Full triangle with projected (lower-triangle) values filled in.
function clCompleteTriangle(tri, selected, tail) {
  const n = tri.length;
  const out = tri.map(row => row.slice());
  const ldfs = clLDFs(tri, selected, tail);
  const latest = clLatestIndex(tri);
  for (let i = 0; i < n; i++) {
    const li = latest[i];
    if (li < 0 || li >= n - 1 || ldfs[i] === null) continue;
    const ultimate = tri[i][li] * ldfs[i];
    // Work backwards: C(i,j) = C(i,j+1) / f_j
    out[i][n - 1] = ultimate / (clIsNum(tail) && tail >= 1 ? tail : 1);
    for (let j = n - 2; j > li; j--) {
      const f = selected[j];
      out[i][j] = clIsNum(f) && f > 0 ? out[i][j + 1] / f : null;
    }
  }
  return { completed: out, ldfs: ldfs, latest: latest };
}

function clResults(tri, selected, tail) {
  const n = tri.length;
  const comp = clCompleteTriangle(tri, selected, tail);
  return CL_YEARS.map((yr, i) => {
    const li = comp.latest[i];
    const latestVal = li >= 0 ? tri[i][li] : null;
    const ultimate = comp.ldfs[i] !== null && latestVal !== null
      ? latestVal * comp.ldfs[i] : null;
    return {
      year: yr,
      latest: latestVal,
      ldf: comp.ldfs[i],
      ultimate: ultimate,
      reserve: ultimate !== null && latestVal !== null ? ultimate - latestVal : null
    };
  });
}
// MATH-END

// ---- UI state ----
let clTri = CL_DEFAULT.map(r => r.slice());
let clSelected = [];
let clTail = 1.0;

function clFmtMoney(x) {
  if (!clIsNum(x)) return "–";
  return x.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function clFmtFactor(x) {
  if (!clIsNum(x)) return "–";
  return x.toFixed(3);
}

function clShowError(msg) {
  const el = document.getElementById("cl-error");
  if (msg) {
    el.textContent = msg;
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

function clObserved(i, j) {
  return clIsNum(clTri[i][j]);
}

function clRenderTriangle() {
  const t = document.getElementById("cl-triangle");
  let html = "<thead><tr><th class='cl-rowhead'>Accident year</th>";
  CL_DEVS.forEach(d => { html += "<th>" + d + " mo</th>"; });
  html += "</tr></thead><tbody>";
  for (let i = 0; i < clTri.length; i++) {
    html += "<tr><th class='cl-rowhead'>" + CL_YEARS[i] + "</th>";
    for (let j = 0; j < CL_DEVS.length; j++) {
      if (j <= CL_DEVS.length - 1 - i || clObserved(i, j)) {
        const v = clIsNum(clTri[i][j]) ? clTri[i][j] : "";
        html += "<td><input class='cl-input' type='number' min='0' step='any' " +
          "data-i='" + i + "' data-j='" + j + "' value='" + v + "' aria-label='AY " +
          CL_YEARS[i] + " dev " + CL_DEVS[j] + "'></td>";
      } else {
        html += "<td class='cl-na'>–</td>";
      }
    }
    html += "</tr>";
  }
  html += "</tbody>";
  t.innerHTML = html;
  t.querySelectorAll("input.cl-input").forEach(inp => {
    inp.addEventListener("input", () => {
      const i = +inp.dataset.i, j = +inp.dataset.j;
      const v = parseFloat(inp.value);
      clTri[i][j] = inp.value.trim() === "" ? null : (isFinite(v) ? v : null);
      clRenderAll(false);
    });
  });
}

function clRenderFactors() {
  const computed = clComputeFactors(clTri);
  const t = document.getElementById("cl-factors");
  let html = "<thead><tr><th class='cl-rowhead'>Factor</th>";
  for (let j = 0; j < CL_DEVS.length - 1; j++) {
    html += "<th>" + CL_DEVS[j] + "→" + CL_DEVS[j + 1] + "</th>";
  }
  html += "</tr></thead><tbody>";

  html += "<tr><th class='cl-rowhead'>Computed (vol.-wtd avg)</th>";
  computed.forEach(f => { html += "<td>" + clFmtFactor(f) + "</td>"; });
  html += "</tr>";

  html += "<tr><th class='cl-rowhead'>Selected</th>";
  for (let j = 0; j < CL_DEVS.length - 1; j++) {
    const v = clIsNum(clSelected[j]) ? clSelected[j].toFixed(3) : "";
    html += "<td><input class='cl-input cl-factor' type='number' min='0' step='0.001' " +
      "data-j='" + j + "' value='" + v + "' aria-label='Selected factor " +
      CL_DEVS[j] + " to " + CL_DEVS[j + 1] + "'></td>";
  }
  html += "</tr></tbody>";
  t.innerHTML = html;
  t.querySelectorAll("input.cl-factor").forEach(inp => {
    inp.addEventListener("input", () => {
      const j = +inp.dataset.j;
      const v = parseFloat(inp.value);
      clSelected[j] = inp.value.trim() === "" ? null : (isFinite(v) && v > 0 ? v : null);
      clRenderAll(false);
    });
  });
}

function clRenderCompleted() {
  const comp = clCompleteTriangle(clTri, clSelected, clTail);
  const t = document.getElementById("cl-completed");
  let html = "<thead><tr><th class='cl-rowhead'>Accident year</th>";
  CL_DEVS.forEach(d => { html += "<th>" + d + " mo</th>"; });
  html += "</tr></thead><tbody>";
  for (let i = 0; i < clTri.length; i++) {
    html += "<tr><th class='cl-rowhead'>" + CL_YEARS[i] + "</th>";
    for (let j = 0; j < CL_DEVS.length; j++) {
      if (clObserved(i, j)) {
        html += "<td>" + clFmtMoney(clTri[i][j]) + "</td>";
      } else if (clIsNum(comp.completed[i][j])) {
        html += "<td class='cl-projected'>" + clFmtMoney(comp.completed[i][j]) + "</td>";
      } else {
        html += "<td class='cl-na'>–</td>";
      }
    }
    html += "</tr>";
  }
  html += "</tbody>";
  t.innerHTML = html;
}

function clRenderResults() {
  const rows = clResults(clTri, clSelected, clTail);
  const t = document.getElementById("cl-results");
  let html = "<thead><tr><th class='cl-rowhead'>Accident year</th>" +
    "<th>Paid to date</th><th>LDF to ult.</th><th>Ultimate</th>" +
    "<th>Outstanding reserve</th></tr></thead><tbody>";
  let tPaid = 0, tUlt = 0, tRes = 0, ok = true;
  rows.forEach(r => {
    html += "<tr><th class='cl-rowhead'>" + r.year + "</th>" +
      "<td>" + clFmtMoney(r.latest) + "</td>" +
      "<td>" + clFmtFactor(r.ldf) + "</td>" +
      "<td>" + clFmtMoney(r.ultimate) + "</td>" +
      "<td>" + clFmtMoney(r.reserve) + "</td></tr>";
    if (clIsNum(r.latest)) tPaid += r.latest; else ok = false;
    if (clIsNum(r.ultimate)) tUlt += r.ultimate; else ok = false;
    if (clIsNum(r.reserve)) tRes += r.reserve; else ok = false;
  });
  html += "<tr class='cl-total'><th class='cl-rowhead'>Total</th>" +
    "<td>" + (ok ? clFmtMoney(tPaid) : "–") + "</td><td>–</td>" +
    "<td>" + (ok ? clFmtMoney(tUlt) : "–") + "</td>" +
    "<td>" + (ok ? clFmtMoney(tRes) : "–") + "</td></tr>";
  html += "</tbody>";
  t.innerHTML = html;
}

function clValidate() {
  // Interior gaps (an observed cell after a missing one in the same row)
  // break the link-ratio logic; warn instead of silently miscomputing.
  for (let i = 0; i < clTri.length; i++) {
    let seenMissing = false;
    for (let j = 0; j < CL_DEVS.length; j++) {
      if (!clIsNum(clTri[i][j])) seenMissing = true;
      else if (seenMissing) {
        clShowError("Row AY " + CL_YEARS[i] + " has a gap: every observed cell must be " +
          "followed only by observed cells up to the latest diagonal. " +
          "Clear the cells after the gap.");
        return false;
      }
    }
  }
  clShowError(null);
  return true;
}

function clRenderAll(rebuildInputs) {
  if (rebuildInputs) clRenderTriangle();
  if (!clValidate()) { clRenderFactors(); return; }
  clRenderFactors();
  clRenderCompleted();
  clRenderResults();
}

function clInitSelected() {
  const computed = clComputeFactors(clTri);
  clSelected = computed.map(f => (clIsNum(f) && f > 0 ? Math.round(f * 1000) / 1000 : null));
}

document.getElementById("cl-reset").addEventListener("click", () => {
  clTri = CL_DEFAULT.map(r => r.slice());
  clTail = 1.0;
  document.getElementById("cl-tail").value = "1.000";
  clInitSelected();
  clRenderAll(true);
});

document.getElementById("cl-clear").addEventListener("click", () => {
  clTri = CL_DEFAULT.map(r => r.map(() => null));
  clRenderAll(true);
});

document.getElementById("cl-copy-factors").addEventListener("click", () => {
  clInitSelected();
  clRenderAll(false);
});

document.getElementById("cl-tail").addEventListener("input", (e) => {
  const v = parseFloat(e.target.value);
  clTail = isFinite(v) && v >= 1 ? v : 1.0;
  clRenderAll(false);
});

clInitSelected();
clRenderAll(true);
</script>
