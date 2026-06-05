---
title: "Random Walk Simulator"
permalink: /tools/random-walk/
layout: single
author_profile: true
---

<style>
  .rw-container {
    max-width: 980px;
    margin: 0 auto;
  }

  .rw-notes {
    padding: 20px;
    border-radius: 18px;
    border: 1px solid rgba(127, 127, 127, 0.24);
    background: rgba(127, 127, 127, 0.06);
    margin-bottom: 22px;
  }

  .rw-notes h2 {
    margin-top: 0;
  }

  .rw-notes p {
    margin-bottom: 12px;
    line-height: 1.6;
  }

  .rw-note-box {
    padding: 14px 16px;
    border-left: 4px solid rgba(127, 127, 127, 0.45);
    background: rgba(127, 127, 127, 0.08);
    border-radius: 10px;
    margin-top: 14px;
    line-height: 1.55;
  }

  .rw-small-note {
    margin-top: 12px;
    font-size: 0.9rem;
    opacity: 0.78;
    line-height: 1.5;
  }

  .rw-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 14px;
    padding: 18px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    border-radius: 16px;
    background: rgba(127, 127, 127, 0.06);
    margin-bottom: 18px;
  }

  .rw-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .rw-field label {
    font-weight: 700;
    font-size: 0.95rem;
  }

  .rw-field input,
  .rw-field select {
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid rgba(127, 127, 127, 0.35);
    background: transparent;
    color: inherit;
  }

  .rw-vector-panel {
    padding: 18px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    border-radius: 16px;
    background: rgba(127, 127, 127, 0.045);
    margin-bottom: 18px;
  }

  .rw-vector-title {
    font-weight: 800;
    margin-bottom: 12px;
  }

  .rw-vector-fields {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
    gap: 12px;
  }

  .rw-mini-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .rw-mini-field label {
    font-weight: 700;
    font-size: 0.9rem;
  }

  .rw-mini-field input {
    padding: 8px 9px;
    border-radius: 10px;
    border: 1px solid rgba(127, 127, 127, 0.35);
    background: transparent;
    color: inherit;
  }

  .rw-volume-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .rw-volume-wrap input[type="range"] {
    width: 100%;
  }

  .rw-volume-value {
    min-width: 48px;
    font-weight: 800;
    text-align: right;
  }

  .rw-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 18px;
  }

  .rw-btn {
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

  .rw-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    background: rgba(127, 127, 127, 0.14);
  }

  .rw-canvas-wrap {
    width: 100%;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    background: rgba(255, 255, 255, 0.02);
  }

  #randomWalkCanvas {
    display: block;
    width: 100%;
    height: 570px;
  }

  .rw-stats {
    margin-top: 16px;
    padding: 14px 16px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    background: rgba(127, 127, 127, 0.06);
    font-size: 0.95rem;
    line-height: 1.55;
  }

  .rw-return-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 14px;
    border-radius: 999px;
    border: none;
    background: #f59e0b;
    color: #111827;
    font-weight: 900;
    box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);
    cursor: pointer;
  }

  .rw-return-button:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  .rw-return-button-active {
    background: #22c55e;
    color: #052e16;
    box-shadow: 0 6px 18px rgba(34, 197, 94, 0.35);
  }

  .rw-return-number {
    font-size: 1.2rem;
  }

  .rw-live-label {
    display: inline-block;
    margin-left: 8px;
    padding: 3px 8px;
    border-radius: 999px;
    background: rgba(127, 127, 127, 0.16);
    font-size: 0.82rem;
    font-weight: 800;
  }

  .rw-theory-highlight {
    display: inline-block;
    margin-top: 8px;
    padding: 8px 11px;
    border-radius: 999px;
    background: #2563eb;
    color: #ffffff;
    font-weight: 900;
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.28);
  }

  .rw-details {
    margin-top: 14px;
  }

  .rw-return-times,
  .rw-theory-box,
  .rw-computation-box {
    margin-top: 12px;
    padding: 12px 14px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.22);
    background: rgba(127, 127, 127, 0.08);
  }

  .rw-return-times-title,
  .rw-theory-title,
  .rw-computation-title {
    font-weight: 900;
    margin-bottom: 6px;
  }

  .rw-return-chip {
    display: inline-block;
    margin: 4px 5px 4px 0;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(127, 127, 127, 0.18);
    font-weight: 700;
    font-size: 0.88rem;
  }

  .rw-formula-line {
    margin-top: 7px;
  }

  .rw-formula {
    display: inline-block;
    margin-top: 4px;
    padding: 5px 8px;
    border-radius: 8px;
    background: rgba(127, 127, 127, 0.12);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: 0.9rem;
  }

  .rw-return-visual-note {
    margin-top: 8px;
    font-size: 0.9rem;
    opacity: 0.82;
  }
