---
title: "List 100"
permalink: /list-100/
---

<style>
  .list100-shell {
    --l100-bg-1: rgba(127,127,127,0.05);
    --l100-bg-2: rgba(127,127,127,0.025);
    --l100-border: rgba(127,127,127,0.18);
    --l100-border-strong: rgba(127,127,127,0.22);
    --l100-text: inherit;
    --l100-muted: 0.72;
    --l100-marker: rgba(37,99,235,0.78);
    --l100-done-text: #166534;
    --l100-done-marker: #16a34a;
    --l100-link-text: #1d4ed8;
    --l100-progress-bg: rgba(127,127,127,0.05);
    --l100-item-border: rgba(127,127,127,0.12);

    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid var(--l100-border);
    border-radius: 22px;
    background: linear-gradient(180deg, var(--l100-bg-1), var(--l100-bg-2));
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
    color: var(--l100-text);
  }

  .list100-quote {
    text-align: center;
    margin: 0 0 2rem 0;
  }

  .list100-quote p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .list100-intro {
    max-width: 780px;
    margin: 0 auto 1.8rem auto;
    text-align: center;
    line-height: 1.9;
    opacity: 0.88;
  }

  .list100-progress-wrap {
    text-align: center;
    margin: 0 0 2.2rem 0;
  }

  .list100-progress {
    display: inline-block;
    padding: 12px 18px;
    border: 1px solid var(--l100-border-strong);
    border-radius: 16px;
    background: var(--l100-progress-bg);
    box-shadow: 0 6px 18px rgba(0,0,0,0.05);
  }

  .list100-progress strong {
    display: block;
    margin-bottom: 4px;
  }

  .list100-progress span {
    opacity: var(--l100-muted);
  }

  .list100-rule {
    border: none;
    border-top: 1px solid var(--l100-border-strong);
    margin: 2rem 0;
  }

  .list100-subtitle {
    text-align: center;
    margin-bottom: 1.5rem;
    letter-spacing: 0.01em;
  }

  .list100-list {
    margin: 0;
    padding-left: 1.65rem;
    line-height: 1.9;
  }

  .list100-list li {
    padding: 0.58rem 0 0.68rem 0.05rem;
    border-bottom: 1px solid var(--l100-item-border);
  }

  .list100-list li:last-child {
    border-bottom: none;
  }

  .list100-list li::marker {
    font-weight: 700;
    color: var(--l100-marker);
  }

  .list100-done {
    color: var(--l100-done-text);
    font-weight: 600;
  }

  .list100-done::marker {
    color: var(--l100-done-marker);
  }

  .list100-muted {
    opacity: var(--l100-muted);
    font-size: 0.95em;
  }

  .list100-list a,
  .list100-list a:visited {
    color: var(--l100-link-text);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.16em;
    text-decoration-color: color-mix(in srgb, var(--l100-link-text) 35%, transparent);
    font-weight: 600;
    transition:
      color 0.2s ease,
      text-decoration-color 0.2s ease,
      opacity 0.2s ease;
  }

  .list100-list a::after {
    content: "↗";
    font-size: 0.82em;
    margin-left: 0.18rem;
    opacity: 0.75;
  }

  .list100-list a:hover,
  .list100-list a:focus {
    color: var(--l100-link-text);
    text-decoration-color: color-mix(in srgb, var(--l100-link-text) 85%, transparent);
    opacity: 0.92;
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
      --l100-bg-1: rgba(255,255,255,0.045);
      --l100-bg-2: rgba(255,255,255,0.02);
      --l100-border: rgba(255,255,255,0.12);
      --l100-border-strong: rgba(255,255,255,0.14);
      --l100-marker: rgba(147,197,253,0.92);
      --l100-done-text: #86efac;
      --l100-done-marker: #4ade80;
      --l100-link-text: #bfdbfe;
      --l100-progress-bg: rgba(255,255,255,0.035);
      --l100-item-border: rgba(255,255,255,0.10);
    }
  }

  html.dark .list100-shell,
  body.dark .list100-shell,
  [data-theme="dark"] .list100-shell,
  .dark-mode .list100-shell {
    --l100-bg-1: rgba(255,255,255,0.045);
    --l100-bg-2: rgba(255,255,255,0.02);
    --l100-border: rgba(255,255,255,0.12);
    --l100-border-strong: rgba(255,255,255,0.14);
    --l100-marker: rgba(147,197,253,0.92);
    --l100-done-text: #86efac;
    --l100-done-marker: #4ade80;
    --l100-link-text: #bfdbfe;
    --l100-progress-bg: rgba(255,255,255,0.035);
    --l100-item-border: rgba(255,255,255,0.10);
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
    <li>✗ Work internationally (US or Europe)</li>
    <li>✗ Pursue a career in politics</li>
    <li>✗ Complete a PhD</li>
  </ol>

</div>
