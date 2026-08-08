---
title: "CV"
permalink: /cv/
layout: single
author_profile: true
---

<style>
  .cv-shell {
    max-width: 980px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 22px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.05),
      rgba(127,127,127,0.025)
    );
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
    color: inherit;
  }

  .cv-topbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }

  .cv-btn,
  .cv-btn:hover,
  .cv-btn:focus,
  .cv-btn:active,
  .cv-btn:visited {
    position: relative;
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none !important;
    color: inherit;
    background: rgba(127,127,127,0.08);
    border: 1px solid rgba(127,127,127,0.28);
    transition:
      transform 0.22s ease,
      box-shadow 0.22s ease,
      border-color 0.22s ease,
      background 0.22s ease,
      color 0.22s ease;
    overflow: hidden;
    backdrop-filter: blur(6px);
  }

  .cv-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255,255,255,0.00) 35%,
      rgba(255,255,255,0.22) 50%,
      rgba(255,255,255,0.00) 65%,
      transparent 100%
    );
    transform: translateX(-130%);
    transition: transform 0.55s ease;
    pointer-events: none;
  }

  .cv-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .cv-btn:hover::before {
    transform: translateX(130%);
  }

  .cv-header {
    display: grid;
    gap: 0.7rem;
    margin-bottom: 2rem;
  }

  .cv-name {
    margin: 0;
    font-size: 2rem;
    line-height: 1.1;
  }

  .cv-role {
    font-size: 1.08rem;
    font-weight: 600;
    opacity: 0.9;
  }

  .cv-location {
    opacity: 0.72;
  }

  .cv-contact {
    margin-top: 0.6rem;
    line-height: 1.9;
  }

  .cv-contact a,
  .cv-contact a:hover,
  .cv-contact a:focus,
  .cv-contact a:active,
  .cv-contact a:visited {
    text-decoration: none !important;
  }

  .cv-rule {
    border: none;
    border-top: 1px solid rgba(127,127,127,0.22);
    margin: 2rem 0;
  }

  .cv-rule,
  .cv-section {
    display: none;
  }

  .cv-section {
    margin-top: 2rem;
  }

  .cv-section h2 {
    margin-bottom: 1.2rem;
  }

  .cv-item {
    padding: 1.1rem 1.2rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 16px;
    background: rgba(127,127,127,0.04);
    margin-bottom: 1rem;
  }

  .cv-item h3 {
    margin: 0 0 0.25rem 0;
    line-height: 1.3;
  }

  .cv-org {
    font-weight: 600;
    opacity: 0.9;
  }

  .cv-date {
    opacity: 0.72;
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
  }

  .cv-item p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.75;
  }

  .cv-tags {
    margin-top: 0.6rem;
    font-size: 0.95rem;
    opacity: 0.82;
  }

  .cv-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .cv-skill-box {
    padding: 1rem 1.1rem;
    border: 1px solid rgba(127,127,127,0.18);
    border-radius: 16px;
    background: rgba(127,127,127,0.04);
  }

  .cv-skill-box h3 {
    margin-top: 0;
    margin-bottom: 0.8rem;
  }

  .cv-skill-box ul {
    margin: 0;
    padding-left: 1.1rem;
    line-height: 1.9;
  }

  .cv-skill-box li {
    margin-bottom: 0.2rem;
  }

  .cv-links-inline a,
  .cv-links-inline a:hover,
  .cv-links-inline a:focus,
  .cv-links-inline a:active,
  .cv-links-inline a:visited {
    text-decoration: none !important;
  }

  .cv-system {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    min-height: 650px;
    margin: 1.7rem 0 0;
    padding: 1.1rem;
    border: 1px solid color-mix(in srgb, var(--ev-title-green, #16a34a) 34%, transparent);
    background:
      radial-gradient(circle at 18% 18%, rgba(16,185,129,0.18), transparent 26%),
      radial-gradient(circle at 82% 10%, rgba(20,184,166,0.12), transparent 25%),
      linear-gradient(180deg, rgba(1,18,10,0.96), rgba(0,7,4,0.98));
    box-shadow:
      0 26px 70px rgba(0,0,0,0.28),
      0 0 0 1px rgba(52,211,153,0.08) inset;
    color: #d7fbe8;
  }

  .cv-matrix-canvas {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    opacity: 0.54;
  }

  .cv-system::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(90deg, rgba(52,211,153,0.08) 1px, transparent 1px),
      linear-gradient(180deg, rgba(52,211,153,0.06) 1px, transparent 1px),
      linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.70));
    background-size: 42px 42px, 42px 42px, auto;
    pointer-events: none;
  }

  .cv-system-head {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 1.1rem;
    color: #d7fbe8;
  }

  .cv-system-label,
  .cv-panel-kicker,
  .cv-node-code,
  .cv-detail-date {
    font-family: "JetBrains Mono", monospace;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .cv-system-label {
    font-size: 0.72rem;
    color: #52f0a5;
  }

  .cv-system-title {
    margin: 0.35rem 0 0;
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(1.55rem, 4vw, 3rem);
    line-height: 1;
    color: #52f0a5;
    text-shadow: 0 0 18px rgba(82,240,165,0.26);
  }

  .cv-system-status {
    min-width: max-content;
    padding: 0.42rem 0.62rem;
    border: 1px solid rgba(82,240,165,0.32);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: #b7f7d2;
    background: rgba(0,0,0,0.34);
  }

  .cv-node-viewport {
    position: relative;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 1px solid rgba(82,240,165,0.22);
    background: rgba(0,0,0,0.28);
  }

  .cv-node-rail {
    display: flex;
    gap: 0.7rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    padding: 0.85rem;
  }

  .cv-node-rail::-webkit-scrollbar {
    display: none;
  }

  .cv-node-rail::-webkit-scrollbar-thumb {
    background: rgba(82,240,165,0.38);
  }

  .cv-node {
    appearance: none;
    position: relative;
    flex: 0 0 min(240px, 78vw);
    min-height: 130px;
    padding: 0.95rem;
    border: 1px solid rgba(82,240,165,0.24);
    border-radius: 0;
    color: #d7fbe8;
    background:
      linear-gradient(135deg, rgba(82,240,165,0.14), transparent 54%),
      rgba(0,10,5,0.76);
    cursor: pointer;
    text-align: left;
    scroll-snap-align: center;
    transition:
      border-color 0.18s ease,
      background 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease,
      box-shadow 0.18s ease;
  }

  .cv-node::after {
    content: "";
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    width: 32px;
    height: 2px;
    background: #52f0a5;
    opacity: 0.42;
  }

  .cv-node:hover,
  .cv-node:focus-visible,
  .cv-node.is-active {
    border-color: #52f0a5;
    background:
      linear-gradient(135deg, rgba(82,240,165,0.24), transparent 56%),
      rgba(2,32,17,0.92);
    box-shadow: 0 0 0 1px rgba(82,240,165,0.22), 0 0 34px rgba(16,185,129,0.22);
    outline: none;
    transform: translateY(-3px);
  }

  .cv-node-code,
  .cv-panel-kicker {
    display: block;
    font-size: 0.68rem;
    color: #52f0a5;
    opacity: 0.92;
  }

  .cv-node-title {
    display: block;
    margin-top: 0.6rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 1rem;
    font-weight: 800;
    color: #d7fbe8;
  }

  .cv-node-meta {
    display: block;
    margin-top: 0.45rem;
    font-size: 0.78rem;
    line-height: 1.45;
    color: rgba(215,251,232,0.72);
  }

  .cv-system-panel {
    min-height: 340px;
    padding: 1.25rem;
    border: 1px solid rgba(82,240,165,0.28);
    background:
      linear-gradient(90deg, rgba(82,240,165,0.10), transparent 28rem),
      rgba(0,0,0,0.42);
    backdrop-filter: blur(3px);
  }

  .cv-panel-title {
    margin: 0.45rem 0 0.35rem;
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(1.55rem, 3.3vw, 2.65rem);
    line-height: 1.04;
    color: #52f0a5;
    text-shadow: 0 0 16px rgba(82,240,165,0.22);
  }

  .cv-panel-meta {
    max-width: 760px;
    margin: 0 0 1rem;
    color: #d7fbe8 !important;
    line-height: 1.65;
  }

  .cv-panel-list {
    display: grid;
    gap: 0.7rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .cv-panel-list li {
    padding: 0.85rem 0.95rem;
    border-left: 2px solid #52f0a5;
    background: rgba(1,24,12,0.72);
    color: #eafff3 !important;
    line-height: 1.55;
  }

  .cv-detail-title {
    display: block;
    margin-bottom: 0.2rem;
    font-weight: 800;
    color: #ffffff !important;
  }

  .cv-detail-date {
    display: block;
    margin-bottom: 0.45rem;
    font-size: 0.66rem;
    color: #7dffba !important;
  }

  .cv-panel-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
  }

  .cv-panel-tags span {
    padding: 0.3rem 0.52rem;
    border: 1px solid rgba(82,240,165,0.38);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    color: #d7fbe8;
    background: rgba(0,0,0,0.36);
  }

  .cv-panel-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1rem;
  }

  .cv-panel-actions a,
  .cv-panel-actions a:visited {
    padding: 0.42rem 0.65rem;
    border: 1px solid rgba(82,240,165,0.34);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    color: #52f0a5;
    text-decoration: none !important;
    background: rgba(0,0,0,0.28);
  }

  .cv-panel-actions a:hover {
    border-color: #52f0a5;
    color: #ffffff;
    background: rgba(82,240,165,0.12);
  }

  @media (prefers-reduced-motion: reduce) {
    .cv-node,
    .cv-btn {
      transition: none;
    }
  }

  @media (max-width: 760px) {
    .cv-system {
      min-height: 620px;
      padding: 0.8rem;
    }

    .cv-system-head {
      display: grid;
    }

    .cv-system-status {
      width: fit-content;
    }

    .cv-system-panel {
      padding: 1rem;
    }
  }
