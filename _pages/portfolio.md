```markdown
---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
.portfolio-intro {
  margin-bottom: 2rem;
  max-width: 850px;
  line-height: 1.7;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.portfolio-card {
  display: block;
  padding: 1.4rem;
  border: 1px solid rgba(127, 127, 127, 0.25);
  border-radius: 14px;
  color: inherit;
  background: rgba(127, 127, 127, 0.07);
  min-height: 210px;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease;
}

/* Remove all underline effects from the whole card and every child element */
.portfolio-card,
.portfolio-card:link,
.portfolio-card:visited,
.portfolio-card:hover,
.portfolio-card:focus,
.portfolio-card:active,
.portfolio-card *,
.portfolio-card:link *,
.portfolio-card:visited *,
.portfolio-card:hover *,
.portfolio-card:focus *,
.portfolio-card:active * {
  text-decoration: none !important;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  border-color: rgba(127, 127, 127, 0.45);
  background: rgba(127, 127, 127, 0.11);
}

.portfolio-icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.portfolio-card h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: inherit;
}

.portfolio-card p {
  line-height: 1.55;
  margin-bottom: 1rem;
  color: inherit;
}

.portfolio-link {
  font-weight: 600;
  color: inherit;
}

@media (prefers-color-scheme: dark) {
  .portfolio-card {
    border-color: rgba(220, 220, 220, 0.18);
    background: rgba(255, 255, 255, 0.06);
  }

  .portfolio-card:hover {
    border-color: rgba(220, 220, 220, 0.35);
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }
}
</style>

<div class="portfolio-intro">
  <p>
    Welcome to my portfolio. This space gathers my mathematical tools, notes,
    research projects, and technical work.
  </p>

  <p>
    My goal is to build a public record of rigorous learning, useful tools, and
    research-oriented projects in mathematics, actuarial science, quantitative finance,
    and programming.
  </p>
</div>

<div class="portfolio-grid">

  <a class="portfolio-card" href="{{ '/tools/' | relative_url }}">
    <div class="portfolio-icon">🧰</div>
    <h2>Mathematical Tools</h2>
    <p>Interactive tools designed to explore mathematical, actuarial, and financial concepts visually.</p>
    <span class="portfolio-link">Explore tools →</span>
  </a>

  <a class="portfolio-card" href="{{ '/notes/' | relative_url }}">
    <div class="portfolio-icon">📚</div>
    <h2>Notes</h2>
    <p>Structured notes in mathematics, actuarial science, finance, statistics, and computer science.</p>
    <span class="portfolio-link">Read notes →</span>
  </a>

  <a class="portfolio-card" href="{{ '/workshop/' | relative_url }}">
    <div class="portfolio-icon">🧩</div>
    <h2>Mathematical Workshops</h2>
    <p>Problem-solving articles with detailed, pedagogical, and rigorous mathematical solutions.</p>
    <span class="portfolio-link">View workshops →</span>
  </a>

</div>

<h2 style="margin-top: 3rem;">GitHub Projects</h2>
