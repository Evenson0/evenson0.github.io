---
title: "Goldbach Conjecture"
permalink: /tools/goldbach/
---

<div style="max-width: 850px; margin: 2rem auto; padding: 2rem; border: 1px solid #ddd; border-radius: 16px; background: inherit; color: inherit;">

  <h1>Goldbach Conjecture</h1>

  <p>
    Goldbach’s conjecture is one of the most famous unsolved problems in number theory.
    It states that every even integer greater than 2 can be written as the sum of two prime numbers.
  </p>

  <div style="margin: 1.5rem 0; padding: 1rem 1.25rem; border-left: 4px solid #2563eb; background: rgba(37,99,235,0.08); border-radius: 10px;">
    <strong>Goldbach’s Conjecture.</strong><br>
    Every even integer greater than 2 is the sum of two prime numbers.
  </div>

  <p>
    In symbols, if \( n \) is an even integer with \( n > 2 \), then there exist prime numbers
    \( p \) and \( q \) such that
  </p>

  <div style="margin: 1rem 0; padding: 1rem 1.25rem; border-left: 4px solid #2563eb; background: rgba(37,99,235,0.08); border-radius: 10px;">
    \( n = p + q \)
  </div>

  <p>
    For example,
  </p>

  <div style="margin: 1rem 0; padding: 1rem 1.25rem; border-left: 4px solid #2563eb; background: rgba(37,99,235,0.08); border-radius: 10px;">
    \( 28 = 5 + 23 = 11 + 17 \)
  </div>

  <p>
    This tool lets you test the conjecture for a given even integer greater than 2 by generating
    all possible decompositions into two prime numbers.
  </p>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

<h2>Try it</h2>

  <p>
    Enter an even integer greater than 2.
  </p>

  <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:1rem;">
    <input
      type="number"
      id="goldbachInput"
      placeholder="Enter an even integer greater than 2"
      step="1"
      style="padding:10px 12px; min-width:280px; color:black; background:white; border:1px solid #ccc; border-radius:10px;"
    >
    <button
      onclick="runGoldbach()"
      style="padding:10px 16px; border:none; border-radius:10px; background:#111827; color:white; cursor:pointer;"
    >
      Generate
    </button>
  </div>

  <div id="goldbachMessage" style="margin-top:1rem; font-weight:600;"></div>
  <div id="goldbachResults" style="margin-top:1.5rem;"></div>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <div style="margin-top:2rem; padding:1rem; border:1px solid rgba(120,120,120,0.22); border-radius:16px; background:rgba(127,127,127,0.05);">
      <div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:14px;">
        <a href="/tools/prime-number/" style="padding:10px 18px; border:1px solid #d1d5db; border-radius:12px; text-decoration:none; color:inherit; background:rgba(255,255,255,0.75); box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          ← Previous
        </a>
        <a href="/tools/" style="padding:10px 18px; border:1px solid #93c5fd; border-radius:12px; text-decoration:none; color:inherit; background:rgba(37,99,235,0.12); box-shadow:0 2px 8px rgba(0,0,0,0.05); font-weight:600;">
          Back to Tools
        </a>
        <a href="/tools/prime-number/" style="padding:10px 18px; border:1px solid #d1d5db; border-radius:12px; text-decoration:none; color:inherit; background:rgba(255,255,255,0.75); box-shadow:0 2px 8px rgba(0,0,0,0.05);">
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
    messageEl.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">Please enter a number.</div>';
    return;
  }

  const n = Number(raw);

  if (!Number.isInteger(n)) {
    messageEl.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">The input must be an integer.</div>';
    return;
  }

  if (n <= 2) {
    messageEl.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">Please enter an even integer greater than 2.</div>';
    return;
  }

  if (n % 2 !== 0) {
    messageEl.innerHTML = `<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">${n} is odd. Please enter an even integer greater than 2.</div>`;
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
    messageEl.innerHTML = `<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">No decomposition into two prime numbers was found for ${n}.</div>`;
    return;
  }

  messageEl.innerHTML = `<div style="padding:12px; border:1px solid #badbcc; background:#d1e7dd; color:#0f5132; border-radius:10px;">${n} can be written as the sum of two prime numbers in <strong>${pairs.length}</strong> distinct way(s).</div>`;

  let html = `<h3>All prime decompositions of ${n}</h3>`;
  html += `<ul style="margin-top:1rem; padding-left:1.4rem;">`;

  for (const [p, q] of pairs) {
    html += `<li style="margin-bottom:0.4rem;">${n} = ${p} + ${q}</li>`;
  }

  html += `</ul>`;
  resultsEl.innerHTML = html;
}
</script>

