---
title: "SOA FM Practice"
permalink: /tools/soa-fm-practice/
---

<style>
  .fm-btn,
  .fm-btn:hover,
  .fm-btn:focus,
  .fm-btn:active,
  .fm-btn:visited {
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

  .fm-btn *,
  .fm-btn:hover *,
  .fm-btn:focus *,
  .fm-btn:active * {
    text-decoration: none !important;
  }

  a.fm-btn,
  a.fm-btn:hover,
  a.fm-btn:focus,
  a.fm-btn:active,
  a.fm-btn:visited {
    text-decoration: none !important;
  }

  #solutionBox a,
  #solutionBox a:hover,
  #solutionBox a:focus,
  #solutionBox a:active,
  #solutionBox a:visited {
    text-decoration: none !important;
  }

  .fm-btn::before {
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

  .fm-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .fm-btn:hover::before {
    transform: translateX(130%);
  }

  .fm-btn:active {
    transform: translateY(0) scale(0.99);
  }

  .fm-btn-primary {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: white !important;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .fm-btn-primary:hover {
    border-color: rgba(96,165,250,0.65);
    box-shadow:
      0 0 0 1px rgba(96,165,250,0.16),
      0 10px 28px rgba(37,99,235,0.28);
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
  }

  .fm-btn-nav {
    background: rgba(127,127,127,0.06);
  }

  .fm-btn-back {
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(147,197,253,0.7);
    font-weight: 600;
  }

  .fm-btn-back:hover {
    background: rgba(37,99,235,0.18);
    box-shadow:
      0 0 0 1px rgba(147,197,253,0.20),
      0 8px 24px rgba(37,99,235,0.20);
  }

  .fm-choice {
    display: block;
    padding: 12px 14px;
    border: 1px solid rgba(127,127,127,0.25);
    border-radius: 12px;
    cursor: pointer;
    transition:
      transform 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease,
      box-shadow 0.18s ease;
  }

  .fm-choice:hover {
    transform: translateY(-1px);
    border-color: rgba(59,130,246,0.45);
    background: rgba(59,130,246,0.06);
    box-shadow: 0 6px 18px rgba(59,130,246,0.10);
  }

  .fm-choice input {
    margin-right: 10px;
  }

  .fm-counter {
    margin-top: 1rem;
    text-align: right;
    opacity: 0.75;
    font-size: 0.96rem;
    font-weight: 600;
  }

  .fm-result-message {
    margin-top: 1rem;
    padding: 12px 14px;
    border-radius: 12px;
    font-weight: 700;
    line-height: 1.45;
  }

  .fm-result-message,
  .fm-result-message * {
    color: inherit !important;
  }

  .fm-result-correct {
    background: #dcfce7 !important;
    border: 1px solid #86efac !important;
    color: #166534 !important;
  }

  .fm-result-incorrect {
    background: #fee2e2 !important;
    border: 1px solid #fca5a5 !important;
    color: #991b1b !important;
  }

  .fm-result-warning {
    background: #fef3c7 !important;
    border: 1px solid #fcd34d !important;
    color: #92400e !important;
  }
</style>

<div style="max-width: 850px; margin: 2rem auto; padding: 2rem; border: 1px solid rgba(127,127,127,0.22); border-radius: 16px; background: inherit; color: inherit;">

  <h1>SOA FM Practice</h1>

  <p>
    A collection of financial mathematics exercises designed in the spirit of SOA Exam FM, with a new problem selected at random each time the page is loaded.
  </p>

  <p>
    Each exercise comes with multiple-choice options and a fully worked solution for review and self-study.
  </p>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <h2 id="problemTitle">Loading problem...</h2>

  <p id="problemStatement"></p>

  <div id="choicesContainer" style="display:grid; gap:12px; margin-top:1rem;"></div>

  <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:1.25rem;">
    <button onclick="checkAnswer()" class="fm-btn fm-btn-primary">
      Check Answer
    </button>

    <button onclick="toggleSolution()" class="fm-btn">
      Show Solution
    </button>

    <button onclick="loadRandomProblem()" class="fm-btn">
      New Problem
    </button>
  </div>

  <div id="result" style="margin-top:1rem; font-weight:600;"></div>

  <div id="solutionBox" style="display:none; margin-top:1.5rem; padding:1.25rem; border:1px solid rgba(127,127,127,0.22); border-radius:14px; background:rgba(127,127,127,0.06);">
    <h3 style="margin-top:0;">Solution</h3>

    <div id="solutionSteps"></div>

    <hr style="border:none; border-top:1px solid rgba(120,120,120,0.25); margin:1.5rem 0;">

    <h3>Generalization</h3>
    <p id="generalizationText"></p>

    <div style="margin-top:1rem; padding:1rem 1.1rem; border-left:4px solid #16a34a; background:rgba(22,163,74,0.08); border-radius:10px;">
      <strong>Answer.</strong><br>
      <span id="answerText"></span>
    </div>
  </div>

  <div id="problemCounter" class="fm-counter">Problem 0 / 0</div>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <div style="margin-top:2rem; padding:1rem; border:1px solid rgba(120,120,120,0.22); border-radius:16px; background:rgba(127,127,127,0.05);">
    <div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:14px;">
      <a href="/tools/goldbach/" class="fm-btn fm-btn-nav">
        ← Previous
      </a>

      <a href="/tools/" class="fm-btn fm-btn-back">
        Back to Tools
      </a>

      <a href="/tools/financial-math-calculator/" class="fm-btn fm-btn-nav">
        Next →
      </a>
    </div>
  </div>

</div>

<script>
let problems = [];
let currentProblem = null;
let seenProblemIds = new Set();

function updateProblemCounter() {
  const total = problems.length;
  const currentId = currentProblem ? currentProblem.id : 0;
  document.getElementById('problemCounter').innerText = `Problem ${currentId} / ${total}`;
}

async function loadProblems() {
  try {
    const response = await fetch('/assets/data/soa-fm-problems.json?v=' + Date.now());
    problems = await response.json();

    updateProblemCounter();
    loadRandomProblem();
  } catch (error) {
    document.getElementById('problemTitle').innerText = 'Error';
    document.getElementById('problemStatement').innerText = 'Unable to load the problems file.';
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

  if (currentProblem && currentProblem.id !== undefined && currentProblem.id !== null) {
    seenProblemIds.add(String(currentProblem.id));
  }

  document.getElementById('problemTitle').innerText = currentProblem.title;
  document.getElementById('problemStatement').innerHTML = currentProblem.statement;

  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.innerHTML = '';

  currentProblem.choices.forEach((choice, index) => {
    const letter = String.fromCharCode(65 + index);

    const label = document.createElement('label');
    label.className = 'fm-choice';

    label.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      ${letter}. ${choice}
    `;

    choicesContainer.appendChild(label);
  });

  document.getElementById('result').innerHTML = '';
  document.getElementById('solutionBox').style.display = 'none';

  renderSolution();
  updateProblemCounter();

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

function checkAnswer() {
  const options = document.getElementsByName('answer');
  const result = document.getElementById('result');
  let selected = null;

  for (const option of options) {
    if (option.checked) {
      selected = Number(option.value);
      break;
    }
  }

  if (selected === null) {
    result.innerHTML = '<div class="fm-result-message fm-result-warning">Please select an answer.</div>';
    return;
  }

  if (selected === currentProblem.correct) {
    result.innerHTML = '<div class="fm-result-message fm-result-correct">Correct.</div>';
  } else {
    result.innerHTML = '<div class="fm-result-message fm-result-incorrect">Incorrect. Try again or reveal the solution.</div>';
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

  document.getElementById('generalizationText').innerHTML = currentProblem.generalization || '';
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
