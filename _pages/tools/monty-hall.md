---
layout: single
title: "Monty Hall Simulation"
permalink: /tools/monty-hall/
author_profile: true
---

<style>
  .mh-shell {
    max-width: 1080px;
    margin: 2rem auto;
    padding: 2.3rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 24px;
    background:
      radial-gradient(circle at top, rgba(59,130,246,0.08), transparent 30%),
      linear-gradient(
        180deg,
        rgba(127,127,127,0.05),
        rgba(127,127,127,0.025)
      );
    box-shadow:
      0 18px 44px rgba(0,0,0,0.12),
      0 0 0 1px rgba(255,255,255,0.02) inset;
  }

  .mh-title {
    margin-bottom: 0.6rem;
  }

  .mh-lead {
    margin-bottom: 0.7rem;
    font-size: 1.05rem;
    line-height: 1.85;
    opacity: 0.92;
  }

  .mh-sublead {
    margin-top: 0;
    line-height: 1.8;
    opacity: 0.75;
  }

  .mh-rule {
    border: none;
    border-top: 1px solid rgba(127,127,127,0.22);
    margin: 2rem 0;
  }

  .mh-status {
    text-align: center;
    margin-bottom: 1.8rem;
    padding: 1rem 1.2rem;
    border: 1px solid rgba(127,127,127,0.16);
    border-radius: 16px;
    background:
      linear-gradient(
        180deg,
        rgba(127,127,127,0.06),
        rgba(127,127,127,0.03)
      );
    box-shadow:
      0 10px 24px rgba(0,0,0,0.05),
      0 0 0 1px rgba(255,255,255,0.012) inset;
    font-weight: 600;
    line-height: 1.75;
  }

  .mh-doors {
    display: grid;
    grid-template-columns: repeat(3, minmax(220px, 1fr));
    gap: 26px;
    margin: 2.1rem 0 2.2rem 0;
  }

  .mh-door {
    position: relative;
    min-height: 360px;
    border-radius: 24px;
    border: 1px solid rgba(127,127,127,0.18);
    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0.04),
        rgba(255,255,255,0.02)
      );
    box-shadow:
      0 16px 36px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.015) inset;
    overflow: hidden;
    cursor: pointer;
    transition:
      transform 0.28s ease,
      border-color 0.28s ease,
      box-shadow 0.28s ease,
      background 0.28s ease;
  }

  .mh-door::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        120deg,
        transparent 0%,
        rgba(59,130,246,0.00) 28%,
        rgba(59,130,246,0.08) 50%,
        rgba(59,130,246,0.00) 72%,
        transparent 100%
      );
    transform: translateX(-130%);
    transition: transform 0.8s ease;
    pointer-events: none;
  }

  .mh-door:hover {
    transform: translateY(-6px);
    border-color: rgba(56,189,248,0.32);
    box-shadow:
      0 24px 44px rgba(0,0,0,0.16),
      0 0 0 1px rgba(59,130,246,0.05) inset,
      0 0 26px rgba(59,130,246,0.10);
    background:
      linear-gradient(
        180deg,
        rgba(59,130,246,0.08),
        rgba(127,127,127,0.035)
      );
  }

  .mh-door:hover::before {
    transform: translateX(130%);
  }

  .mh-door.selected {
    border-color: rgba(59,130,246,0.54);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.10) inset,
      0 0 26px rgba(59,130,246,0.16),
      0 18px 40px rgba(0,0,0,0.16);
  }

  .mh-door.revealed {
    border-color: rgba(250,204,21,0.35);
  }

  .mh-door.final-open {
    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0.05),
        rgba(255,255,255,0.025)
      );
  }

  .mh-door.win {
    border-color: rgba(34,197,94,0.52);
    box-shadow:
      0 0 0 1px rgba(34,197,94,0.10) inset,
      0 0 28px rgba(34,197,94,0.16),
      0 18px 40px rgba(0,0,0,0.16);
  }

  .mh-door.lose {
    border-color: rgba(239,68,68,0.42);
    box-shadow:
      0 0 0 1px rgba(239,68,68,0.08) inset,
      0 0 22px rgba(239,68,68,0.12),
      0 18px 40px rgba(0,0,0,0.16);
  }

  .mh-door-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 0.5rem 1rem;
  }

  .mh-door-label {
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.6;
    font-weight: 700;
  }

  .mh-door-badge {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1rem;
    border: 1px solid rgba(255,255,255,0.10);
    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0.08),
        rgba(255,255,255,0.03)
      );
    box-shadow:
      0 8px 18px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.012) inset;
  }

  .mh-door-stage {
    position: relative;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem 0 1rem;
  }

  .mh-prize-glow {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(255,255,255,0.14), transparent 70%);
    filter: blur(2px);
    opacity: 0.8;
    pointer-events: none;
  }

  .mh-door-symbol {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.4rem;
    opacity: 0;
    transform: scale(0.88);
    transition: opacity 0.28s ease, transform 0.28s ease;
    pointer-events: none;
  }

  .mh-door.revealed .mh-door-symbol,
  .mh-door.final-open .mh-door-symbol {
    opacity: 1;
    transform: scale(1);
  }

  .mh-door-panel-wrap {
    position: relative;
    width: 78%;
    height: 185px;
    perspective: 1200px;
  }

  .mh-door-panel {
    position: absolute;
    inset: 0;
    border-radius: 22px;
    border: 1px solid rgba(96,64,38,0.85);
    background:
      linear-gradient(
        180deg,
        rgba(154,105,63,0.97),
        rgba(111,72,43,0.98)
      );
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,0.05),
      inset 0 -20px 36px rgba(0,0,0,0.18),
      0 14px 24px rgba(0,0,0,0.14);
    transform-origin: left center;
    transition: transform 0.55s cubic-bezier(.2,.75,.2,1), opacity 0.45s ease;
    overflow: hidden;
  }

  .mh-door-panel::before {
    content: "";
    position: absolute;
    left: 12%;
    top: 8%;
    width: 76%;
    height: 84%;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.08);
    background:
      linear-gradient(
        180deg,
        rgba(255,255,255,0.04),
        rgba(0,0,0,0.03)
      );
  }

  .mh-door-panel::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 11px;
    height: 11px;
    border-radius: 999px;
    background: rgba(255,226,170,0.95);
    box-shadow:
      0 0 10px rgba(255,226,170,0.40),
      0 0 0 2px rgba(0,0,0,0.12);
  }

  .mh-door-number-large {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.1rem;
    font-weight: 800;
    color: rgba(255,245,235,0.82);
    text-shadow: 0 2px 10px rgba(0,0,0,0.18);
    letter-spacing: 0.04em;
    user-select: none;
  }

  .mh-door.revealed .mh-door-panel,
  .mh-door.final-open .mh-door-panel {
    transform: rotateY(-72deg);
    opacity: 0.24;
  }

  .mh-door-footer {
    text-align: center;
    padding: 1rem 1rem 1.1rem 1rem;
    font-size: 0.95rem;
    font-weight: 600;
    opacity: 0.78;
  }

  .mh-controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 1.4rem 0 1.7rem 0;
  }

  .mh-btn {
    border: 1px solid rgba(127,127,127,0.20);
    border-radius: 14px;
    padding: 0.9rem 1.15rem;
    font: inherit;
    font-weight: 700;
    cursor: pointer;
    background:
      linear-gradient(
        180deg,
        rgba(127,127,127,0.10),
        rgba(127,127,127,0.05)
      );
    color: inherit;
    transition:
      transform 0.22s ease,
      border-color 0.22s ease,
      box-shadow 0.22s ease,
      background 0.22s ease,
      opacity 0.22s ease;
  }

  .mh-btn:hover {
    transform: translateY(-2px);
    border-color: rgba(56,189,248,0.32);
    box-shadow: 0 0 18px rgba(59,130,246,0.11);
    background:
      linear-gradient(
        180deg,
        rgba(59,130,246,0.08),
        rgba(127,127,127,0.05)
      );
  }

  .mh-btn.primary {
    border-color: rgba(59,130,246,0.30);
    background:
      linear-gradient(
        180deg,
        rgba(59,130,246,0.16),
        rgba(59,130,246,0.08)
      );
  }

  .mh-btn:disabled {
    cursor: not-allowed;
    opacity: 0.44;
    transform: none;
    box-shadow: none;
  }

  .mh-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(180px, 1fr));
    gap: 18px;
    margin-top: 1.8rem;
  }

  .mh-stat-card {
    padding: 1.15rem 1.15rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 18px;
    background:
      linear-gradient(
        180deg,
        rgba(127,127,127,0.06),
        rgba(127,127,127,0.03)
      );
    box-shadow:
      0 10px 24px rgba(0,0,0,0.06),
      0 0 0 1px rgba(255,255,255,0.015) inset;
  }

  .mh-stat-title {
    margin-bottom: 0.65rem;
    font-weight: 800;
  }

  .mh-stat-line {
    line-height: 1.9;
    opacity: 0.86;
  }

  .mh-note {
    margin-top: 2rem;
    line-height: 1.85;
    opacity: 0.82;
  }

  .mh-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 2.3rem;
  }

  .mh-nav a {
    text-decoration: none !important;
  }

  @media (max-width: 920px) {
    .mh-doors,
    .mh-stats {
      grid-template-columns: 1fr;
    }

    .mh-door {
      min-height: 320px;
    }
  }
