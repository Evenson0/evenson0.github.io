---
title: "SOA FM Formula Boxes"
permalink: /notes/soa-fm/formula-boxes/
layout: single
author_profile: true
mathjax: true
---

<style>
  .fm-shell {
    --fm-border: rgba(127,127,127,0.18);
    --fm-bg-1: rgba(127,127,127,0.05);
    --fm-bg-2: rgba(127,127,127,0.025);
    --fm-blue: #2563eb;
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

  .fm-btn-secondary {
    background: var(--fm-green-soft);
    color: var(--fm-green) !important;
    border-color: rgba(21,128,61,0.18);
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

  .fm-formula-row {
    margin: 0.75rem 0;
    padding: 0.75rem 0.85rem;
    border-radius: 12px;
    background: rgba(127,127,127,0.045);
    line-height: 1.65;
  }

  .fm-formula-row strong {
    display: inline-block;
    min-width: 5.8rem;
  }

  .fm-toggle {
    margin-top: 0.9rem;
    border: 1px solid var(--fm-border);
    border-radius: 14px;
    background: rgba(127,127,127,0.035);
    overflow: hidden;
  }

  .fm-toggle summary {
    cursor: pointer;
    list-style: none;
    padding: 0.85rem 0.95rem;
    font-weight: 800;
    color: var(--fm-blue);
    user-select: none;
  }

  .fm-toggle summary::-webkit-details-marker {
    display: none;
  }

  .fm-toggle summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 0.45rem;
    transition: transform 0.18s ease;
  }

  .fm-toggle[open] summary::before {
    transform: rotate(90deg);
  }

  .fm-toggle-content {
    padding: 0 0.95rem 0.95rem 0.95rem;
    border-top: 1px solid var(--fm-border);
  }

  mjx-container {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }

  mjx-container[jax="CHTML"][display="true"] {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.25rem 0;
  }

  @media (max-width: 600px) {
    .fm-hero {
      padding: 1.2rem 1rem;
    }

    .fm-proof-card {
      padding: 1rem 0.9rem;
    }

    .fm-formula-row strong {
      display: block;
      margin-bottom: 0.25rem;
      min-width: 0;
    }
  }
</style>

<div class="fm-shell">

  <div class="fm-hero">
    <h2>Formula Boxes</h2>
    <p>
      This page collects the formulas I find easiest to forget. Instead of treating them as isolated
      identities, I keep their short derivations here so that I can rebuild them quickly during review.
    </p>

    <div class="fm-actions">
      <a href="/notes/soa-fm/" class="fm-btn fm-btn-secondary">
        Back to SOA FM Exam Notes
      </a>
    </div>
  </div>

  <div class="fm-proof-grid">

    <div class="fm-proof-card">
      <div class="fm-proof-label">Interest, discount, and present value</div>
      <h3>Relations between \(i\), \(d\), and \(v\)</h3>

      <p>
        The effective interest rate \(i\), the effective discount rate \(d\), and the discount factor \(v\)
        are all different ways of describing the same one-period accumulation.
      </p>

      <div class="fm-formula-row">
        \[
        v=\frac{1}{1+i}
        \]
      </div>

      <div class="fm-formula-row">
        \[
        d=1-v
        \]
      </div>

      <div class="fm-formula-row">
        \[
        d=\frac{i}{1+i}
        \qquad\text{and}\qquad
        i=\frac{d}{1-d}
        \]
      </div>

      <details class="fm-toggle">
        <summary>Show derivation</summary>
        <div class="fm-toggle-content">
          \[
          d=1-v
          \]

          \[
          d=1-\frac{1}{1+i}
          =
          \frac{i}{1+i}
          \]

          \[
          v=1-d
          \]

          \[
          1+i=\frac{1}{v}=\frac{1}{1-d}
          \]

          \[
          i=\frac{1}{1-d}-1=\frac{d}{1-d}
          \]

          <div class="fm-proof-note">
            A useful identity is \( \frac{1-v}{v}=i \).
          </div>
        </div>
      </details>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Annuity-immediate</div>
      <h3>Present value of \(a_{\overline{n}|}\)</h3>

      <p>
        An annuity-immediate has payments at the end of each period, so payments of \(1\) occur at
        times \(1,2,\ldots,n\).
      </p>

      <div class="fm-formula-row">
        \[
        a_{\overline{n}|}
        =
        \frac{1-v^n}{i}
        \]
      </div>

      <details class="fm-toggle">
        <summary>Show derivation</summary>
        <div class="fm-toggle-content">
          \[
          a_{\overline{n}|}=v+v^2+\cdots+v^n
          \]

          \[
          a_{\overline{n}|}
          =
          \frac{v-v^{n+1}}{1-v}
          =
          \frac{v(1-v^n)}{1-v}
          \]

          <p>Since \(i=\frac{1-v}{v}\), we have</p>

          \[
          \frac{v}{1-v}=\frac{1}{i}.
          \]

          <p>Therefore,</p>

          \[
          a_{\overline{n}|}
          =
          \frac{1-v^n}{i}.
          \]
        </div>
      </details>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Annuity-due</div>
      <h3>Present value of \(\ddot{a}_{\overline{n}|}\)</h3>

      <p>
        An annuity-due has payments at the beginning of each period, so payments of \(1\) occur at
        times \(0,1,\ldots,n-1\).
      </p>

      <div class="fm-formula-row">
        \[
        \ddot{a}_{\overline{n}|}
        =
        \frac{1-v^n}{d}
        \]
      </div>

      <div class="fm-formula-row">
        \[
        \ddot{a}_{\overline{n}|}
        =
        (1+i)a_{\overline{n}|}
        \]
      </div>

      <details class="fm-toggle">
        <summary>Show derivation</summary>
        <div class="fm-toggle-content">
          \[
          \ddot{a}_{\overline{n}|}
          =
          1+v+v^2+\cdots+v^{n-1}
          \]

          \[
          \ddot{a}_{\overline{n}|}
          =
          \frac{1-v^n}{1-v}
          \]

          <p>Since \(d=1-v\),</p>

          \[
          \ddot{a}_{\overline{n}|}
          =
          \frac{1-v^n}{d}.
          \]

          <p>Also, because the payments are shifted one period earlier,</p>

          \[
          \ddot{a}_{\overline{n}|}
          =
          (1+i)a_{\overline{n}|}.
          \]
        </div>
      </details>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Accumulated value</div>
      <h3>Accumulated value of \(s_{\overline{n}|}\)</h3>

      <p>
        For an annuity-immediate, payments of \(1\) occur at times \(1,2,\ldots,n\).
        The accumulated value is measured at time \(n\).
      </p>

      <div class="fm-formula-row">
        \[
        s_{\overline{n}|}
        =
        \frac{(1+i)^n-1}{i}
        \]
      </div>

      <details class="fm-toggle">
        <summary>Show derivation</summary>
        <div class="fm-toggle-content">
          \[
          s_{\overline{n}|}
          =
          1+(1+i)+(1+i)^2+\cdots+(1+i)^{n-1}
          \]

          \[
          s_{\overline{n}|}
          =
          \frac{(1+i)^n-1}{(1+i)-1}
          \]

          \[
          s_{\overline{n}|}
          =
          \frac{(1+i)^n-1}{i}.
          \]
        </div>
      </details>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Annuity-due accumulated value</div>
      <h3>Accumulated value of \(\ddot{s}_{\overline{n}|}\)</h3>

      <p>
        For an annuity-due, payments of \(1\) occur at times \(0,1,\ldots,n-1\).
        The accumulated value is measured at time \(n\).
      </p>

      <div class="fm-formula-row">
        \[
        \ddot{s}_{\overline{n}|}
        =
        (1+i)s_{\overline{n}|}
        \]
      </div>

      <div class="fm-formula-row">
        \[
        \ddot{s}_{\overline{n}|}
        =
        \frac{(1+i)^n-1}{d}
        \]
      </div>

      <details class="fm-toggle">
        <summary>Show derivation</summary>
        <div class="fm-toggle-content">
          \[
          \ddot{s}_{\overline{n}|}
          =
          (1+i)^n+(1+i)^{n-1}+\cdots+(1+i)
          \]

          \[
          \ddot{s}_{\overline{n}|}
          =
          (1+i)\left[1+(1+i)+\cdots+(1+i)^{n-1}\right]
          \]

          \[
          \ddot{s}_{\overline{n}|}
          =
          (1+i)s_{\overline{n}|}
          \]

          \[
          \ddot{s}_{\overline{n}|}
          =
          (1+i)\frac{(1+i)^n-1}{i}
          \]

          <p>Since \(d=\frac{i}{1+i}\), we have \(\frac{1+i}{i}=\frac{1}{d}\). Therefore,</p>

          \[
          \ddot{s}_{\overline{n}|}
          =
          \frac{(1+i)^n-1}{d}.
          \]
        </div>
      </details>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Duration</div>
      <h3>Macaulay duration of an annuity-immediate</h3>

      <p>
        For a level annuity-immediate, the Macaulay duration is the present-value-weighted average
        time of the payments.
      </p>

      <div class="fm-formula-row">
        <strong>Definition:</strong>
        \[
        D
        =
        \frac{1v+2v^2+\cdots+nv^n}
        {v+v^2+\cdots+v^n}
        \]
      </div>

      <div class="fm-formula-row">
        <strong>Shortcut:</strong>
        \[
        D
        =
        \frac{1+i}{i}
        -
        \frac{n}{(1+i)^n-1}
        \]
      </div>

      <details class="fm-toggle">
        <summary>Show derivation</summary>
        <div class="fm-toggle-content">
          <p>
            The numerator is the present value of an increasing annuity-immediate, while the denominator
            is the present value of a level annuity-immediate.
          </p>

          \[
          D
          =
          \frac{(Ia)_{\overline{n}|}}{a_{\overline{n}|}}
          \]

          <p>For an annuity-immediate,</p>

          \[
          a_{\overline{n}|}
          =
          \frac{1-v^n}{i}.
          \]

          <p>For an increasing annuity-immediate,</p>

          \[
          (Ia)_{\overline{n}|}
          =
          \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}.
          \]

          <p>Since \(\ddot{a}_{\overline{n}|}=(1+i)a_{\overline{n}|}\),</p>

          \[
          (Ia)_{\overline{n}|}
          =
          \frac{(1+i)a_{\overline{n}|}-nv^n}{i}.
          \]

          <p>Now divide by \(a_{\overline{n}|}\):</p>

          \[
          D
          =
          \frac{(Ia)_{\overline{n}|}}{a_{\overline{n}|}}
          =
          \frac{(1+i)a_{\overline{n}|}-nv^n}
          {ia_{\overline{n}|}}.
          \]

          <p>Separate the two terms:</p>

          \[
          D
          =
          \frac{(1+i)a_{\overline{n}|}}{ia_{\overline{n}|}}
          -
          \frac{nv^n}{ia_{\overline{n}|}}
          \]

          \[
          D
          =
          \frac{1+i}{i}
          -
          \frac{nv^n}{ia_{\overline{n}|}}.
          \]

          <p>Since \(a_{\overline{n}|}=\frac{1-v^n}{i}\), we have</p>

          \[
          ia_{\overline{n}|}
          =
          1-v^n.
          \]

          <p>Therefore,</p>

          \[
          D
          =
          \frac{1+i}{i}
          -
          \frac{nv^n}{1-v^n}.
          \]

          <p>Finally,</p>

          \[
          \frac{v^n}{1-v^n}
          =
          \frac{1}{v^{-n}-1}
          =
          \frac{1}{(1+i)^n-1}.
          \]

          <p>So,</p>

          \[
          D
          =
          \frac{1+i}{i}
          -
          \frac{n}{(1+i)^n-1}.
          \]

          <div class="fm-proof-note">
            Memory rule: duration of a level annuity-immediate is
            \(D=\frac{(Ia)_{\overline{n}|}}{a_{\overline{n}|}}\), then the shortcut is just the simplified form.
          </div>
        </div>
      </details>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Relations</div>
      <h3>How the four annuity formulas connect</h3>

      <div class="fm-formula-row">
        <strong>Immediate PV:</strong>
        \(a_{\overline{n}|}=\frac{1-v^n}{i}\)
      </div>

      <div class="fm-formula-row">
        <strong>Due PV:</strong>
        \(\ddot{a}_{\overline{n}|}=\frac{1-v^n}{d}\)
      </div>

      <div class="fm-formula-row">
        <strong>Immediate AV:</strong>
        \(s_{\overline{n}|}=\frac{(1+i)^n-1}{i}\)
      </div>

      <div class="fm-formula-row">
        <strong>Due AV:</strong>
        \(\ddot{s}_{\overline{n}|}=\frac{(1+i)^n-1}{d}\)
      </div>

      <div class="fm-formula-row">
        <strong>PV shift:</strong>
        \(\ddot{a}_{\overline{n}|}=(1+i)a_{\overline{n}|}\)
      </div>

      <div class="fm-formula-row">
        <strong>AV shift:</strong>
        \(\ddot{s}_{\overline{n}|}=(1+i)s_{\overline{n}|}\)
      </div>

      <div class="fm-formula-row">
        <strong>PV to AV:</strong>
        \(s_{\overline{n}|}=a_{\overline{n}|}(1+i)^n\)
      </div>

      <div class="fm-formula-row">
        <strong>PV to AV:</strong>
        \(\ddot{s}_{\overline{n}|}=\ddot{a}_{\overline{n}|}(1+i)^n\)
      </div>

      <div class="fm-proof-note">
        Memory rule: immediate formulas use \(i\) in the denominator, due formulas use \(d\) in the denominator.
      </div>
    </div>

    <div class="fm-proof-card">
      <div class="fm-proof-label">Immediate vs. Due</div>
      <h3>Where each annuity notation is measured</h3>

      <p>
        The words <em>immediate</em> and <em>due</em> describe the timing of the payments,
        but the notation mainly tells us where the value of the payment stream is measured.
      </p>

      <div class="fm-formula-row">
        <strong>\(a_{\overline{n}|}\)</strong>
        is measured one period before the first payment.
      </div>

      <div class="fm-formula-row">
        <strong>\(\ddot{a}_{\overline{n}|}\)</strong>
        is measured at the time of the first payment.
      </div>

      <div class="fm-formula-row">
        <strong>\(s_{\overline{n}|}\)</strong>
        is measured at the time of the last payment.
      </div>

      <div class="fm-formula-row">
        <strong>\(\ddot{s}_{\overline{n}|}\)</strong>
        is measured one period after the last payment.
      </div>

      <div class="fm-proof-note">
        Draw the timeline first, locate the valuation date, then choose the notation that already places the value there.
      </div>

      <h3>Useful shift identities</h3>

      <div class="fm-formula-row">
        \(\ddot{a}_{\overline{n}|}=1+a_{\overline{n-1}|}\)
      </div>

      <div class="fm-formula-row">
        \(\ddot{s}_{\overline{n}|}=(1+i)s_{\overline{n}|}\)
      </div>

      <div class="fm-formula-row">
        \(\ddot{s}_{\overline{n}|}=s_{\overline{n+1}|}-1\)
      </div>

      <div class="fm-proof-note">
        The most important intuition is timing: annuity-due values are shifted one period forward
        compared with annuity-immediate values.
      </div>
    </div>

  </div>

</div>
