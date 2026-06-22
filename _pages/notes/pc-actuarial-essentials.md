---
title: "P&C Actuarial Essentials Notes"
permalink: /notes/pc-actuarial-essentials/
layout: single
author_profile: true
---

<style>
  .pc-notes-shell {
    --pc-border: rgba(127,127,127,0.18);
    --pc-border-strong: rgba(127,127,127,0.30);
    --pc-bg: rgba(127,127,127,0.045);
    --pc-bg-soft: rgba(127,127,127,0.03);
    --pc-blue: #2563eb;
    --pc-blue-soft: rgba(37,99,235,0.10);
    --pc-green: #059669;
    --pc-green-soft: rgba(5,150,105,0.10);
    --pc-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .pc-hero {
    margin-bottom: 2rem;
    padding: 1.5rem 1.4rem;
    border: 1px solid var(--pc-border);
    border-radius: 18px;
    background: linear-gradient(135deg, var(--pc-blue-soft), var(--pc-bg-soft));
    box-shadow: var(--pc-shadow);
  }

  .pc-hero h2 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.45rem;
    line-height: 1.3;
  }

  .pc-hero p {
    margin: 0;
    line-height: 1.75;
    font-size: 1.02rem;
  }

  .pc-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .pc-pill {
    display: inline-block;
    padding: 0.32rem 0.7rem;
    border-radius: 999px;
    border: 1px solid rgba(37,99,235,0.16);
    background: rgba(37,99,235,0.08);
    color: var(--pc-blue);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .pc-section {
    margin: 2rem 0;
  }

  .pc-section h2 {
    margin-bottom: 0.8rem;
    font-size: 1.25rem;
  }

  .pc-section p {
    line-height: 1.75;
  }

  .pc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }

  .pc-card {
    border: 1px solid var(--pc-border);
    border-radius: 16px;
    padding: 1.1rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(127,127,127,0.035));
    box-shadow: var(--pc-shadow);
  }

  .pc-card h3 {
    margin-top: 0;
    margin-bottom: 0.45rem;
    font-size: 1.05rem;
  }

  .pc-card p {
    margin: 0;
    line-height: 1.65;
    font-size: 0.96rem;
  }

  .pc-btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1rem;
  }

  .pc-btn {
    display: inline-block;
    text-decoration: none !important;
    padding: 0.6rem 0.95rem;
    border-radius: 10px;
    border: 1px solid var(--pc-border);
    background: rgba(127,127,127,0.05);
    font-weight: 700;
    font-size: 0.94rem;
    transition: all 0.18s ease;
  }

  .pc-btn:hover {
    text-decoration: none !important;
    transform: translateY(-1px);
    border-color: rgba(37,99,235,0.25);
    background: rgba(37,99,235,0.08);
  }

  .pc-pdf-box {
    margin-top: 1rem;
    border: 1px solid var(--pc-border);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(127,127,127,0.04);
    box-shadow: var(--pc-shadow);
  }

  .pc-pdf-header {
    padding: 0.85rem 1rem;
    border-bottom: 1px solid var(--pc-border);
    background: rgba(127,127,127,0.05);
    font-weight: 700;
  }

  .pc-pdf-frame {
    width: 100%;
    height: 780px;
    border: none;
    display: block;
  }

  .pc-toc {
    margin-top: 1rem;
    padding: 1.1rem 1.2rem;
    border: 1px solid var(--pc-border);
    border-radius: 16px;
    background: rgba(127,127,127,0.04);
  }

  .pc-toc ol {
    margin-bottom: 0;
  }

  .pc-toc li {
    margin: 0.35rem 0;
    line-height: 1.55;
  }

  @media (max-width: 700px) {
    .pc-pdf-frame {
      height: 560px;
    }
  }
</style>

<div class="pc-notes-shell">

  <div class="pc-hero">
    <h2>P&amp;C Actuarial Essentials Notes</h2>
    <p>
      These notes explore the fundamentals of property and casualty insurance and the work
      of P&amp;C actuaries. The goal is to build a clear, practical, and structured
      introduction to how actuaries understand risk, analyze insurance data, price policies,
      estimate reserves, study profitability, and support insurance decision-making.
    </p>

    <div class="pc-meta">
      <span class="pc-pill">Actuarial Science</span>
      <span class="pc-pill">P&amp;C Insurance</span>
      <span class="pc-pill">Pricing</span>
      <span class="pc-pill">Reserving</span>
      <span class="pc-pill">Insurance Data</span>
    </div>
  </div>

  <div class="pc-section">
    <h2>About these notes</h2>
    <p>
      This document is a personal exploration of the property and casualty insurance field.
      It focuses on the ideas, tools, and ways of thinking that appear in P&amp;C actuarial work,
      from basic insurance concepts to pricing, reserving, data analysis, reinsurance, and
      performance monitoring.
    </p>

    <p>
      The notes are written for students, actuarial candidates, and curious learners who want
      a clear first introduction to the P&amp;C insurance world and to the role actuaries play
      within it.
    </p>

    <div class="pc-btn-row">
      <a class="pc-btn"
         href="{{ '/assets/pdf/pc-actuarial-essentials-notes.pdf' | relative_url }}"
         target="_blank"
         rel="noopener noreferrer">
        Open PDF
      </a>
      <a class="pc-btn" href="/notes/">Back to notes</a>
    </div>
  </div>

  <div class="pc-section">
    <h2>Planned contents</h2>

    <div class="pc-toc">
      <ol>
        <li>What Is Property and Casualty Insurance?</li>
        <li>The Insurance Business Model</li>
        <li>The Role of the P&amp;C Actuary</li>
        <li>Risk, Frequency, and Severity</li>
        <li>Introduction to Ratemaking</li>
        <li>Introduction to Reserving</li>
        <li>Insurance Data</li>
        <li>Reinsurance</li>
        <li>Profitability and Performance Metrics</li>
        <li>Regulation, Solvency, and Professionalism</li>
        <li>Case Studies</li>
        <li>Practice Problems</li>
      </ol>
    </div>
  </div>

  <div class="pc-section">
    <h2>Main themes</h2>

    <div class="pc-grid">

      <div class="pc-card">
        <h3>Insurance fundamentals</h3>
        <p>
          Basic ideas behind risk transfer, pooling, premiums, claims, expenses, and the P&amp;C insurance business model.
        </p>
      </div>

      <div class="pc-card">
        <h3>Pricing and ratemaking</h3>
        <p>
          Introductory concepts such as exposure, expected loss, pure premium, rate adequacy, classification, and indicated rate changes.
        </p>
      </div>

      <div class="pc-card">
        <h3>Reserving</h3>
        <p>
          Foundational reserving ideas including reported claims, paid claims, case reserves, IBNR, development triangles, and loss development.
        </p>
      </div>

      <div class="pc-card">
        <h3>Actuarial judgment</h3>
        <p>
          Practical interpretation of metrics, uncertainty, data limitations, professional standards, and decision-making under risk.
        </p>
      </div>

    </div>
  </div>

  <div class="pc-section">
    <h2>PDF version</h2>

    <p>
      The PDF version of these notes will be updated as the document grows.
    </p>

    <div class="pc-pdf-box">
      <div class="pc-pdf-header">
        P&amp;C Actuarial Essentials Notes — PDF
      </div>
      <iframe
        class="pc-pdf-frame"
        src="{{ '/assets/pdf/pc-actuarial-essentials-notes.pdf' | relative_url }}">
      </iframe>
    </div>
  </div>

</div>