</style>

<div class="rw-container">

  <div class="rw-notes">
    <h2>Random walk on \(\mathbb{Z}^d\)</h2>

    <p>
      A random walk is a stochastic process that can be imagined as the motion of a walker moving randomly on a mathematical space.
      In this simulator, the space is \(\mathbb{Z}^d\), the set of points with integer coordinates in \(d\) dimensions.
    </p>

    <p>
      In the simple symmetric random walk on \(\mathbb{Z}^d\), the walker starts from a chosen point \(X_0\).
      At each step, one coordinate is selected, and the walker moves by \(+1\) or \(-1\) along that coordinate.
    </p>

    <p>
      In dimension \(d=1\), the walk moves left or right on the integer line.
      In dimension \(d=2\), the walk moves on the integer grid \(\mathbb{Z}^2\).
      These are the two dimensions represented in this simulator because they can be visualized directly.
    </p>

    <div class="rw-note-box">
      <strong>Proposition.</strong>
      For the simple symmetric random walk on \(\mathbb{Z}^d\), the walk is recurrent for \(d \leq 2\).
      In other words, in dimensions \(1\) and \(2\), the probability of eventually returning to the starting point is \(1\), or \(100\%\).
      For \(d \geq 3\), the walk is transient.
    </div>

    <div class="rw-note-box">
      <strong>Remark.</strong>
      Recurrence does not mean that the walker returns quickly.
      In dimension \(d=1\), the expected return time to the starting point is infinite, even though the probability of eventually returning is \(100\%\).
    </div>

    <div class="rw-small-note">
      For \(d=1\), the graph below shows \(X_t\) as a function of time.
      For \(d=2\), it shows the path of the walker on the grid \(\mathbb{Z}^2\).
    </div>
  </div>

  <div class="rw-panel">

    <div class="rw-field">
      <label for="dimension">Dimension \(d\)</label>
      <select id="dimension" onchange="handleDimensionChange()">
        <option value="1">1</option>
        <option value="2" selected>2</option>
      </select>
    </div>

    <div class="rw-field">
      <label for="steps">Number of steps</label>
      <input id="steps" type="number" value="500" min="1" max="20000" step="1">
    </div>

    <div class="rw-field">
      <label for="stepSize">Step length</label>
      <input id="stepSize" type="number" value="1" min="1" max="10" step="1">
    </div>

    <div class="rw-field">
      <label for="speedVolume">Rhythm volume</label>
      <div class="rw-volume-wrap">
        <input id="speedVolume" type="range" min="0" max="100" value="55" oninput="updateVolumeLabel()">
        <span id="speedVolumeValue" class="rw-volume-value">55%</span>
      </div>
    </div>

  </div>

  <div class="rw-vector-panel">
    <div class="rw-vector-title">Starting point \(X_0\)</div>
    <div id="startVectorFields" class="rw-vector-fields"></div>
  </div>

  <div class="rw-buttons">
    <button class="rw-btn" onclick="generateRandomWalk()">Generate walk</button>
    <button class="rw-btn" onclick="playRandomWalk()">Play walk</button>
    <button class="rw-btn" onclick="resetRandomWalk()">Reset</button>
  </div>

  <div class="rw-canvas-wrap">
    <canvas id="randomWalkCanvas"></canvas>
  </div>

  <div id="rwStats" class="rw-stats">
    Generate a walk to see the final position, displacement, maximum excursion, return times, and theoretical return probability.
  </div>