</style>

<div class="mh-shell">

  <h1 class="mh-title">Monty Hall Simulation</h1>

  <p class="mh-lead">
    An interactive visual simulation of the Monty Hall problem.
  </p>

  <p class="mh-sublead">
    Choose a door, watch the host reveal a goat, then decide whether to stay with your original choice or switch to the remaining unopened door.
  </p>

  <hr class="mh-rule">

  <div id="mh-status" class="mh-status">
    Choose one of the three doors to begin.
  </div>

  <div class="mh-doors">
    <div class="mh-door" id="door-0" onclick="chooseDoor(0)">
      <div class="mh-door-top">
        <div class="mh-door-label">Contestant choice</div>
        <div class="mh-door-badge">1</div>
      </div>

      <div class="mh-door-stage">
        <div class="mh-prize-glow"></div>
        <div class="mh-door-symbol" id="symbol-0">🐐</div>

        <div class="mh-door-panel-wrap">
          <div class="mh-door-panel">
            <div class="mh-door-number-large">1</div>
          </div>
        </div>
      </div>

      <div class="mh-door-footer" id="footer-0">Closed</div>
    </div>

    <div class="mh-door" id="door-1" onclick="chooseDoor(1)">
      <div class="mh-door-top">
        <div class="mh-door-label">Contestant choice</div>
        <div class="mh-door-badge">2</div>
      </div>

      <div class="mh-door-stage">
        <div class="mh-prize-glow"></div>
        <div class="mh-door-symbol" id="symbol-1">🐐</div>

        <div class="mh-door-panel-wrap">
          <div class="mh-door-panel">
            <div class="mh-door-number-large">2</div>
          </div>
        </div>
      </div>

      <div class="mh-door-footer" id="footer-1">Closed</div>
    </div>

    <div class="mh-door" id="door-2" onclick="chooseDoor(2)">
      <div class="mh-door-top">
        <div class="mh-door-label">Contestant choice</div>
        <div class="mh-door-badge">3</div>
      </div>

      <div class="mh-door-stage">
        <div class="mh-prize-glow"></div>
        <div class="mh-door-symbol" id="symbol-2">🐐</div>

        <div class="mh-door-panel-wrap">
          <div class="mh-door-panel">
            <div class="mh-door-number-large">3</div>
          </div>
        </div>
      </div>

      <div class="mh-door-footer" id="footer-2">Closed</div>
    </div>
  </div>

  <div class="mh-controls">
    <button id="stayBtn" class="mh-btn primary" onclick="stayChoice()" disabled>Stay</button>
    <button id="switchBtn" class="mh-btn primary" onclick="switchChoice()" disabled>Switch</button>
    <button class="mh-btn" onclick="resetRound()">New round</button>
    <button class="mh-btn" onclick="simulateStrategy('stay', 1000)">Simulate 1000 stay</button>
    <button class="mh-btn" onclick="simulateStrategy('switch', 1000)">Simulate 1000 switch</button>
    <button class="mh-btn" onclick="resetStats()">Reset stats</button>
  </div>

  <div class="mh-stats">
    <div class="mh-stat-card">
      <div class="mh-stat-title">Overall</div>
      <div class="mh-stat-line">Total games: <strong id="total-games">0</strong></div>
      <div class="mh-stat-line">Total wins: <strong id="total-wins">0</strong></div>
      <div class="mh-stat-line">Overall win rate: <strong id="overall-rate">0.0%</strong></div>
    </div>

    <div class="mh-stat-card">
      <div class="mh-stat-title">Stay strategy</div>
      <div class="mh-stat-line">Attempts: <strong id="stay-attempts">0</strong></div>
      <div class="mh-stat-line">Wins: <strong id="stay-wins">0</strong></div>
      <div class="mh-stat-line">Win rate: <strong id="stay-rate">0.0%</strong></div>
    </div>

    <div class="mh-stat-card">
      <div class="mh-stat-title">Switch strategy</div>
      <div class="mh-stat-line">Attempts: <strong id="switch-attempts">0</strong></div>
      <div class="mh-stat-line">Wins: <strong id="switch-wins">0</strong></div>
      <div class="mh-stat-line">Win rate: <strong id="switch-rate">0.0%</strong></div>
    </div>
  </div>

  <p class="mh-note">
    The theoretical result is the heart of the puzzle:
    staying wins with probability \( \frac{1}{3} \), while switching wins with probability \( \frac{2}{3} \).
    The simulation lets you see this experimentally.
  </p>

  <div class="mh-nav">
    <a href="/tools/">← Back to Tools</a>
  </div>

