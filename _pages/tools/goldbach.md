---
title: "Goldbach Conjecture"
permalink: /tools/goldbach/
---

<style>
  .tool-shell {
    max-width: 850px;
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

  .tool-rule {
    border: none;
    border-top: 1px solid rgba(120,120,120,0.28);
    margin: 2rem 0;
  }

  .tool-note {
    margin: 1.5rem 0;
    padding: 1rem 1.25rem;
    border-left: 4px solid #2563eb;
    background: rgba(37,99,235,0.08);
    border-radius: 12px;
  }

  .tool-input-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1rem;
  }

  .tool-input {
    padding: 10px 12px;
    min-width: 280px;
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
  }

  .tool-input:focus {
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.08);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.12);
    transform: translateY(-1px);
  }

  .tool-btn,
  .tool-btn:hover,
  .tool-btn:focus,
  .tool-btn:active,
  .tool-btn:visited {
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

  .tool-btn::before {
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

  .tool-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .tool-btn:hover::before {
    transform: translateX(130%);
  }

  .tool-btn:active {
    transform: translateY(0) scale(0.99);
  }

  .tool-btn-primary {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: white !important;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .tool-btn-primary:hover {
    border-color: rgba(96,165,250,0.65);
    box-shadow:
      0 0 0 1px rgba(96,165,250,0.16),
      0 10px 28px rgba(37,99,235,0.28);
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
  }

  .tool-nav-box {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid rgba(120,120,120,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .tool-nav-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
  }

  .tool-btn-nav {
    background: rgba(127,127,127,0.06);
  }

  .tool-btn-back {
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(147,197,253,0.7);
    font-weight: 600;
  }

  .tool-btn-back:hover {
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(147,197,253,0.7);
    font-weight: 600;
  }

  .tool-alert {
    padding: 12px;
    border-radius: 10px;
  }

  .tool-alert-error {
    border: 1px solid #f5c2c7;
    background: #f8d7da;
    color: #842029;
  }

  .tool-alert-success {
    border: 1px solid #badbcc;
    background: #d1e7dd;
    color: #0f5132;
  }

  .tool-results-box {
    margin-top: 1.5rem;
    padding: 1.2rem 1.25rem;
    border: 1px solid rgba(127,127,127,0.22);
    border-radius: 14px;
    background: rgba(127,127,127,0.05);
  }

  .tool-results-box h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .tool-results-list {
    margin-top: 1rem;
    padding-left: 1.4rem;
  }

  .tool-results-list li {
    margin-bottom: 0.45rem;
  }
</style>

<div class="tool-shell">

  <h1>Goldbach Conjecture</h1>

  <p>
    Goldbach’s conjecture is one of the most famous unsolved problems in number theory.
    It states that every even integer greater than \( 2 \) can be written as the sum of two prime numbers.
  </p>

  <div class="tool-note">
    <strong>Goldbach’s Conjecture.</strong><br>
    Every even integer greater than \( 2 \) is the sum of two prime numbers.
  </div>

  <p>
    In symbols, if \( n \) is an even integer with \( n > 2 \), then there exist prime numbers
    \( p \) and \( q \) such that
  </p>

  <div class="tool-note">
    \( n = p + q \)
  </div>

  <p>
    For example,
  </p>

  <div class="tool-note">
    \( 28 = 5 + 23 = 11 + 17 \)
  </div>

  <p>
    This tool lets you test the conjecture for a given even integer greater than \( 2 \) by generating
    all possible decompositions into two prime numbers.
  </p>

  <hr class="tool-rule">

  <h2>Try it</h2>

  <p>
    Enter an even integer greater than \( 2 \).
  </p>

  <div class="tool-input-row">
    <input
      type="number"
      id="goldbachInput"
      placeholder="Enter an even integer greater than 2"
      step="1"
      class="tool-input"
    >
    <button
      onclick="runGoldbach()"
      class="tool-btn tool-btn-primary"
    >
      Generate
    </button>
  </div>

  <div id="goldbachMessage" style="margin-top:1rem; font-weight:600;"></div>
  <div id="goldbachResults"></div>

  <hr class="tool-rule">

  <div class="tool-nav-box">
    <div class="tool-nav-row">
      <a href="/tools/prime-number/" class="tool-btn tool-btn-nav">
        ← Previous
      </a>
      <a href="/tools/" class="tool-btn tool-btn-back">
        Back to Tools
      </a>
      <a href="/tools/prime-number/" class="tool-btn tool-btn-nav">
        Next →
      </a>
    </div>
  </div>

</div>

<script>
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function runGoldbach() {
  const inputEl = document.getElementById("goldbachInput");
  const messageEl = document.getElementById("goldbachMessage");
  const resultsEl = document.getElementById("goldbachResults");

  messageEl.innerHTML = "";
  resultsEl.innerHTML = "";

  const raw = inputEl.value.trim();

  if (raw === "") {
    messageEl.innerHTML = '<div class="tool-alert tool-alert-error">Please enter a number.</div>';
    return;
  }

  const n = Number(raw);

  if (!Number.isInteger(n)) {
    messageEl.innerHTML = '<div class="tool-alert tool-alert-error">The input must be an integer.</div>';
    return;
  }

  if (n <= 2) {
    messageEl.innerHTML = '<div class="tool-alert tool-alert-error">Please enter an even integer greater than 2.</div>';
    return;
  }

  if (n % 2 !== 0) {
    messageEl.innerHTML = `<div class="tool-alert tool-alert-error">${n} is odd. Please enter an even integer greater than 2.</div>`;
    return;
  }

  const pairs = [];

  for (let p = 2; p <= n / 2; p++) {
    const q = n - p;
    if (isPrime(p) && isPrime(q)) {
      pairs.push([p, q]);
    }
  }

  if (pairs.length === 0) {
    messageEl.innerHTML = `<div class="tool-alert tool-alert-error">No decomposition into two prime numbers was found for ${n}.</div>`;
    return;
  }

  messageEl.innerHTML = `<div class="tool-alert tool-alert-success">${n} can be written as the sum of two prime numbers in <strong>${pairs.length}</strong> distinct way(s).</div>`;

  let html = `<div class="tool-results-box">`;
  html += `<h3>All prime decompositions of ${n}</h3>`;
  html += `<ul class="tool-results-list">`;

  for (const [p, q] of pairs) {
    html += `<li>${n} = ${p} + ${q}</li>`;
  }

  html += `</ul>`;
  html += `</div>`;

  resultsEl.innerHTML = html;
}
</script>
