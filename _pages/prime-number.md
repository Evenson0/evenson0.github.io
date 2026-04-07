---
title: "Prime Number"
permalink: /tools/prime-number/
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

  .tool-btn {
    position: relative;
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
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
    color: white;
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
    background: rgba(37,99,235,0.18);
    box-shadow:
      0 0 0 1px rgba(147,197,253,0.20),
      0 8px 24px rgba(37,99,235,0.20);
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
</style>

<div class="tool-shell">

  <h1>Prime Number</h1>

  <p>
    A prime number is an integer greater than \( 1 \) that has exactly two positive divisors:
    \( 1 \) and itself.
  </p>

  <p>
    This tool lets you test whether a given integer is prime.
  </p>

  <div class="tool-note">
    <strong>Definition.</strong><br>
    An integer \( n > 1 \) is prime if its only positive divisors are \( 1 \) and \( n \).
  </div>

  <p>
    For example, \( 2 \), \( 3 \), \( 5 \), \( 7 \), and \( 11 \) are prime numbers, while
    \( 4 \), \( 6 \), \( 8 \), and \( 9 \) are not.
  </p>

  <hr class="tool-rule">

  <h2>Try it</h2>

  <p>
    Enter an integer greater than \( 1 \).
  </p>

  <div class="tool-input-row">
    <input
      type="number"
      id="numberInput"
      placeholder="Enter an integer greater than 1"
      step="1"
      class="tool-input"
    >
    <button
      onclick="checkPrime()"
      class="tool-btn tool-btn-primary"
    >
      Check
    </button>
  </div>

  <div id="result" style="margin-top:1rem; font-weight:600;"></div>

  <hr class="tool-rule">

  <div class="tool-nav-box">
    <div class="tool-nav-row">
      <a href="/tools/goldbach/" class="tool-btn tool-btn-nav">
        ← Previous
      </a>
      <a href="/tools/" class="tool-btn tool-btn-back">
        Back to Tools
      </a>
      <a href="/tools/goldbach/" class="tool-btn tool-btn-nav">
        Next →
      </a>
    </div>
  </div>

</div>

<script>
function checkPrime() {
    const input = document.getElementById("numberInput").value.trim();
    const result = document.getElementById("result");

    result.innerHTML = "";

    if (input === "") {
        result.innerHTML = '<div class="tool-alert tool-alert-error">Please enter a number.</div>';
        return;
    }

    const n = Number(input);

    if (!Number.isInteger(n)) {
        result.innerHTML = '<div class="tool-alert tool-alert-error">The input must be an integer.</div>';
        return;
    }

    if (n < 2) {
        result.innerHTML = '<div class="tool-alert tool-alert-error">Please enter an integer greater than 1.</div>';
        return;
    }

    if (n === 2) {
        result.innerHTML = '<div class="tool-alert tool-alert-success">2 is a prime number.</div>';
        return;
    }

    if (n % 2 === 0) {
        result.innerHTML = `<div class="tool-alert tool-alert-error">${n} is not a prime number.</div>`;
        return;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            result.innerHTML = `<div class="tool-alert tool-alert-error">${n} is not a prime number.</div>`;
            return;
        }
    }

    result.innerHTML = `<div class="tool-alert tool-alert-success">${n} is a prime number.</div>`;
}
</script>
