---
title: "SOA FM Formula Boxes"
permalink: /notes/soa-fm/formula-boxes/
layout: single
author_profile: true
mathjax: true
---

<style>
  .fm-shell {
    --fm-border: rgba(127,127,127,0.18);
    --fm-bg-1: rgba(127,127,127,0.05);
    --fm-bg-2: rgba(127,127,127,0.025);
    --fm-blue: #2563eb;
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

  .fm-btn-secondary {
    background: var(--fm-green-soft);
    color: var(--fm-green) !important;
    border-color: rgba(21,128,61,0.18);
  }

  .fm-proof-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 0.9rem;
  }

  .fm-proof-card {
    border: 1px solid var(--fm-border);
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(127,127,127,0.045), rgba(127,127,127,0.02));
    box-shadow: var(--fm-shadow);
    overflow: hidden;
  }

  .fm-card-summary {
    cursor: pointer;
    list-style: none;
    padding: 1.05rem 1.1rem;
    user-select: none;
  }

  .fm-card-summary::-webkit-details-marker {
    display: none;
  }

  .fm-card-summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 0.55rem;
    color: var(--fm-blue);
    font-weight: 900;
    transition: transform 0.18s ease;
  }

  .fm-card-toggle[open] > .fm-card-summary::before {
    transform: rotate(90deg);
  }

  .fm-card-summary h3 {
    display: inline;
    margin: 0;
    font-size: 1.02rem;
  }

  .fm-card-content {
    padding: 0 1.1rem 1.1rem 1.1rem;
    border-top: 1px solid var(--fm-border);
  }

  .fm-card-content p {
    margin: 0.45rem 0;
    line-height: 1.68;
  }

  .fm-proof-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.22rem 0.55rem;
    border-radius: 999px;
    background: rgba(37,99,235,0.09);
    color: var(--fm-blue);
    margin-right: 0.55rem;
    margin-bottom: 0.55rem;
  }

  .fm-proof-note {
    margin-top: 0.75rem;
    padding: 0.8rem 0.9rem;
    border-left: 3px solid rgba(21,128,61,0.55);
    background: rgba(21,128,61,0.055);
    border-radius: 10px;
    line-height: 1.65;
    font-size: 0.95rem;
  }

  .fm-formula-row {
    margin: 0.75rem 0;
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: rgba(127,127,127,0.045);
    line-height: 1.65;
  }

  .fm-formula-row strong {
    display: inline-block;
    min-width: 5.8rem;
  }

  .fm-toggle {
    margin-top: 0.9rem;
    border: 1px solid var(--fm-border);
    border-radius: 14px;
    background: rgba(127,127,127,0.035);
    overflow: hidden;
  }

  .fm-toggle summary {
    cursor: pointer;
    list-style: none;
    padding: 0.85rem 0.95rem;
    font-weight: 800;
    color: var(--fm-blue);
    user-select: none;
  }

  .fm-toggle summary::-webkit-details-marker {
    display: none;
  }

  .fm-toggle summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 0.45rem;
    transition: transform 0.18s ease;
  }

  .fm-toggle[open] summary::before {
    transform: rotate(90deg);
  }

  .fm-toggle-content {
    padding: 0 0.95rem 0.95rem 0.95rem;
    border-top: 1px solid var(--fm-border);
  }

  .fm-table-wrap {
    overflow-x: auto;
    margin-top: 0.9rem;
  }

  .fm-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }

  .fm-table th,
  .fm-table td {
    border: 1px solid var(--fm-border);
    padding: 0.55rem;
    text-align: center;
    vertical-align: middle;
  }

  .fm-table th {
    background: rgba(37,99,235,0.08);
    font-weight: 800;
  }

  mjx-container {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  mjx-container[jax="CHTML"][display="true"] {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.25rem 0;
  }

  @media (max-width: 600px) {
    .fm-hero {
      padding: 1.2rem 1rem;
    }

    .fm-card-summary {
      padding: 1rem 0.9rem;
    }

    .fm-card-content {
      padding: 0 0.9rem 1rem 0.9rem;
    }

    .fm-formula-row strong {
      display: block;
      margin-bottom: 0.25rem;
      min-width: 0;
    }
  }
</style>

<div class="fm-shell">

  <div class="fm-hero">
    <h2>Formula Boxes</h2>
    <p>
      This page collects the formulas I find easiest to forget. Instead of treating them as isolated
      identities, I keep their short derivations here so that I can rebuild them quickly during review.
    </p>

  </div>

  <div class="fm-proof-grid">
    {% include soa-fm-guide-cards.html %}
  </div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const cards = Array.from(document.querySelectorAll(".fm-card-toggle"));

    cards.forEach((card) => {
      card.addEventListener("toggle", function () {
        if (!card.open) return;

        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.open = false;
          }
        });
      });
    });

    const innerToggles = Array.from(document.querySelectorAll(".fm-toggle"));

    innerToggles.forEach((toggle) => {
      toggle.addEventListener("toggle", function () {
        if (!toggle.open) return;

        const parentCard = toggle.closest(".fm-card-toggle");
        const siblingToggles = parentCard
          ? Array.from(parentCard.querySelectorAll(".fm-toggle"))
          : innerToggles;

        siblingToggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            otherToggle.open = false;
          }
        });
      });
    });
  });
</script>
