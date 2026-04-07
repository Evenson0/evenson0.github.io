---
title: "Quantitative Laboratory"
permalink: /tools/
---

<style>
  .lab-shell {
    max-width: 980px;
    margin: 2rem auto;
    padding: 2.2rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 22px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.05),
      rgba(127,127,127,0.025)
    );
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
  }

  .lab-lead {
    margin-bottom: 0.8rem;
    font-size: 1.05rem;
    line-height: 1.8;
    opacity: 0.92;
  }

  .lab-sublead {
    margin-top: 0;
    line-height: 1.8;
    opacity: 0.75;
  }

  .lab-rule {
    border: none;
    border-top: 1px solid rgba(127,127,127,0.22);
    margin: 2rem 0;
  }

  .lab-section-title {
    margin-bottom: 1rem;
    letter-spacing: 0.01em;
  }

  .lab-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-bottom: 2.5rem;
  }

  .lab-card-link {
    text-decoration: none !important;
    color: inherit;
    display: block;
  }

  .lab-card-link:hover,
  .lab-card-link:focus,
  .lab-card-link:active {
    text-decoration: none !important;
    color: inherit;
  }

  .lab-card {
    position: relative;
    height: 100%;
    padding: 1.25rem;
    border: 1px solid rgba(127,127,127,0.20);
    border-radius: 18px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.07),
      rgba(127,127,127,0.045)
    );
    box-shadow:
      0 10px 28px rgba(0,0,0,0.06),
      0 0 0 1px rgba(255,255,255,0.015) inset;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease,
      background 0.25s ease;
    overflow: hidden;
  }

  .lab-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(59,130,246,0.00) 30%,
      rgba(59,130,246,0.10) 50%,
      rgba(59,130,246,0.00) 70%,
      transparent 100%
    );
    transform: translateX(-125%);
    transition: transform 0.75s ease;
    pointer-events: none;
  }

  .lab-card:hover {
    transform: translateY(-4px);
    border-color: rgba(56,189,248,0.30);
    background: linear-gradient(
      180deg,
      rgba(59,130,246,0.08),
      rgba(127,127,127,0.04)
    );
    box-shadow:
      0 16px 36px rgba(0,0,0,0.12),
      0 0 0 1px rgba(59,130,246,0.06) inset,
      0 0 24px rgba(59,130,246,0.10);
  }

  .lab-card:hover::before {
    transform: translateX(125%);
  }

  .lab-card h3,
  .lab-card p {
    text-decoration: none !important;
  }

  .lab-card h3 {
    margin-top: 0;
    margin-bottom: 0.7rem;
    line-height: 1.25;
  }

  .lab-card p {
    margin: 0;
    line-height: 1.7;
  }

  .lab-card-desc {
    opacity: 0.82;
  }

  .lab-card-cta {
    margin-top: 1rem !important;
    opacity: 0.72;
    font-weight: 600;
    letter-spacing: 0.01em;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .lab-card:hover .lab-card-cta {
    opacity: 0.95;
    transform: translateX(3px);
  }

  .lab-coming {
    padding: 1.2rem 1.25rem;
    border: 1px dashed rgba(127,127,127,0.25);
    border-radius: 18px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.04),
      rgba(127,127,127,0.02)
    );
    opacity: 0.82;
  }
</style>

<div class="lab-shell">

  <h1>Quantitative Laboratory</h1>

  <p class="lab-lead">
    A curated collection of mathematical and actuarial tools for exploration, practice, and computation.
  </p>

  <p class="lab-sublead">
    This space brings together interactive pages in number theory, actuarial science, and quantitative finance.
  </p>

  <hr class="lab-rule">

  <h2 class="lab-section-title">Number Theory</h2>

  <div class="lab-grid">

    <a href="/tools/prime-number/" class="lab-card-link">
      <div class="lab-card">
        <h3>Prime Number</h3>
        <p class="lab-card-desc">
          Explore primality, test integers, and interact with one of the most classical objects in number theory.
        </p>
        <p class="lab-card-cta">Open tool →</p>
      </div>
    </a>

    <a href="/tools/goldbach/" class="lab-card-link">
      <div class="lab-card">
        <h3>Goldbach Conjecture</h3>
        <p class="lab-card-desc">
          Experiment with even integers and their decomposition into sums of two prime numbers.
        </p>
        <p class="lab-card-cta">Open tool →</p>
      </div>
    </a>

  </div>

  <h2 class="lab-section-title">Actuarial Science</h2>

  <div class="lab-grid">

    <a href="/tools/soa-fm-practice/" class="lab-card-link">
      <div class="lab-card">
        <h3>SOA FM Practice</h3>
        <p class="lab-card-desc">
          Train with randomized financial mathematics problems inspired by SOA Exam FM, complete with multiple-choice answers.
        </p>
        <p class="lab-card-cta">Open tool →</p>
      </div>
    </a>

    <a href="/tools/financial-math-calculator/" class="lab-card-link">
      <div class="lab-card">
        <h3>Financial Mathematics Calculator</h3>
        <p class="lab-card-desc">
          Choose what you want to calculate, provide the known inputs, and obtain the corresponding financial mathematics solution.
        </p>
        <p class="lab-card-cta">Open tool →</p>
      </div>
    </a>

  </div>

  <h2 class="lab-section-title">Quantitative Finance</h2>

  <div class="lab-coming">
    Tools coming soon.
  </div>

</div>
