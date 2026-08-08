---
title: "List 100"
permalink: /list-100/
---

<style>
  .list100-shell {
    --l100-bg: #ffffff;
    --l100-panel: #fbfdfb;
    --l100-border: rgba(4,120,87,0.18);
    --l100-border-strong: rgba(4,120,87,0.42);
    --l100-text: #17251d;
    --l100-muted-text: #63776b;
    --l100-open-text: #486555;
    --l100-open-marker: #6b7f71;
    --l100-done-text: #047857;
    --l100-done-bg: rgba(4,120,87,0.075);
    --l100-done-marker: #047857;
    --l100-link-text: #047857;
    --l100-link-bg: #eef8f1;
    --l100-progress-bg: #f2f8f4;
    --l100-item-border: rgba(4,120,87,0.12);

    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid var(--l100-border);
    border-left: 3px solid var(--l100-border-strong);
    border-radius: 0;
    background: var(--l100-bg);
    box-shadow: none;
    color: var(--l100-text);
    font-family: "JetBrains Mono", Monaco, Consolas, "Lucida Console", monospace;
  }

  .list100-quote {
    text-align: center;
    margin: 0 0 2rem 0;
  }

  .list100-quote p {
    margin: 0;
    color: var(--l100-text);
    font-size: 1rem;
    line-height: 1.8;
  }

  .list100-intro {
    max-width: 780px;
    margin: 0 auto 1.8rem auto;
    text-align: center;
    line-height: 1.9;
    color: var(--l100-text);
  }

  .list100-progress-wrap {
    text-align: center;
    margin: 0 0 2.2rem 0;
  }

  .list100-progress {
    display: inline-block;
    padding: 12px 18px;
    border: 1px solid var(--l100-border-strong);
    border-radius: 0;
    background: var(--l100-progress-bg);
    box-shadow: none;
  }

  .list100-progress strong {
    display: block;
    margin-bottom: 4px;
    color: var(--l100-done-text);
  }

  .list100-progress span {
    color: var(--l100-muted-text);
  }

  .list100-rule {
    border: none;
    border-top: 1px solid var(--l100-border-strong);
    margin: 2rem 0;
  }

  .list100-subtitle {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--l100-done-text);
    font-family: "JetBrains Mono", Monaco, Consolas, "Lucida Console", monospace;
    letter-spacing: 0;
  }

  .list100-list {
    margin: 0;
    padding-left: 1.65rem;
    line-height: 1.9;
  }

  .list100-list li {
    padding: 0.58rem 0 0.68rem 0.05rem;
    border-bottom: 1px solid var(--l100-item-border);
    color: var(--l100-open-text);
  }

  .list100-list li:last-child {
    border-bottom: none;
  }

  .list100-list li::marker {
    font-weight: 700;
    color: var(--l100-open-marker);
  }

  .list100-done {
    margin-left: -0.35rem;
    padding-left: 0.35rem !important;
    border-left: 2px solid var(--l100-done-marker);
    background: var(--l100-done-bg);
    color: var(--l100-done-text);
    font-weight: 700;
  }

  .list100-done::marker {
    color: var(--l100-done-marker);
  }

  .list100-muted {
    color: var(--l100-muted-text);
    font-size: 0.95em;
  }

  .list100-list a,
  .list100-list a:visited {
    color: var(--l100-link-text);
    padding: 0.05rem 0.22rem;
    border: 1px solid color-mix(in srgb, var(--l100-link-text) 28%, transparent);
    background: var(--l100-link-bg);
    text-decoration: none;
    font-weight: 600;
    transition:
      color 0.2s ease,
      border-color 0.2s ease,
      background-color 0.2s ease,
      opacity 0.2s ease;
  }

  .list100-list a::after {
    content: none;
  }

  .list100-list a:hover,
  .list100-list a:focus {
    color: var(--l100-link-text);
    border-color: var(--l100-link-text);
    background: color-mix(in srgb, var(--l100-link-text) 12%, transparent);
    opacity: 1;
  }

  .list100-list a:active {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    .list100-shell {
      padding: 1.2rem;
    }

    .list100-list {
      padding-left: 1.4rem;
    }

    .list100-list li {
      padding: 0.52rem 0 0.62rem 0.02rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    .list100-shell {
      --l100-bg: #06110b;
      --l100-panel: #041008;
      --l100-border: rgba(52,211,153,0.22);
      --l100-border-strong: rgba(52,211,153,0.72);
      --l100-text: #d7fbe8;
      --l100-muted-text: #8fbda3;
      --l100-open-text: #a8d7bd;
      --l100-open-marker: #8fbda3;
      --l100-done-text: #34d399;
      --l100-done-bg: rgba(52,211,153,0.11);
      --l100-done-marker: #34d399;
      --l100-link-text: #34d399;
      --l100-link-bg: rgba(52,211,153,0.11);
      --l100-progress-bg: #041008;
      --l100-item-border: rgba(52,211,153,0.14);
    }
  }

  html.dark .list100-shell,
  body.dark .list100-shell,
  [data-theme="dark"] .list100-shell,
  .dark-mode .list100-shell {
    --l100-bg: #06110b;
    --l100-panel: #041008;
    --l100-border: rgba(52,211,153,0.22);
    --l100-border-strong: rgba(52,211,153,0.72);
    --l100-text: #d7fbe8;
    --l100-muted-text: #8fbda3;
    --l100-open-text: #a8d7bd;
    --l100-open-marker: #8fbda3;
    --l100-done-text: #34d399;
    --l100-done-bg: rgba(52,211,153,0.11);
    --l100-done-marker: #34d399;
    --l100-link-text: #34d399;
    --l100-link-bg: rgba(52,211,153,0.11);
    --l100-progress-bg: #041008;
    --l100-item-border: rgba(52,211,153,0.14);
  }
</style>

<div class="list100-shell">

  <div class="list100-quote">
    <p>
      <em>“It is not that we have a short time to live, but that we waste a lot of it.”</em><br>
      <strong>— Seneca</strong>
    </p>
  </div>

  <p class="list100-intro">
    After my mother’s death, I understood more deeply how short, fragile, and brutal life can be. This list is my way of refusing to drift through it, and of pursuing, deliberately, the things that feel rare, beautiful, and truly worth living for.
  </p>

  <div class="list100-progress-wrap">
    <div class="list100-progress">
      <strong>Progress</strong>
      <span>April 23, 2026 · 3/100</span>
    </div>
  </div>

  <hr class="list100-rule">

  <h2 class="list100-subtitle">Things I want to do before I die</h2>

  <ol class="list100-list">
    <li class="list100-done">✓ Graduate with a Bachelor’s degree in Actuarial Science</li>
    <li class="list100-done">✓ Start working as an actuarial analyst (P&amp;C / IARD)</li>
    <li class="list100-done">✓ Build my personal blog</li>
    <li>✗ Run a marathon</li>
    <li>✗ Launch a magazine</li>
    <li>✗ <a href="/talk#s/">Give public talks on mathematics and actuarial science</a></li>
    <li>✗ <a href="/memories">Visit every province and territory in Canada</a></li>
    <li>✗ Become a boxing coach</li>
    <li>✗ Work in a bookstore or a library</li>
    <li>✗ <a href="/memories/">Visit 100 countries</a> <span class="list100-muted">(~3% done)</span></li>
    <li class="list100-done">✓ <a href="/memories/">Visit New York City</a></li>
    <li>✗ Design and publish a game</li>
    <li>✗ <a href="/memories/">See Nahanni and Virginia Falls</a></li>
    <li>✗ <a href="/memories/">See the Northern Lights in the Yukon</a></li>
    <li>✗ Support education in the world</li>
    <li>✗ Start a scholarship to support brave young kids</li>
    <li>✗ Interview some of the greatest mathematicians of our time</li>
    <li>✗ <a href="/memories/">See the Grand Canyon at sunrise</a></li>
    <li>✗ <a href="/memories/">See Petra with my own eyes</a></li>
    <li>✗ Write a paper in actuarial science</li>
    <li>✗ Read 1000 books (<a href="https://www.goodreads.com/user/show/193296272-evenson-auguste">10% done</a>)</li>
    <li>✗ <a href="/memories/">Visit every province and territory in Canada</a></li>
    <li>✗ <a href="/memories/">Go on unforgettable hikes in Canada</a></li>
    <li>✗ <a href="/memories/">See the Northern Lights in Canada</a></li>
    <li>✗ Become ACAS</li>
    <li>✗ <a href="/memories/">Reach Machu Picchu</a></li>
    <li>✗ <a href="/memories/">See the Galápagos Islands</a></li>
    <li>✗ Become FCAS</li>
    <li>✗ Go on a trip overseas with my whole family</li>
    <li>✗ Be a writer</li>
    <li>✗ <a href="/memories/">Trek through Torres del Paine</a></li>
    <li>✗ Complete a Master’s degree</li>
    <li>✗ Work internationally</li>
    <li>✗ Pursue a career in politics</li>
    <li>✗ Complete a PhD</li>
  </ol>

</div>