</style>

<div class="cv-shell">

  <div class="cv-topbar">
    <a href="../_pages/Evenson_Auguste_CV.pdf" class="cv-btn">Download PDF version</a>
  </div>

  <div class="cv-header">
    <h1 class="cv-name">Evenson Auguste</h1>
    <div class="cv-role">Actuarial Analyst (P&amp;C Pricing)</div>
    <div class="cv-location">Montréal, Québec, Canada</div>

    <div class="cv-contact">
      <i class="fab fa-github"></i>
      <a href="https://github.com/Evenson0">github.com/Evenson0</a><br>

      <i class="fab fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/evenson-auguste">linkedin.com/in/evenson-auguste</a>
    </div>
  </div>

  <div class="cv-system" aria-label="Interactive CV system">
    <canvas class="cv-matrix-canvas" id="cv-matrix-canvas" aria-hidden="true"></canvas>

    <div class="cv-system-head">
      <div>
        <div class="cv-system-label">interactive cv / matrix mode</div>
        <h2 class="cv-system-title">Career Signal</h2>
      </div>
      <div class="cv-system-status" id="cv-system-status">AUTO-SCAN: ON</div>
    </div>

    <div class="cv-node-viewport">
      <div class="cv-node-rail" id="cv-node-rail" role="tablist" aria-label="CV sections">
      <button class="cv-node is-active" type="button" data-cv-node="profile" role="tab" aria-selected="true">
        <span class="cv-node-title">Profile</span>
        <span class="cv-node-meta">Actuarial pricing, mathematical tools, computation.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="experience" role="tab" aria-selected="false">
        <span class="cv-node-title">Experience</span>
        <span class="cv-node-meta">Pricing, R&amp;D, data platforms, teaching.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="education" role="tab" aria-selected="false">
        <span class="cv-node-title">Education</span>
        <span class="cv-node-meta">Actuarial science, software engineering, electromechanics.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="skills" role="tab" aria-selected="false">
        <span class="cv-node-title">Skills</span>
        <span class="cv-node-meta">Python, R, SAS, SQL, VBA, ML, LaTeX.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="languages" role="tab" aria-selected="false">
        <span class="cv-node-title">Languages</span>
        <span class="cv-node-meta">French, Haitian Creole, English.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="activities" role="tab" aria-selected="false">
        <span class="cv-node-title">Activities</span>
        <span class="cv-node-meta">Association, hackathons, writing, theater, sport.</span>
      </button>
      </div>
    </div>

    <section class="cv-system-panel" id="cv-system-panel" role="tabpanel" aria-live="polite"></section>
  </div>

  <hr class="cv-rule">

  <div class="cv-section">
    <h2>Professional Experience</h2>

    <div class="cv-item">
      <h3>Actuarial Analyst – P&amp;C Pricing</h3>
      <div class="cv-org">Optimum General Insurance</div>
      <div class="cv-date">September 2025 – Present</div>
      <p>
        Development and optimization of internal actuarial tools for pricing commercial lines and automobile insurance (PRR). Responsibilities include data analysis, statistical modeling, and automation using VBA, Python, and R. Contributed to improving pricing models and overall portfolio performance.
      </p>
      <div class="cv-tags"><strong>Technologies:</strong> P&amp;C Pricing, Statistical Modeling, VBA, Python, Portfolio Analysis, Actuarial Tool Development</div>
    </div>

    <div class="cv-item">
      <h3>Actuarial Intern – Corporate Actuarial</h3>
      <div class="cv-org">Optimum General Insurance</div>
      <div class="cv-date">May 2025 – August 2025</div>
      <p>
        Participated in the development and improvement of pricing models for automobile and property insurance. Conducted large-scale data analysis and designed automated tools for risk modeling. Contributed to strategic pricing projects aimed at improving actuarial processes and portfolio profitability.
      </p>
      <div class="cv-tags"><strong>Technologies:</strong> P&amp;C Pricing, Statistical Modeling, Data Analysis, Automation</div>
    </div>

    <div class="cv-item">
      <h3>Research Assistant</h3>
      <div class="cv-org">Observatoire de la Francophonie Économique</div>
      <div class="cv-date">February 2024 – December 2024</div>
      <p>
        Managed the conference website and the data platform, ensuring updates, data security, and optimal user experience.
      </p>
      <p class="cv-links-inline">
        <strong>Websites:</strong><br>
        <a href="https://ofe-evenements.com">ofe-evenements.com</a><br>
        <a href="https://ofe-plateforme.com">ofe-plateforme.com</a>
      </p>
      <div class="cv-tags"><strong>Technologies:</strong> CMS, Databases, JavaScript, Vue, EJS, NodeJS, NGINX</div>
    </div>

    <div class="cv-item">
      <h3>Teaching Assistant</h3>
      <div class="cv-org">Université de Montréal</div>
      <div class="cv-date">September 2022 – April 2024</div>
      <p>
        Teaching assistant for undergraduate courses including MAT1901 – Complementary Mathematics, MAT1905 – Linear and Vector Algebra, STT1903 – Introduction to Statistics, and STT1682 – Statistical Software in Actuarial Science.
      </p>
      <div class="cv-tags"><strong>Tools used:</strong> R, SAS</div>
    </div>

    <div class="cv-item">
      <h3>Actuarial Intern – Research and Development</h3>
      <div class="cv-org">Optimum Reinsurance</div>
      <div class="cv-date">May 2023 – August 2023</div>
      <p>
        Developed an interactive data visualization application using RShiny and analyzed machine learning models including SHAP values and XGBoost to improve solutions to complex actuarial problems.
      </p>
      <div class="cv-tags"><strong>Technologies:</strong> Data Science, Machine Learning, RShiny, Data Analysis</div>
    </div>

    <div class="cv-item">
      <h3>Vice President – Hackathon</h3>
      <div class="cv-org">PolyHx – Polytechnique Montréal</div>
      <div class="cv-date">September 2022 – August 2025</div>
      <p>
        Contributed to organizing one of the largest bilingual hackathons in Canada and promoted engagement in applied computer science and algorithmic problem solving.
      </p>
    </div>

    <div class="cv-item">
      <h3>Science Instructor and Program Designer</h3>
      <div class="cv-org">Folie Technique – Polytechnique Montréal</div>
      <div class="cv-date">May 2022 – April 2024</div>
      <p>
        Led science summer camp activities and developed educational thematic programs. Communicated scientific concepts to students of various age groups through hands-on activities.
      </p>
    </div>

    <div class="cv-item">
      <h3>Columnist</h3>
      <div class="cv-org">L'Axiomatique – Mathematics and Statistics Student Journal</div>
      <div class="cv-date">September 2021 – April 2024</div>
      <p>
        Volunteer columnist responsible for the section <em>“À vos risques”</em>, where I published monthly articles related to actuarial science and finance.
      </p>
      <p class="cv-links-inline">
        <strong>Journal:</strong>
        <a href="https://www.laxiomatique.com">laxiomatique.com</a>
      </p>
    </div>
  </div>

  <div class="cv-section">
    <h2>Education</h2>

    <div class="cv-item">
      <h3>Université de Montréal</h3>
      <div class="cv-org">B.Sc. Mathematics – Actuarial Science</div>
      <div class="cv-date">2021 – 2024</div>
      <p><strong>Interests:</strong> Risk theory, Statistical modeling, Quantitative finance, Stochastic calculus, Investments</p>
    </div>

    <div class="cv-item">
      <h3>Polytechnique Montréal</h3>
      <div class="cv-org">B.Eng. Software Engineering</div>
      <div class="cv-date">2022 – 2026</div>
      <p>Concentration: Artificial Intelligence and Data Science</p>
    </div>

    <div class="cv-item">
      <h3>Université d'État d'Haïti</h3>
      <div class="cv-org">B.Eng. Electromechanical Engineering</div>
      <div class="cv-date">2015 – 2020</div>
    </div>
  </div>

  <div class="cv-section">
    <h2>Skills</h2>

    <div class="cv-skills-grid">
      <div class="cv-skill-box">
        <h3>Programming and Databases</h3>
        <ul>
          <li>Python (expert)</li>
          <li>Java (intermediate)</li>
          <li>C/C++ (advanced)</li>
          <li>SQL (expert)</li>
          <li>MySQL (intermediate)</li>
          <li>Microsoft Access (advanced)</li>
          <li>VBA (expert)</li>
        </ul>
      </div>

      <div class="cv-skill-box">
        <h3>Statistical Software</h3>
        <ul>
          <li>R (expert)</li>
          <li>SAS (expert)</li>
          <li>Excel (expert)</li>
        </ul>
      </div>

      <div class="cv-skill-box">
        <h3>Other</h3>
        <ul>
          <li>Machine Learning</li>
          <li>Git</li>
          <li>LaTeX</li>
          <li>Teaching and scientific communication</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h2>Languages</h2>

    <div class="cv-item">
      <p>French – Native</p>
      <p>Haitian Creole – Native</p>
      <p>English – Intermediate</p>
    </div>
  </div>

  <div class="cv-section">
    <h2>Activities</h2>

    <div class="cv-item">
      <h3>Treasurer – P&amp;C Actuarial Association</h3>
      <div class="cv-date">Since 2026</div>
      <p>
        Responsible for supporting financial management and administrative activities of the association.
      </p>
    </div>

    <div class="cv-item">
      <h3>Member – Sigma Thêta Pi Student Fraternity</h3>
      <div class="cv-date">Since September 2023</div>
      <p>
        Participation in professional development, teamwork initiatives, and philanthropic activities.
      </p>
    </div>

    <div class="cv-item">
      <h3>Theater Training</h3>
      <div class="cv-org">Cours de Théâtre Frédéric Gilles – Montréal</div>
      <div class="cv-date">July 2023 – March 2024</div>
      <p>
        Training in acting, improvisation, diction, and stage performance.
      </p>
    </div>

    <div class="cv-item">
      <h3>Boxing and Kickboxing</h3>
      <div class="cv-date">Since July 2023</div>
      <p>
        Kickboxing – CEPSUM (Université de Montréal)<br>
        Boxing – Club de boxe de l'Est
      </p>
      <p>
        Training focused on physical conditioning, discipline, and technical boxing skills.
      </p>
    </div>

    <div class="cv-item">
      <h3>Volunteer – Cap Campus (1000 Sciences Program)</h3>
      <div class="cv-date">Winter 2023</div>
      <p>
        Delivered educational presentations to high school students on artificial intelligence and data science.
      </p>
    </div>
  </div>

