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
      <i class="fas fa-envelope"></i>
      <a href="mailto:evensont96@yahoo.fr">evensont96@yahoo.fr</a><br>

      <i class="fab fa-github"></i>
      <a href="https://github.com/Evenson0">github.com/Evenson0</a><br>

      <i class="fab fa-linkedin"></i>
      <a href="https://www.linkedin.com/in/evenson-auguste">linkedin.com/in/evenson-auguste</a>
    </div>
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
