---
title: "Financial Mathematics Calculator"
permalink: /tools/financial-math-calculator/
---

<style>
  .fmc-shell {
    max-width: 980px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid rgba(127,127,127,0.20);
    border-radius: 22px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.05),
      rgba(127,127,127,0.025)
    );
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
    color: inherit;
  }

  .fmc-rule {
    border: none;
    border-top: 1px solid rgba(120,120,120,0.28);
    margin: 2rem 0;
  }

  .fmc-lead {
    line-height: 1.8;
    opacity: 0.9;
  }

  .fmc-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: end;
  }

  .fmc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
  }

  .fmc-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .fmc-field label {
    font-weight: 600;
    opacity: 0.92;
  }

  .fmc-select-wrap {
    position: relative;
  }

  .fmc-select-wrap::after {
    content: "▾";
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0.65;
    font-size: 0.95rem;
  }

  .fmc-input,
  .fmc-select {
    width: 100%;
    padding: 10px 12px;
    color: inherit;
    background: rgba(127,127,127,0.08);
    border: 1px solid rgba(127,127,127,0.28);
    border-radius: 12px;
    outline: none;
    transition:
      border-color 0.22s ease,
      box-shadow 0.22s ease,
      background 0.22s ease,
      transform 0.22s ease;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .fmc-select {
    padding-right: 42px;
  }

  .fmc-input::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  .fmc-select option {
    background: #111827;
    color: #f3f4f6;
  }

  .fmc-input:focus,
  .fmc-select:focus {
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.08);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.12);
    transform: translateY(-1px);
  }

  .fmc-btn,
  .fmc-btn:hover,
  .fmc-btn:focus,
  .fmc-btn:active,
  .fmc-btn:visited {
    position: relative;
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none !important;
    color: inherit;
    background: rgba(127,127,127,0.08);
    border: 1px solid rgba(127,127,127,0.28);
    transition:
      transform 0.22s ease,
      box-shadow 0.22s ease,
      border-color 0.22s ease,
      background 0.22s ease,
      color 0.22s ease;
    overflow: hidden;
    backdrop-filter: blur(6px);
  }

  .fmc-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255,255,255,0.00) 35%,
      rgba(255,255,255,0.22) 50%,
      rgba(255,255,255,0.00) 65%,
      transparent 100%
    );
    transform: translateX(-130%);
    transition: transform 0.55s ease;
    pointer-events: none;
  }

  .fmc-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .fmc-btn:hover::before {
    transform: translateX(130%);
  }

  .fmc-btn-primary {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: white !important;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .fmc-btn-primary:hover {
    border-color: rgba(96,165,250,0.65);
    box-shadow:
      0 0 0 1px rgba(96,165,250,0.16),
      0 10px 28px rgba(37,99,235,0.28);
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
  }

  .fmc-params {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 1rem;
  }

  .fmc-param-row {
    display: grid;
    grid-template-columns: minmax(220px, 1.4fr) minmax(220px, 1fr) auto;
    gap: 12px;
    align-items: end;
  }

  @media (max-width: 720px) {
    .fmc-param-row {
      grid-template-columns: 1fr;
    }
  }

  .fmc-box {
    margin-top: 1.5rem;
    padding: 1.3rem 1.35rem;
    border: 1px solid rgba(127,127,127,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .fmc-alert {
    padding: 12px;
    border-radius: 10px;
  }

  .fmc-alert-error {
    border: 1px solid #f5c2c7;
    background: #f8d7da;
    color: #842029;
  }

  .fmc-result-value {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.6rem;
  }

  .fmc-step {
    padding: 0.9rem 1rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 12px;
    background: rgba(127,127,127,0.04);
    margin-top: 0.8rem;
  }

  .fmc-step-title {
    font-weight: 700;
    margin-bottom: 0.35rem;
  }

  .fmc-nav-box {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid rgba(120,120,120,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .fmc-nav-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
  }

  .fmc-btn-back {
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(147,197,253,0.7);
    font-weight: 600;
  }

  .fmc-btn-back:hover {
    background: rgba(37,99,235,0.18);
    box-shadow:
      0 0 0 1px rgba(147,197,253,0.20),
      0 8px 24px rgba(37,99,235,0.20);
  }

  .fmc-muted {
    opacity: 0.72;
  }

  .fmc-help {
    font-size: 0.92rem;
    opacity: 0.7;
    margin-top: 0.3rem;
  }
</style>

<div class="fmc-shell">

  <h1>Financial Mathematics Calculator</h1>

  <p class="fmc-lead">
    Choose the quantity you want to compute, add the parameters you know, and let the calculator determine the result through the appropriate sequence of formulas.
  </p>

  <p class="fmc-muted">
    Interest-rate inputs are entered as percentages. For example, enter <strong>5</strong> for <strong>5%</strong>.
  </p>

  <hr class="fmc-rule">

  <div class="fmc-grid">
    <div class="fmc-field">
      <label for="targetVariable">What do you want to calculate?</label>
      <div class="fmc-select-wrap">
        <select id="targetVariable" class="fmc-select"></select>
      </div>
      <div class="fmc-help">Use the dropdown menu to choose the target quantity.</div>
    </div>
  </div>

  <div class="fmc-box">
    <h3 style="margin-top:0;">Known parameters</h3>
    <p class="fmc-muted">
      Add the data you know. For each row, choose the parameter from the dropdown list, then enter its value.
    </p>

    <div id="parameterRows" class="fmc-params"></div>

    <div class="fmc-row" style="margin-top:1rem;">
      <button onclick="addParameterRow()" class="fmc-btn">Add Parameter</button>
    </div>
  </div>

  <div class="fmc-row" style="margin-top:1.25rem;">
    <button onclick="computeTarget()" class="fmc-btn fmc-btn-primary">Compute</button>
    <button onclick="resetCalculator()" class="fmc-btn">Clear</button>
  </div>

  <div id="calcMessage" style="margin-top:1rem;"></div>

  <div id="calcResultBox" class="fmc-box" style="display:none;">
    <h3 style="margin-top:0;">Result</h3>
    <div id="calcResult" class="fmc-result-value"></div>

    <hr class="fmc-rule">

    <h3>Computation path</h3>
    <div id="calcSteps"></div>
  </div>

  <hr class="fmc-rule">

  <div class="fmc-nav-box">
    <div class="fmc-nav-row">
      <a href="/tools/soa-fm-practice/" class="fmc-btn">← Previous</a>
      <a href="/tools/" class="fmc-btn fmc-btn-back">Back to Tools</a>
      <a href="/tools/soa-fm-practice/" class="fmc-btn">Next →</a>
    </div>
  </div>

</div>

<script>
const PERCENT_VARIABLES = new Set([
  "i", "i1", "i2", "i3", "iNew",
  "d", "delta", "j", "rateChange"
]);

const VARIABLES = {
  pv: { label: "Present Value (PV)", eg: "e.g. 1000" },
  fv: { label: "Future Value (FV)", eg: "e.g. 1500" },

  i: { label: "Effective annual rate i (%)", eg: "e.g. 5 for 5%" },

  i1: { label: "Annual effective rate for year 1 (%)", eg: "e.g. 12.5" },
  i2: { label: "Annual effective rate for year 2 (%)", eg: "e.g. 7.5" },
  i3: { label: "Annual effective rate for year 3 (%)", eg: "e.g. 10" },
  iNew: { label: "Adjusted annual effective rate (%)", eg: "e.g. 21.5" },

  d: { label: "Effective discount rate d (%)", eg: "e.g. 4.7619 for 4.7619%" },
  delta: { label: "Force of interest δ (%)", eg: "e.g. 4.879 for 4.879%" },
  j: { label: "Nominal annual rate j^(m) (%)", eg: "e.g. 6 for 6%" },
  m: { label: "Conversion frequency m", eg: "e.g. 12" },
  n: { label: "Number of periods n", eg: "e.g. 5" },
  years: { label: "Number of years", eg: "e.g. 3" },

  // rateChange is the percentage-point adjustment applied to a base annual rate.
  // Use -5 if the next rate is 5% lower than the base rate.
  // Use 9 if the next rate is 9% higher than the base rate.
  rateChange: {
    label: "Rate change from base rate (%)",
    eg: "e.g. -5 for 5% lower, or 9 for 9% higher"
  },

  twoYearFV: { label: "Future value after 2 years", eg: "e.g. 12093.75" },

  payment: { label: "Periodic payment R", eg: "e.g. 100" },
  acc: { label: "Accumulated value of annuity AV", eg: "e.g. 1257.79" },
  annuityPV: { label: "Present value of annuity PV_annuity", eg: "e.g. 772.17" }
};

const FORMULAS = [
  {
    output: "pv",
    inputs: ["fv", "i", "n"],
    name: "Present value from future value",
    compute: ({ fv, i, n }) => fv / Math.pow(1 + i, n),
    latex: ({ fv, i, n }, result) =>
      `Using \\[ PV = \\frac{FV}{(1+i)^n} \\]
       with \\(FV=${formatNum(fv)}\\), \\(i=${formatPercent(i)}\\), \\(n=${formatNum(n)}\\),
       we obtain \\[ PV \\approx ${formatNum(result)}. \\]`
  },
  {
    output: "fv",
    inputs: ["pv", "i", "n"],
    name: "Future value from present value",
    compute: ({ pv, i, n }) => pv * Math.pow(1 + i, n),
    latex: ({ pv, i, n }, result) =>
      `Using \\[ FV = PV(1+i)^n \\]
       with \\(PV=${formatNum(pv)}\\), \\(i=${formatPercent(i)}\\), \\(n=${formatNum(n)}\\),
       we obtain \\[ FV \\approx ${formatNum(result)}. \\]`
  },
  {
    output: "i",
    inputs: ["j", "m"],
    name: "Effective annual rate from nominal rate",
    compute: ({ j, m }) => Math.pow(1 + j / m, m) - 1,
    latex: ({ j, m }, result) =>
      `Using \\[ i = \\left(1+\\frac{j}{m}\\right)^m - 1 \\]
       with \\(j=${formatPercent(j)}\\), \\(m=${formatNum(m)}\\),
       we obtain \\[ i \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "j",
    inputs: ["i", "m"],
    name: "Nominal rate from effective annual rate",
    compute: ({ i, m }) => m * (Math.pow(1 + i, 1 / m) - 1),
    latex: ({ i, m }, result) =>
      `Using \\[ j = m\\big((1+i)^{1/m} - 1\\big) \\]
       with \\(i=${formatPercent(i)}\\), \\(m=${formatNum(m)}\\),
       we obtain \\[ j \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "delta",
    inputs: ["i"],
    name: "Force of interest from effective annual rate",
    compute: ({ i }) => Math.log(1 + i),
    latex: ({ i }, result) =>
      `Using \\[ \\delta = \\ln(1+i) \\]
       with \\(i=${formatPercent(i)}\\),
       we obtain \\[ \\delta \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "i",
    inputs: ["delta"],
    name: "Effective annual rate from force of interest",
    compute: ({ delta }) => Math.exp(delta) - 1,
    latex: ({ delta }, result) =>
      `Using \\[ i = e^{\\delta} - 1 \\]
       with \\(\\delta=${formatPercent(delta)}\\),
       we obtain \\[ i \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "d",
    inputs: ["i"],
    name: "Discount rate from effective annual rate",
    compute: ({ i }) => i / (1 + i),
    latex: ({ i }, result) =>
      `Using \\[ d = \\frac{i}{1+i} \\]
       with \\(i=${formatPercent(i)}\\),
       we obtain \\[ d \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "i",
    inputs: ["d"],
    name: "Effective annual rate from discount rate",
    compute: ({ d }) => d / (1 - d),
    latex: ({ d }, result) =>
      `Using \\[ i = \\frac{d}{1-d} \\]
       with \\(d=${formatPercent(d)}\\),
       we obtain \\[ i \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "acc",
    inputs: ["payment", "i", "n"],
    name: "Accumulated value of annuity-immediate",
    compute: ({ payment, i, n }) => {
      const s = (Math.pow(1 + i, n) - 1) / i;
      return payment * s;
    },
    latex: ({ payment, i, n }, result) =>
      `Using \\[ s_{\\overline{n}|} = \\frac{(1+i)^n-1}{i}, \\qquad AV = R\\,s_{\\overline{n}|} \\]
       with \\(R=${formatNum(payment)}\\), \\(i=${formatPercent(i)}\\), \\(n=${formatNum(n)}\\),
       we obtain \\[ AV \\approx ${formatNum(result)}. \\]`
  },
  {
    output: "payment",
    inputs: ["acc", "i", "n"],
    name: "Annuity payment from accumulated value",
    compute: ({ acc, i, n }) => {
      const s = (Math.pow(1 + i, n) - 1) / i;
      return acc / s;
    },
    latex: ({ acc, i, n }, result) =>
      `Using \\[ s_{\\overline{n}|} = \\frac{(1+i)^n-1}{i}, \\qquad R = \\frac{AV}{s_{\\overline{n}|}} \\]
       with \\(AV=${formatNum(acc)}\\), \\(i=${formatPercent(i)}\\), \\(n=${formatNum(n)}\\),
       we obtain \\[ R \\approx ${formatNum(result)}. \\]`
  },
  {
    output: "annuityPV",
    inputs: ["payment", "i", "n"],
    name: "Present value of annuity-immediate",
    compute: ({ payment, i, n }) => {
      const a = (1 - Math.pow(1 + i, -n)) / i;
      return payment * a;
    },
    latex: ({ payment, i, n }, result) =>
      `Using \\[ a_{\\overline{n}|} = \\frac{1-(1+i)^{-n}}{i}, \\qquad PV_{annuity}=R\\,a_{\\overline{n}|} \\]
       with \\(R=${formatNum(payment)}\\), \\(i=${formatPercent(i)}\\), \\(n=${formatNum(n)}\\),
       we obtain \\[ PV_{annuity} \\approx ${formatNum(result)}. \\]`
  },
  {
    output: "payment",
    inputs: ["annuityPV", "i", "n"],
    name: "Annuity payment from present value",
    compute: ({ annuityPV, i, n }) => {
      const a = (1 - Math.pow(1 + i, -n)) / i;
      return annuityPV / a;
    },
    latex: ({ annuityPV, i, n }, result) =>
      `Using \\[ a_{\\overline{n}|} = \\frac{1-(1+i)^{-n}}{i}, \\qquad R=\\frac{PV_{annuity}}{a_{\\overline{n}|}} \\]
       with \\(PV_{annuity}=${formatNum(annuityPV)}\\), \\(i=${formatPercent(i)}\\), \\(n=${formatNum(n)}\\),
       we obtain \\[ R \\approx ${formatNum(result)}. \\]`
  },

  // Varying annual rates
  {
    output: "i2",
    inputs: ["i1", "rateChange"],
    name: "Second-year rate from first-year rate and rate change",
    compute: ({ i1, rateChange }) => i1 + rateChange,
    latex: ({ i1, rateChange }, result) =>
      `Using \\[ i_2 = i_1 + \\text{rate change} \\]
       with \\(i_1=${formatPercent(i1)}\\) and rate change \\(=${formatPercent(rateChange)}\\),
       we obtain \\[ i_2 \\approx ${formatPercent(result)}. \\]`
  },
  {
    output: "twoYearFV",
    inputs: ["pv", "i1", "i2"],
    name: "Two-year future value with varying annual rates",
    compute: ({ pv, i1, i2 }) => pv * (1 + i1) * (1 + i2),
    latex: ({ pv, i1, i2 }, result) =>
      `Using \\[
       FV_{2} = PV(1+i_1)(1+i_2)
       \\]
       with \\(PV=${formatNum(pv)}\\), \\(i_1=${formatPercent(i1)}\\), \\(i_2=${formatPercent(i2)}\\),
       we obtain \\[
       FV_{2} \\approx ${formatNum(result)}.
       \\]`
  },
  {
    output: "i1",
    inputs: ["pv", "twoYearFV", "rateChange"],
    name: "Solve first-year rate from two-year varying-rate accumulation",
    compute: ({ pv, twoYearFV, rateChange }) => {
      const A = twoYearFV / pv;
      const b = 2 + rateChange;
      const c = 1 + rateChange - A;
      const disc = b * b - 4 * c;

      if (disc < 0) return NaN;

      const r1 = (-b + Math.sqrt(disc)) / 2;
      const r2 = (-b - Math.sqrt(disc)) / 2;

      if (r1 > -1 && r2 > -1) return Math.max(r1, r2);
      if (r1 > -1) return r1;
      if (r2 > -1) return r2;
      return NaN;
    },
    latex: ({ pv, twoYearFV, rateChange }, result) => {
      const A = twoYearFV / pv;
      const b = 2 + rateChange;
      const c = 1 + rateChange - A;

      return `We solve
      \\[
      ${formatNum(pv)}(1+i_1)(1+i_1${rateChange >= 0 ? "+" : ""}${formatPercent(rateChange)})=${formatNum(twoYearFV)}
      \\]
      so that
      \\[
      (1+i_1)(1+i_1${rateChange >= 0 ? "+" : ""}${formatPercent(rateChange)})=${formatNum(A)}.
      \\]
      Expanding gives
      \\[
      i_1^2 + ${formatNum(b)}i_1 + ${formatNum(c)} = 0.
      \\]
      Keeping the valid root,
      \\[
      i_1 \\approx ${formatPercent(result)}.
      \\]`;
    }
  },
  {
    output: "iNew",
    inputs: ["i1", "rateChange"],
    name: "Adjusted rate from base rate and rate change",
    compute: ({ i1, rateChange }) => i1 + rateChange,
    latex: ({ i1, rateChange }, result) =>
      `Using \\[
       i_{new} = i_1 + \\text{rate change}
       \\]
       with \\(i_1=${formatPercent(i1)}\\) and rate change \\(=${formatPercent(rateChange)}\\),
       we obtain \\[
       i_{new} \\approx ${formatPercent(result)}.
       \\]`
  },
  {
    output: "fv",
    inputs: ["pv", "iNew", "years"],
    name: "Future value from adjusted annual rate",
    compute: ({ pv, iNew, years }) => pv * Math.pow(1 + iNew, years),
    latex: ({ pv, iNew, years }, result) =>
      `Using \\[
       FV = PV(1+i_{new})^{n}
       \\]
       with \\(PV=${formatNum(pv)}\\), \\(i_{new}=${formatPercent(iNew)}\\), and \\(n=${formatNum(years)}\\),
       we obtain \\[
       FV \\approx ${formatNum(result)}.
       \\]`
  },
  {
    output: "fv",
    inputs: ["pv", "i1", "i2"],
    name: "Future value over 2 years with year-specific annual rates",
    compute: ({ pv, i1, i2 }) => pv * (1 + i1) * (1 + i2),
    latex: ({ pv, i1, i2 }, result) =>
      `Using \\[
       FV = PV(1+i_1)(1+i_2)
       \\]
       with \\(PV=${formatNum(pv)}\\), \\(i_1=${formatPercent(i1)}\\), \\(i_2=${formatPercent(i2)}\\),
       we obtain \\[
       FV \\approx ${formatNum(result)}.
       \\]`
  },
  {
    output: "fv",
    inputs: ["pv", "i1", "i2", "i3"],
    name: "Future value over 3 years with year-specific annual rates",
    compute: ({ pv, i1, i2, i3 }) => pv * (1 + i1) * (1 + i2) * (1 + i3),
    latex: ({ pv, i1, i2, i3 }, result) =>
      `Using \\[
       FV = PV(1+i_1)(1+i_2)(1+i_3)
       \\]
       with \\(PV=${formatNum(pv)}\\), \\(i_1=${formatPercent(i1)}\\), \\(i_2=${formatPercent(i2)}\\), \\(i_3=${formatPercent(i3)}\\),
       we obtain \\[
       FV \\approx ${formatNum(result)}.
       \\]`
  }
];

let parameterCounter = 0;

function formatNum(x) {
  if (!Number.isFinite(x)) return String(x);
  return Number(x).toFixed(6).replace(/\.?0+$/, "");
}

function formatPercent(x) {
  return `${formatNum(100 * x)}\\%`;
}

function variableOptionsHTML(selected = "") {
  return Object.entries(VARIABLES)
    .map(([key, meta]) => `<option value="${key}" ${key === selected ? "selected" : ""}>${meta.label}</option>`)
    .join("");
}

function populateTargetSelect() {
  const target = document.getElementById("targetVariable");
  target.innerHTML = Object.entries(VARIABLES)
    .map(([key, meta]) => `<option value="${key}">${meta.label}</option>`)
    .join("");
}

function addParameterRow(selectedVar = "pv", value = "") {
  parameterCounter += 1;
  const rowId = `param-row-${parameterCounter}`;

  const row = document.createElement("div");
  row.className = "fmc-param-row";
  row.id = rowId;

  row.innerHTML = `
    <div class="fmc-field">
      <label>Parameter</label>
      <div class="fmc-select-wrap">
        <select class="fmc-select fmc-param-name" onchange="updatePlaceholder('${rowId}')">
          ${variableOptionsHTML(selectedVar)}
        </select>
      </div>
    </div>

    <div class="fmc-field">
      <label>Value</label>
      <input type="number" step="any" class="fmc-input fmc-param-value" value="${value}">
    </div>

    <div>
      <button type="button" class="fmc-btn" onclick="removeParameterRow('${rowId}')">Remove</button>
    </div>
  `;

  document.getElementById("parameterRows").appendChild(row);
  updatePlaceholder(rowId);
}

function updatePlaceholder(rowId) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const name = row.querySelector(".fmc-param-name").value;
  const input = row.querySelector(".fmc-param-value");
  input.placeholder = VARIABLES[name]?.eg || "e.g.";
}

function removeParameterRow(rowId) {
  const row = document.getElementById(rowId);
  if (row) row.remove();
}

function resetCalculator() {
  document.getElementById("calcMessage").innerHTML = "";
  document.getElementById("calcResultBox").style.display = "none";
  document.getElementById("calcSteps").innerHTML = "";
  document.getElementById("parameterRows").innerHTML = "";

  addParameterRow("pv", "");
  addParameterRow("i", "");
  addParameterRow("n", "");
}

function showError(message) {
  document.getElementById("calcResultBox").style.display = "none";
  document.getElementById("calcMessage").innerHTML =
    `<div class="fmc-alert fmc-alert-error">${message}</div>`;
}

function normalizeInputValue(varName, num) {
  if (PERCENT_VARIABLES.has(varName)) {
    return num / 100;
  }
  return num;
}

function collectKnownValues() {
  const known = {};
  const rows = document.querySelectorAll(".fmc-param-row");

  for (const row of rows) {
    const name = row.querySelector(".fmc-param-name").value;
    const raw = row.querySelector(".fmc-param-value").value.trim();
    if (raw === "") continue;

    const num = Number(raw);
    if (!Number.isFinite(num)) continue;

    known[name] = normalizeInputValue(name, num);
  }
  return known;
}

function computeTarget() {
  const target = document.getElementById("targetVariable").value;
  const known = collectKnownValues();

  document.getElementById("calcMessage").innerHTML = "";
  document.getElementById("calcSteps").innerHTML = "";
  document.getElementById("calcResultBox").style.display = "none";

  if (known[target] !== undefined) {
    renderResult(target, known[target], [{
      title: "Already known",
      latex: `The target quantity was already provided as input.`
    }]);
    return;
  }

  const derived = { ...known };
  const usedSteps = [];
  const usedFormulaKeys = new Set();

  let progress = true;

  while (progress && derived[target] === undefined) {
    progress = false;

    for (const formula of FORMULAS) {
      const formulaKey = `${formula.output}|${formula.inputs.join(",")}`;

      if (derived[formula.output] !== undefined) continue;
      if (usedFormulaKeys.has(formulaKey)) continue;

      const allInputsKnown = formula.inputs.every(v => derived[v] !== undefined);
      if (!allInputsKnown) continue;

      const inputObj = {};
      formula.inputs.forEach(v => {
        inputObj[v] = derived[v];
      });

      const result = formula.compute(inputObj);

      if (!Number.isFinite(result)) continue;

      derived[formula.output] = result;
      usedFormulaKeys.add(formulaKey);
      usedSteps.push({
        title: formula.name,
        latex: formula.latex(inputObj, result)
      });
      progress = true;

      if (formula.output === target) break;
    }
  }

  if (derived[target] === undefined) {
    showError("The calculator could not determine the requested quantity from the parameters currently provided. Try adding more known values.");
    return;
  }

  renderResult(target, derived[target], usedSteps);
}

function renderResult(target, value, steps) {
  const resultText = PERCENT_VARIABLES.has(target)
    ? `${VARIABLES[target].label}: \\( ${formatPercent(value)} \\)`
    : `${VARIABLES[target].label}: \\( ${formatNum(value)} \\)`;

  document.getElementById("calcResult").innerHTML = resultText;

  const stepsContainer = document.getElementById("calcSteps");
  stepsContainer.innerHTML = "";

  if (steps.length === 0) {
    stepsContainer.innerHTML = `<div class="fmc-step"><div class="fmc-step-title">No intermediate step</div><div>The value was already known from the provided inputs.</div></div>`;
  } else {
    steps.forEach((step, index) => {
      const block = document.createElement("div");
      block.className = "fmc-step";
      block.innerHTML = `
        <div class="fmc-step-title">Step ${index + 1}. ${step.title}</div>
        <div>${step.latex}</div>
      `;
      stepsContainer.appendChild(block);
    });
  }

  document.getElementById("calcResultBox").style.display = "block";

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

populateTargetSelect();
resetCalculator();
</script>
