---
title: "Olympiad Practice"
permalink: /tools/olympiad-practice/
---

<style>
  .op-shell {
    max-width: 900px;
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

  .op-rule {
    border: none;
    border-top: 1px solid rgba(120,120,120,0.28);
    margin: 2rem 0;
  }

  .op-btn,
  .op-btn:hover,
  .op-btn:focus,
  .op-btn:active,
  .op-btn:visited {
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

  .op-btn *,
  .op-btn:hover *,
  .op-btn:focus *,
  .op-btn:active * {
    text-decoration: none !important;
  }

  a.op-btn,
  a.op-btn:hover,
  a.op-btn:focus,
  a.op-btn:active,
  a.op-btn:visited {
    text-decoration: none !important;
  }

  .op-btn::before {
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

  .op-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .op-btn:hover::before {
    transform: translateX(130%);
  }

  .op-btn:active {
    transform: translateY(0) scale(0.99);
  }

  .op-btn-primary {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: white !important;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .op-btn-primary:hover {
    color: white !important;
    border-color: rgba(96,165,250,0.65);
    box-shadow:
      0 0 0 1px rgba(96,165,250,0.16),
      0 10px 28px rgba(37,99,235,0.28);
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
  }

  .op-btn-back {
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(147,197,253,0.7);
    font-weight: 600;
  }

  .op-btn-back:hover {
    background: rgba(37,99,235,0.18);
    box-shadow:
      0 0 0 1px rgba(147,197,253,0.20),
      0 8px 24px rgba(37,99,235,0.20);
  }

  .op-problem-box {
    margin-top: 1.5rem;
    padding: 1.3rem 1.35rem;
    border: 1px solid rgba(127,127,127,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .op-solution-box {
    display: none;
    margin-top: 1.5rem;
    padding: 1.3rem 1.35rem;
    border: 1px solid rgba(127,127,127,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.06);
  }

  .op-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 1.25rem;
  }

  .op-answer-box {
    margin-top: 1rem;
    padding: 1rem 1.1rem;
    border-left: 4px solid #16a34a;
    background: #dcfce7 !important;
    border-radius: 10px;
    color: #166534 !important;
  }

  .op-answer-box,
  .op-answer-box * {
    color: #166534 !important;
  }

  .op-answer-label {
    font-weight: 800;
  }

  .op-nav-box {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid rgba(120,120,120,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .op-nav-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
  }

  .op-counter {
    margin-top: 1rem;
    text-align: right;
    opacity: 0.75;
    font-size: 0.96rem;
    font-weight: 600;
  }
</style>

<div class="op-shell">

  <h1>Olympiad Practice</h1>

  <p>
    A collection of short olympiad-style problems in the spirit of mathematical competitions.
  </p>

  <p>
    Each time the page is loaded, a new problem is selected at random. You can reveal the solution or draw another problem.
  </p>

  <hr class="op-rule">

  <h2 id="problemTitle">Loading problem...</h2>

  <div class="op-problem-box">
    <div id="problemStatement"></div>
  </div>

  <div class="op-actions">
    <button onclick="toggleSolution()" class="op-btn op-btn-primary">
      Show Solution
    </button>

    <button onclick="loadRandomProblem()" class="op-btn">
      New Problem
    </button>
  </div>

  <div id="solutionBox" class="op-solution-box">
    <h3 style="margin-top:0;">Solution</h3>
    <div id="solutionSteps"></div>

    <div class="op-answer-box">
      <span class="op-answer-label">Answer.</span><br>
      <span id="answerText"></span>
    </div>
  </div>

  <div id="problemCounter" class="op-counter">Problem 0 / 0</div>

  <hr class="op-rule">

  <div class="op-nav-box">
    <div class="op-nav-row">
      <a href="/tools/goldbach/" class="op-btn">
        ← Previous
      </a>

      <a href="/tools/" class="op-btn op-btn-back">
        Back to Tools
      </a>

      <a href="/tools/prime-number/" class="op-btn">
        Next →
      </a>
    </div>
  </div>

</div>

<script>
let problems = [];
let currentProblem = null;

function updateProblemCounter() {
  const total = problems.length;
  const currentId = currentProblem ? currentProblem.id : 0;
  document.getElementById('problemCounter').innerText = `Problem ${currentId} / ${total}`;
}

async function loadProblems() {
  try {
    const response = await fetch('/assets/data/olympiad-problems.json?v=' + Date.now());
    problems = await response.json();

    updateProblemCounter();
    loadRandomProblem();
  } catch (error) {
    document.getElementById('problemTitle').innerText = 'Error';
    document.getElementById('problemStatement').innerHTML = 'Unable to load the problems file.';
    console.error(error);
  }
}

function getRandomProblemIndexExcludingCurrent() {
  if (problems.length <= 1 || !currentProblem) {
    return Math.floor(Math.random() * problems.length);
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * problems.length);
  } while (problems[randomIndex].id === currentProblem.id);

  return randomIndex;
}

function loadRandomProblem() {
  if (!problems.length) return;

  const randomIndex = getRandomProblemIndexExcludingCurrent();
  currentProblem = problems[randomIndex];

  document.getElementById('problemTitle').innerText = currentProblem.title;
  document.getElementById('problemStatement').innerHTML = currentProblem.statement;

  renderSolution();

  document.getElementById('solutionBox').style.display = 'none';
  updateProblemCounter();

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

function renderSolution() {
  const solutionSteps = document.getElementById('solutionSteps');
  solutionSteps.innerHTML = '';

  currentProblem.solution_steps.forEach(step => {
    const p = document.createElement('p');
    p.innerHTML = step;
    solutionSteps.appendChild(p);
  });

  document.getElementById('answerText').innerHTML = currentProblem.answer_text;

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

function toggleSolution() {
  const box = document.getElementById('solutionBox');

  if (box.style.display === 'none') {
    box.style.display = 'block';

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise();
    }
  } else {
    box.style.display = 'none';
  }
}

loadProblems();
</script>
