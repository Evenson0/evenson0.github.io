---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

<style>
.portfolio-hero {
  margin-bottom: 2.5rem;
}

.portfolio-hero h1 {
  margin-bottom: 0.5rem;
}

.portfolio-hero p {
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 850px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
}

.portfolio-card {
  border: 1px solid var(--global-border-color, #e5e5e5);
  border-radius: 14px;
  padding: 1.4rem;
  text-decoration: none;
  color: inherit;
  background: var(--global-bg-color, #fff);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  display: block;
  min-height: 210px;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  border-color: var(--global-link-color, #52adc8);
  text-decoration: none;
}

.portfolio-card .icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.portfolio-card h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.portfolio-card p {
  margin-bottom: 1rem;
  line-height: 1.55;
}

.portfolio-card .portfolio-link {
  font-weight: 600;
  font-size: 0.95rem;
}

.portfolio-section-title {
  margin-top: 3rem;
  margin-bottom: 0.75rem;
}

.portfolio-note {
  font-size: 0.95rem;
  opacity: 0.85;
  max-width: 800px;
}
</style>

<div class="portfolio-hero">

Welcome to my portfolio. This space gathers my mathematical tools, notes, articles, research projects, and technical work.

My goal is to build a public record of rigorous learning, useful tools, and research-oriented projects in mathematics, actuarial science, quantitative finance, and programming.

</div>

<div class="portfolio-grid">

<a class="portfolio-card" href="/tools/">
  <div class="icon">🧰</div>
  <h2>Mathematical Tools</h2>
  <p>Interactive tools designed to explore mathematical, actuarial, and financial concepts visually.</p>
  <span class="portfolio-link">Explore tools →</span>
</a>

<a class="portfolio-card" href="/notes/">
  <div class="icon">📚</div>
  <h2>Notes</h2>
  <p>Structured notes in mathematics, actuarial science, finance, statistics, and computer science.</p>
  <span class="portfolio-link">Read notes →</span>
</a>

<a class="portfolio-card" href="/workshop/">
  <div class="icon">🧩</div>
  <h2>Mathematical Workshops</h2>
  <p>Problem-solving articles with detailed, pedagogical, and rigorous mathematical solutions.</p>
  <span class="portfolio-link">View workshops →</span>
</a>

</div>

<h2 class="portfolio-section-title">Future GitHub Projects</h2>

<p class="portfolio-note">
This section will later include selected GitHub projects, live demos, technical documentation, and research repositories.
</p>

{% if site.portfolio.size > 0 %}

<div class="portfolio-grid">
{% assign portfolio_items = site.portfolio | sort: "date" | reverse %}
{% for post in portfolio_items %}
  <a class="portfolio-card" href="{{ post.url | relative_url }}">
    <div class="icon">💻</div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.excerpt | strip_html }}</p>
    <span class="portfolio-link">View project →</span>
  </a>
{% endfor %}
</div>

{% endif %}
