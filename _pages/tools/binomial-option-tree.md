---
title: "Binomial Option Tree Lab"
permalink: /tools/binomial-option-tree/
layout: single
author_profile: true
mathjax: true
---

<style>
  .bot-container {
    max-width: 1120px;
    margin: 0 auto;
  }

  .bot-notes {
    padding: 20px;
    border-radius: 18px;
    border: 1px solid rgba(127, 127, 127, 0.24);
    background: rgba(127, 127, 127, 0.06);
    margin-bottom: 22px;
  }

  .bot-notes h2 {
    margin-top: 0;
  }

  .bot-notes p {
    margin-bottom: 12px;
    line-height: 1.6;
  }

  .bot-concepts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
    margin-top: 16px;
  }

  .bot-concept {
    padding: 13px 14px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.24);
    background: rgba(127, 127, 127, 0.06);
    line-height: 1.45;
  }

  .bot-concept strong {
    display: block;
    margin-bottom: 4px;
  }

  .bot-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 14px;
    padding: 18px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    border-radius: 16px;
    background: rgba(127, 127, 127, 0.06);
    margin-bottom: 18px;
  }

  .bot-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .bot-field label {
    font-weight: 700;
    font-size: 0.95rem;
  }

  .bot-field input,
  .bot-field select {
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid rgba(127, 127, 127, 0.35);
    background: transparent;
    color: inherit;
  }

  .bot-volume-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bot-volume-wrap input[type="range"] {
    width: 100%;
  }

  .bot-volume-value {
    min-width: 48px;
    font-weight: 800;
    text-align: right;
  }

  .bot-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 18px;
  }

  .bot-btn {
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid rgba(127, 127, 127, 0.28);
    background: rgba(127, 127, 127, 0.08);
    color: inherit;
    font-weight: 700;
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease,
      background 0.18s ease;
  }

  .bot-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    background: rgba(127, 127, 127, 0.14);
  }

  .bot-warning {
    margin-bottom: 14px;
    padding: 12px 14px;
    border-radius: 14px;
    border: 1px solid rgba(245, 158, 11, 0.45);
    background: rgba(245, 158, 11, 0.12);
    display: none;
  }

  .bot-output {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
    gap: 16px;
  }

  .bot-forest {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .bot-tree-card,
  .bot-result-card {
    border-radius: 18px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    background: rgba(127, 127, 127, 0.04);
    padding: 16px;
  }

  .bot-tree-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 10px;
  }

  .bot-tree-header h3 {
    margin: 0;
  }

  .bot-tree-subtitle {
    font-size: 0.9rem;
    opacity: 0.75;
  }

  .bot-stage {
    margin-bottom: 12px;
    font-weight: 800;
    line-height: 1.45;
  }

  .bot-tree-wrap {
    width: 100%;
    overflow: auto;
    border-radius: 16px;
    border: 1px solid rgba(127, 127, 127, 0.24);
    background: rgba(255, 255, 255, 0.02);
  }

  .bot-tree-svg {
    display: block;
    height: 520px;
  }

  .bot-edge {
    stroke: currentColor;
    stroke-width: 2;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .bot-edge-visible {
    opacity: 0.22;
  }

  .bot-node-group {
    opacity: 0;
    transition:
      opacity 0.35s ease,
      transform 0.35s ease;
  }

  .bot-node-visible {
    opacity: 1;
  }

  .bot-node-active {
    filter: drop-shadow(0 0 8px rgba(127, 127, 127, 0.65));
  }

  .bot-node-early rect {
    stroke: #f59e0b;
    stroke-width: 2.5;
  }

  .bot-node-terminal rect {
    stroke-dasharray: 5 4;
  }

  .bot-node-root rect {
    stroke-width: 2.4;
  }

  .bot-node-rect {
    fill: rgba(127, 127, 127, 0.10);
    stroke: rgba(127, 127, 127, 0.55);
    stroke-width: 1.4;
  }

  .bot-node-title {
    font-size: 12px;
    opacity: 0.78;
  }

  .bot-node-main {
    font-size: 15px;
    font-weight: 800;
  }

  .bot-node-small {
    font-size: 11px;
    opacity: 0.78;
  }

  .bot-kpis {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 12px 0 16px;
  }

  .bot-kpi {
    padding: 12px 13px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.22);
    background: rgba(127, 127, 127, 0.06);
  }

  .bot-kpi span {
    display: block;
    font-size: 0.82rem;
    opacity: 0.78;
    margin-bottom: 3px;
  }

  .bot-kpi strong {
    font-size: 1.08rem;
  }

  .bot-detail {
    padding: 12px 13px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.22);
    background: rgba(127, 127, 127, 0.06);
    line-height: 1.55;
  }

  .bot-detail-title {
    font-weight: 900;
    margin-bottom: 6px;
  }

  .bot-log {
    margin-top: 12px;
    padding: 12px 13px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.22);
    background: rgba(127, 127, 127, 0.05);
    max-height: 180px;
    overflow: auto;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: 0.84rem;
    white-space: pre-wrap;
  }

  @media (max-width: 900px) {
    .bot-output {
      grid-template-columns: 1fr;
    }

    .bot-tree-svg {
      height: 500px;
    }
  }