</div>

<script>
  let carDoor = null;
  let chosenDoor = null;
  let openedDoor = null;
  let roundStage = "pick";

  const stats = {
    totalGames: 0,
    totalWins: 0,
    stayAttempts: 0,
    stayWins: 0,
    switchAttempts: 0,
    switchWins: 0
  };

  function randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function setStatus(message) {
    document.getElementById("mh-status").innerHTML = message;
  }

  function updateStatsDisplay() {
    document.getElementById("total-games").textContent = stats.totalGames;
    document.getElementById("total-wins").textContent = stats.totalWins;
    document.getElementById("stay-attempts").textContent = stats.stayAttempts;
    document.getElementById("stay-wins").textContent = stats.stayWins;
    document.getElementById("switch-attempts").textContent = stats.switchAttempts;
    document.getElementById("switch-wins").textContent = stats.switchWins;

    const overallRate = stats.totalGames === 0 ? 0 : (100 * stats.totalWins / stats.totalGames);
    const stayRate = stats.stayAttempts === 0 ? 0 : (100 * stats.stayWins / stats.stayAttempts);
    const switchRate = stats.switchAttempts === 0 ? 0 : (100 * stats.switchWins / stats.switchAttempts);

    document.getElementById("overall-rate").textContent = overallRate.toFixed(1) + "%";
    document.getElementById("stay-rate").textContent = stayRate.toFixed(1) + "%";
    document.getElementById("switch-rate").textContent = switchRate.toFixed(1) + "%";
  }

  function clearDoorClasses() {
    for (let i = 0; i < 3; i++) {
      const door = document.getElementById(`door-${i}`);
      door.className = "mh-door";
      document.getElementById(`footer-${i}`).textContent = "Closed";
      document.getElementById(`symbol-${i}`).textContent = i === carDoor ? "🚗" : "🐐";
    }
  }

  function setButtonsEnabled(stayEnabled, switchEnabled) {
    document.getElementById("stayBtn").disabled = !stayEnabled;
    document.getElementById("switchBtn").disabled = !switchEnabled;
  }

  function resetRound() {
    carDoor = randomInt(3);
    chosenDoor = null;
    openedDoor = null;
    roundStage = "pick";

    clearDoorClasses();
    setButtonsEnabled(false, false);
    setStatus("Choose one of the three doors to begin.");
  }

  function chooseDoor(index) {
    if (roundStage !== "pick") return;

    chosenDoor = index;
    roundStage = "decision";

    document.getElementById(`door-${chosenDoor}`).classList.add("selected");
    document.getElementById(`footer-${chosenDoor}`).textContent = "Your choice";

    const possibleOpen = [0, 1, 2].filter(i => i !== chosenDoor && i !== carDoor);
    openedDoor = possibleOpen[randomInt(possibleOpen.length)];

    document.getElementById(`door-${openedDoor}`).classList.add("revealed");
    document.getElementById(`footer-${openedDoor}`).textContent = "Host reveals a goat";

    setButtonsEnabled(true, true);
    setStatus(`You picked Door ${chosenDoor + 1}. The host opens Door ${openedDoor + 1}. Do you want to stay or switch?`);
  }

  function finishRound(finalChoice, strategy) {
    if (roundStage !== "decision") return;

    roundStage = "done";
    setButtonsEnabled(false, false);

    stats.totalGames += 1;

    if (strategy === "stay") {
      stats.stayAttempts += 1;
    } else {
      stats.switchAttempts += 1;
    }

    for (let i = 0; i < 3; i++) {
      document.getElementById(`door-${i}`).classList.add("final-open");
      document.getElementById(`footer-${i}`).textContent = i === carDoor ? "Car" : "Goat";
    }

    const didWin = finalChoice === carDoor;

    if (didWin) {
      stats.totalWins += 1;
      if (strategy === "stay") {
        stats.stayWins += 1;
      } else {
        stats.switchWins += 1;
      }
      document.getElementById(`door-${finalChoice}`).classList.add("win");
    } else {
      document.getElementById(`door-${finalChoice}`).classList.add("lose");
      document.getElementById(`door-${carDoor}`).classList.add("win");
    }

    updateStatsDisplay();

    if (didWin) {
      setStatus(`You chose Door ${finalChoice + 1} and won the car.`);
    } else {
      setStatus(`You chose Door ${finalChoice + 1} and lost. The car was behind Door ${carDoor + 1}.`);
    }
  }

  function stayChoice() {
    if (roundStage !== "decision") return;
    finishRound(chosenDoor, "stay");
  }

  function switchChoice() {
    if (roundStage !== "decision") return;
    const switchedDoor = [0, 1, 2].find(i => i !== chosenDoor && i !== openedDoor);
    finishRound(switchedDoor, "switch");
  }

  function simulateOne(strategy) {
    const car = randomInt(3);
    const firstChoice = randomInt(3);

    stats.totalGames += 1;

    if (strategy === "stay") {
      stats.stayAttempts += 1;
      if (firstChoice === car) {
        stats.totalWins += 1;
        stats.stayWins += 1;
      }
    }

    if (strategy === "switch") {
      stats.switchAttempts += 1;
      if (firstChoice !== car) {
        stats.totalWins += 1;
        stats.switchWins += 1;
      }
    }
  }

  function simulateStrategy(strategy, n) {
    if (roundStage === "decision") {
      setStatus("Finish the current round before running a large simulation.");
      return;
    }

    for (let i = 0; i < n; i++) {
      simulateOne(strategy);
    }

    updateStatsDisplay();
    setStatus(`${n} simulated games were added using the ${strategy} strategy.`);
  }

  function resetStats() {
    stats.totalGames = 0;
    stats.totalWins = 0;
    stats.stayAttempts = 0;
    stats.stayWins = 0;
    stats.switchAttempts = 0;
    stats.switchWins = 0;
    updateStatsDisplay();
    resetRound();
  }

  resetRound();
  updateStatsDisplay();
</script>
