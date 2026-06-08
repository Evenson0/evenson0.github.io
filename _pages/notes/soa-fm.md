---
title: "SOA FM Exam Notes"
permalink: /notes/soa-fm/
layout: single
author_profile: true
mathjax: false
---

<style>
  .fm-shell {
    --fm-border: rgba(127,127,127,0.18);
    --fm-border-strong: rgba(127,127,127,0.26);
    --fm-bg-1: rgba(127,127,127,0.05);
    --fm-bg-2: rgba(127,127,127,0.025);
    --fm-blue: #2563eb;
    --fm-blue-soft: rgba(37,99,235,0.10);
    --fm-green: #15803d;
    --fm-green-soft: rgba(21,128,61,0.10);
    --fm-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .fm-hero {
    border: 1px solid var(--fm-border);
    border-radius: 20px;
    padding: 1.5rem 1.4rem;
    background: linear-gradient(135deg, var(--fm-bg-1), var(--fm-bg-2));
    margin-bottom: 1.6rem;
  }

  .fm-hero h2 {
    margin: 0 0 0.8rem 0;
    font-size: 1.6rem;
  }

  .fm-hero p {
    margin: 0;
    line-height: 1.75;
    font-size: 1.02rem;
  }

  .fm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  .fm-btn {
    display: inline-block;
    text-decoration: none !important;
    padding: 0.72rem 1rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    border: 1px solid var(--fm-border);
    transition: all 0.18s ease;
  }

  .fm-btn-primary {
    background: var(--fm-blue-soft);
    color: var(--fm-blue) !important;
    border-color: rgba(37,99,235,0.18);
  }

  .fm-btn-secondary {
    background: var(--fm-green-soft);
    color: var(--fm-green) !important;
    border-color: rgba(21,128,61,0.18);
  }

  .fm-btn:hover {
    text-decoration: none !important;
    transform: translateY(-1px);
    box-shadow: var(--fm-shadow);
  }

  .fm-section-title {
    margin: 2rem 0 0.9rem 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .fm-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 0.8rem;
  }

  .fm-card {
    border: 1px solid var(--fm-border);
    border-radius: 18px;
    padding: 1.1rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(127,127,127,0.03));
    box-shadow: var(--fm-shadow);
  }

  .fm-card-number {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.28rem 0.62rem;
    border-radius: 999px;
    background: rgba(37,99,235,0.09);
    color: var(--fm-blue);
    margin-bottom: 0.7rem;
  }

  .fm-card h3 {
    margin: 0 0 0.45rem 0;
    font-size: 1.06rem;
    line-height: 1.35;
  }

  .fm-weight {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fm-green);
    margin-bottom: 0.55rem;
  }

  .fm-card p {
    margin: 0;
    line-height: 1.68;
    font-size: 0.96rem;
  }

  .fm-note {
    margin-top: 1.8rem;
    padding: 1rem 1.1rem;
    border-left: 3px solid rgba(37,99,235,0.55);
    background: rgba(37,99,235,0.045);
    border-radius: 10px;
    line-height: 1.7;
    font-size: 0.97rem;
  }

  .fm-list {
    margin: 0.6rem 0 0 0;
    padding-left: 1.2rem;
  }

  .fm-list li {
    margin-bottom: 0.35rem;
  }
</style>

<div class="fm-shell">

  <div class="fm-hero">
    <h2>SOA Exam FM</h2>
    <p>
      These notes are my personal study notes for the SOA Exam FM. They are designed as a growing
      reference in financial mathematics, with definitions, formulas, examples, exercises, and
      problem-solving intuition. The material follows the main structure of the FM syllabus and is
      supported by a separate practice tool for active preparation.
    </p>

    <div class="fm-actions">
      <a href="{{ '/assets/pdf/soa-fm-notes.pdf' | relative_url }}"
         class="fm-btn fm-btn-primary"
         target="_blank"
         rel="noopener noreferrer">
        Open the PDF notes
      </a>

      <a href="/tools/soa-fm-practice/" class="fm-btn fm-btn-secondary">
        Open the FM practice tool
      </a>

      <a href="/notes/soa-fm/formula-boxes/" class="fm-btn fm-btn-primary">
        Open the Formula Boxes
      </a>
    </div>
  </div>

  <div class="fm-section-title">Core Topics</div>

  <div class="fm-grid">
    <div class="fm-card">
      <div class="fm-card-number">Chapter 1</div>
      <h3>Time Value of Money</h3>
      <div class="fm-weight">Weight: 5–15%</div>
      <p>
        This chapter covers the foundations of financial mathematics: simple and compound interest,
        accumulation functions, present value, accumulated value, discount factors, nominal and
        effective rates, force of interest, inflation, real rates, and equations of value.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 2</div>
      <h3>Annuities and Non-Contingent Cash Flows</h3>
      <div class="fm-weight">Weight: 20–30%</div>
      <p>
        This part studies level annuities, annuities-immediate, annuities-due, perpetuities,
        and increasing or decreasing cash-flow patterns.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 3</div>
      <h3>Loans</h3>
      <div class="fm-weight">Weight: 15–25%</div>
      <p>
        Here the emphasis is on loan structure and amortization. Topics include principal,
        payment schedules, outstanding balance, interest and principal components of each payment,
        balloon payments, refinancing, and loan valuation formulas.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 4</div>
      <h3>Bonds</h3>
      <div class="fm-weight">Weight: 15–25%</div>
      <p>
        This chapter introduces bond pricing and yield. It includes coupon rates, redemption value,
        premium and discount amortization, book value, market value, callable bonds,
        and accumulated value with reinvestment of coupons.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 5</div>
      <h3>General Cash Flows, Portfolios, and Asset Liability Management</h3>
      <div class="fm-weight">Weight: 20–30%</div>
      <p>
        This final part develops the broader theory of financial cash flows. It includes yield rates,
        spot and forward rates, yield curves, duration, convexity, matching, immunization,
        and portfolio construction for asset-liability management.
      </p>
    </div>
  </div>

  <div class="fm-section-title">What these notes aim to provide</div>

  <ul class="fm-list">
    <li>Clear definitions and notation</li>
    <li>Compact formulas and relationships</li>
    <li>Worked examples with structured solutions</li>
    <li>Exercises in FM exam style</li>
    <li>A growing companion resource for systematic preparation</li>
  </ul>

  <div class="fm-note">
    <strong>Last updated:</strong> June 7, 2026. For active preparation,
    you can also use the FM practice tool to work through exercises and reinforce the main concepts.
  </div>

</div>