</div>

<script>
  (() => {
    const cvData = {
      profile: {
        title: "Evenson Auguste",
        meta: "Actuarial Analyst (P&C Pricing) - Montréal, Québec, Canada.",
        details: [
          {
            title: "Operating field",
            date: "current",
            body: "Pricing tools, actuarial models, and analytical workflows for property and casualty insurance."
          },
          {
            title: "Working intersection",
            date: "math / insurance / code",
            body: "Mathematics, actuarial science, software, automation, and practical model deployment."
          },
          {
            title: "Public nodes",
            date: "available",
            body: "GitHub and LinkedIn are active links in the header. The downloadable PDF version stays available above."
          }
        ],
        tags: ["P&C pricing", "Actuarial tools", "Mathematics", "Computation"],
        links: [
          ["GitHub", "https://github.com/Evenson0"],
          ["LinkedIn", "https://www.linkedin.com/in/evenson-auguste"]
        ]
      },
      experience: {
        title: "Professional Experience",
        meta: "A path shaped by insurance pricing, data systems, research, and technical teaching.",
        details: [
          {
            title: "Actuarial Analyst - P&C Pricing, Optimum General Insurance",
            date: "September 2025 - Present",
            body: "Development and optimization of internal actuarial tools for commercial lines and automobile insurance pricing, with data analysis, statistical modeling, VBA, Python, and R."
          },
          {
            title: "Actuarial Intern - Corporate Actuarial, Optimum General Insurance",
            date: "May 2025 - August 2025",
            body: "Pricing model improvement, large-scale data analysis, and automation tools for risk modeling."
          },
          {
            title: "Research Assistant, Observatoire de la Francophonie Économique",
            date: "February 2024 - December 2024",
            body: "Conference website and data platform management, including updates, data security, and user experience."
          },
          {
            title: "Teaching Assistant, Université de Montréal",
            date: "September 2022 - April 2024",
            body: "Undergraduate support in mathematics, linear algebra, statistics, and statistical software for actuarial science."
          },
          {
            title: "Actuarial Intern - R&D, Optimum Reinsurance",
            date: "May 2023 - August 2023",
            body: "Interactive RShiny visualization and machine learning analysis using SHAP values and XGBoost."
          }
        ],
        tags: ["Optimum", "Pricing", "R&D", "Teaching", "Data platforms"]
      },
      education: {
        title: "Education",
        meta: "Mathematics first, engineering close behind.",
        details: [
          {
            title: "Université de Montréal",
            date: "2021 - 2024",
            body: "B.Sc. Mathematics - Actuarial Science. Interests: risk theory, statistical modeling, quantitative finance, stochastic calculus, and investments."
          },
          {
            title: "Polytechnique Montréal",
            date: "2022 - 2026",
            body: "B.Eng. Software Engineering, concentration in artificial intelligence and data science."
          },
          {
            title: "Université d'État d'Haïti",
            date: "2015 - 2020",
            body: "B.Eng. Electromechanical Engineering."
          }
        ],
        tags: ["Actuarial science", "Software engineering", "AI", "Data science"]
      },
      skills: {
        title: "Technical Stack",
        meta: "Tools used to turn models into usable systems.",
        details: [
          {
            title: "Programming and databases",
            date: "core stack",
            body: "Python, Java, C/C++, SQL, MySQL, Microsoft Access, and VBA."
          },
          {
            title: "Statistical software",
            date: "modeling stack",
            body: "R, SAS, and Excel."
          },
          {
            title: "Other strengths",
            date: "support layer",
            body: "Machine learning, Git, LaTeX, teaching, and scientific communication."
          }
        ],
        tags: ["Python", "R", "SAS", "SQL", "VBA", "ML", "Git"]
      },
      languages: {
        title: "Languages",
        meta: "Communication layer.",
        details: [
          {
            title: "French",
            date: "native",
            body: "Professional and academic working language."
          },
          {
            title: "Haitian Creole",
            date: "native",
            body: "Native language."
          },
          {
            title: "English",
            date: "intermediate",
            body: "Technical reading and professional communication."
          }
        ],
        tags: ["French", "Haitian Creole", "English"]
      },
      activities: {
        title: "Activities",
        meta: "Leadership, writing, public presence, and discipline outside the desk.",
        details: [
          {
            title: "Treasurer - P&C Actuarial Association",
            date: "Since 2026",
            body: "Financial management and administrative support for the association."
          },
          {
            title: "Vice President - Hackathon, PolyHx",
            date: "September 2022 - August 2025",
            body: "Organization of one of Canada's largest bilingual hackathons."
          },
          {
            title: "Columnist - L'Axiomatique",
            date: "September 2021 - April 2024",
            body: "Monthly articles on actuarial science and finance."
          },
          {
            title: "Theater, boxing, volunteering",
            date: "ongoing",
            body: "Theater training, boxing and kickboxing, and science presentations through Cap Campus."
          }
        ],
        tags: ["Association", "Hackathon", "Writing", "Theater", "Boxing"]
      }
    };

    const panel = document.getElementById("cv-system-panel");
    const nodes = Array.from(document.querySelectorAll("[data-cv-node]"));
    const rail = document.getElementById("cv-node-rail");
    const status = document.getElementById("cv-system-status");
    let activeIndex = 0;
    let autoplay = null;

    const escapeHtml = (value) => value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

    const render = (key, source = "auto") => {
      const entry = cvData[key];
      if (!entry || !panel) return;

      panel.innerHTML = `
        <h2 class="cv-panel-title">${escapeHtml(entry.title)}</h2>
        <p class="cv-panel-meta">${escapeHtml(entry.meta)}</p>
        <ul class="cv-panel-list">
          ${entry.details.map((item) => `
            <li>
              <span class="cv-detail-title">${escapeHtml(item.title)}</span>
              <span class="cv-detail-date">${escapeHtml(item.date)}</span>
              ${escapeHtml(item.body)}
            </li>
          `).join("")}
        </ul>
        <div class="cv-panel-tags">
          ${entry.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
        ${entry.links ? `
          <div class="cv-panel-actions">
            ${entry.links.map(([label, href]) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`).join("")}
          </div>
        ` : ""}
      `;

      nodes.forEach((node) => {
        const isActive = node.dataset.cvNode === key;
        node.classList.toggle("is-active", isActive);
        node.setAttribute("aria-selected", String(isActive));
      });

      activeIndex = Math.max(0, nodes.findIndex((node) => node.dataset.cvNode === key));
      if (nodes[activeIndex] && rail) {
        nodes[activeIndex].scrollIntoView({
          behavior: source === "init" ? "auto" : "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    };

    nodes.forEach((node) => {
      node.addEventListener("click", () => {
        window.clearInterval(autoplay);
        if (status) status.textContent = "AUTO-SCAN: PAUSED";
        render(node.dataset.cvNode, "click");
      });
    });

    const startAutoplay = () => {
      autoplay = window.setInterval(() => {
        activeIndex = (activeIndex + 1) % nodes.length;
        render(nodes[activeIndex].dataset.cvNode);
      }, 1000);
    };

    const initMatrix = () => {
      const canvas = document.getElementById("cv-matrix-canvas");
      const system = document.querySelector(".cv-system");
      if (!canvas || !system) return;

      const context = canvas.getContext("2d");
      const chars = "0101011010010110";
      const fontSize = 15;
      let columns = 0;
      let drops = [];

      const resize = () => {
        const rect = system.getBoundingClientRect();
        const scale = window.devicePixelRatio || 1;
        canvas.width = Math.max(1, Math.floor(rect.width * scale));
        canvas.height = Math.max(1, Math.floor(rect.height * scale));
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        context.setTransform(scale, 0, 0, scale, 0, 0);
        columns = Math.ceil(rect.width / fontSize);
        drops = Array.from({ length: columns }, () => Math.random() * -24);
      };

      const draw = () => {
        const rect = system.getBoundingClientRect();
        context.fillStyle = "rgba(0, 7, 4, 0.16)";
        context.fillRect(0, 0, rect.width, rect.height);
        context.font = `${fontSize}px JetBrains Mono, monospace`;
        context.fillStyle = "rgba(82, 240, 165, 0.68)";

        drops.forEach((drop, index) => {
          const char = chars[Math.floor(Math.random() * chars.length)];
          context.fillText(char, index * fontSize, drop * fontSize);

          if (drop * fontSize > rect.height && Math.random() > 0.972) {
            drops[index] = 0;
          } else {
            drops[index] = drop + 1;
          }
        });

        window.requestAnimationFrame(draw);
      };

      resize();
      window.addEventListener("resize", resize);
      draw();
    };

    render("profile", "init");
    startAutoplay();
    initMatrix();
  })();
</script>
