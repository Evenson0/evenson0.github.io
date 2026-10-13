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

  /* Explicit light/dark tokens: no inherited low-opacity text on cards. */
  .notes-shell {
    --notes-bg:#ffffff;
    --notes-bg-soft:#f4f8fd;
    --notes-card-bg:#ffffff;
    --notes-text:#1b2a3f;
    --notes-muted:#41536b;
    --notes-border:#cad6e5;
    --notes-border-strong:#8da8c9;
    --notes-link:#164c9e;
    --notes-link-soft:#e7f0fe;
    --notes-shadow:0 12px 32px rgba(17,39,69,.08);
    color:var(--notes-text) !important;
    color-scheme:light;
  }
  html[data-theme="dark"] .notes-shell,
  html[data-site-theme="dark"] .notes-shell {
    --notes-bg:#18263b;
    --notes-bg-soft:#1c2e46;
    --notes-card-bg:#1a2940;
    --notes-text:#f4f7ff;
    --notes-muted:#cfdaec;
    --notes-border:#546985;
    --notes-border-strong:#94b0d0;
    --notes-link:#b7d6ff;
    --notes-link-soft:#294768;
    --notes-shadow:0 10px 34px rgba(0,0,0,.3);
    color-scheme:dark;
  }
  .notes-shell :is(.notes-intro,.note-card,.notes-foot){
    color:var(--notes-text) !important;
    background:var(--notes-card-bg) !important;
    border-color:var(--notes-border) !important;
  }
  .notes-shell .notes-intro { background:var(--notes-bg-soft) !important; }
  .notes-shell .notes-section-title,
  .notes-shell .note-card h3 {
    color:var(--notes-text) !important;
    opacity:1 !important;
  }
  .notes-shell :is(.notes-intro p,.note-card p,.notes-foot){
    color:var(--notes-muted) !important;
    opacity:1 !important;
  }
  .notes-shell .note-tag {
    color:var(--notes-link) !important;
    background:var(--notes-link-soft) !important;
    border-color:var(--notes-border) !important;
    opacity:1 !important;
  }
  .notes-shell .note-btn,
  .notes-shell .note-btn:visited {
    color:var(--notes-link) !important;
    background:var(--notes-bg-soft) !important;
    border:1px solid var(--notes-border) !important;
    opacity:1 !important;
  }
  .notes-shell .note-btn:hover,.notes-shell .note-btn:focus-visible {
    color:var(--notes-text) !important;
    background:var(--notes-link-soft) !important;
    border-color:var(--notes-link) !important;
    text-decoration:none !important;
  }
  .notes-shell .notes-grid {align-items:stretch;}
  .notes-shell .note-card {display:flex;flex-direction:column;min-width:0;}
  .notes-shell .note-links {margin-top:auto;padding-top:.6rem;}
  @media(max-width:650px) {
    .notes-shell .notes-grid {grid-template-columns:minmax(0,1fr);}
    .notes-shell .notes-intro {padding:1rem;}
  }

</style>

<div class="notes-shell" data-site-content-lang="en" lang="en">

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
        Explore the interactive Exam FM Knowledge Atlas: a concept graph, 24 formula
        notes with full derivations, and searchable chapters covering interest theory,
        annuities, loans, bonds, duration, and immunization.
      </p>
      <div class="note-links">
        <a class="note-btn" href="{{ '/notes/soa-fm/' | relative_url }}?v=atlas-fm-unified-20261012">Explore notes atlas</a>
        <a class="note-btn"
           href="{{ '/assets/pdf/soa-fm-notes.pdf' | relative_url }}"
           target="_blank"
           rel="noopener noreferrer">
          Open PDF
        </a>
      </div>
    </div>

    <div class="note-card">
      <div class="note-tag">P&amp;C Actuarial Science</div>
      <h3>P&amp;C Actuarial Essentials Notes</h3>
      <p>
        A growing set of notes exploring property and casualty insurance and the work
        of P&amp;C actuaries, including risk, pricing, reserving, insurance data,
        reinsurance, profitability metrics, and actuarial judgment.
      </p>
      <div class="note-links">
        <a class="note-btn" href="/notes/pc-actuarial-essentials/">Open page</a>
        <a class="note-btn"
           href="{{ '/assets/pdf/pc-actuarial-essentials-notes.pdf' | relative_url }}"
           target="_blank"
           rel="noopener noreferrer">
          Open PDF
        </a>
      </div>
    </div>



        <div class="note-card">
      <div class="note-tag">Actuarial Science</div>

      <h3>SOA P Exam Notes</h3>

      <p>
        Explore an interactive probability knowledge graph with
        connected chapters, searchable formula notes, detailed
        explanations, worked examples and a practice tool.
      </p>

      <div class="note-links">
        <a
          class="note-btn"
          href="{{ '/notes/soa-p/' | relative_url }}?v=atlas-20261012-p-clean">
          Explore notes atlas
        </a>

        <a
          class="note-btn"
          href="{{ '/tools/soa-p-practice/' | relative_url }}">
          Practice
        </a>
      </div>
    </div>


    

  </div>

</div>


<div class="notes-shell" data-site-content-lang="fr" lang="fr">
  <div class="notes-intro">
    <p>Cette page rassemble mes notes techniques, mes guides de préparation et mes ressources d’apprentissage en mathématiques, en sciences actuarielles et en finance quantitative. Certaines fiches constituent des références rapides ; d’autres sont des documents plus détaillés, enrichis au fil du temps.</p>
  </div>

  <h2 class="notes-section-title">Notes disponibles</h2>
  <div class="notes-grid">
    <article class="note-card">
      <span class="note-tag">Sciences actuarielles</span>
      <h3>Notes pour l’examen SOA FM</h3>
      <p>Explore un atlas interactif de mathématiques financières : 24 fiches avec des démonstrations, une carte de concepts et des chapitres consultables sur les taux d’intérêt, les annuités, les prêts, les obligations, la duration et l’immunisation.</p>
      <div class="note-links">
        <a class="note-btn" href="{{ '/notes/soa-fm/' | relative_url }}?lang=fr">Explorer l’atlas FM</a>
        <a class="note-btn" href="{{ '/assets/pdf/soa-fm-notes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Ouvrir le PDF</a>
      </div>
    </article>
    <article class="note-card">
      <span class="note-tag">Assurance de dommages (IARD)</span>
      <h3>Notions essentielles d’actuariat IARD</h3>
      <p>Des notes sur l’assurance de dommages et le travail des actuaires : risques, tarification, provisionnement, données d’assurance, réassurance, rentabilité et jugement actuariel.</p>
      <div class="note-links">
        <a class="note-btn" href="{{ '/notes/pc-actuarial-essentials/' | relative_url }}?lang=fr">Ouvrir les notes</a>
        <a class="note-btn" href="{{ '/assets/pdf/pc-actuarial-essentials-notes.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Ouvrir le PDF</a>
      </div>
    </article>
    <article class="note-card">
      <span class="note-tag">Sciences actuarielles</span>
      <h3>Notes pour l’examen SOA P</h3>
      <p>Découvre un graphe interactif de probabilités reliant les chapitres, les fiches de formules, les explications et les exemples résolus. Un outil de pratique accompagne les notes.</p>
      <div class="note-links">
        <a class="note-btn" href="{{ '/notes/soa-p/' | relative_url }}?lang=fr">Explorer l’atlas P</a>
        <a class="note-btn" href="{{ '/tools/soa-p-practice/' | relative_url }}?lang=fr">S’exercer</a>
      </div>
    </article>
  </div>
</div>
