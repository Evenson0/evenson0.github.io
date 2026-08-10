---
title: "Quantitative Laboratory"
permalink: /tools/
tool_theme: atlas
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

  .tool-theme-atlas {
    background: #fff;
  }

  .tool-theme-atlas .page__inner-wrap > header {
    display: none;
  }

  .lab-shell {
    color: #153b32;
    border-color: #9fc5b6;
    background:
      radial-gradient(circle at 92% 4%, rgba(151, 214, 191, 0.32), transparent 24%),
      #fffdf5;
    box-shadow: 0 24px 60px rgba(20, 73, 61, 0.14);
  }

  .lab-shell h1 {
    color: #123d35;
    font-family: "Playfair Display", Georgia, serif;
  }

  .lab-section-title {
    color: #087263;
  }

  .lab-rule {
    border-top-color: #a9ccbe;
  }

  .lab-card {
    border-color: #aed0c3;
    background: linear-gradient(145deg, #f0faf5, #e2f2ea);
    box-shadow: 0 10px 26px rgba(20, 73, 61, 0.09);
  }

  .lab-card h3 {
    color: #174f49;
  }

  .lab-card-desc,
  .lab-lead,
  .lab-sublead {
    color: #365f55;
    opacity: 1;
  }

  .lab-card:hover {
    border-color: #43a78f;
    background: linear-gradient(145deg, #e6f7ef, #ccebdd);
    box-shadow: 0 16px 36px rgba(8, 114, 99, 0.17);
  }

  .lab-card::before {
    background: linear-gradient(120deg, transparent 25%, rgba(137, 203, 184, 0.24) 50%, transparent 75%);
  }

  html[data-theme="dark"] .tool-theme-atlas {
    background: #081711;
  }

  html[data-theme="dark"] .lab-shell {
    color: #eaf8f2;
    border-color: #326b5a;
    background: #102a23;
  }

  html[data-theme="dark"] .lab-shell h1,
  html[data-theme="dark"] .lab-card h3 {
    color: #f5fff9;
  }

  html[data-theme="dark"] .lab-card {
    border-color: #326b5a;
    background: linear-gradient(145deg, #173c32, #123128);
  }

  html[data-theme="dark"] .lab-card-desc,
  html[data-theme="dark"] .lab-lead,
  html[data-theme="dark"] .lab-sublead {
    color: #c3e4d8;
  }

  .tool-theme-atlas #main,
  .tool-theme-atlas .page,
  .tool-theme-atlas .page__inner-wrap,
  .tool-theme-atlas .page__content {
    background: #fff !important;
  }

  .tool-theme-atlas .lab-shell {
    background: #fff !important;
  }

  .tool-theme-atlas .lab-grid {
    padding: 8px;
    border-radius: 20px;
    background: #b9dfd0 !important;
  }

  html[data-theme="dark"] .tool-theme-atlas #main,
  html[data-theme="dark"] .tool-theme-atlas .page,
  html[data-theme="dark"] .tool-theme-atlas .page__inner-wrap,
  html[data-theme="dark"] .tool-theme-atlas .page__content {
    background: #081711 !important;
  }

  html[data-theme="dark"] .tool-theme-atlas .lab-grid {
    background: #102a23 !important;
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

<h2 class="lab-section-title">Mathematics</h2>

  <div class="lab-grid">

    <a href="/tools/prime-number/" class="lab-card-link">
      <div class="lab-card">
        <h3>Prime Number</h3>
        <p class="lab-card-desc">
          Explore primality, test integers, and interact with one of the most classical objects in number theory.
        </p>
      </div>
    </a>

    <a href="/tools/goldbach/" class="lab-card-link">
      <div class="lab-card">
        <h3>Goldbach Conjecture</h3>
        <p class="lab-card-desc">
          Experiment with even integers and their decomposition into sums of two prime numbers.
        </p>
      </div>
    </a>

    <a href="/tools/olympiad-practice/" class="lab-card-link">
      <div class="lab-card">
        <h3>Olympiad Practice</h3>
        <p class="lab-card-desc">
          Explore randomized olympiad-style problems together with complete written solutions.
        </p>
      </div>
    </a>

    <a href="/tools/monty-hall/" class="lab-card-link">
      <div class="lab-card">
        <h3>Monty Hall Simulation</h3>
        <p class="lab-card-desc">
          Interact with the famous probability puzzle, reveal doors visually, and compare the outcomes of staying versus switching.
        </p>
      </div>
    </a>

    <a href="/tools/random-walk/" class="lab-card-link">
      <div class="lab-card">
        <h3>Random Walk Simulator</h3>
        <p class="lab-card-desc">
          Choose a starting point, generate a two-dimensional random walk, and visualize how randomness creates a path over time.
        </p>
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
      </div>
    </a>

    <a href="/tools/financial-math-calculator/" class="lab-card-link">
      <div class="lab-card">
        <h3>Financial Mathematics Calculator</h3>
        <p class="lab-card-desc">
          Choose what you want to calculate, provide the known inputs, and obtain the corresponding financial mathematics solution.
        </p>
      </div>
    </a>

  </div>

<h2 class="lab-section-title">Quantitative Finance</h2>

  <div class="lab-grid">

    <a href="/tools/market-lab/" class="lab-card-link">
      <div class="lab-card">
        <h3>Market Lab</h3>
        <p class="lab-card-desc">
          Read the global trading day through market sessions, cross-asset prices, macro signals, earnings, news, and quantitative tools.
        </p>
      </div>
    </a>

    <a href="/tools/market-statistics/" class="lab-card-link">
      <div class="lab-card">
        <h3>Market Statistics</h3>
        <p class="lab-card-desc">
          Search an index, ETF, or equity and examine its performance, volatility, drawdown, moving averages, momentum, and benchmark correlation.
        </p>
      </div>
    </a>

    <a href="/tools/derivatives-explorer/" class="lab-card-link"><div class="lab-card"><h3>Derivatives Explorer</h3><p class="lab-card-desc">Inspect option chains, expirations, liquidity, implied volatility, Greeks, strategies, and payoff scenarios.</p></div></a>

    <a href="/tools/bond-intelligence/" class="lab-card-link"><div class="lab-card"><h3>Bonds</h3><p class="lab-card-desc">Analyze coupon income, yield to maturity, yield to call, duration, convexity, and interest-rate scenarios.</p></div></a>

    <a href="/tools/wealth-lab/" class="lab-card-link"><div class="lab-card"><h3>Wealth Lab</h3><p class="lab-card-desc">Explore annuities, monthly contributions, compound returns, financial targets, and month-by-month account growth.</p></div></a>

    <a href="/tools/binomial-option-tree/" class="lab-card-link">
      <div class="lab-card">
        <h3>Binomial Option Tree</h3>
        <p class="lab-card-desc">
          Build an animated binomial tree, compare European and American options, and price calls or puts by backward induction.
        </p>
      </div>
    </a>

  </div>

</div>
