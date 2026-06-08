---
title: "SOA FM Exam Notes"
permalink: /notes/soa-fm/
layout: single
author_profile: true
mathjax: false
---

<style>
  .fm-shell {
    --fm-border: rgba(127,127,127,0.18);
    --fm-border-strong: rgba(127,127,127,0.26);
    --fm-bg-1: rgba(127,127,127,0.05);
    --fm-bg-2: rgba(127,127,127,0.025);
    --fm-text: inherit;
    --fm-blue: #2563eb;
    --fm-blue-soft: rgba(37,99,235,0.10);
    --fm-green: #15803d;
    --fm-green-soft: rgba(21,128,61,0.10);
    --fm-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .fm-hero {
    border: 1px solid var(--fm-border);
    border-radius: 20px;
    padding: 1.5rem 1.4rem;
    background: linear-gradient(135deg, var(--fm-bg-1), var(--fm-bg-2));
    margin-bottom: 1.6rem;
  }

  .fm-hero h2 {
    margin: 0 0 0.8rem 0;
    font-size: 1.6rem;
  }

  .fm-hero p {
    margin: 0;
    line-height: 1.75;
    font-size: 1.02rem;
  }

  .fm-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }

  .fm-btn {
    display: inline-block;
    text-decoration: none !important;
    padding: 0.72rem 1rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    border: 1px solid var(--fm-border);
    transition: all 0.18s ease;
  }

  .fm-btn-primary {
    background: var(--fm-blue-soft);
    color: var(--fm-blue) !important;
    border-color: rgba(37,99,235,0.18);
  }

  .fm-btn-secondary {
    background: var(--fm-green-soft);
    color: var(--fm-green) !important;
    border-color: rgba(21,128,61,0.18);
  }

  .fm-btn:hover {
    text-decoration: none !important;
    transform: translateY(-1px);
    box-shadow: var(--fm-shadow);
  }

  .fm-section-title {
    margin: 2rem 0 0.9rem 0;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .fm-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 0.8rem;
  }

  .fm-card {
    border: 1px solid var(--fm-border);
    border-radius: 18px;
    padding: 1.1rem 1.1rem 1rem 1.1rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(127,127,127,0.03));
    box-shadow: var(--fm-shadow);
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .fm-card:hover {
    transform: translateY(-3px);
    border-color: var(--fm-border-strong);
    box-shadow: 0 14px 36px rgba(0,0,0,0.11);
  }

  .fm-card-number {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.28rem 0.62rem;
    border-radius: 999px;
    background: rgba(37,99,235,0.09);
    color: var(--fm-blue);
    margin-bottom: 0.7rem;
  }

  .fm-card h3 {
    margin: 0 0 0.45rem 0;
    font-size: 1.06rem;
    line-height: 1.35;
  }

  .fm-weight {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fm-green);
    margin-bottom: 0.55rem;
  }

  .fm-card p {
    margin: 0;
    line-height: 1.68;
    font-size: 0.96rem;
  }

  .fm-note {
    margin-top: 1.8rem;
    padding: 1rem 1.1rem;
    border-left: 3px solid rgba(37,99,235,0.55);
    background: rgba(37,99,235,0.045);
    border-radius: 10px;
    line-height: 1.7;
    font-size: 0.97rem;
  }

  .fm-list {
    margin: 0.6rem 0 0 0;
    padding-left: 1.2rem;
  }

  .fm-list li {
    margin-bottom: 0.35rem;
  }

  .fm-derivation-intro {
    margin: 0.4rem 0 1rem 0;
    line-height: 1.75;
    font-size: 0.98rem;
    opacity: 0.92;
  }

  .fm-proof-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 0.9rem;
  }

  .fm-proof-card {
    border: 1px solid var(--fm-border);
    border-radius: 18px;
    padding: 1.05rem 1.1rem;
    background: linear-gradient(180deg, rgba(127,127,127,0.045), rgba(127,127,127,0.02));
    box-shadow: var(--fm-shadow);
  }

  .fm-proof-card h3 {
    margin: 0 0 0.55rem 0;
    font-size: 1.02rem;
  }

  .fm-proof-card p {
    margin: 0.45rem 0;
    line-height: 1.68;
  }

  .fm-proof-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.22rem 0.55rem;
    border-radius: 999px;
    background: rgba(37,99,235,0.09);
    color: var(--fm-blue);
    margin-bottom: 0.55rem;
  }

  .fm-proof-note {
    margin-top: 0.75rem;
    padding: 0.8rem 0.9rem;
    border-left: 3px solid rgba(21,128,61,0.55);
    background: rgba(21,128,61,0.055);
    border-radius: 10px;
    line-height: 1.65;
    font-size: 0.95rem;
  }