</style>

<div class="bot-container">

  <div class="bot-notes">
    <h2>Binomial Option Tree Lab</h2>

    <p>
      This tool builds a binomial tree for an underlying asset and prices a call or put option by backward induction.
      The goal is to see the stock price tree first, then the option value tree.
    </p>

    <p>
      At each step, the asset price moves either up by a factor \(u\) or down by a factor \(d\).
      Under the risk-neutral measure, the option price is obtained by discounting the expected future value.
    </p>

    <div class="bot-concepts">
      <div class="bot-concept">
        <strong>Stock price tree</strong>
        The possible future values of the underlying asset.
      </div>

      <div class="bot-concept">
        <strong>Option value tree</strong>
        The option values computed from payoffs and backward induction.
      </div>

      <div class="bot-concept">
        <strong>Risk-neutral probability</strong>
        The probability that makes the discounted stock price a martingale.
      </div>

      <div class="bot-concept">
        <strong>Backward induction</strong>
        Start from terminal payoffs and work backward to time 0.
      </div>

      <div class="bot-concept">
        <strong>European option</strong>
        Can be exercised only at maturity.
      </div>

      <div class="bot-concept">
        <strong>American option</strong>
        Can be exercised before maturity if immediate exercise is better.
      </div>
    </div>
  </div>

  <div class="bot-panel">

    <div class="bot-field">
      <label for="botOptionType">Option type</label>
      <select id="botOptionType">
        <option value="call">Call</option>
        <option value="put">Put</option>
      </select>
    </div>

    <div class="bot-field">
      <label for="botStyle">Exercise style</label>
      <select id="botStyle">
        <option value="european">European</option>
        <option value="american">American</option>
      </select>
    </div>

    <div class="bot-field">
      <label for="botSteps">Steps \(n\)</label>
      <input id="botSteps" type="number" value="3" min="1" max="10" step="1">
    </div>

    <div class="bot-field">
      <label for="botS0">Initial price \(S_0\)</label>
      <input id="botS0" type="number" value="100" min="0.01" step="0.01">
    </div>

    <div class="bot-field">
      <label for="botK">Strike \(K\)</label>
      <input id="botK" type="number" value="100" min="0.01" step="0.01">
    </div>

    <div class="bot-field">
      <label for="botR">Risk-free rate \(r\)</label>
      <input id="botR" type="number" value="0.02" step="0.001">
    </div>

    <div class="bot-field">
      <label for="botT">Maturity \(T\)</label>
      <input id="botT" type="number" value="1" min="0.01" step="0.01">
    </div>

    <div class="bot-field">
      <label for="botU">Up factor \(u\)</label>
      <input id="botU" type="number" value="1.12" min="0.01" step="0.001">
    </div>

    <div class="bot-field">
      <label for="botD">Down factor \(d\)</label>
      <input id="botD" type="number" value="0.93" min="0.01" step="0.001">
    </div>

    <div class="bot-field">
      <label for="botVolume">Rhythm volume</label>
      <div class="bot-volume-wrap">
        <input id="botVolume" type="range" min="0" max="100" value="55" oninput="updateBotVolumeLabel()">
        <span id="botVolumeValue" class="bot-volume-value">55%</span>
      </div>
    </div>

  </div>

  <div id="botWarning" class="bot-warning"></div>

  <div class="bot-buttons">
    <button class="bot-btn" onclick="generateBinomialTree()">Generate tree</button>
    <button class="bot-btn" onclick="resetBinomialTree()">Reset</button>
  </div>

  <div class="bot-output">

    <div class="bot-forest">

      <div class="bot-tree-card">
        <div class="bot-tree-header">
          <h3>Stock Price Tree</h3>
          <span class="bot-tree-subtitle">Underlying asset values</span>
        </div>

        <div id="botStockStage" class="bot-stage">Waiting for inputs...</div>

        <div class="bot-tree-wrap" id="botStockWrap">
          <svg id="botStockSvg" class="bot-tree-svg" aria-label="Stock price binomial tree"></svg>
        </div>
      </div>

      <div class="bot-tree-card">
        <div class="bot-tree-header">
          <h3>Option Value Tree</h3>
          <span class="bot-tree-subtitle">Payoffs and backward induction</span>
        </div>

        <div id="botOptionStage" class="bot-stage">Waiting for stock tree...</div>

        <div class="bot-tree-wrap" id="botOptionWrap">
          <svg id="botOptionSvg" class="bot-tree-svg" aria-label="Option value binomial tree"></svg>
        </div>
      </div>

    </div>

    <div class="bot-result-card">
      <h2>Result</h2>

      <div id="botResult">
        Click <strong>Generate tree</strong> to start.
      </div>

      <div id="botKpis" class="bot-kpis"></div>

      <div id="botDetail" class="bot-detail">
        The selected node details will appear here during the construction.
      </div>

      <div id="botLog" class="bot-log"></div>
    </div>

  </div>

