---
title: "Prime Number"
permalink: /tools/prime-number/
---

<div style="max-width: 850px; margin: 2rem auto; padding: 2rem; border: 1px solid #ddd; border-radius: 16px; background: inherit; color: inherit;">

  <h1>Prime Number</h1>

  <p>
    A prime number is an integer greater than 1 that has exactly two positive divisors:
    1 and itself.
  </p>

  <p>
    This tool lets you test whether a given integer is prime.
  </p>

  <div style="margin: 1.5rem 0; padding: 1rem 1.25rem; border-left: 4px solid #2563eb; background: rgba(37,99,235,0.08); border-radius: 10px;">
    <strong>Definition.</strong><br>
    An integer \( n > 1 \) is prime if its only positive divisors are \( 1 \) and \( n \).
  </div>

  <p>
    For example, \( 2 \), \( 3 \), \( 5 \), \( 7 \), and \( 11 \) are prime numbers, while
    \( 4 \), \( 6 \), \( 8 \), and \( 9 \) are not.
  </p>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

<h2>Try it</h2>

  <p>
    Enter an integer greater than 1.
  </p>

  <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:1rem;">
    <input
      type="number"
      id="numberInput"
      placeholder="Enter an integer greater than 1"
      step="1"
      style="padding:10px 12px; min-width:280px; color:black; background:white; border:1px solid #ccc; border-radius:10px;"
    >
    <button
      onclick="checkPrime()"
      style="padding:10px 16px; border:none; border-radius:10px; background:#111827; color:white; cursor:pointer;"
    >
      Check
    </button>
  </div>

  <div id="result" style="margin-top:1rem; font-weight:600;"></div>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <div style="margin-top:2rem; padding:1rem; border:1px solid rgba(120,120,120,0.22); border-radius:16px; background:rgba(127,127,127,0.05);">
      <div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:14px;">
        <a href="/tools/goldbach/" style="padding:10px 18px; border:1px solid #d1d5db; border-radius:12px; text-decoration:none; color:inherit; background:rgba(255,255,255,0.75); box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          ← Previous
        </a>
        <a href="/tools/" style="padding:10px 18px; border:1px solid #93c5fd; border-radius:12px; text-decoration:none; color:inherit; background:rgba(37,99,235,0.12); box-shadow:0 2px 8px rgba(0,0,0,0.05); font-weight:600;">
          Back to Tools
        </a>
        <a href="/tools/goldbach/" style="padding:10px 18px; border:1px solid #d1d5db; border-radius:12px; text-decoration:none; color:inherit; background:rgba(255,255,255,0.75); box-shadow:0 2px 8px rgba(0,0,0,0.05);">
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
        result.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">Please enter a number.</div>';
        return;
    }

    const n = Number(input);

    if (!Number.isInteger(n)) {
        result.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">The input must be an integer.</div>';
        return;
    }

    if (n < 2) {
        result.innerHTML = '<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">Please enter an integer greater than 1.</div>';
        return;
    }

    if (n === 2) {
        result.innerHTML = '<div style="padding:12px; border:1px solid #badbcc; background:#d1e7dd; color:#0f5132; border-radius:10px;">2 is a prime number.</div>';
        return;
    }

    if (n % 2 === 0) {
        result.innerHTML = `<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">${n} is not a prime number.</div>`;
        return;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            result.innerHTML = `<div style="padding:12px; border:1px solid #f5c2c7; background:#f8d7da; color:#842029; border-radius:10px;">${n} is not a prime number.</div>`;
            return;
        }
    }

    result.innerHTML = `<div style="padding:12px; border:1px solid #badbcc; background:#d1e7dd; color:#0f5132; border-radius:10px;">${n} is a prime number.</div>`;
}
</script>