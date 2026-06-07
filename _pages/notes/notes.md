---
title: "Notes"
permalink: /notes/
layout: single
author_profile: true
---

<style>
  .notes-shell {
    --notes-border: rgba(127,127,127,0.18);
    --notes-border-strong: rgba(127,127,127,0.28);
    --notes-bg: rgba(127,127,127,0.045);
    --notes-bg-soft: rgba(127,127,127,0.03);
    --notes-text: inherit;
    --notes-muted: rgba(127,127,127,0.9);
    --notes-link: #2563eb;
    --notes-link-soft: rgba(37,99,235,0.10);
    --notes-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .notes-intro {
    margin: 0 0 2rem 0;
    padding: 1.2rem 1.3rem;
    border: 1px solid var(--notes-border);
    background: linear-gradient(135deg, var(--notes-bg), var(--notes-bg-soft));
    border-radius: 16px;
  }

  .notes-intro p {
    margin: 0;
    line-height: 1.75;
    font-size: 1.03rem;
  }

  .notes-section-title {
    margin: 2.2rem 0 1rem 0;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  .notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
    margin-top: 0.5rem;
  }

  .note-card {
    border: 1px solid var(--notes-border);
    border-radius: 18px;
    padding: 1.2rem 1.2rem 1.1rem 1.2rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(127,127,127,0.035));
    box-shadow: var(--notes-shadow);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }

  .note-card:hover {
    transform: translateY(-3px);
    border-color: var(--notes-border-strong);
    box-shadow: 0 14px 34px rgba(0,0,0,0.12);
  }

  .note-tag {
    display: inline-block;
    margin-bottom: 0.75rem;
    padding: 0.28rem 0.65rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 600;
    background: var(--notes-link-soft);
    color: var(--notes-link);
    border: 1px solid rgba(37,99,235,0.14);
  }

  .note-card h3 {
    margin: 0 0 0.55rem 0;
    font-size: 1.12rem;
    line-height: 1.35;
  }

  .note-card p {
    margin: 0 0 1rem 0;
    line-height: 1.65;
    font-size: 0.98rem;
  }

  .note-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 0.75rem;
  }

  .note-btn {
    display: inline-block;
    text-decoration: none !important;
    padding: 0.55rem 0.9rem;
    border-radius: 10px;
    border: 1px solid var(--notes-border);
    background: rgba(127,127,127,0.05);
    font-weight: 600;
    font-size: 0.92rem;
    transition: all 0.18s ease;
  }

  .note-btn:hover {
    text-decoration: none !important;
    transform: translateY(-1px);
    border-color: rgba(37,99,235,0.25);
    background: rgba(37,99,235,0.08);
  }

  .notes-foot {
    margin-top: 2rem;
    padding: 1rem 1.1rem;
    border-left: 3px solid rgba(37,99,235,0.6);
    background: rgba(37,99,235,0.045);
    border-radius: 10px;
    line-height: 1.7;
    font-size: 0.96rem;
  }
</style>

<div class="notes-shell">

  <div class="notes-intro">
    <p>
      This page gathers my technical notes, study guides, and learning resources in mathematics,
      actuarial science, and quantitative finance. Some notes are concise references, while others
      are longer study documents that I update over time.
    </p>
  </div>

  <div class="notes-section-title">Available Notes</div>

<div class="notes-grid">
  <div class="note-card">
    <div class="note-tag">Actuarial Science</div>
    <h3>SOA FM Exam Notes</h3>
    <p>
      A growing set of personal notes for the SOA Exam FM, covering interest theory,
      present value, accumulated value, discount rates, annuities, loans, bonds,
      duration, immunization, and related topics.
    </p>
    <div class="note-links">
      <a class="note-btn" href="/notes/soa-fm/">Open page</a>
      <a class="note-btn"
         href="{{ '/assets/pdf/soa-fm-notes.pdf' | relative_url }}"
         target="_blank"
         rel="noopener noreferrer">
        Open PDF
      </a>
    </div>
  </div>
</div>

  <div class="notes-foot">
    More notes in probability, statistics, mathematical finance, and actuarial science will be added here over time.
  </div>

</div>
