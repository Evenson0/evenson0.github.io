---
title: "Binomial Option Tree Lab"
permalink: /tools/binomial-option-tree/
layout: single
author_profile: true
---

<style>
  .bot-tool {
    --bg: #050807;
    --panel: #0b1510;
    --panel-2: #101d16;
    --green: #00ff7b;
    --green-soft: #9effc4;
    --green-dark: #0b6b38;
    --text: #eafff1;
    --muted: #a8c9b4;
    --red: #ff5f73;
    --yellow: #ffd166;
    --border: rgba(0, 255, 123, 0.28);

    background: radial-gradient(circle at top right, rgba(0, 255, 123, 0.12), transparent 35%), var(--bg);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 24px;
    margin: 24px 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    box-shadow: 0 0 40px rgba(0, 255, 123, 0.08);
  }

  .bot-tool h1,
  .bot-tool h2,
  .bot-tool h3 {
    color: var(--green-soft);
    margin-top: 0;
  }

  .bot-subtitle {
    color: var(--muted);
    max-width: 900px;
    line-height: 1.6;
  }

  .bot-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .bot-card {
    background: linear-gradient(180deg, var(--panel), var(--panel-2));
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 16px;
  }

  .bot-concepts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    margin-top: 14px;
  }

  .bot-concept {
    background: rgba(0, 255, 123, 0.06);
    border: 1px solid rgba(0, 255, 123, 0.18);
    border-radius: 12px;
    padding: 10px;
    font-size: 0.92rem;
  }

  .bot-concept strong {
    color: var(--green);
    display: block;
    margin-bottom: 4px;
  }

  .bot-controls {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }

  .bot-field label {
    display: block;
    color: var(--muted);
    font-size: 0.85rem;
    margin-bottom: 5px;
  }

  .bot-field input,
  .bot-field select {
    width: 100%;
    box-sizing: border-box;
    background: #030604;
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    outline: none;
  }

  .bot-field input:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .bot-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .bot-button {
    background: var(--green);
    color: #001807;
    border: none;
    border-radius: 12px;
    padding: 11px 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .bot-button.secondary {
    background: transparent;
    color: var(--green-soft);
    border: 1px solid var(--border);
  }

  .bot-output {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 16px;
    margin-top: 18px;
  }

  .bot-tree-wrap {
    overflow: auto;
    min-height: 460px;
    background: #020403;
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 18px;
    position: relative;
  }

  .bot-stage-label {
    color: var(--green-soft);
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  .bot-tree {
    min-width: 760px;
    height: 430px;
    position: relative;
  }

  .bot-node {
    position: absolute;
    transform: translate(-50%, -50%);
    min-width: 112px;
    background: rgba(0, 255, 123, 0.08);
    border: 1px solid rgba(0, 255, 123, 0.35);
    border-radius: 14px;
    padding: 8px 10px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
  }

  .bot-node.visible {
    opacity: 1;
    box-shadow: 0 0 18px rgba(0, 255, 123, 0.18);
  }

  .bot-node.active {
    transform: translate(-50%, -50%) scale(1.06);
    border-color: var(--green);
    box-shadow: 0 0 26px rgba(0, 255, 123, 0.45);
  }

  .bot-node.exercise {
    border-color: var(--yellow);
    box-shadow: 0 0 22px rgba(255, 209, 102, 0.35);
  }

  .bot-node-title {
    color: var(--muted);
    font-size: 0.73rem;
  }

  .bot-node-main {
    color: var(--green-soft);
    font-weight: 800;
    font-size: 1rem;
  }

  .bot-node-small {
    color: var(--muted);
    font-size: 0.72rem;
    margin-top: 2px;
  }

  .bot-line-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .bot-line {
    stroke: rgba(0, 255, 123, 0.25);
    stroke-width: 2;
  }

  .bot-result {
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .bot-result strong {
    color: var(--green);
  }

  .bot-kpi {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin: 12px 0;
  }

  .bot-kpi div {
    background: rgba(0, 255, 123, 0.06);
    border: 1px solid rgba(0, 255, 123, 0.18);
    border-radius: 12px;
    padding: 10px;
  }

  .bot-kpi span {
    color: var(--muted);
    display: block;
    font-size: 0.78rem;
  }

  .bot-kpi strong {
    font-size: 1.05rem;
  }

  .bot-log {
    height: 210px;
    overflow: auto;
    background: #020403;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 10px;
    color: var(--green-soft);
    font-family: Consolas, monospace;
    font-size: 0.82rem;
    white-space: pre-wrap;
  }

  .bot-warning {
    color: var(--yellow);
    margin-top: 10px;
    font-size: 0.92rem;
  }

  .bot-theory code {
    color: var(--green-soft);
  }

  @media (max-width: 900px) {
    .bot-grid,
    .bot-output,
    .bot-controls,
    .bot-concepts {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="bot-tool" id="binomial-option-tool">
  <h1>Binomial Option Tree Lab</h1>
  <p class="bot-subtitle">
    This tool builds a binomial tree for a stock price, then prices a European or American call/put by backward induction.
    It is designed as a visual companion for the discrete-time no-arbitrage model used in mathematical finance.
  </p>

  <div class="bot-card">
    <h2>Key Concepts</h2>
    <div class="bot-concepts">
      <div class="bot-concept"><strong>Underlying asset</strong>The stock or asset on which the derivative is written.</div>
      <div class="bot-concept"><strong>Call option</strong>A contract giving the right to buy the asset at strike K.</div>
      <div class="bot-concept"><strong>Put option</strong>A contract giving the right to sell the asset at strike K.</div>
      <div class="bot-concept"><strong>Strike price K</strong>The fixed exercise price of the option.</div>
      <div class="bot-concept"><strong>Maturity T</strong>The final date at which the option expires.</div>
      <div class="bot-concept"><strong>European option</strong>Can be exercised only at maturity.</div>
      <div class="bot-concept"><strong>American option</strong>Can be exercised at any node before maturity.</div>
      <div class="bot-concept"><strong>Risk-free rate r</strong>The continuously compounded rate used for discounting.</div>
      <div class="bot-concept"><strong>Up / down factors</strong>At each step, the stock moves to Su or Sd.</div>
      <div class="bot-concept"><strong>Risk-neutral probability</strong>The probability p that makes the discounted stock a martingale.</div>
      <div class="bot-concept"><strong>Backward induction</strong>Start from final payoffs and work backward to time 0.</div>
      <div class="bot-concept"><strong>Replication portfolio</strong>A portfolio Delta shares + B bonds that reproduces the option value.</div>
    </div>
  </div>

  <div class="bot-grid" style="margin-top:16px;">
    <div class="bot-card">
      <h2>Inputs</h2>
      <div class="bot-controls">
        <div class="bot-field">
          <label>Solve for</label>
          <select id="bot-target">
            <option value="optionPrice">Option price</option>
            <option value="stockPrice">Underlying price S0</option>
          </select>
        </div>

        <div class="bot-field">
          <label>Option type</label>
          <select id="bot-option-type">
            <option value="call">Call</option>
            <option value="put">Put</option>
          </select>
        </div>

        <div class="bot-field">
          <label>Exercise style</label>
          <select id="bot-style">
            <option value="european">European</option>
            <option value="american">American</option>
          </select>
        </div>

        <div class="bot-field">
          <label>Steps n</label>
          <input id="bot-n" type="number" value="2" min="1" max="8" step="1">
        </div>

        <div class="bot-field">
          <label>Stock price S0</label>
          <input id="bot-s0" type="number" value="100" step="0.01">
        </div>

        <div class="bot-field">
          <label>Strike K</label>
          <input id="bot-k" type="number" value="100" step="0.01">
        </div>

        <div class="bot-field">
          <label>Risk-free rate r</label>
          <input id="bot-r" type="number" value="0.02" step="0.001">
        </div>

        <div class="bot-field">
          <label>Maturity T</label>
          <input id="bot-t" type="number" value="2" step="0.01">
        </div>

        <div class="bot-field">
          <label>Up factor u</label>
          <input id="bot-u" type="number" value="1.12" step="0.001">
        </div>

        <div class="bot-field">
          <label>Down factor d</label>
          <input id="bot-d" type="number" value="0.93" step="0.001">
        </div>

        <div class="bot-field">
          <label>Known option price</label>
          <input id="bot-known-price" type="number" value="10" step="0.01" disabled>
        </div>

        <div class="bot-field">
          <label>Animation speed</label>
          <select id="bot-speed">
            <option value="900">Slow</option>
            <option value="500">Medium</option>
            <option value="200">Fast</option>
          </select>
        </div>
      </div>

      <div class="bot-actions">
        <button class="bot-button" id="bot-run">Generate Tree</button>
        <button class="bot-button secondary" id="bot-reset">Reset</button>
      </div>

      <div class="bot-warning" id="bot-warning"></div>
    </div>

    <div class="bot-card bot-theory">
      <h2>Theory</h2>
      <p>
        For one step of length <code>dt = T / n</code>, the risk-neutral probability is
      </p>
      <p><code>p = (exp(r dt) - d) / (u - d)</code></p>
      <p>
        The European continuation value is
      </p>
      <p><code>V = exp(-r dt) [p V_up + (1 - p) V_down]</code></p>
      <p>
        For an American option, each node compares continuation value with immediate exercise value:
      </p>
      <p><code>V = max(continuation, immediate exercise)</code></p>
      <p>
        The delta at a node is
      </p>
      <p><code>Delta = (V_up - V_down) / (S_up - S_down)</code></p>
    </div>
  </div>

  <div class="bot-output">
    <div class="bot-tree-wrap">
      <div class="bot-stage-label" id="bot-stage">Waiting for inputs...</div>
      <div class="bot-tree" id="bot-tree"></div>
    </div>

    <div class="bot-card">
      <h2>Result</h2>
      <div class="bot-result" id="bot-result">
        Click <strong>Generate Tree</strong> to start.
      </div>
      <div class="bot-kpi" id="bot-kpi"></div>
      <h3>Log</h3>
      <div class="bot-log" id="bot-log"></div>
    </div>
  </div>
</div>

<script>
(function () {
  const $ = (id) => document.getElementById(id);

  const ids = {
    target: $("bot-target"),
    optionType: $("bot-option-type"),
    style: $("bot-style"),
    n: $("bot-n"),
    s0: $("bot-s0"),
    k: $("bot-k"),
    r: $("bot-r"),
    t: $("bot-t"),
    u: $("bot-u"),
    d: $("bot-d"),
    knownPrice: $("bot-known-price"),
    speed: $("bot-speed"),
    run: $("bot-run"),
    reset: $("bot-reset"),
    warning: $("bot-warning"),
    tree: $("bot-tree"),
    stage: $("bot-stage"),
    result: $("bot-result"),
    kpi: $("bot-kpi"),
    log: $("bot-log")
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function fmt(x) {
    if (!Number.isFinite(x)) return "--";
    return Number(x).toFixed(4);
  }

  function money(x) {
    if (!Number.isFinite(x)) return "--";
    return "$" + Number(x).toFixed(4);
  }

  function getInputs() {
    return {
      target: ids.target.value,
      optionType: ids.optionType.value,
      style: ids.style.value,
      n: Math.max(1, Math.min(8, parseInt(ids.n.value, 10))),
      s0: parseFloat(ids.s0.value),
      k: parseFloat(ids.k.value),
      r: parseFloat(ids.r.value),
      t: parseFloat(ids.t.value),
      u: parseFloat(ids.u.value),
      d: parseFloat(ids.d.value),
      knownPrice: parseFloat(ids.knownPrice.value),
      speed: parseInt(ids.speed.value, 10)
    };
  }

  function validate(params) {
    if (params.u <= params.d) return "The up factor u must be greater than the down factor d.";
    if (params.d <= 0 || params.u <= 0) return "The up and down factors must be positive.";
    if (params.t <= 0) return "Maturity T must be positive.";
    if (params.n < 1 || params.n > 8) return "For readability, n must be between 1 and 8.";
    if (params.target === "optionPrice" && params.s0 <= 0) return "S0 must be positive.";
    if (params.k <= 0) return "K must be positive.";
    if (params.target === "stockPrice" && params.knownPrice < 0) return "Known option price must be non-negative.";

    const dt = params.t / params.n;
    const p = (Math.exp(params.r * dt) - params.d) / (params.u - params.d);
    if (p <= 0 || p >= 1) {
      return "No-arbitrage condition failed: the risk-neutral probability is not between 0 and 1.";
    }
    return "";
  }

  function payoff(s, k, type) {
    if (type === "call") return Math.max(s - k, 0);
    return Math.max(k - s, 0);
  }

  function priceOption(params, s0Override = null) {
    const n = params.n;
    const s0 = s0Override === null ? params.s0 : s0Override;
    const dt = params.t / n;
    const discount = Math.exp(-params.r * dt);
    const p = (Math.exp(params.r * dt) - params.d) / (params.u - params.d);

    const stock = [];
    const option = [];
    const delta = [];
    const bond = [];
    const early = [];

    for (let i = 0; i <= n; i++) {
      stock[i] = [];
      option[i] = [];
      delta[i] = [];
      bond[i] = [];
      early[i] = [];
      for (let j = 0; j <= i; j++) {
        stock[i][j] = s0 * Math.pow(params.u, j) * Math.pow(params.d, i - j);
        option[i][j] = null;
        delta[i][j] = null;
        bond[i][j] = null;
        early[i][j] = false;
      }
    }

    for (let j = 0; j <= n; j++) {
      option[n][j] = payoff(stock[n][j], params.k, params.optionType);
    }

    for (let i = n - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        const upV = option[i + 1][j + 1];
        const downV = option[i + 1][j];
        const upS = stock[i + 1][j + 1];
        const downS = stock[i + 1][j];
        const continuation = discount * (p * upV + (1 - p) * downV);
        const immediate = payoff(stock[i][j], params.k, params.optionType);

        if (params.style === "american" && immediate > continuation) {
          option[i][j] = immediate;
          early[i][j] = true;
        } else {
          option[i][j] = continuation;
        }

        delta[i][j] = (upV - downV) / (upS - downS);
        bond[i][j] = discount * (upV - delta[i][j] * upS);
      }
    }

    return {
      stock,
      option,
      delta,
      bond,
      early,
      price: option[0][0],
      p,
      dt,
      discount
    };
  }

  function solveForStockPrice(params) {
    let low = 0.0001;
    let high = Math.max(params.k * 5, 500);

    for (let tries = 0; tries < 20; tries++) {
      const priceHigh = priceOption(params, high).price;
      if (priceHigh >= params.knownPrice) break;
      high *= 2;
    }

    for (let iter = 0; iter < 80; iter++) {
      const mid = (low + high) / 2;
      const priceMid = priceOption(params, mid).price;
      if (priceMid < params.knownPrice) low = mid;
      else high = mid;
    }

    return (low + high) / 2;
  }

  function positionForNode(i, j, n) {
    const xGap = 680 / Math.max(n, 1);
    const yGap = 330 / Math.max(n + 1, 2);
    const x = 70 + i * xGap;
    const centerY = 215;
    const y = centerY + (i / 2 - j) * yGap * 1.8;
    return { x, y };
  }

  function clearTree() {
    ids.tree.innerHTML = "";
  }

  function createLines(n) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "bot-line-layer");
    svg.setAttribute("viewBox", "0 0 820 430");

    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        const a = positionForNode(i, j, n);
        const down = positionForNode(i + 1, j, n);
        const up = positionForNode(i + 1, j + 1, n);

        [down, up].forEach(b => {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", a.x);
          line.setAttribute("y1", a.y);
          line.setAttribute("x2", b.x);
          line.setAttribute("y2", b.y);
          line.setAttribute("class", "bot-line");
          svg.appendChild(line);
        });
      }
    }

    ids.tree.appendChild(svg);
  }

  function createNode(i, j, n) {
    const pos = positionForNode(i, j, n);
    const node = document.createElement("div");
    node.className = "bot-node";
    node.id = `bot-node-${i}-${j}`;
    node.style.left = pos.x + "px";
    node.style.top = pos.y + "px";
    ids.tree.appendChild(node);
    return node;
  }

  function setNodeContent(i, j, html, className = "") {
    const node = $(`bot-node-${i}-${j}`);
    if (!node) return;
    node.innerHTML = html;
    node.className = "bot-node visible " + className;
  }

  function log(message) {
    ids.log.textContent += message + "\n";
    ids.log.scrollTop = ids.log.scrollHeight;
  }

  async function animate(result, params) {
    clearTree();
    ids.log.textContent = "";
    createLines(params.n);

    for (let i = 0; i <= params.n; i++) {
      for (let j = 0; j <= i; j++) createNode(i, j, params.n);
    }

    ids.stage.textContent = "Step 1 — Building the stock price tree.";
    log("Building stock price tree...");

    for (let i = 0; i <= params.n; i++) {
      for (let j = 0; j <= i; j++) {
        setNodeContent(i, j, `
          <div class="bot-node-title">S(${i},${j})</div>
          <div class="bot-node-main">${money(result.stock[i][j])}</div>
        `, "active");
        await sleep(params.speed);
        setNodeContent(i, j, `
          <div class="bot-node-title">S(${i},${j})</div>
          <div class="bot-node-main">${money(result.stock[i][j])}</div>
        `);
      }
    }

    ids.stage.textContent = "Step 2 — Computing terminal payoffs.";
    log("Computing terminal payoffs at maturity...");

    for (let j = 0; j <= params.n; j++) {
      setNodeContent(params.n, j, `
        <div class="bot-node-title">Payoff</div>
        <div class="bot-node-main">${money(result.option[params.n][j])}</div>
        <div class="bot-node-small">S = ${money(result.stock[params.n][j])}</div>
      `, "active");
      await sleep(params.speed);
      setNodeContent(params.n, j, `
        <div class="bot-node-title">Payoff</div>
        <div class="bot-node-main">${money(result.option[params.n][j])}</div>
        <div class="bot-node-small">S = ${money(result.stock[params.n][j])}</div>
      `);
    }

    ids.stage.textContent = "Step 3 — Backward induction.";
    log("Working backward to time 0...");

    for (let i = params.n - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        const exerciseClass = result.early[i][j] ? "exercise" : "active";
        setNodeContent(i, j, `
          <div class="bot-node-title">V(${i},${j})</div>
          <div class="bot-node-main">${money(result.option[i][j])}</div>
          <div class="bot-node-small">S = ${money(result.stock[i][j])}</div>
          <div class="bot-node-small">Δ = ${fmt(result.delta[i][j])}</div>
          ${result.early[i][j] ? '<div class="bot-node-small" style="color:#ffd166;">Early exercise</div>' : ''}
        `, exerciseClass);
        await sleep(params.speed);
        setNodeContent(i, j, `
          <div class="bot-node-title">V(${i},${j})</div>
          <div class="bot-node-main">${money(result.option[i][j])}</div>
          <div class="bot-node-small">S = ${money(result.stock[i][j])}</div>
          <div class="bot-node-small">Δ = ${fmt(result.delta[i][j])}</div>
          ${result.early[i][j] ? '<div class="bot-node-small" style="color:#ffd166;">Early exercise</div>' : ''}
        `, result.early[i][j] ? "exercise" : "");
      }
    }

    ids.stage.textContent = "Done — the price at the root is the no-arbitrage option price.";
    log("Done.");
  }

  function renderKpis(params, result, solvedS0 = null) {
    const displayS0 = solvedS0 === null ? params.s0 : solvedS0;
    ids.kpi.innerHTML = `
      <div><span>Risk-neutral probability</span><strong>${fmt(result.p)}</strong></div>
      <div><span>Discount factor per step</span><strong>${fmt(result.discount)}</strong></div>
      <div><span>Stock price S0</span><strong>${money(displayS0)}</strong></div>
      <div><span>Option price</span><strong>${money(result.price)}</strong></div>
    `;
  }

  async function runTool() {
    const params = getInputs();
    ids.warning.textContent = "";
    const error = validate(params);
    if (error) {
      ids.warning.textContent = error;
      return;
    }

    ids.run.disabled = true;

    let result;
    let solvedS0 = null;

    if (params.target === "stockPrice") {
      solvedS0 = solveForStockPrice(params);
      result = priceOption(params, solvedS0);
      ids.result.innerHTML = `
        Solved underlying price:<br>
        <strong>${money(solvedS0)}</strong><br><br>
        Check: the model option price is <strong>${money(result.price)}</strong>.
      `;
      log(`Solved S0 = ${fmt(solvedS0)} from known option price ${fmt(params.knownPrice)}.`);
    } else {
      result = priceOption(params);
      ids.result.innerHTML = `
        ${params.style.charAt(0).toUpperCase() + params.style.slice(1)} ${params.optionType} price:<br>
        <strong>${money(result.price)}</strong>
      `;
      log(`Option price = ${fmt(result.price)}.`);
    }

    renderKpis(params, result, solvedS0);
    await animate(result, { ...params, s0: solvedS0 === null ? params.s0 : solvedS0 });
    ids.run.disabled = false;
  }

  function resetTool() {
    clearTree();
    ids.stage.textContent = "Waiting for inputs...";
    ids.result.innerHTML = "Click <strong>Generate Tree</strong> to start.";
    ids.kpi.innerHTML = "";
    ids.log.textContent = "";
    ids.warning.textContent = "";
  }

  function updateTargetState() {
    const solvingStock = ids.target.value === "stockPrice";
    ids.s0.disabled = solvingStock;
    ids.knownPrice.disabled = !solvingStock;
  }

  ids.target.addEventListener("change", updateTargetState);
  ids.run.addEventListener("click", runTool);
  ids.reset.addEventListener("click", resetTool);
  updateTargetState();
})();
</script>

## Notes

This tool uses a discrete-time binomial model. It is best for learning the mechanics of risk-neutral pricing, backward induction, American early exercise, and replication. For large values of `n`, the tree becomes harder to read visually, so the interactive display is intentionally limited to small trees.