</style>

<div class="fm-shell">

  <div class="fm-hero">
    <h2>SOA Exam FM</h2>
    <p>
      These notes are my personal study notes for the SOA Exam FM. They are designed as a growing
      reference in financial mathematics, with definitions, formulas, examples, exercises, and
      problem-solving intuition. The material follows the main structure of the FM syllabus and is
      supported by a separate practice tool for active preparation.
    </p>

    <div class="fm-actions">
      <a href="{{ '/assets/pdf/soa-fm-notes.pdf' | relative_url }}"
         class="fm-btn fm-btn-primary"
         target="_blank"
         rel="noopener noreferrer">
        Open the PDF notes
      </a>

      <a href="/tools/soa-fm-practice/" class="fm-btn fm-btn-secondary">
        Open the FM practice tool
      </a>
  </div>
  </div>

  <div class="fm-section-title">Core Topics</div>

  <div class="fm-grid">
    <div class="fm-card">
      <div class="fm-card-number">Chapter 1</div>
      <h3>Time Value of Money</h3>
      <div class="fm-weight">Weight: 5–15%</div>
      <p>
        This chapter covers the foundations of financial mathematics: simple and compound interest,
        accumulation functions, present value, accumulated value, discount factors, nominal and
        effective rates, force of interest, inflation, real rates, and equations of value.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 2</div>
      <h3>Annuities and Non-Contingent Cash Flows</h3>
      <div class="fm-weight">Weight: 20–30%</div>
      <p>
        This part studies level annuities, annuities-immediate, annuities-due, perpetuities,
        and increasing or decreasing cash-flow patterns. It focuses on present value,
        accumulated value, and the calculation of unknown payment or term quantities.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 3</div>
      <h3>Loans</h3>
      <div class="fm-weight">Weight: 15–25%</div>
      <p>
        Here the emphasis is on loan structure and amortization. Topics include principal,
        payment schedules, outstanding balance, interest and principal components of each payment,
        balloon payments, refinancing, and loan valuation formulas.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 4</div>
      <h3>Bonds</h3>
      <div class="fm-weight">Weight: 15–25%</div>
      <p>
        This chapter introduces bond pricing and yield. It includes coupon rates, redemption value,
        premium and discount amortization, book value, market value, callable bonds,
        and accumulated value with reinvestment of coupons.
      </p>
    </div>

    <div class="fm-card">
      <div class="fm-card-number">Chapter 5</div>
      <h3>General Cash Flows, Portfolios, and Asset Liability Management</h3>
      <div class="fm-weight">Weight: 20–30%</div>
      <p>
        This final part develops the broader theory of financial cash flows. It includes yield rates,
        spot and forward rates, yield curves, duration, convexity, matching, immunization,
        and portfolio construction for asset-liability management.
      </p>
    </div>
  </div>

  <div class="fm-section-title">Formula Derivation Vault</div>

  <p class="fm-derivation-intro">
    This section collects the formulas I find easiest to forget. Instead of treating them as isolated
    identities, I keep their short derivations here so that I can rebuild them quickly during review.
  </p>

  <div class="fm-proof-grid">

    <div class="fm-proof-card">
      <div class="fm-proof-label">Interest, discount, and present value</div>
      <h3>Relations between \(i\), \(d\), and \(v\)</h3>

      <p>
        The effective interest rate \(i\), the effective discount rate \(d\), and the discount factor \(v\)
        are all different ways of describing the same one-period accumulation.
      </p>

      $$
      v=\frac{1}{1+i}
      $$

      $$
      d=1-v
      $$

      Therefore,

      $$
      d=1-\frac{1}{1+i}
      =
      \frac{i}{1+i}.
      $$

      Solving this relation for \(i\),

      $$
      d=\frac{i}{1+i}
      $$

      $$
      d(1+i)=i
      $$

      $$
      d+di=i
      $$

      $$
      d=i(1-d)
      $$

      $$
      i=\frac{d}{1-d}.
      $$

      So the key identities are

      $$
      \boxed{
      v=\frac{1}{1+i}=1-d
      }
      $$

      $$
      \boxed{
      d=\frac{i}{1+i}
      }
      $$

      $$
      \boxed{
      i=\frac{d}{1-d}
      }.
      $$

      <div class="fm-proof-note">
        A useful identity is
        \( \frac{1-v}{v}=i \).
        Indeed,
        \( \frac{1-v}{v}=\frac{1}{v}-1=(1+i)-1=i \).
      </div>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Annuity-immediate</div>
      <h3>Present value of \(a_{\overline{n}|}\)</h3>

      <p>
        An annuity-immediate has payments at the end of each period, so payments of \(1\) occur at
        times \(1,2,\ldots,n\).
      </p>

      $$
      a_{\overline{n}|}=v+v^2+\cdots+v^n.
      $$

      This is a geometric series with first term \(v\), common ratio \(v\), and next term \(v^{n+1}\).

      $$
      a_{\overline{n}|}
      =
      \frac{v-v^{n+1}}{1-v}
      =
      \frac{v(1-v^n)}{1-v}.
      $$

      Since

      $$
      i=\frac{1-v}{v},
      $$

      we have

      $$
      \frac{v}{1-v}=\frac{1}{i}.
      $$

      Therefore,

      $$
      \boxed{
      a_{\overline{n}|}
      =
      \frac{1-v^n}{i}
      }.
      $$
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Annuity-due</div>
      <h3>Present value of \(\ddot{a}_{\overline{n}|}\)</h3>

      <p>
        An annuity-due has payments at the beginning of each period, so payments of \(1\) occur at
        times \(0,1,\ldots,n-1\).
      </p>

      $$
      \ddot{a}_{\overline{n}|}
      =
      1+v+v^2+\cdots+v^{n-1}.
      $$

      This is a geometric series with first term \(1\), common ratio \(v\), and next term \(v^n\).

      $$
      \ddot{a}_{\overline{n}|}
      =
      \frac{1-v^n}{1-v}.
      $$

      Since \(d=1-v\),

      $$
      \boxed{
      \ddot{a}_{\overline{n}|}
      =
      \frac{1-v^n}{d}
      }.
      $$

      Also, because an annuity-due is one period earlier than an annuity-immediate,

      $$
      \boxed{
      \ddot{a}_{\overline{n}|}
      =
      (1+i)a_{\overline{n}|}
      =
      \frac{a_{\overline{n}|}}{v}
      }.
      $$
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Accumulated value</div>
      <h3>Accumulated value of \(s_{\overline{n}|}\)</h3>

      <p>
        For an annuity-immediate, payments of \(1\) occur at times \(1,2,\ldots,n\). The accumulated
        value is measured at time \(n\).
      </p>

      $$
      s_{\overline{n}|}
      =
      (1+i)^{n-1}+(1+i)^{n-2}+\cdots+(1+i)+1.
      $$

      Reversing the order,

      $$
      s_{\overline{n}|}
      =
      1+(1+i)+(1+i)^2+\cdots+(1+i)^{n-1}.
      $$

      This is a geometric series with first term \(1\), common ratio \(1+i\), and next term \((1+i)^n\).

      $$
      s_{\overline{n}|}
      =
      \frac{1-(1+i)^n}{1-(1+i)}
      =
      \frac{(1+i)^n-1}{i}.
      $$

      Therefore,

      $$
      \boxed{
      s_{\overline{n}|}
      =
      \frac{(1+i)^n-1}{i}
      }.
      $$
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Annuity-due accumulated value</div>
      <h3>Accumulated value of \(\ddot{s}_{\overline{n}|}\)</h3>

      <p>
        For an annuity-due, payments of \(1\) occur at times \(0,1,\ldots,n-1\). The accumulated value is
        measured at time \(n\).
      </p>

      $$
      \ddot{s}_{\overline{n}|}
      =
      (1+i)^n+(1+i)^{n-1}+\cdots+(1+i).
      $$

      Factor out \((1+i)\):

      $$
      \ddot{s}_{\overline{n}|}
      =
      (1+i)\left(1+(1+i)+\cdots+(1+i)^{n-1}\right).
      $$

      The expression in parentheses is \(s_{\overline{n}|}\). Thus,

      $$
      \boxed{
      \ddot{s}_{\overline{n}|}
      =
      (1+i)s_{\overline{n}|}
      }.
      $$

      Since

      $$
      s_{\overline{n}|}
      =
      \frac{(1+i)^n-1}{i},
      $$

      we get

      $$
      \ddot{s}_{\overline{n}|}
      =
      (1+i)\frac{(1+i)^n-1}{i}.
      $$

      Since

      $$
      d=\frac{i}{1+i},
      $$

      this becomes

      $$
      \boxed{
      \ddot{s}_{\overline{n}|}
      =
      \frac{(1+i)^n-1}{d}
      }.
      $$
    </div>


    <div class="fm-proof-card">
      <div class="fm-proof-label">Relations</div>
      <h3>How the four annuity formulas connect</h3>

      <p>
        The present value formulas are:
      </p>

      $$
      \boxed{
      a_{\overline{n}|}
      =
      \frac{1-v^n}{i}
      }
      $$

      $$
      \boxed{
      \ddot{a}_{\overline{n}|}
      =
      \frac{1-v^n}{d}
      }
      $$

      <p>
        The accumulated value formulas are:
      </p>

      $$
      \boxed{
      s_{\overline{n}|}
      =
      \frac{(1+i)^n-1}{i}
      }
      $$

      $$
      \boxed{
      \ddot{s}_{\overline{n}|}
      =
      \frac{(1+i)^n-1}{d}
      }
      $$

      <p>
        The shift relations are:
      </p>

      $$
      \boxed{
      \ddot{a}_{\overline{n}|}
      =
      (1+i)a_{\overline{n}|}
      }
      $$

      $$
      \boxed{
      \ddot{s}_{\overline{n}|}
      =
      (1+i)s_{\overline{n}|}
      }
      $$

      <p>
        The present value and accumulated value versions are connected by moving values \(n\) periods:
      </p>

      $$
      \boxed{
      s_{\overline{n}|}
      =
      a_{\overline{n}|}(1+i)^n
      }
      $$

      $$
      \boxed{
      \ddot{s}_{\overline{n}|}
      =
      \ddot{a}_{\overline{n}|}(1+i)^n
      }.
      $$

      <div class="fm-proof-note">
        Memory rule: immediate formulas use \(i\) in the denominator, due formulas use \(d\) in the denominator.
        But the reason is timing: annuity-due payments are shifted one period earlier.
      </div>
    </div>

  <div class="fm-proof-card">
  <div class="fm-proof-label">Immediate vs. Due</div>
  <h3>Where each annuity notation is measured</h3>

  <p>
    The words <em>immediate</em> and <em>due</em> describe the timing of the payments,
    but the notation mainly tells us where the value of the payment stream is measured.
  </p>

  <p>
    For \(n\) payments of \(1\), the four standard annuity symbols correspond to four different
    valuation dates.
  </p>

  $$
  a_{\overline{n}|}
  \quad
  \text{is measured one period before the first payment.}
  $$

  $$
  \ddot{a}_{\overline{n}|}
  \quad
  \text{is measured at the time of the first payment.}
  $$

  $$
  s_{\overline{n}|}
  \quad
  \text{is measured at the time of the last payment.}
  $$

  $$
  \ddot{s}_{\overline{n}|}
  \quad
  \text{is measured one period after the last payment.}
  $$

  <div class="fm-proof-note">
    This is often the fastest way to choose the correct formula. Draw the timeline first,
    locate the valuation date, then choose the notation that already places the value there.
  </div>

  <h3>Which is larger: \(a_{\overline{n}|}\) or \(\ddot{a}_{\overline{n}|}\)?</h3>

  <p>
    Both represent the present value of \(n\) payments of \(1\). But the annuity-due payments
    are received one period earlier than the annuity-immediate payments.
  </p>

  $$
  a_{\overline{n}|}
  =
  v\ddot{a}_{\overline{n}|}
  $$

  Therefore,

  $$
  \boxed{
  \ddot{a}_{\overline{n}|}
  =
  (1+i)a_{\overline{n}|}
  }.
  $$

  <p>
    So \(\ddot{a}_{\overline{n}|}\) is larger than \(a_{\overline{n}|}\) whenever \(i>0\).
  </p>

  <h3>Useful shift identities</h3>

  $$
  \boxed{
  \ddot{a}_{\overline{n}|}
  =
  1+a_{\overline{n-1}|}
  }
  $$

  $$
  \boxed{
  \ddot{s}_{\overline{n}|}
  =
  (1+i)s_{\overline{n}|}
  }
  $$

  $$
  \boxed{
  \ddot{s}_{\overline{n}|}
  =
  s_{\overline{n+1}|}-1
  }
  $$

  <div class="fm-proof-note">
    The most important intuition is timing: annuity-due values are shifted one period forward
    compared with annuity-immediate values.
  </div>
</div>

  </div>

  <div class="fm-section-title">What these notes aim to provide</div>

  <ul class="fm-list">
    <li>Clear definitions and notation</li>
    <li>Compact formulas and relationships</li>
    <li>Worked examples with structured solutions</li>
    <li>Exercises in FM exam style</li>
    <li>A growing companion resource for systematic preparation</li>
  </ul>

  <div class="fm-note">
    <strong>Last updated:</strong> June 7, 2026. For active preparation,
    you can also use the FM practice tool to work through exercises and reinforce the main concepts.
  </div>

</div>
