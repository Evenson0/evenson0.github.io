---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
.portfolio-intro {
  max-width: 920px;
  margin-bottom: 2.5rem;
}

.portfolio-kicker {
  margin-bottom: 0.75rem;
  color: #6b7280;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portfolio-lead {
  max-width: 860px;
  margin: 0 0 1rem;
  font-size: 1.35rem;
  line-height: 1.55;
}

.portfolio-note {
  max-width: 760px;
  color: #4b5563;
  line-height: 1.7;
}

.portfolio-shell {
  display: grid;
  grid-template-columns: minmax(180px, 0.7fr) minmax(0, 2fr);
  gap: 2.25rem;
  align-items: start;
  margin-top: 2.75rem;
}

.portfolio-rail {
  position: sticky;
  top: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid #111827;
}

.portfolio-rail strong,
.portfolio-rail span {
  display: block;
}

.portfolio-rail strong {
  margin-bottom: 0.35rem;
  font-size: 0.9rem;
}

.portfolio-rail span {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

.portfolio-list {
  border-top: 1px solid #d1d5db;
}

.portfolio-row {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr) 7rem;
  gap: 1rem;
  align-items: baseline;
  padding: 1.15rem 0;
  border-bottom: 1px solid #d1d5db;
  color: inherit;
}

.portfolio-row,
.portfolio-row:hover,
.portfolio-row:focus {
  text-decoration: none !important;
}

.portfolio-row:hover .portfolio-title {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.portfolio-index {
  color: #6b7280;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
}

.portfolio-title {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 1.08rem;
  font-weight: 700;
}

.portfolio-meta {
  display: block;
  color: #4b5563;
  line-height: 1.55;
}

.portfolio-type {
  justify-self: end;
  color: #6b7280;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

.portfolio-divider {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin: 3rem 0 1.25rem;
}

.portfolio-divider h2 {
  margin: 0;
  font-size: 1.1rem;
}

.portfolio-divider::after {
  content: "";
  height: 1px;
  flex: 1;
  background: #d1d5db;
}

.portfolio-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.portfolio-pill {
  padding: 0.45rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  color: inherit;
  font-size: 0.9rem;
}

.portfolio-pill:hover {
  background: #f3f4f6;
  text-decoration: none !important;
}

@media (max-width: 720px) {
  .portfolio-intro {
    margin-bottom: 1.75rem;
  }

  .portfolio-kicker {
    margin-bottom: 0.5rem;
    font-size: 0.72rem;
  }

  .portfolio-lead {
    font-size: 1.06rem;
    line-height: 1.5;
  }

  .portfolio-note {
    font-size: 0.92rem;
    line-height: 1.6;
  }

  .portfolio-shell {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 1.9rem;
  }

  .portfolio-rail {
    position: static;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 0.65rem;
    padding-left: 0;
    padding-top: 0.85rem;
    border-left: 0;
    border-top: 2px solid #111827;
  }

  .portfolio-rail strong {
    width: 100%;
    margin-bottom: 0.1rem;
  }

  .portfolio-rail span {
    font-size: 0.82rem;
    line-height: 1.35;
  }

  .portfolio-row {
    grid-template-columns: 2.4rem minmax(0, 1fr);
    gap: 0.75rem;
    padding: 0.95rem 0;
  }

  .portfolio-index {
    font-size: 0.78rem;
  }

  .portfolio-title {
    font-size: 1rem;
    line-height: 1.35;
  }

  .portfolio-meta {
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .portfolio-type {
    grid-column: 2;
    justify-self: start;
    margin-top: 0.35rem;
    font-size: 0.7rem;
  }

  .portfolio-divider {
    margin-top: 2.25rem;
  }

  .portfolio-pill {
    padding: 0.38rem 0.62rem;
    font-size: 0.85rem;
  }
}

@media (prefers-color-scheme: dark) {
  .portfolio-kicker,
  .portfolio-note,
  .portfolio-rail span,
  .portfolio-index,
  .portfolio-meta,
  .portfolio-type {
    color: #a1a1aa;
  }

  .portfolio-rail {
    border-left-color: #e5e7eb;
  }

  @media (max-width: 720px) {
    .portfolio-rail {
      border-top-color: #e5e7eb;
    }
  }

  .portfolio-list,
  .portfolio-row,
  .portfolio-pill {
    border-color: rgba(229, 231, 235, 0.28);
  }

  .portfolio-divider::after {
    background: rgba(229, 231, 235, 0.28);
  }

  .portfolio-pill:hover {
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>

<div class="portfolio-intro">
  <div class="portfolio-kicker">Selected work</div>
  <p class="portfolio-lead">
    A working index of actuarial tools, mathematical notes, research experiments,
    and interactive models.
  </p>
  <p class="portfolio-note">
    The emphasis is on projects that make a model inspectable: calculations,
    assumptions, simulations, and written explanations live close to each other.
  </p>
</div>

<div class="portfolio-shell">
  <aside class="portfolio-rail">
    <strong>Focus</strong>
    <span>Actuarial science</span>
    <span>Quantitative finance</span>
    <span>Probability models</span>
    <span>Mathematical writing</span>
  </aside>

  <div class="portfolio-list">
    <a class="portfolio-row" href="{{ '/tools/soa-fm-practice/' | relative_url }}">
      <span class="portfolio-index">01</span>
      <span>
        <span class="portfolio-title">SOA FM Practice</span>
        <span class="portfolio-meta">Exam-style financial mathematics practice with structured problem data.</span>
      </span>
      <span class="portfolio-type">Tool</span>
    </a>

    <a class="portfolio-row" href="{{ '/tools/binomial-option-tree/' | relative_url }}">
      <span class="portfolio-index">02</span>
      <span>
        <span class="portfolio-title">Binomial Option Tree</span>
        <span class="portfolio-meta">A visual model for option pricing, node evolution, and risk-neutral valuation.</span>
      </span>
      <span class="portfolio-type">Model</span>
    </a>

    <a class="portfolio-row" href="{{ '/tools/random-walk/' | relative_url }}">
      <span class="portfolio-index">03</span>
      <span>
        <span class="portfolio-title">Random Walk Simulator</span>
        <span class="portfolio-meta">Simulation-first exploration of stochastic movement and path behavior.</span>
      </span>
      <span class="portfolio-type">Simulation</span>
    </a>

    <a class="portfolio-row" href="{{ '/portfolio/pairs-trading-research/' | relative_url }}">
      <span class="portfolio-index">04</span>
      <span>
        <span class="portfolio-title">Pairs Trading Research</span>
        <span class="portfolio-meta">Quantitative finance work centered on mean reversion and statistical relationships.</span>
      </span>
      <span class="portfolio-type">Research</span>
    </a>

    <a class="portfolio-row" href="{{ '/workshop/' | relative_url }}">
      <span class="portfolio-index">05</span>
      <span>
        <span class="portfolio-title">Mathematical Workshops</span>
        <span class="portfolio-meta">Problem-solving notes written as rigorous walkthroughs rather than short answers.</span>
      </span>
      <span class="portfolio-type">Writing</span>
    </a>
  </div>
</div>

<div class="portfolio-divider">
  <h2>Browse</h2>
</div>

<div class="portfolio-links">
  <a class="portfolio-pill" href="{{ '/tools/' | relative_url }}">Tools</a>
  <a class="portfolio-pill" href="{{ '/notes/' | relative_url }}">Notes</a>
  <a class="portfolio-pill" href="{{ '/workshop/' | relative_url }}">Workshops</a>
  <a class="portfolio-pill" href="https://github.com/Evenson0">GitHub</a>
</div>