</div>

<script>
  const canvas = document.getElementById("randomWalkCanvas");
  const ctx = canvas.getContext("2d");
  const stats = document.getElementById("rwStats");

  let currentPath = [];
  let animationId = null;
  let animationTimeoutId = null;
  let currentVisibleIndex = 0;
  let showReturnDetails = false;

  function getDimension() {
    return Number(document.getElementById("dimension").value);
  }

  function updateVolumeLabel() {
    const value = Number(document.getElementById("speedVolume").value);
    document.getElementById("speedVolumeValue").textContent = value + "%";
  }

  function handleDimensionChange() {
    renderStartVectorFields();
    resetRandomWalk();
  }

  function renderStartVectorFields() {
    const d = getDimension();
    const container = document.getElementById("startVectorFields");

    const previousValues = Array.from(
      container.querySelectorAll(".rw-start-coordinate")
    ).map(input => input.value);

    container.innerHTML = "";

    for (let i = 0; i < d; i++) {
      const field = document.createElement("div");
      field.className = "rw-mini-field";

      const label = document.createElement("label");
      label.textContent = d === 1 ? "x0" : "x" + (i + 1);

      const input = document.createElement("input");
      input.type = "number";
      input.step = "1";
      input.value = previousValues[i] ?? "0";
      input.className = "rw-start-coordinate";

      field.appendChild(label);
      field.appendChild(input);
      container.appendChild(field);
    }
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (currentPath.length > 0) {
      drawPath(currentPath, currentVisibleIndex);
    } else {
      drawEmptyCanvas();
    }
  }

  function getStartVector() {
    return Array.from(
      document.querySelectorAll(".rw-start-coordinate")
    ).map(input => Number(input.value));
  }

  function getInputs() {
    const d = getDimension();
    const startVector = getStartVector();

    const stepsInput = Number(document.getElementById("steps").value);
    const stepSizeInput = Number(document.getElementById("stepSize").value);

    const steps = Math.max(1, Math.min(20000, stepsInput));
    const stepSize = Math.max(1, Math.round(stepSizeInput));
    const speedVolume = Number(document.getElementById("speedVolume").value);

    return {
      d,
      startVector,
      steps,
      stepSize,
      speedVolume
    };
  }

  function cloneVector(vector) {
    return vector.slice();
  }

  function vectorsAreEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  function euclideanDistance(a, b) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
      const diff = a[i] - b[i];
      sum += diff * diff;
    }

    return Math.sqrt(sum);
  }

  function generatePath() {
    const { d, startVector, steps, stepSize } = getInputs();

    let position = cloneVector(startVector);
    const path = [cloneVector(position)];

    for (let t = 0; t < steps; t++) {
      const coordinateIndex = Math.floor(Math.random() * d);
      const direction = Math.random() < 0.5 ? -1 : 1;

      position[coordinateIndex] += direction * stepSize;
      path.push(cloneVector(position));
    }

    return path;
  }

  function getPlotPoints(path) {
    const d = getDimension();

    if (d === 1) {
      return path.map((vector, index) => ({
        x: index,
        y: vector[0]
      }));
    }

    return path.map(vector => ({
      x: vector[0],
      y: vector[1]
    }));
  }

  function getBounds(points) {
    const xs = points.map(p => p.x);
    const ys = points.map(p => p.y);

    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys)
    };
  }

  function expandBounds(bounds) {
    const width = bounds.maxX - bounds.minX;
    const height = bounds.maxY - bounds.minY;

    const padX = Math.max(1, width * 0.08);
    const padY = Math.max(1, height * 0.08);

    return {
      minX: bounds.minX - padX,
      maxX: bounds.maxX + padX,
      minY: bounds.minY - padY,
      maxY: bounds.maxY + padY
    };
  }

  function transformPoint(point, bounds, width, height, padding) {
    const rangeX = Math.max(1, bounds.maxX - bounds.minX);
    const rangeY = Math.max(1, bounds.maxY - bounds.minY);

    const scaleX = (width - 2 * padding) / rangeX;
    const scaleY = (height - 2 * padding) / rangeY;
    const scale = Math.min(scaleX, scaleY);

    const centerX = (bounds.minX + bounds.maxX) / 2;
    const centerY = (bounds.minY + bounds.maxY) / 2;

    return {
      x: width / 2 + (point.x - centerX) * scale,
      y: height / 2 - (point.y - centerY) * scale
    };
  }

  function drawAxes(bounds, width, height, padding) {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.32;
    ctx.strokeStyle = getComputedStyle(document.body).color;

    const origin = transformPoint({ x: 0, y: 0 }, bounds, width, height, padding);

    ctx.beginPath();
    ctx.moveTo(0, origin.y);
    ctx.lineTo(width, origin.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(origin.x, 0);
    ctx.lineTo(origin.x, height);
    ctx.stroke();

    ctx.restore();
  }

  function drawLabels(width, height) {
    const d = getDimension();

    ctx.save();
    ctx.globalAlpha = 0.72;
    ctx.font = "13px system-ui, sans-serif";
    ctx.fillStyle = getComputedStyle(document.body).color;

    if (d === 1) {
      ctx.fillText("time t", width - 70, height - 16);
      ctx.fillText("position X_t", 16, 24);
    } else {
      ctx.fillText("x", width - 36, height / 2 - 10);
      ctx.fillText("y", width / 2 + 10, 24);
    }

    ctx.restore();
  }

  function drawReturnMarkers(path, maxIndex, bounds, width, height, padding) {
    const startVector = path[0];
    const d = getDimension();
    const plotPoints = getPlotPoints(path);

    const returnIndices = [];

    for (let i = 1; i <= maxIndex; i++) {
      if (vectorsAreEqual(startVector, path[i])) {
        returnIndices.push(i);
      }
    }

    if (returnIndices.length === 0) {
      return;
    }

    ctx.save();

    if (d === 1) {
      ctx.fillStyle = "#f59e0b";
      ctx.strokeStyle = "#111827";
      ctx.lineWidth = 1.5;

      returnIndices.forEach(index => {
        const point = transformPoint(plotPoints[index], bounds, width, height, padding);

        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      });
    } else {
      const startPlotPoint = transformPoint(plotPoints[0], bounds, width, height, padding);

      ctx.strokeStyle = "#f59e0b";
      ctx.fillStyle = "#f59e0b";
      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.arc(startPlotPoint.x, startPlotPoint.y, 13, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(startPlotPoint.x, startPlotPoint.y, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = "bold 13px system-ui, sans-serif";
      ctx.fillText("returns: " + returnIndices.length, startPlotPoint.x + 16, startPlotPoint.y - 12);
    }

    ctx.restore();
  }

  function drawPath(path, maxIndex = path.length - 1) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const padding = 44;

    ctx.clearRect(0, 0, width, height);

    if (path.length === 0) {
      drawEmptyCanvas();
      return;
    }

    const visiblePath = path.slice(0, maxIndex + 1);
    const allPoints = getPlotPoints(path);
    const visiblePoints = getPlotPoints(visiblePath);
    const bounds = expandBounds(getBounds(allPoints));

    drawAxes(bounds, width, height, padding);
    drawLabels(width, height);

    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = getComputedStyle(document.body).color;
    ctx.fillStyle = getComputedStyle(document.body).color;

    ctx.beginPath();

    for (let i = 0; i < visiblePoints.length; i++) {
      const point = transformPoint(visiblePoints[i], bounds, width, height, padding);

      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.stroke();

    if (showReturnDetails) {
      drawReturnMarkers(path, maxIndex, bounds, width, height, padding);
    }

    const start = transformPoint(visiblePoints[0], bounds, width, height, padding);
    const end = transformPoint(visiblePoints[visiblePoints.length - 1], bounds, width, height, padding);

    ctx.fillStyle = getComputedStyle(document.body).color;

    ctx.beginPath();
    ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(end.x, end.y, 6, 0, 2 * Math.PI);
    ctx.fill();
  }

  function formatVector(vector) {
    if (vector.length === 1) {
      return vector[0].toFixed(0);
    }

    return "(" + vector.map(value => value.toFixed(0)).join(", ") + ")";
  }

  function buildDistanceFormula(start, end, distance) {
    if (start.length === 1) {
      const difference = end[0] - start[0];

      return `
        <div class="rw-formula-line">
          <strong>Displacement from start:</strong><br>
          <span class="rw-formula">
            |${end[0].toFixed(0)} - ${start[0].toFixed(0)}| = |${difference.toFixed(0)}| = ${distance.toFixed(2)}
          </span>
        </div>
      `;
    }

    const differences = end.map((value, index) => value - start[index]);
    const squaredTerms = differences.map(diff => diff * diff);
    const sumSquares = squaredTerms.reduce((sum, value) => sum + value, 0);

    const coordinateFormula = end.map((value, index) => {
      return "(" + value.toFixed(0) + " - " + start[index].toFixed(0) + ")²";
    }).join(" + ");

    const simplifiedFormula = squaredTerms.map(value => value.toFixed(0)).join(" + ");

    return `
      <div class="rw-formula-line">
        <strong>Displacement from start:</strong><br>
        <span class="rw-formula">
          √[${coordinateFormula}] = √[${simplifiedFormula}] = √${sumSquares.toFixed(0)} = ${distance.toFixed(2)}
        </span>
      </div>
    `;
  }

  function buildExcursionFormula(start, maxPosition, maxTime, maxExcursion) {
    if (start.length === 1) {
      const difference = maxPosition[0] - start[0];

      return `
        <div class="rw-formula-line">
          <strong>Maximum excursion:</strong><br>
          <span class="rw-formula">
            max |X_t - X_0| occurs at t = ${maxTime}: |${maxPosition[0].toFixed(0)} - ${start[0].toFixed(0)}| = |${difference.toFixed(0)}| = ${maxExcursion.toFixed(2)}
          </span>
        </div>
      `;
    }

    const differences = maxPosition.map((value, index) => value - start[index]);
    const squaredTerms = differences.map(diff => diff * diff);
    const sumSquares = squaredTerms.reduce((sum, value) => sum + value, 0);

    const coordinateFormula = maxPosition.map((value, index) => {
      return "(" + value.toFixed(0) + " - " + start[index].toFixed(0) + ")²";
    }).join(" + ");

    const simplifiedFormula = squaredTerms.map(value => value.toFixed(0)).join(" + ");

    return `
      <div class="rw-formula-line">
        <strong>Maximum excursion:</strong><br>
        <span class="rw-formula">
          max ||X_t - X_0|| occurs at t = ${maxTime}: √[${coordinateFormula}] = √[${simplifiedFormula}] = √${sumSquares.toFixed(0)} = ${maxExcursion.toFixed(2)}
        </span>
      </div>
    `;
  }

  function computeStats(path, maxIndex = path.length - 1) {
    const start = path[0];
    const end = path[maxIndex];

    const displacement = euclideanDistance(start, end);

    let maxExcursion = 0;
    let maxExcursionTime = 0;
    let maxExcursionPosition = start;
    let returnTimes = [];

    for (let i = 1; i <= maxIndex; i++) {
      const distanceFromStart = euclideanDistance(start, path[i]);

      if (distanceFromStart > maxExcursion) {
        maxExcursion = distanceFromStart;
        maxExcursionTime = i;
        maxExcursionPosition = path[i];
      }

      if (vectorsAreEqual(start, path[i])) {
        returnTimes.push(i);
      }
    }

    return {
      start,
      end,
      displacement,
      maxExcursion,
      maxExcursionTime,
      maxExcursionPosition,
      returnCount: returnTimes.length,
      returnTimes,
      firstReturn: returnTimes.length > 0 ? returnTimes[0] : null,
      lastReturn: returnTimes.length > 0 ? returnTimes[returnTimes.length - 1] : null,
      visiblePositions: maxIndex + 1,
      totalPositions: path.length,
      visibleSteps: maxIndex,
      totalSteps: path.length - 1
    };
  }

  function buildReturnTimesHTML(returnTimes, totalSteps) {
    if (returnTimes.length === 0) {
      return `
        <div class="rw-return-times">
          <div class="rw-return-times-title">Return times</div>
          No return to the starting point has occurred yet.
        </div>
      `;
    }

    const maxDisplayed = 60;
    const displayedTimes = returnTimes.slice(0, maxDisplayed);

    const chips = displayedTimes.map(time => {
      return `<span class="rw-return-chip">${time}/${totalSteps}</span>`;
    }).join("");

    const remaining = returnTimes.length > maxDisplayed
      ? `<span class="rw-return-chip">+${returnTimes.length - maxDisplayed} more</span>`
      : "";

    return `
      <div class="rw-return-times">
        <div class="rw-return-times-title">Return times</div>
        ${chips}
        ${remaining}
      </div>
    `;
  }

  function buildReturnVisualNote(d, returnCount) {
    if (returnCount === 0) {
      return "";
    }

    if (d === 1) {
      return `
        <div class="rw-return-visual-note">
          The orange dots on the graph mark the times when the walk returns to the starting position.
        </div>
      `;
    }

    return `
      <div class="rw-return-visual-note">
        In dimension 2, every return to the starting point occurs at the same spatial point, so the starting point is highlighted with an orange ring.
      </div>
    `;
  }

  function buildTheoryHTML() {
    return `
      <div class="rw-theory-box">
        <div class="rw-theory-title">Theoretical return probability</div>
        For this simulator, \(d=1\) and \(d=2\). In both cases, the simple symmetric random walk is recurrent.
        Therefore, the probability of eventually returning to the starting point is:
        <br>
        <span class="rw-theory-highlight">100%</span>
      </div>
    `;
  }

  function buildComputationHTML(result) {
    const displacementFormula = buildDistanceFormula(
      result.start,
      result.end,
      result.displacement
    );

    const excursionFormula = buildExcursionFormula(
      result.start,
      result.maxExcursionPosition,
      result.maxExcursionTime,
      result.maxExcursion
    );

    return `
      <div class="rw-computation-box">
        <div class="rw-computation-title">How the quantities are computed</div>
        ${displacementFormula}
        ${excursionFormula}
      </div>
    `;
  }

  function buildDetailsHTML(result, d) {
    if (!showReturnDetails) {
      return "";
    }

    const returnTimesHTML = buildReturnTimesHTML(result.returnTimes, result.totalSteps);
    const visualNoteHTML = buildReturnVisualNote(d, result.returnCount);
    const theoryHTML = buildTheoryHTML();
    const computationHTML = buildComputationHTML(result);

    return `
      <div class="rw-details">
        ${visualNoteHTML}
        ${returnTimesHTML}
        ${theoryHTML}
        ${computationHTML}
      </div>
    `;
  }

  function updateStats(path, maxIndex = path.length - 1, isLive = false) {
    const d = getDimension();
    const result = computeStats(path, maxIndex);

    const liveLabel = isLive
      ? `<span class="rw-live-label">live</span>`
      : "";

    const firstReturnText = result.firstReturn === null
      ? "None"
      : result.firstReturn + "/" + result.totalSteps;

    const lastReturnText = result.lastReturn === null
      ? "None"
      : result.lastReturn + "/" + result.totalSteps;

    const returnButtonClass = showReturnDetails
      ? "rw-return-button rw-return-button-active"
      : "rw-return-button";

    const returnButtonText = showReturnDetails
      ? "Hide return details"
      : "Returns to the starting point";

    const detailsHTML = buildDetailsHTML(result, d);

    stats.innerHTML = `
      <strong>Dimension:</strong> ${d} ${liveLabel}<br>
      <strong>Starting point:</strong> ${formatVector(result.start)}<br>
      <strong>Current or final position:</strong> ${formatVector(result.end)}<br>
      <strong>Displacement from start:</strong> ${result.displacement.toFixed(2)}<br>
      <strong>Maximum excursion:</strong> ${result.maxExcursion.toFixed(2)}<br>
      <strong>Visible positions:</strong> ${result.visiblePositions} / ${result.totalPositions}<br>
      <strong>First return:</strong> ${firstReturnText}<br>
      <strong>Last return:</strong> ${lastReturnText}<br>
      <strong>Theoretical probability of eventually returning:</strong> 100%<br>

      <button class="${returnButtonClass}" onclick="toggleReturnDetails()">
        ${returnButtonText}:
        <span class="rw-return-number">${result.returnCount}</span>
      </button>

      ${detailsHTML}
    `;
  }

  function toggleReturnDetails() {
    if (currentPath.length === 0) {
      return;
    }

    showReturnDetails = !showReturnDetails;
    drawPath(currentPath, currentVisibleIndex);
    updateStats(currentPath, currentVisibleIndex);
  }

  function stopAnimation() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    if (animationTimeoutId) {
      clearTimeout(animationTimeoutId);
      animationTimeoutId = null;
    }
  }

  function generateRandomWalk() {
    stopAnimation();

    currentPath = generatePath();
    currentVisibleIndex = currentPath.length - 1;

    drawPath(currentPath, currentVisibleIndex);
    updateStats(currentPath, currentVisibleIndex);
  }

  function getFrameJump(speedVolume, pathLength) {
    if (speedVolume >= 100) {
      return pathLength;
    }

    const normalized = speedVolume / 100;

    if (speedVolume <= 12) {
      return 1;
    }

    const jump = 1 + Math.floor(
      Math.pow(normalized, 2.4) * Math.max(2, pathLength / 30)
    );

    return Math.max(1, jump);
  }

  function getFrameDelay(speedVolume) {
    if (speedVolume >= 100) {
      return 0;
    }

    const normalized = speedVolume / 100;

    const delay = 1200 * Math.pow(1 - normalized, 3.4);

    return Math.round(delay);
  }

  function playRandomWalk() {
    stopAnimation();

    currentPath = generatePath();

    const { speedVolume } = getInputs();

    if (speedVolume >= 100) {
      currentVisibleIndex = currentPath.length - 1;
      drawPath(currentPath, currentVisibleIndex);
      updateStats(currentPath, currentVisibleIndex);
      return;
    }

    let index = 0;
    const frameJump = getFrameJump(speedVolume, currentPath.length);
    const frameDelay = getFrameDelay(speedVolume);

    function step() {
      const visibleIndex = Math.min(index, currentPath.length - 1);
      currentVisibleIndex = visibleIndex;

      drawPath(currentPath, currentVisibleIndex);
      updateStats(currentPath, currentVisibleIndex, true);

      index += frameJump;

      if (index < currentPath.length) {
        animationTimeoutId = setTimeout(() => {
          animationId = requestAnimationFrame(step);
        }, frameDelay);
      } else {
        currentVisibleIndex = currentPath.length - 1;
        drawPath(currentPath, currentVisibleIndex);
        updateStats(currentPath, currentVisibleIndex);
        animationId = null;
        animationTimeoutId = null;
      }
    }

    step();
  }

  function resetRandomWalk() {
    stopAnimation();

    currentPath = [];
    currentVisibleIndex = 0;
    showReturnDetails = false;

    drawEmptyCanvas();

    stats.innerHTML = "Generate a walk to see the final position, displacement, maximum excursion, return times, and theoretical return probability.";
  }

  function drawEmptyCanvas() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.globalAlpha = 0.65;
    ctx.font = "16px system-ui, sans-serif";
    ctx.fillStyle = getComputedStyle(document.body).color;
    ctx.fillText("Random walk will appear here", width / 2, height / 2);
    ctx.restore();
  }

  window.addEventListener("resize", resizeCanvas);

  renderStartVectorFields();
  updateVolumeLabel();
  resizeCanvas();
</script>
