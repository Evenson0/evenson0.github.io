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

  .rw-small-note {
    margin-top: 12px;
    font-size: 0.9rem;
    opacity: 0.78;
    line-height: 1.5;
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
      <strong>Theoretical note: Pólya's theorem.</strong>
      The simple random walk on \(\mathbb{Z}^d\) is recurrent for \(d \leq 2\), meaning it returns to its starting point with probability \(1\).
      It is transient for \(d \geq 3\), meaning there is a positive probability that it never returns.
      This simulator focuses on \(d=1\) and \(d=2\), the directly visualizable cases.
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
    Generate a walk to see the final position, displacement, maximum excursion, and number of returns to the starting point.
  </div>

</div>

<script>
  const canvas = document.getElementById("randomWalkCanvas");
  const ctx = canvas.getContext("2d");
  const stats = document.getElementById("rwStats");

  let currentPath = [];
  let animationId = null;

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
      drawPath(currentPath);
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

    const start = transformPoint(visiblePoints[0], bounds, width, height, padding);
    const end = transformPoint(visiblePoints[visiblePoints.length - 1], bounds, width, height, padding);

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

  function updateStats(path) {
    const d = getDimension();
    const start = path[0];
    const end = path[path.length - 1];

    const displacement = euclideanDistance(start, end);

    let maxExcursion = 0;
    let returnCount = 0;

    for (let i = 1; i < path.length; i++) {
      const distanceFromStart = euclideanDistance(start, path[i]);
      maxExcursion = Math.max(maxExcursion, distanceFromStart);

      if (vectorsAreEqual(start, path[i])) {
        returnCount += 1;
      }
    }

    stats.innerHTML = `
      <strong>Dimension:</strong> ${d}<br>
      <strong>Starting point:</strong> ${formatVector(start)}<br>
      <strong>Final position:</strong> ${formatVector(end)}<br>
      <strong>Displacement from start:</strong> ${displacement.toFixed(2)}<br>
      <strong>Maximum excursion:</strong> ${maxExcursion.toFixed(2)}<br>
      <strong>Returns to the starting point:</strong> ${returnCount}<br>
      <strong>Total number of positions:</strong> ${path.length}
    `;
  }

  function generateRandomWalk() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    currentPath = generatePath();
    drawPath(currentPath);
    updateStats(currentPath);
  }

  function getFrameJump(speedVolume, pathLength) {
    if (speedVolume >= 100) {
      return pathLength;
    }

    const normalized = speedVolume / 100;
    const jump = 1 + Math.floor(normalized * normalized * Math.max(2, pathLength / 35));

    return Math.max(1, jump);
  }

  function playRandomWalk() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    currentPath = generatePath();

    const { speedVolume } = getInputs();

    if (speedVolume >= 100) {
      drawPath(currentPath);
      updateStats(currentPath);
      return;
    }

    let index = 0;
    const frameJump = getFrameJump(speedVolume, currentPath.length);

    function step() {
      drawPath(currentPath, index);

      index += frameJump;

      if (index < currentPath.length) {
        animationId = requestAnimationFrame(step);
      } else {
        drawPath(currentPath);
        updateStats(currentPath);
        animationId = null;
      }
    }

    step();
  }

  function resetRandomWalk() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    currentPath = [];
    drawEmptyCanvas();

    stats.innerHTML = "Generate a walk to see the final position, displacement, maximum excursion, and number of returns to the starting point.";
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
