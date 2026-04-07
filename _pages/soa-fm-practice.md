---
title: "SOA FM Practice"
permalink: /tools/soa-fm-practice/
---

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
    <button
      onclick="checkAnswer()"
      style="padding:10px 16px; border:none; border-radius:10px; background:#111827; color:white; cursor:pointer;"
    >
      Check Answer
    </button>

    <button
      onclick="toggleSolution()"
      style="padding:10px 16px; border:1px solid rgba(127,127,127,0.3); border-radius:10px; background:rgba(127,127,127,0.08); color:inherit; cursor:pointer;"
    >
      Show Solution
    </button>

    <button
      onclick="loadRandomProblem()"
      style="padding:10px 16px; border:1px solid rgba(127,127,127,0.3); border-radius:10px; background:rgba(127,127,127,0.08); color:inherit; cursor:pointer;"
    >
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

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <div style="margin-top:2rem; padding:1rem; border:1px solid rgba(120,120,120,0.22); border-radius:16px; background:rgba(127,127,127,0.05);">
    <div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:14px;">
      <a href="/tools/goldbach/" style="padding:10px 18px; border:1px solid rgba(127,127,127,0.25); border-radius:12px; text-decoration:none; color:inherit; background:rgba(127,127,127,0.06);">
        ← Previous
      </a>
      <a href="/tools/" style="padding:10px 18px; border:1px solid #93c5fd; border-radius:12px; text-decoration:none; color:inherit; background:rgba(37,99,235,0.12); font-weight:600;">
        Back to Tools
      </a>
      <a href="/tools/financial-math-calculator/" style="padding:10px 18px; border:1px solid rgba(127,127,127,0.25); border-radius:12px; text-decoration:none; color:inherit; background:rgba(127,127,127,0.06);">
        Next →
      </a>
    </div>
  </div>

</div>

<script>
let problems = [];
let currentProblem = null;

async function loadProblems() {
  try {
    const response = await fetch('/assets/data/soa-fm-problems.json');
    problems = await response.json();
    loadRandomProblem();
  } catch (error) {
    document.getElementById('problemTitle').innerText = 'Error';
    document.getElementById('problemStatement').innerText = 'Unable to load the problems file.';
    console.error(error);
  }
}

function loadRandomProblem() {
  if (!problems.length) return;

  const randomIndex = Math.floor(Math.random() * problems.length);
  currentProblem = problems[randomIndex];

  document.getElementById('problemTitle').innerText = currentProblem.title;
  document.getElementById('problemStatement').innerText = currentProblem.statement;

  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.innerHTML = '';

  currentProblem.choices.forEach((choice, index) => {
    const letter = String.fromCharCode(65 + index);

    const label = document.createElement('label');
    label.style.display = 'block';
    label.style.padding = '12px 14px';
    label.style.border = '1px solid rgba(127,127,127,0.25)';
    label.style.borderRadius = '12px';
    label.style.cursor = 'pointer';

    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" style="margin-right:10px;">
      ${letter}. ${choice}
    `;

    choicesContainer.appendChild(label);
  });

  document.getElementById('result').innerHTML = '';
  document.getElementById('solutionBox').style.display = 'none';

  renderSolution();
  
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
    result.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">Please select an answer.</div>';
    return;
  }

  if (selected === currentProblem.correct) {
    result.innerHTML = '<div style="padding:12px; border:1px solid #badbcc; background:#d1e7dd; color:#0f5132; border-radius:10px;">Correct.</div>';
  } else {
    result.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">Incorrect. Try again or reveal the solution.</div>';
  }
}

function renderSolution() {
  const solutionSteps = document.getElementById('solutionSteps');
  solutionSteps.innerHTML = '';

  currentProblem.solution_steps.forEach(step => {
    const p = document.createElement('p');
    p.textContent = step;
    solutionSteps.appendChild(p);
  });

  document.getElementById('generalizationText').textContent = currentProblem.generalization;
  document.getElementById('answerText').textContent = currentProblem.answer_text;
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