</div>

<script>
  const botStockSvg = document.getElementById("botStockSvg");
  const botOptionSvg = document.getElementById("botOptionSvg");
  const botStockWrap = document.getElementById("botStockWrap");
  const botOptionWrap = document.getElementById("botOptionWrap");
  const botStockStage = document.getElementById("botStockStage");
  const botOptionStage = document.getElementById("botOptionStage");
  const botResult = document.getElementById("botResult");
  const botKpis = document.getElementById("botKpis");
  const botDetail = document.getElementById("botDetail");
  const botLog = document.getElementById("botLog");
  const botWarning = document.getElementById("botWarning");

  let botAnimationToken = 0;
  let botStockViewBox = null;
  let botOptionViewBox = null;

  function updateBotVolumeLabel() {
    const value = Number(document.getElementById("botVolume").value);
    document.getElementById("botVolumeValue").textContent = value + "%";
  }

  function botMoney(x) {
    if (!Number.isFinite(x)) {
      return "--";
    }

    return "$" + Number(x).toFixed(4);
  }

  function botNumber(x) {
    if (!Number.isFinite(x)) {
      return "--";
    }

    return Number(x).toFixed(4);
  }

  function botSleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getBotDelay(volume) {
    if (volume >= 100) {
      return 0;
    }

    const normalized = volume / 100;
    return Math.round(950 * Math.pow(1 - normalized, 3.2));
  }

  function getBotInputs() {
    return {
      optionType: document.getElementById("botOptionType").value,
      style: document.getElementById("botStyle").value,
      n: Math.max(1, Math.min(10, Number(document.getElementById("botSteps").value))),
      s0: Number(document.getElementById("botS0").value),
      k: Number(document.getElementById("botK").value),
      r: Number(document.getElementById("botR").value),
      t: Number(document.getElementById("botT").value),
      u: Number(document.getElementById("botU").value),
      d: Number(document.getElementById("botD").value),
      volume: Number(document.getElementById("botVolume").value)
    };
  }

  function validateBotInputs(params) {
    if (params.s0 <= 0) {
      return "The initial stock price S0 must be positive.";
    }

    if (params.k <= 0) {
      return "The strike K must be positive.";
    }

    if (params.t <= 0) {
      return "The maturity T must be positive.";
    }

    if (params.u <= 0 || params.d <= 0) {
      return "The up and down factors must be positive.";
    }

    if (params.u <= params.d) {
      return "The up factor u must be greater than the down factor d.";
    }

    const dt = params.t / params.n;
    const p = (Math.exp(params.r * dt) - params.d) / (params.u - params.d);

    if (p <= 0 || p >= 1) {
      return "No-arbitrage condition failed: the risk-neutral probability must be between 0 and 1.";
    }

    return "";
  }

  function botPayoff(s, k, optionType) {
    if (optionType === "call") {
      return Math.max(s - k, 0);
    }

    return Math.max(k - s, 0);
  }

  function priceBinomialOption(params) {
    const n = params.n;
    const dt = params.t / n;
    const discount = Math.exp(-params.r * dt);
    const p = (Math.exp(params.r * dt) - params.d) / (params.u - params.d);

    const stock = [];
    const option = [];
    const delta = [];
    const early = [];
    const continuation = [];
    const immediate = [];

    for (let i = 0; i <= n; i++) {
      stock[i] = [];
      option[i] = [];
      delta[i] = [];
      early[i] = [];
      continuation[i] = [];
      immediate[i] = [];

      for (let j = 0; j <= i; j++) {
        stock[i][j] =
          params.s0 *
          Math.pow(params.u, j) *
          Math.pow(params.d, i - j);

        option[i][j] = null;
        delta[i][j] = null;
        early[i][j] = false;
        continuation[i][j] = null;
        immediate[i][j] = botPayoff(stock[i][j], params.k, params.optionType);
      }
    }

    for (let j = 0; j <= n; j++) {
      option[n][j] = immediate[n][j];
    }

    for (let i = n - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        const upValue = option[i + 1][j + 1];
        const downValue = option[i + 1][j];
        const upStock = stock[i + 1][j + 1];
        const downStock = stock[i + 1][j];

        const cont = discount * (p * upValue + (1 - p) * downValue);
        continuation[i][j] = cont;

        if (params.style === "american" && immediate[i][j] > cont) {
          option[i][j] = immediate[i][j];
          early[i][j] = true;
        } else {
          option[i][j] = cont;
        }

        delta[i][j] = (upValue - downValue) / (upStock - downStock);
      }
    }

    return {
      stock,
      option,
      delta,
      early,
      continuation,
      immediate,
      price: option[0][0],
      p,
      dt,
      discount
    };
  }

  function botLayout(params) {
    const n = params.n;

    const xGap = 170;
    const yGap = 86;
    const marginX = 100;
    const marginY = 90;

    const width = marginX * 2 + xGap * n + 160;
    const height = Math.max(520, marginY * 2 + yGap * n + 120);

    const centerY = height / 2;

    function position(i, j) {
      return {
        x: marginX + i * xGap,
        y: centerY + (i / 2 - j) * yGap
      };
    }

    return {
      width,
      height,
      position
    };
  }

  function botColumnViewBox(params, column) {
    const layout = botLayout(params);
    const n = params.n;

    const visibleColumn = Math.max(0, Math.min(column, n));
    const maxReadableWidth = Math.min(layout.width, 760);
    const focusX = Math.max(0, layout.position(visibleColumn, 0).x - 430);

    let minY = Infinity;
    let maxY = -Infinity;

    for (let i = Math.max(0, visibleColumn - 2); i <= visibleColumn; i++) {
      for (let j = 0; j <= i; j++) {
        const p = layout.position(i, j);
        minY = Math.min(minY, p.y - 75);
        maxY = Math.max(maxY, p.y + 75);
      }
    }

    minY = Math.max(0, minY);
    maxY = Math.min(layout.height, maxY);

    return {
      x: focusX,
      y: minY,
      w: maxReadableWidth,
      h: Math.max(300, maxY - minY)
    };
  }

  function botReadableFinalViewBox(params) {
    const layout = botLayout(params);

    return {
      x: 0,
      y: 0,
      w: Math.min(layout.width, 900),
      h: layout.height
    };
  }

  function setBotViewBox(svg, box, treeType) {
    if (treeType === "stock") {
      botStockViewBox = box;
    } else {
      botOptionViewBox = box;
    }

    svg.setAttribute("viewBox", `${box.x} ${box.y} ${box.w} ${box.h}`);
  }

  function getCurrentViewBox(treeType) {
    return treeType === "stock" ? botStockViewBox : botOptionViewBox;
  }

  function animateBotViewBox(svg, targetBox, treeType, duration = 420) {
    const currentBox = getCurrentViewBox(treeType);

    if (!currentBox) {
      setBotViewBox(svg, targetBox, treeType);
      return Promise.resolve();
    }

    const startBox = { ...currentBox };
    const startTime = performance.now();

    return new Promise(resolve => {
      function frame(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);

        const current = {
          x: startBox.x + (targetBox.x - startBox.x) * eased,
          y: startBox.y + (targetBox.y - startBox.y) * eased,
          w: startBox.w + (targetBox.w - startBox.w) * eased,
          h: startBox.h + (targetBox.h - startBox.h) * eased
        };

        setBotViewBox(svg, current, treeType);

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setBotViewBox(svg, targetBox, treeType);
          resolve();
        }
      }

      requestAnimationFrame(frame);
    });
  }

  function scrollTreeToStart(wrap) {
    wrap.scrollLeft = 0;
    wrap.scrollTop = 0;
  }

  function scrollTreeToEnd(wrap) {
    wrap.scrollLeft = wrap.scrollWidth;
  }

  function createSvgElement(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }

  function clearSvg(svg) {
    svg.innerHTML = "";
  }

  function createTreeSkeleton(svg, params, prefix) {
    clearSvg(svg);

    const layout = botLayout(params);

    svg.setAttribute("width", layout.width);
    svg.setAttribute("height", layout.height);
    svg.style.minWidth = layout.width + "px";
    svg.style.height = layout.height + "px";
    svg.setAttribute("viewBox", `0 0 ${layout.width} ${layout.height}`);

    const edgeLayer = createSvgElement("g");
    edgeLayer.setAttribute("id", `${prefix}-edge-layer`);

    const nodeLayer = createSvgElement("g");
    nodeLayer.setAttribute("id", `${prefix}-node-layer`);

    svg.appendChild(edgeLayer);
    svg.appendChild(nodeLayer);

    for (let i = 0; i < params.n; i++) {
      for (let j = 0; j <= i; j++) {
        const start = layout.position(i, j);
        const down = layout.position(i + 1, j);
        const up = layout.position(i + 1, j + 1);

        const downLine = createSvgElement("line");
        downLine.setAttribute("x1", start.x);
        downLine.setAttribute("y1", start.y);
        downLine.setAttribute("x2", down.x);
        downLine.setAttribute("y2", down.y);
        downLine.setAttribute("class", "bot-edge");
        downLine.setAttribute("id", `${prefix}-edge-${i}-${j}-down`);
        edgeLayer.appendChild(downLine);

        const upLine = createSvgElement("line");
        upLine.setAttribute("x1", start.x);
        upLine.setAttribute("y1", start.y);
        upLine.setAttribute("x2", up.x);
        upLine.setAttribute("y2", up.y);
        upLine.setAttribute("class", "bot-edge");
        upLine.setAttribute("id", `${prefix}-edge-${i}-${j}-up`);
        edgeLayer.appendChild(upLine);
      }
    }

    for (let i = 0; i <= params.n; i++) {
      for (let j = 0; j <= i; j++) {
        const p = layout.position(i, j);

        const group = createSvgElement("g");
        group.setAttribute("id", `${prefix}-node-${i}-${j}`);
        group.setAttribute("class", "bot-node-group");
        group.setAttribute("transform", `translate(${p.x}, ${p.y})`);

        const rect = createSvgElement("rect");
        rect.setAttribute("x", -58);
        rect.setAttribute("y", -33);
        rect.setAttribute("width", 116);
        rect.setAttribute("height", 66);
        rect.setAttribute("rx", 13);
        rect.setAttribute("class", "bot-node-rect");

        const title = createSvgElement("text");
        title.setAttribute("x", 0);
        title.setAttribute("y", -14);
        title.setAttribute("text-anchor", "middle");
        title.setAttribute("class", "bot-node-title");
        title.setAttribute("id", `${prefix}-node-${i}-${j}-title`);

        const main = createSvgElement("text");
        main.setAttribute("x", 0);
        main.setAttribute("y", 5);
        main.setAttribute("text-anchor", "middle");
        main.setAttribute("class", "bot-node-main");
        main.setAttribute("id", `${prefix}-node-${i}-${j}-main`);

        const small = createSvgElement("text");
        small.setAttribute("x", 0);
        small.setAttribute("y", 23);
        small.setAttribute("text-anchor", "middle");
        small.setAttribute("class", "bot-node-small");
        small.setAttribute("id", `${prefix}-node-${i}-${j}-small`);

        group.appendChild(rect);
        group.appendChild(title);
        group.appendChild(main);
        group.appendChild(small);

        nodeLayer.appendChild(group);
      }
    }
  }

  function getNode(prefix, i, j) {
    return document.getElementById(`${prefix}-node-${i}-${j}`);
  }

  function revealNode(prefix, i, j) {
    const node = getNode(prefix, i, j);

    if (node) {
      node.classList.add("bot-node-visible");
    }
  }

  function activateNode(prefix, i, j, active = true) {
    const node = getNode(prefix, i, j);

    if (!node) {
      return;
    }

    if (active) {
      node.classList.add("bot-node-active");
    } else {
      node.classList.remove("bot-node-active");
    }
  }

  function markTerminalNode(prefix, i, j) {
    const node = getNode(prefix, i, j);

    if (node) {
      node.classList.add("bot-node-terminal");
    }
  }

  function markEarlyExerciseNode(prefix, i, j) {
    const node = getNode(prefix, i, j);

    if (node) {
      node.classList.add("bot-node-early");
    }
  }

  function markRootNode(prefix) {
    const node = getNode(prefix, 0, 0);

    if (node) {
      node.classList.add("bot-node-root");
    }
  }

  function revealEdgesFrom(prefix, i, j) {
    const down = document.getElementById(`${prefix}-edge-${i}-${j}-down`);
    const up = document.getElementById(`${prefix}-edge-${i}-${j}-up`);

    if (down) {
      down.classList.add("bot-edge-visible");
    }

    if (up) {
      up.classList.add("bot-edge-visible");
    }
  }

  function setNodeText(prefix, i, j, title, main, small) {
    const titleEl = document.getElementById(`${prefix}-node-${i}-${j}-title`);
    const mainEl = document.getElementById(`${prefix}-node-${i}-${j}-main`);
    const smallEl = document.getElementById(`${prefix}-node-${i}-${j}-small`);

    if (titleEl) {
      titleEl.textContent = title;
    }

    if (mainEl) {
      mainEl.textContent = main;
    }

    if (smallEl) {
      smallEl.textContent = small;
    }
  }

  function writeBotLog(message) {
    botLog.textContent += message + "\n";
    botLog.scrollTop = botLog.scrollHeight;
  }

  function setBotDetail(html) {
    botDetail.innerHTML = html;
  }

  function renderBotKpis(params, tree) {
    botKpis.innerHTML = `
      <div class="bot-kpi">
        <span>Risk-neutral probability</span>
        <strong>${botNumber(tree.p)}</strong>
      </div>

      <div class="bot-kpi">
        <span>Discount factor per step</span>
        <strong>${botNumber(tree.discount)}</strong>
      </div>

      <div class="bot-kpi">
        <span>Time step</span>
        <strong>${botNumber(tree.dt)}</strong>
      </div>

      <div class="bot-kpi">
        <span>Option price at root</span>
        <strong>${botMoney(tree.price)}</strong>
      </div>
    `;
  }

  function renderBotResult(params, tree) {
    const style = params.style.charAt(0).toUpperCase() + params.style.slice(1);
    const type = params.optionType.charAt(0).toUpperCase() + params.optionType.slice(1);

    botResult.innerHTML = `
      <p>
        ${style} ${type} option price:
      </p>
      <h2>${botMoney(tree.price)}</h2>
    `;
  }

  async function revealStockTree(params, tree, token) {
    const delay = getBotDelay(params.volume);

    botStockStage.textContent = "Step 1 — Building the stock price tree.";
    writeBotLog("Building stock price tree.");

    for (let i = 0; i <= params.n; i++) {
      if (token !== botAnimationToken) {
        return;
      }

      await animateBotViewBox(botStockSvg, botColumnViewBox(params, i), "stock", 420);
      scrollTreeToEnd(botStockWrap);

      for (let j = 0; j <= i; j++) {
        if (token !== botAnimationToken) {
          return;
        }

        if (i > 0 && j < i) {
          revealEdgesFrom("stock", i - 1, j);
        }

        if (i > 0 && j > 0) {
          revealEdgesFrom("stock", i - 1, j - 1);
        }

        setNodeText(
          "stock",
          i,
          j,
          `S(${i},${j})`,
          botMoney(tree.stock[i][j]),
          "stock price"
        );

        revealNode("stock", i, j);
        activateNode("stock", i, j, true);

        setBotDetail(`
          <div class="bot-detail-title">Stock node</div>
          <strong>Node:</strong> (${i}, ${j})<br>
          <strong>Stock price:</strong> ${botMoney(tree.stock[i][j])}<br>
          <strong>Formula:</strong> S0 × u^${j} × d^${i - j}
        `);

        await botSleep(delay);

        activateNode("stock", i, j, false);
      }
    }

    await animateBotViewBox(botStockSvg, botReadableFinalViewBox(params), "stock", 420);
    botStockStage.textContent = "Stock price tree completed.";
    scrollTreeToStart(botStockWrap);
  }

  async function revealOptionPayoffs(params, tree, token) {
    const delay = getBotDelay(params.volume);

    botOptionStage.textContent = "Step 2 — Computing terminal payoffs.";
    writeBotLog("Computing terminal option payoffs.");

    await animateBotViewBox(botOptionSvg, botReadableFinalViewBox(params), "option", 420);
    scrollTreeToEnd(botOptionWrap);

    for (let i = 0; i <= params.n; i++) {
      for (let j = 0; j <= i; j++) {
        if (i < params.n) {
          revealEdgesFrom("option", i, j);
        }
      }
    }

    for (let j = 0; j <= params.n; j++) {
      if (token !== botAnimationToken) {
        return;
      }

      setNodeText(
        "option",
        params.n,
        j,
        "Payoff",
        botMoney(tree.option[params.n][j]),
        `S = ${botMoney(tree.stock[params.n][j])}`
      );

      revealNode("option", params.n, j);
      markTerminalNode("option", params.n, j);
      activateNode("option", params.n, j, true);

      setBotDetail(`
        <div class="bot-detail-title">Terminal payoff</div>
        <strong>Node:</strong> (${params.n}, ${j})<br>
        <strong>Stock price:</strong> ${botMoney(tree.stock[params.n][j])}<br>
        <strong>Payoff:</strong> ${botMoney(tree.option[params.n][j])}
      `);

      await botSleep(delay);

      activateNode("option", params.n, j, false);
    }
  }

  async function revealOptionBackwardInduction(params, tree, token) {
    const delay = getBotDelay(params.volume);

    botOptionStage.textContent = "Step 3 — Backward induction on the option value tree.";
    writeBotLog("Working backward through the option value tree.");

    for (let i = params.n - 1; i >= 0; i--) {
      if (token !== botAnimationToken) {
        return;
      }

      await animateBotViewBox(botOptionSvg, botColumnViewBox(params, i), "option", 420);
      botOptionWrap.scrollLeft = Math.max(0, botLayout(params).position(i, 0).x - 260);

      for (let j = 0; j <= i; j++) {
        if (token !== botAnimationToken) {
          return;
        }

        setNodeText(
          "option",
          i,
          j,
          `V(${i},${j})`,
          botMoney(tree.option[i][j]),
          `Δ = ${botNumber(tree.delta[i][j])}`
        );

        revealNode("option", i, j);

        if (tree.early[i][j]) {
          markEarlyExerciseNode("option", i, j);
        }

        activateNode("option", i, j, true);

        const earlyText = tree.early[i][j]
          ? "<br><strong>Decision:</strong> early exercise"
          : "<br><strong>Decision:</strong> continue";

        setBotDetail(`
          <div class="bot-detail-title">Backward induction</div>
          <strong>Node:</strong> (${i}, ${j})<br>
          <strong>Stock price:</strong> ${botMoney(tree.stock[i][j])}<br>
          <strong>Continuation value:</strong> ${botMoney(tree.continuation[i][j])}<br>
          <strong>Immediate exercise value:</strong> ${botMoney(tree.immediate[i][j])}<br>
          <strong>Option value:</strong> ${botMoney(tree.option[i][j])}<br>
          <strong>Delta:</strong> ${botNumber(tree.delta[i][j])}
          ${params.style === "american" ? earlyText : ""}
        `);

        await botSleep(delay);

        activateNode("option", i, j, false);
      }
    }

    markRootNode("option");
    await animateBotViewBox(botOptionSvg, botReadableFinalViewBox(params), "option", 420);
    botOptionStage.textContent = "Option value tree completed.";
    scrollTreeToStart(botOptionWrap);
  }

  function revealFullStockTree(params, tree) {
    for (let i = 0; i <= params.n; i++) {
      for (let j = 0; j <= i; j++) {
        if (i < params.n) {
          revealEdgesFrom("stock", i, j);
        }

        setNodeText(
          "stock",
          i,
          j,
          `S(${i},${j})`,
          botMoney(tree.stock[i][j]),
          "stock price"
        );

        revealNode("stock", i, j);
      }
    }

    setBotViewBox(botStockSvg, botReadableFinalViewBox(params), "stock");
    scrollTreeToStart(botStockWrap);
    botStockStage.textContent = "Stock price tree completed.";
  }

  function revealFullOptionTree(params, tree) {
    for (let i = 0; i <= params.n; i++) {
      for (let j = 0; j <= i; j++) {
        if (i < params.n) {
          revealEdgesFrom("option", i, j);
        }

        if (i === params.n) {
          setNodeText(
            "option",
            i,
            j,
            "Payoff",
            botMoney(tree.option[i][j]),
            `S = ${botMoney(tree.stock[i][j])}`
          );

          markTerminalNode("option", i, j);
        } else {
          setNodeText(
            "option",
            i,
            j,
            `V(${i},${j})`,
            botMoney(tree.option[i][j]),
            `Δ = ${botNumber(tree.delta[i][j])}`
          );
        }

        if (tree.early[i][j]) {
          markEarlyExerciseNode("option", i, j);
        }

        revealNode("option", i, j);
      }
    }

    markRootNode("option");
    setBotViewBox(botOptionSvg, botReadableFinalViewBox(params), "option");
    scrollTreeToStart(botOptionWrap);
    botOptionStage.textContent = "Option value tree completed.";
  }

  async function generateBinomialTree() {
    const params = getBotInputs();
    const error = validateBotInputs(params);

    botWarning.style.display = "none";
    botWarning.textContent = "";

    if (error) {
      botWarning.textContent = error;
      botWarning.style.display = "block";
      return;
    }

    botAnimationToken += 1;
    const token = botAnimationToken;

    botLog.textContent = "";
    botResult.innerHTML = "Building trees...";
    botKpis.innerHTML = "";
    botDetail.innerHTML = "The selected node details will appear here during the construction.";

    const tree = priceBinomialOption(params);

    createTreeSkeleton(botStockSvg, params, "stock");
    createTreeSkeleton(botOptionSvg, params, "option");

    setBotViewBox(botStockSvg, botColumnViewBox(params, 0), "stock");
    setBotViewBox(botOptionSvg, botReadableFinalViewBox(params), "option");

    scrollTreeToStart(botStockWrap);
    scrollTreeToStart(botOptionWrap);

    botStockStage.textContent = "Waiting to build stock price tree...";
    botOptionStage.textContent = "Waiting to build option value tree...";

    renderBotKpis(params, tree);

    if (params.volume >= 100) {
      revealFullStockTree(params, tree);
      revealFullOptionTree(params, tree);
      renderBotResult(params, tree);

      writeBotLog("Both trees generated instantly.");

      setBotDetail(`
        <div class="bot-detail-title">Root price</div>
        <strong>Option value at time 0:</strong> ${botMoney(tree.price)}<br>
        <strong>Risk-neutral probability:</strong> ${botNumber(tree.p)}<br>
        <strong>Discount factor:</strong> ${botNumber(tree.discount)}
      `);

      return;
    }

    await revealStockTree(params, tree, token);
    if (token !== botAnimationToken) return;

    await revealOptionPayoffs(params, tree, token);
    if (token !== botAnimationToken) return;

    await revealOptionBackwardInduction(params, tree, token);
    if (token !== botAnimationToken) return;

    renderBotResult(params, tree);

    writeBotLog("Done.");

    setBotDetail(`
      <div class="bot-detail-title">Root price</div>
      <strong>Option value at time 0:</strong> ${botMoney(tree.price)}<br>
      <strong>Risk-neutral probability:</strong> ${botNumber(tree.p)}<br>
      <strong>Discount factor:</strong> ${botNumber(tree.discount)}
    `);
  }

  function resetBinomialTree() {
    botAnimationToken += 1;
    botStockViewBox = null;
    botOptionViewBox = null;

    clearSvg(botStockSvg);
    clearSvg(botOptionSvg);

    botStockStage.textContent = "Waiting for inputs...";
    botOptionStage.textContent = "Waiting for stock tree...";
    botResult.innerHTML = "Click <strong>Generate tree</strong> to start.";
    botKpis.innerHTML = "";
    botDetail.innerHTML = "The selected node details will appear here during the construction.";
    botLog.textContent = "";
    botWarning.textContent = "";
    botWarning.style.display = "none";
  }

  updateBotVolumeLabel();
</script>
