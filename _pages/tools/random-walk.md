---
title: "Random Walk Simulator"
permalink: /tools/random-walk/
layout: single
author_profile: true
---

<style>
  .rw-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .rw-panel {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
    padding: 18px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    border-radius: 16px;
    background: rgba(127, 127, 127, 0.06);
    margin-bottom: 20px;
  }

  .rw-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .rw-field label {
    font-weight: 600;
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
    font-weight: 600;
    transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
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
    height: 560px;
  }

  .rw-stats {
    margin-top: 16px;
    padding: 14px 16px;
    border-radius: 14px;
    border: 1px solid rgba(127, 127, 127, 0.25);
    background: rgba(127, 127, 127, 0.06);
    font-size: 0.95rem;
  }

  .rw-note {
    margin-top: 14px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
</style>

<div class="rw-container">

This tool simulates a two-dimensional random walk. Choose the starting point, the number of steps, and the type of movement.

<div class="rw-panel">
  <div class="rw-field">
    <label for="startX">Starting x</label>
    <input id="startX" type="number" value="0" step="1">
  </div>

  <div class="rw-field">
    <label for="startY">Starting y</label>
    <input id="startY" type="number" value="0" step="1">
  </div>

  <div class="rw-field">
    <label for="steps">Number of steps</label>
    <input id="steps" type="number" value="300" min="1" max="10000" step="1">
  </div>

  <div class="rw-field">
    <label for="stepSize">Step size</label>
    <input id="stepSize" type="number" value="1" min="0.1" step="0.1">
  </div>

  <div class="rw-field">
    <label for="walkType">Walk type</label>
    <select id="walkType">
      <option value="grid">Grid walk: up, down, left, right</option>
      <option value="diagonal">8-direction walk</option>
      <option value="continuous">Continuous random angles</option>
    </select>
  </div>
</div>

<div class="rw-buttons">
  <button class="rw-btn" onclick="generateRandomWalk()">Generate walk</button>
  <button class="rw-btn" onclick="animateRandomWalk()">Animate walk</button>
  <button class="rw-btn" onclick="resetRandomWalk()">Reset</button>
</div>

<div class="rw-canvas-wrap">
  <canvas id="randomWalkCanvas"></canvas>
</div>

<div id="rwStats" class="rw-stats">
  Generate a walk to see the final position and distance from the starting point.
</div>

<div class="rw-note">
  Mathematically, a random walk is a sequence of positions where each new position is obtained by adding a random step to the previous one.
</div>

</div>

<script>
  const canvas = document.getElementById("randomWalkCanvas");
  const ctx = canvas.getContext("2d");
  const stats = document.getElementById("rwStats");

  let currentPath = [];
  let animationId = null;

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

  function getInputs() {
    const startX = Number(document.getElementById("startX").value);
    const startY = Number(document.getElementById("startY").value);
    const steps = Math.max(1, Math.min(10000, Number(document.getElementById("steps").value)));
    const stepSize = Math.max(0.1, Number(document.getElementById("stepSize").value));
    const walkType = document.getElementById("walkType").value;

    return { startX, startY, steps, stepSize, walkType };
  }

  function generatePath() {
    const { startX, startY, steps, stepSize, walkType } = getInputs();

    let x = startX;
    let y = startY;

    const path = [{ x, y }];

    for (let i = 0; i < steps; i++) {
      if (walkType === "grid") {
        const direction = Math.floor(Math.random() * 4);

        if (direction === 0) x += stepSize;
        if (direction === 1) x -= stepSize;
        if (direction === 2) y += stepSize;
        if (direction === 3) y -= stepSize;
      }

      if (walkType === "diagonal") {
        const directions = [
          [1, 0], [-1, 0], [0, 1], [0, -1],
          [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];

        const choice = directions[Math.floor(Math.random() * directions.length)];
        x += choice[0] * stepSize;
        y += choice[1] * stepSize;
      }

      if (walkType === "continuous") {
        const angle = Math.random() * 2 * Math.PI;
        x += stepSize * Math.cos(angle);
        y += stepSize * Math.sin(angle);
      }

      path.push({ x, y });
    }

    return path;
  }

  function getBounds(path) {
    const xs = path.map(p => p.x);
    const ys = path.map(p => p.y);

    return {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys)
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
    ctx.globalAlpha = 0.35;

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

  function drawPath(path, maxIndex = path.length - 1) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const padding = 40;

    ctx.clearRect(0, 0, width, height);

    if (path.length === 0) {
      drawEmptyCanvas();
      return;
    }

    const bounds = getBounds(path);

    drawAxes(bounds, width, height, padding);

    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.beginPath();

    for (let i = 0; i <= maxIndex; i++) {
      const point = transformPoint(path[i], bounds, width, height, padding);

      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.stroke();

    const start = transformPoint(path[0], bounds, width, height, padding);
    const end = transformPoint(path[maxIndex], bounds, width, height, padding);

    ctx.beginPath();
    ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }

  function updateStats(path) {
    const start = path[0];
    const end = path[path.length - 1];

    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    stats.innerHTML = `
      <strong>Final position:</strong> (${end.x.toFixed(2)}, ${end.y.toFixed(2)})<br>
      <strong>Displacement from start:</strong> ${distance.toFixed(2)}<br>
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

  function animateRandomWalk() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    currentPath = generatePath();

    let index = 0;
    const speed = Math.max(1, Math.floor(currentPath.length / 300));

    function step() {
      drawPath(currentPath, index);

      index += speed;

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

    stats.innerHTML = "Generate a walk to see the final position and distance from the starting point.";
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
    ctx.fillText("Random walk will appear here", width / 2, height / 2);
    ctx.restore();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
</script>
