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
    display: grid;
    grid-template-columns: minmax(280px, 0.92fr) minmax(300px, 1.08fr);
    gap: 1rem;
    margin: 1.7rem 0 2rem;
  }

  .cv-system-map,
  .cv-system-panel {
    border: 1px solid var(--ev-line, rgba(127,127,127,0.22));
    background:
      linear-gradient(135deg, rgba(16,185,129,0.07), transparent 42%),
      repeating-linear-gradient(
        0deg,
        rgba(127,127,127,0.04) 0,
        rgba(127,127,127,0.04) 1px,
        transparent 1px,
        transparent 18px
      ),
      var(--global-bg-color, transparent);
  }

  .cv-system-map {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.65rem;
    padding: 0.75rem;
  }

  .cv-node {
    appearance: none;
    min-height: 118px;
    padding: 0.85rem;
    border: 1px solid var(--ev-line, rgba(127,127,127,0.22));
    border-radius: 0;
    color: inherit;
    background: color-mix(in srgb, var(--global-bg-color) 90%, #10b981 10%);
    cursor: pointer;
    text-align: left;
    transition:
      border-color 0.18s ease,
      background 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease,
      box-shadow 0.18s ease;
  }

  .cv-node:hover,
  .cv-node:focus-visible,
  .cv-node.is-active {
    border-color: var(--ev-title-green, #16a34a);
    background: color-mix(in srgb, var(--global-bg-color) 78%, #16a34a 22%);
    box-shadow: 0 0 0 1px rgba(22,163,74,0.22), 0 12px 26px rgba(0,0,0,0.12);
    outline: none;
    transform: translateY(-2px);
  }

  .cv-node-code,
  .cv-panel-kicker {
    display: block;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    color: var(--ev-title-green, #16a34a);
    opacity: 0.9;
  }

  .cv-node-title {
    display: block;
    margin-top: 0.55rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--ev-title-green, #16a34a);
  }

  .cv-node-meta {
    display: block;
    margin-top: 0.45rem;
    font-size: 0.78rem;
    line-height: 1.45;
    color: color-mix(in srgb, var(--global-text-color) 74%, transparent);
  }

  .cv-system-panel {
    min-height: 100%;
    padding: 1.25rem;
  }

  .cv-panel-title {
    margin: 0.45rem 0 0.35rem;
    font-family: "JetBrains Mono", monospace;
    font-size: clamp(1.4rem, 2.6vw, 2.05rem);
    line-height: 1.12;
    color: var(--ev-title-green, #16a34a);
  }

  .cv-panel-meta {
    margin: 0 0 1rem;
    color: color-mix(in srgb, var(--global-text-color) 80%, transparent);
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
    padding: 0.75rem 0.85rem;
    border-left: 2px solid var(--ev-title-green, #16a34a);
    background: color-mix(in srgb, var(--global-bg-color) 88%, #10b981 12%);
    line-height: 1.55;
  }

  .cv-panel-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1rem;
  }

  .cv-panel-tags span {
    padding: 0.28rem 0.5rem;
    border: 1px solid color-mix(in srgb, var(--ev-title-green, #16a34a) 48%, transparent);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    color: color-mix(in srgb, var(--global-text-color) 86%, transparent);
    background: color-mix(in srgb, var(--global-bg-color) 82%, #10b981 18%);
  }

  .cv-full-record {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 2.2rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ev-title-green, #16a34a);
  }

  .cv-full-record::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--ev-title-green, #16a34a), transparent);
  }

  @media (max-width: 760px) {
    .cv-system {
      grid-template-columns: 1fr;
    }

    .cv-system-map {
      grid-template-columns: 1fr;
    }

    .cv-node {
      min-height: 94px;
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
    <div class="cv-system-map" role="tablist" aria-label="CV sections">
      <button class="cv-node is-active" type="button" data-cv-node="profile" role="tab" aria-selected="true">
        <span class="cv-node-code">010001 / ID</span>
        <span class="cv-node-title">Profile</span>
        <span class="cv-node-meta">Actuarial pricing, mathematical tools, computation.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="experience" role="tab" aria-selected="false">
        <span class="cv-node-code">101110 / RUN</span>
        <span class="cv-node-title">Experience</span>
        <span class="cv-node-meta">Pricing, R&amp;D, data platforms, teaching.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="education" role="tab" aria-selected="false">
        <span class="cv-node-code">011010 / EDU</span>
        <span class="cv-node-title">Education</span>
        <span class="cv-node-meta">Actuarial science, software engineering, electromechanics.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="skills" role="tab" aria-selected="false">
        <span class="cv-node-code">110011 / STACK</span>
        <span class="cv-node-title">Skills</span>
        <span class="cv-node-meta">Python, R, SAS, SQL, VBA, ML, LaTeX.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="languages" role="tab" aria-selected="false">
        <span class="cv-node-code">001101 / LANG</span>
        <span class="cv-node-title">Languages</span>
        <span class="cv-node-meta">French, Haitian Creole, English.</span>
      </button>
      <button class="cv-node" type="button" data-cv-node="activities" role="tab" aria-selected="false">
        <span class="cv-node-code">111000 / LIFE</span>
        <span class="cv-node-title">Activities</span>
        <span class="cv-node-meta">Association, hackathons, writing, theater, sport.</span>
      </button>
    </div>

    <section class="cv-system-panel" id="cv-system-panel" role="tabpanel" aria-live="polite"></section>
  </div>

  <hr class="cv-rule">

  <div class="cv-full-record">Full record</div>

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
        code: "010001 / ID",
        title: "Evenson Auguste",
        meta: "Actuarial Analyst (P&C Pricing) - Montréal, Québec, Canada.",
        items: [
          "I build pricing tools, actuarial models, and analytical workflows for property and casualty insurance.",
          "My work sits between mathematics, actuarial science, software, and practical automation.",
          "Active online through GitHub and LinkedIn, with a downloadable PDF version available above."
        ],
        tags: ["P&C pricing", "Actuarial tools", "Mathematics", "Computation"]
      },
      experience: {
        code: "101110 / RUN",
        title: "Professional Experience",
        meta: "A path shaped by insurance pricing, data systems, research, and technical teaching.",
        items: [
          "Actuarial Analyst at Optimum General Insurance, focused on pricing tools, statistical modeling, VBA, Python, R, and portfolio analysis.",
          "Former corporate actuarial intern at Optimum General Insurance and R&D actuarial intern at Optimum Reinsurance.",
          "Research assistant for OFE data platforms and conference websites, plus teaching assistant at Université de Montréal."
        ],
        tags: ["Optimum", "Pricing", "R&D", "Teaching", "Data platforms"]
      },
      education: {
        code: "011010 / EDU",
        title: "Education",
        meta: "Mathematics first, engineering close behind.",
        items: [
          "B.Sc. Mathematics - Actuarial Science, Université de Montréal, with interests in risk theory, statistical modeling, quantitative finance, stochastic calculus, and investments.",
          "B.Eng. Software Engineering, Polytechnique Montréal, concentration in artificial intelligence and data science.",
          "B.Eng. Electromechanical Engineering, Université d'État d'Haïti."
        ],
        tags: ["Actuarial science", "Software engineering", "AI", "Data science"]
      },
      skills: {
        code: "110011 / STACK",
        title: "Technical Stack",
        meta: "Tools used to turn models into usable systems.",
        items: [
          "Programming and databases: Python, Java, C/C++, SQL, MySQL, Microsoft Access, VBA.",
          "Statistical software: R, SAS, Excel.",
          "Other strengths: machine learning, Git, LaTeX, teaching, and scientific communication."
        ],
        tags: ["Python", "R", "SAS", "SQL", "VBA", "ML", "Git"]
      },
      languages: {
        code: "001101 / LANG",
        title: "Languages",
        meta: "Communication layer.",
        items: [
          "French - Native.",
          "Haitian Creole - Native.",
          "English - Intermediate."
        ],
        tags: ["French", "Haitian Creole", "English"]
      },
      activities: {
        code: "111000 / LIFE",
        title: "Activities",
        meta: "Leadership, writing, public presence, and discipline outside the desk.",
        items: [
          "Treasurer for the P&C Actuarial Association and former Vice President - Hackathon at PolyHx.",
          "Columnist for L'Axiomatique, writing about actuarial science and finance.",
          "Theater training, boxing and kickboxing, plus volunteer science presentations through Cap Campus."
        ],
        tags: ["Association", "Hackathon", "Writing", "Theater", "Boxing"]
      }
    };

    const panel = document.getElementById("cv-system-panel");
    const nodes = Array.from(document.querySelectorAll("[data-cv-node]"));

    const escapeHtml = (value) => value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

    const render = (key) => {
      const entry = cvData[key];
      if (!entry || !panel) return;

      panel.innerHTML = `
        <span class="cv-panel-kicker">${escapeHtml(entry.code)}</span>
        <h2 class="cv-panel-title">${escapeHtml(entry.title)}</h2>
        <p class="cv-panel-meta">${escapeHtml(entry.meta)}</p>
        <ul class="cv-panel-list">
          ${entry.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
        <div class="cv-panel-tags">
          ${entry.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      `;

      nodes.forEach((node) => {
        const isActive = node.dataset.cvNode === key;
        node.classList.toggle("is-active", isActive);
        node.setAttribute("aria-selected", String(isActive));
      });
    };

    nodes.forEach((node) => {
      node.addEventListener("click", () => render(node.dataset.cvNode));
    });

    render("profile");
  })();
</script>
