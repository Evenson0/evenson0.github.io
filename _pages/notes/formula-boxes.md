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
    background: linear-gradient(180deg, rgba(127,127,127,0.045), rgba(127,127,127,0.02));
    box-shadow: var(--fm-shadow);
    overflow: hidden;
  }

  .fm-card-summary {
    cursor: pointer;
    list-style: none;
    padding: 1.05rem 1.1rem;
    user-select: none;
  }

  .fm-card-summary::-webkit-details-marker {
    display: none;
  }

  .fm-card-summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 0.55rem;
    color: var(--fm-blue);
    font-weight: 900;
    transition: transform 0.18s ease;
  }

  .fm-card-toggle[open] > .fm-card-summary::before {
    transform: rotate(90deg);
  }

  .fm-card-summary h3 {
    display: inline;
    margin: 0;
    font-size: 1.02rem;
  }

  .fm-card-content {
    padding: 0 1.1rem 1.1rem 1.1rem;
    border-top: 1px solid var(--fm-border);
  }

  .fm-card-content p {
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
    margin-right: 0.55rem;
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

  .fm-table-wrap {
    overflow-x: auto;
    margin-top: 0.9rem;
  }

  .fm-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.95rem;
  }

  .fm-table th,
  .fm-table td {
    border: 1px solid var(--fm-border);
    padding: 0.55rem;
    text-align: center;
    vertical-align: middle;
  }

  .fm-table th {
    background: rgba(37,99,235,0.08);
    font-weight: 800;
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

    .fm-card-summary {
      padding: 1rem 0.9rem;
    }

    .fm-card-content {
      padding: 0 0.9rem 1rem 0.9rem;
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

    <details class="fm-proof-card fm-card-toggle" open>
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Interest, discount, and present value</span>
        <h3>Relations between \(i\), \(d\), and \(v\)</h3>
      </summary>
      <div class="fm-card-content">
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
    </details>





    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Force of interest</span>
        <h3>Accumulation with a varying force of interest</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          When the force of interest varies with time, the accumulation function is built by integrating
          the force of interest over time.
        </p>

        <div class="fm-formula-row">
          <strong>Accumulation function:</strong>
          \[
          a(t)
          =
          \exp\left(\int_0^t \delta_s\,ds\right)
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Accumulation from \(s\) to \(t\):</strong>
          \[
          \frac{a(t)}{a(s)}
          =
          \exp\left(\int_s^t \delta_u\,du\right)
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Discount from \(t\) to \(s\):</strong>
          \[
          \frac{a(s)}{a(t)}
          =
          \exp\left(-\int_s^t \delta_u\,du\right)
          \]
        </div>

        <p>
          Therefore, a deposit \(C\) made at time \(s\) accumulates to time \(t\) as
        </p>

        <div class="fm-formula-row">
          \[
          C\frac{a(t)}{a(s)}.
          \]
        </div>

        <p>
          Similarly, a payment \(C\) due at time \(t\) has value at time \(s\) equal to
        </p>

        <div class="fm-formula-row">
          \[
          C\frac{a(s)}{a(t)}.
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>
              The force of interest is the instantaneous rate of growth of the accumulation function:
            </p>

            \[
            \delta_t
            =
            \frac{a'(t)}{a(t)}.
            \]

            <p>
              Rearranging gives
            </p>

            \[
            \frac{a'(t)}{a(t)}=\delta_t.
            \]

            <p>
              Since \(\frac{a'(t)}{a(t)}\) is the derivative of \(\ln(a(t))\), we get
            </p>

            \[
            \frac{d}{dt}\ln(a(t))=\delta_t.
            \]

            <p>
              Integrate from \(0\) to \(t\):
            </p>

            \[
            \ln(a(t))-\ln(a(0))
            =
            \int_0^t \delta_s\,ds.
            \]

            <p>
              Since \(a(0)=1\), we have \(\ln(a(0))=0\). Therefore,
            </p>

            \[
            \ln(a(t))
            =
            \int_0^t \delta_s\,ds.
            \]

            \[
            a(t)
            =
            \exp\left(\int_0^t \delta_s\,ds\right).
            \]

            <p>
              To accumulate from time \(s\) to time \(t\), divide the accumulation functions:
            </p>

            \[
            \frac{a(t)}{a(s)}
            =
            \frac{
            \exp\left(\int_0^t \delta_u\,du\right)
            }{
            \exp\left(\int_0^s \delta_u\,du\right)
            }.
            \]

            \[
            \frac{a(t)}{a(s)}
            =
            \exp\left(\int_s^t \delta_u\,du\right).
            \]

            <div class="fm-proof-note">
              Memory rule: \(a(t)\) accumulates from \(0\) to \(t\). For money deposited at time \(s\),
              use the ratio \(\frac{a(t)}{a(s)}\), not just \(a(t)\).
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show special cases</summary>
          <div class="fm-toggle-content">
            <p>
              If the force of interest is constant, \(\delta_t=\delta\), then
            </p>

            \[
            a(t)
            =
            \exp\left(\int_0^t \delta\,ds\right)
            =
            e^{\delta t}.
            \]

            <p>
              The accumulation factor from \(s\) to \(t\) becomes
            </p>

            \[
            \frac{a(t)}{a(s)}
            =
            \frac{e^{\delta t}}{e^{\delta s}}
            =
            e^{\delta(t-s)}.
            \]

            <p>
              If the effective annual interest rate is constant at \(i\), then
            </p>

            \[
            a(t)=(1+i)^t.
            \]

            <p>
              So the accumulation factor from \(s\) to \(t\) is
            </p>

            \[
            \frac{a(t)}{a(s)}
            =
            \frac{(1+i)^t}{(1+i)^s}
            =
            (1+i)^{t-s}.
            \]

            <div class="fm-proof-note">
              The varying-force formula generalizes both constant force of interest and constant effective interest.
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show example</summary>
          <div class="fm-toggle-content">
            <p>
              Suppose deposits are made at times \(t_0,t_1,\ldots,t_m\), and the fund is valued at time \(T\).
              If the deposits are \(C_0,C_1,\ldots,C_m\), then the accumulated value at time \(T\) is
            </p>

            \[
            AV_T
            =
            \sum_{j=0}^m C_j\frac{a(T)}{a(t_j)}.
            \]

            <p>
              For example, if deposits of \(5000\), \(1000\), and \(4000\) are made at times
              \(0\), \(\frac{1}{3}\), and \(\frac{2}{3}\), then the accumulated value at time \(1\) is
            </p>

            \[
            AV_1
            =
            5000a(1)
            +
            1000\frac{a(1)}{a(1/3)}
            +
            4000\frac{a(1)}{a(2/3)}.
            \]

            <p>
              If
            </p>

            \[
            \delta_t=\frac{k}{1+(1-t)k},
            \]

            <p>
              then
            </p>

            \[
            a(t)
            =
            \exp\left(\int_0^t \frac{k}{1+(1-s)k}\,ds\right)
            =
            \frac{1+k}{1+(1-t)k}.
            \]

            <p>
              Therefore,
            </p>

            \[
            a(1)=1+k,
            \]

            \[
            \frac{a(1)}{a(1/3)}
            =
            1+\frac{2}{3}k,
            \]

            \[
            \frac{a(1)}{a(2/3)}
            =
            1+\frac{1}{3}k.
            \]

            <div class="fm-proof-note">
              The most common mistake is to multiply every deposit by \(a(1)\). Only the deposit made at time \(0\)
              accumulates with \(a(1)\). Later deposits accumulate with ratios such as
              \(\frac{a(1)}{a(1/3)}\).
            </div>
          </div>
        </details>
      </div>
    </details>









    

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Annuity-immediate</span>
        <h3>Present value of \(a_{\overline{n}|}\)</h3>
      </summary>
      <div class="fm-card-content">
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
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Annuity-due</span>
        <h3>Present value of \(\ddot{a}_{\overline{n}|}\)</h3>
      </summary>
      <div class="fm-card-content">
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
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Accumulated value</span>
        <h3>Accumulated value of \(s_{\overline{n}|}\)</h3>
      </summary>
      <div class="fm-card-content">
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
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Annuity-due accumulated value</span>
        <h3>Accumulated value of \(\ddot{s}_{\overline{n}|}\)</h3>
      </summary>
      <div class="fm-card-content">
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
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Increasing annuity</span>
        <h3>The \(P,Q\) method for arithmetic annuities</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          The \(P,Q\) method is a shortcut for valuing an arithmetic annuity whose payments increase
          by a constant amount each period.
        </p>

        <div class="fm-formula-row">
          <strong>Payments:</strong>
          \[
          P,\quad P+Q,\quad P+2Q,\quad \ldots,\quad P+(n-1)Q
          \]
        </div>

        <p>
          Here, \(P\) is the first payment and \(Q\) is the constant increase from one payment to the next.
        </p>

        <div class="fm-formula-row">
          <strong>PV shortcut:</strong>
          \[
          PV
          =
          \left(P+\frac{Q}{i}\right)a_{\overline{n}|}
          -
          \frac{Qn}{i}v^n
          \]
        </div>

        <div class="fm-formula-row">
          <strong>BA II Plus setup:</strong>
          \[
          N=n,
          \qquad
          I/Y=100i,
          \qquad
          PMT=P+\frac{Q}{i},
          \qquad
          FV=-\frac{Qn}{i}.
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>Start with the present value of the arithmetic payment stream:</p>

            \[
            PV
            =
            Pv+(P+Q)v^2+(P+2Q)v^3+\cdots+(P+(n-1)Q)v^n.
            \]

            <p>Separate the level part and the increasing part:</p>

            \[
            PV
            =
            P(v+v^2+\cdots+v^n)
            +
            Q(v^2+2v^3+\cdots+(n-1)v^n).
            \]

            \[
            PV
            =
            Pa_{\overline{n}|}
            +
            Q\left((Ia)_{\overline{n}|}-a_{\overline{n}|}\right)
            \]

            \[
            PV
            =
            (P-Q)a_{\overline{n}|}
            +
            Q(Ia)_{\overline{n}|}.
            \]

            <p>Using</p>

            \[
            (Ia)_{\overline{n}|}
            =
            \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}
            =
            \frac{(1+i)a_{\overline{n}|}-nv^n}{i},
            \]

            <p>we get</p>

            \[
            PV
            =
            \left(P+\frac{Q}{i}\right)a_{\overline{n}|}
            -
            \frac{Qn}{i}v^n.
            \]

            <div class="fm-proof-note">
              Memory rule: replace the arithmetic annuity by a level annuity with
              \(PMT=P+\frac{Q}{i}\), then add a final adjustment \(FV=-\frac{Qn}{i}\).
            </div>
          </div>
        </details>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Geometric annuity</span>
        <h3>Present value of a geometrically increasing annuity</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          A geometrically increasing annuity has payments that grow by a constant percentage each period.
          If the first payment is \(X\), the growth rate is \(g\), and the interest rate is \(i\), then the
          payments are
        </p>

        <div class="fm-formula-row">
          \[
          X,\quad X(1+g),\quad X(1+g)^2,\quad \ldots,\quad X(1+g)^{n-1}.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>PV formula:</strong>
          \[
          PV
          =
          X
          \left[
          \frac{1-\left(\frac{1+g}{1+i}\right)^n}
          {i-g}
          \right],
          \qquad i\ne g.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>First payment:</strong>
          \[
          X
          =
          \frac{PV(i-g)}
          {1-\left(\frac{1+g}{1+i}\right)^n}.
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>Start by discounting each payment to time \(0\):</p>

            \[
            PV
            =
            \frac{X}{1+i}
            +
            \frac{X(1+g)}{(1+i)^2}
            +
            \frac{X(1+g)^2}{(1+i)^3}
            +
            \cdots
            +
            \frac{X(1+g)^{n-1}}{(1+i)^n}.
            \]

            <p>Factor out the first discounted payment:</p>

            \[
            PV
            =
            \frac{X}{1+i}
            \left[
            1+
            \frac{1+g}{1+i}
            +
            \left(\frac{1+g}{1+i}\right)^2
            +
            \cdots+
            \left(\frac{1+g}{1+i}\right)^{n-1}
            \right].
            \]

            <p>The expression in brackets is a geometric series with common ratio</p>

            \[
            r=\frac{1+g}{1+i}.
            \]

            \[
            1+r+r^2+\cdots+r^{n-1}
            =
            \frac{1-r^n}{1-r}.
            \]

            <p>After simplifying the denominator,</p>

            \[
            1-\frac{1+g}{1+i}
            =
            \frac{i-g}{1+i}.
            \]

            <p>Thus,</p>

            \[
            PV
            =
            X
            \left[
            \frac{1-\left(\frac{1+g}{1+i}\right)^n}
            {i-g}
            \right].
            \]

            <div class="fm-proof-note">
              Memory rule: the key ratio is \(\frac{1+g}{1+i}\). If \(i=g\), use the special case
              \(PV=\frac{nX}{1+i}\).
            </div>
          </div>
        </details>
      </div>
    </details>



        <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Immunization</span>
        <h3>Two zero-coupon bonds around a liability date</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          Suppose a liability of amount \(L\) is due at time \(t_L\). To immunize it using two zero-coupon
          bonds maturing at times \(t_X\) and \(t_Y\), where
        </p>

        <div class="fm-formula-row">
          \[
          t_X < t_L < t_Y,
          \]
        </div>

        <p>
          choose the asset portfolio so that its Macaulay duration equals the liability date.
        </p>

        <div class="fm-formula-row">
          <strong>Weight in \(Y\):</strong>
          \[
          w_Y=\frac{t_L-t_X}{t_Y-t_X}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Weight in \(X\):</strong>
          \[
          w_X=\frac{t_Y-t_L}{t_Y-t_X}
          \]
        </div>

        <p>
          These are weights based on present value, not face amount.
        </p>

        <div class="fm-formula-row">
          \[
          w_X+w_Y=1
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Present value of liability:</strong>
          \[
          PV_L=Lv^{t_L}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Present value invested in \(Y\):</strong>
          \[
          PV_Y=w_YPV_L
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Face amount of bond \(Y\):</strong>
          \[
          F_Y=w_YL(1+i)^{t_Y-t_L}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Face amount of bond \(X\):</strong>
          \[
          F_X=w_XL(1+i)^{t_X-t_L}
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>
              Since both assets are zero-coupon bonds, each bond has Macaulay duration equal to its maturity.
              Therefore, the portfolio duration is the present-value-weighted average maturity:
            </p>

            \[
            D_{\text{assets}}=w_Xt_X+w_Yt_Y.
            \]

            <p>
              To immunize the liability, set the asset duration equal to the liability duration:
            </p>

            \[
            w_Xt_X+w_Yt_Y=t_L.
            \]

            <p>
              Since the weights must sum to \(1\),
            </p>

            \[
            w_X=1-w_Y.
            \]

            <p>Substitute this into the duration equation:</p>

            \[
            (1-w_Y)t_X+w_Yt_Y=t_L.
            \]

            \[
            t_X+w_Y(t_Y-t_X)=t_L.
            \]

            \[
            w_Y=\frac{t_L-t_X}{t_Y-t_X}.
            \]

            <p>Then</p>

            \[
            w_X=1-w_Y
            =
            \frac{t_Y-t_L}{t_Y-t_X}.
            \]

            <p>
              To convert the present-value weight into a face amount, first compute the present value of the liability:
            </p>

            \[
            PV_L=Lv^{t_L}.
            \]

            <p>
              The present value invested in bond \(Y\) is
            </p>

            \[
            PV_Y=w_YPV_L=w_YLv^{t_L}.
            \]

            <p>
              Since bond \(Y\) is a zero-coupon bond paying \(F_Y\) at time \(t_Y\),
            </p>

            \[
            PV_Y=F_Yv^{t_Y}.
            \]

            <p>Therefore,</p>

            \[
            F_Yv^{t_Y}=w_YLv^{t_L}.
            \]

            \[
            F_Y=w_YL\frac{v^{t_L}}{v^{t_Y}}.
            \]

            \[
            F_Y=w_YL(1+i)^{t_Y-t_L}.
            \]

            <p>
              Similarly,
            </p>

            \[
            F_X=w_XL(1+i)^{t_X-t_L}.
            \]

            <div class="fm-proof-note">
              Memory rule: first find the present-value weights using the liability date as a weighted average
              of the two bond maturities. Then convert the weight into a face amount. Do not confuse
              present-value weight with face amount.
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show example</summary>
          <div class="fm-toggle-content">
            <p>
              Suppose \(L=6000\), \(t_L=3\), \(t_X=1\), \(t_Y=5\), and \(i=5\%\).
            </p>

            \[
            w_Y=\frac{3-1}{5-1}=\frac{2}{4}=0.5.
            \]

            \[
            w_X=\frac{5-3}{5-1}=\frac{2}{4}=0.5.
            \]

            <p>
              The face amount of bond \(Y\) is
            </p>

            \[
            F_Y=w_YL(1+i)^{t_Y-t_L}.
            \]

            \[
            F_Y=0.5(6000)(1.05)^{5-3}.
            \]

            \[
            F_Y=3000(1.05)^2=3307.50.
            \]

            <p>
              So the required face amount of the 5-year zero-coupon bond is approximately
            </p>

            \[
            F_Y\approx 3310.
            \]

            <div class="fm-proof-note">
              The \(0.5\) is not the face amount proportion. It is the present-value weight of bond \(Y\)
              in the immunizing portfolio.
            </div>
          </div>
        </details>
      </div>
    </details>




    

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Duration</span>
        <h3>Macaulay duration of an annuity-immediate</h3>
      </summary>
      <div class="fm-card-content">
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

            <p>For an increasing annuity-immediate,</p>

            \[
            (Ia)_{\overline{n}|}
            =
            \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}
            =
            \frac{(1+i)a_{\overline{n}|}-nv^n}{i}.
            \]

            <p>Now divide by \(a_{\overline{n}|}\):</p>

            \[
            D
            =
            \frac{1+i}{i}
            -
            \frac{nv^n}{ia_{\overline{n}|}}.
            \]

            <p>Since \(ia_{\overline{n}|}=1-v^n\),</p>

            \[
            D
            =
            \frac{1+i}{i}
            -
            \frac{nv^n}{1-v^n}.
            \]

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
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Loans and amortization</span>
        <h3>Basic amortization formulas</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          In an amortization schedule, each loan payment is split into two parts:
          interest paid and principal repaid.
        </p>

        <div class="fm-formula-row">
          <strong>Interest:</strong>
          \[
          I_t = OB_{t-1}i
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Principal:</strong>
          \[
          P_t = R_t - I_t
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Balance:</strong>
          \[
          OB_t = OB_{t-1} - P_t
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Loan amount:</strong>
          \[
          L = \sum_{\text{all }t} R_t v^t
          \]
        </div>

        <p>
          Here, \(R_t\) is the payment at time \(t\), \(I_t\) is the interest paid in payment \(t\),
          \(P_t\) is the principal repaid in payment \(t\), and \(OB_t\) is the outstanding balance after
          payment \(t\).
        </p>

        <details class="fm-toggle">
          <summary>Show explanation</summary>
          <div class="fm-toggle-content">
            <p>The interest paid in payment \(t\) is based on the outstanding balance immediately before the payment:</p>

            \[
            I_t = OB_{t-1}i.
            \]

            <p>The principal repaid is whatever remains from the payment after interest is paid:</p>

            \[
            P_t = R_t - I_t.
            \]

            <p>The new outstanding balance is the old outstanding balance minus the principal repaid:</p>

            \[
            OB_t = OB_{t-1} - P_t.
            \]

            <p>Equivalently, the initial loan amount is the present value of all future payments:</p>

            \[
            L = \sum_{\text{all }t} R_t v^t.
            \]

            <div class="fm-proof-note">
              Memory rule: interest is charged on the previous balance; principal is the part of the payment
              that actually reduces the loan.
            </div>
          </div>
        </details>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Loans and amortization</span>
        <h3>General amortization schedule</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          An amortization schedule tracks how each payment is split into interest and principal,
          and how the outstanding balance changes over time.
        </p>

        <div class="fm-table-wrap">
          <table class="fm-table">
            <thead>
              <tr>
                <th>\(t\)</th>
                <th>Payment</th>
                <th>Interest paid</th>
                <th>Principal repaid</th>
                <th>Outstanding balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>\(0\)</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>\(OB_0=L\)</td>
              </tr>
              <tr>
                <td>\(1\)</td>
                <td>\(R_1\)</td>
                <td>\(I_1=i_1OB_0\)</td>
                <td>\(P_1=R_1-I_1\)</td>
                <td>\(OB_1=OB_0-P_1\)</td>
              </tr>
              <tr>
                <td>\(2\)</td>
                <td>\(R_2\)</td>
                <td>\(I_2=i_2OB_1\)</td>
                <td>\(P_2=R_2-I_2\)</td>
                <td>\(OB_2=OB_1-P_2\)</td>
              </tr>
              <tr>
                <td>\(3\)</td>
                <td>\(R_3\)</td>
                <td>\(I_3=i_3OB_2\)</td>
                <td>\(P_3=R_3-I_3\)</td>
                <td>\(OB_3=OB_2-P_3\)</td>
              </tr>
              <tr>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
              </tr>
              <tr>
                <td>\(t\)</td>
                <td>\(R_t\)</td>
                <td>\(I_t=i_tOB_{t-1}\)</td>
                <td>\(P_t=R_t-I_t\)</td>
                <td>\(OB_t=OB_{t-1}-P_t\)</td>
              </tr>
              <tr>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
                <td>\(dots\)</td>
              </tr>
              <tr>
                <td>\(n\)</td>
                <td>\(R_n\)</td>
                <td>\(I_n=i_nOB_{n-1}\)</td>
                <td>\(P_n=R_n-I_n\)</td>
                <td>\(OB_n=0\)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <details class="fm-toggle">
          <summary>Show formulas</summary>
          <div class="fm-toggle-content">
            <p>At each payment date, interest is charged on the previous outstanding balance.</p>

            <div class="fm-formula-row">
              <strong>Interest:</strong>
              \[
              I_t=i_tOB_{t-1}
              \]
            </div>

            <div class="fm-formula-row">
              <strong>Principal:</strong>
              \[
              P_t=R_t-I_t
              \]
            </div>

            <div class="fm-formula-row">
              <strong>Balance:</strong>
              \[
              OB_t=OB_{t-1}-P_t
              \]
            </div>

            <p>Equivalently, since \(P_t=R_t-i_tOB_{t-1}\), the balance can be updated directly:</p>

            <div class="fm-formula-row">
              \[
              OB_t=OB_{t-1}(1+i_t)-R_t.
              \]
            </div>

            <div class="fm-proof-note">
              Memory rule: interest is based on the previous balance; principal is the part of the payment
              that actually reduces the loan.
            </div>
          </div>
        </details>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Loans and amortization</span>
        <h3>Principal repaid for level payments</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          When a loan is repaid with level payments of \(R\), the principal repaid in payment \(t\)
          has a useful closed form.
        </p>

        <div class="fm-formula-row">
          <strong>Formula:</strong>
          \[
          P_t = Rv^{n-t+1}
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>The interest paid in payment \(t\) is</p>

            \[
            I_t = OB_{t-1}i.
            \]

            <p>For level payments, the outstanding balance immediately before payment \(t\) is the present value of the remaining payments:</p>

            \[
            OB_{t-1}=Ra_{\overline{n-t+1}|}.
            \]

            <p>Therefore,</p>

            \[
            I_t = Ra_{\overline{n-t+1}|}i.
            \]

            <p>Using</p>

            \[
            a_{\overline{n-t+1}|}
            =
            \frac{1-v^{n-t+1}}{i},
            \]

            <p>we get</p>

            \[
            I_t
            =
            R(1-v^{n-t+1}).
            \]

            <p>The principal repaid in payment \(t\) is payment minus interest:</p>

            \[
            P_t=R-I_t.
            \]

            \[
            P_t=R-R(1-v^{n-t+1}).
            \]

            \[
            P_t=Rv^{n-t+1}.
            \]

            <div class="fm-proof-note">
              For level payments, the principal portions form a geometric pattern:
              \(Rv^n, Rv^{n-1}, \ldots, Rv\).
            </div>
          </div>
        </details>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Relations</span>
        <h3>How the four annuity formulas connect</h3>
      </summary>
      <div class="fm-card-content">
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
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Immediate vs. Due</span>
        <h3>Where each annuity notation is measured</h3>
      </summary>
      <div class="fm-card-content">
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
          Draw the timeline first, locate the valuation date, then choose the notation that already places the value there.
        </div>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">TI-30XS shortcut</span>
        <h3>Using a table to test an increasing annuity</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          When payments increase by a constant amount and the number of full payments is unknown,
          the TI-30XS table function can be used to test values of \(n\) quickly.
        </p>

        <div class="fm-formula-row">
          <strong>Setup:</strong>
          \[
          10(Ia)_{\overline{n}|}=700
          \]
        </div>

        <p>
          For payments \(10,20,30,\ldots,10n\), the present value of the first \(n\)
          regular payments is
        </p>

        <div class="fm-formula-row">
          \[
          10(Ia)_{\overline{n}|}
          =
          10\left(
          \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}
          \right).
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show TI-30XS table method</summary>
          <div class="fm-toggle-content">
            <p>On the TI-30XS, replace \(n\) by \(x\) and enter the present value function as \(y\):</p>

            <div class="fm-formula-row">
              \[
              y
              =
              200\left[
              21(1-1.05^{-x})
              -
              x(1.05)^{-x}
              \right].
              \]
            </div>

            <div class="fm-formula-row">
              <strong>Step 1:</strong>
              Press <code>table</code>.
            </div>

            <div class="fm-formula-row">
              <strong>Step 2:</strong>
              Set <code>Start = 1</code> and <code>Step = 1</code>.
            </div>

            <div class="fm-formula-row">
              <strong>Step 3:</strong>
              Scroll until \(y\) passes \(700\).
            </div>

            \[
            y(14)=664.52
            \]

            \[
            y(15)=736.67.
            \]

            <p>
              Therefore, 14 full regular payments can be made, but 15 full regular payments would be too much.
              The smaller final payment is made at time \(15\).
            </p>

            \[
            700-664.52=35.48
            \]

            \[
            35.48(1.05)^{15}=73.74.
            \]

            <div class="fm-proof-note">
              The common mistake is to stop at \(35.48\); that is the present value of the final payment,
              not the final payment itself.
            </div>
          </div>
        </details>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Bonds and securities</span>
        <h3>Basic bond price formula</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          A bond price is the present value of its coupon payments plus the present value of its redemption value.
        </p>

        <div class="fm-formula-row">
          <strong>Formula:</strong>
          \[
          P = Fr\,a_{\overline{n}|i} + Cv_i^n
          \]
        </div>

        <p>
          Here, \(F\) is the face amount, \(r\) is the coupon rate per period, \(C\) is the redemption value,
          \(i\) is the yield rate per period, and \(n\) is the number of coupon periods.
        </p>

        <div class="fm-formula-row">
          <strong>Discount factor:</strong>
          \[
          v_i=\frac{1}{1+i}
          \]
        </div>

        <p>If we define \(K=Cv_i^n\), then</p>

        <div class="fm-formula-row">
          \[
          P=Fr\,a_{\overline{n}|i}+K.
          \]
        </div>

        <div class="fm-proof-note">
          Memory rule: bond price = present value of coupons + present value of redemption value.
        </div>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Bonds and securities</span>
        <h3>Premium, discount, and par</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          A bond is bought at a premium, discount, or par depending on how its price compares with its redemption value.
        </p>

        <div class="fm-formula-row">
          <strong>Premium:</strong>
          \[
          P>C
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Discount:</strong>
          \[
          P<C
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Par:</strong>
          \[
          P=C
          \]
        </div>

        <div class="fm-proof-note">
          A premium bond is not necessarily a bad deal, and a discount bond is not necessarily a good deal.
          The price reflects the relationship between the coupon rate and the yield rate.
        </div>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Bonds and securities</span>
        <h3>Premium / discount formula</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          The premium / discount formula rewrites the basic bond price formula in a way that makes the
          relationship between the coupon rate and the yield rate visible.
        </p>

        <div class="fm-formula-row">
          <strong>Formula:</strong>
          \[
          P=C+(Fr-Ci)a_{\overline{n}|i}
          \]
        </div>

        <p>If \(F=C\), then</p>

        <div class="fm-formula-row">
          \[
          P=C+C(r-i)a_{\overline{n}|i}.
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>Start with the basic bond price formula:</p>

            \[
            P=Fr\,a_{\overline{n}|i}+Cv_i^n.
            \]

            <p>Recall that</p>

            \[
            a_{\overline{n}|i}=\frac{1-v_i^n}{i}.
            \]

            <p>Therefore,</p>

            \[
            v_i^n=1-ia_{\overline{n}|i}.
            \]

            <p>Substitute this into the basic bond price formula:</p>

            \[
            P=Fr\,a_{\overline{n}|i}+C(1-ia_{\overline{n}|i}).
            \]

            \[
            P=C+(Fr-Ci)a_{\overline{n}|i}.
            \]

            <p>If \(F=C\), then \(Fr=Cr\), so</p>

            \[
            P=C+C(r-i)a_{\overline{n}|i}.
            \]

            <div class="fm-proof-note">
              If \(r>i\), then \(P>C\), so the bond sells at a premium.
              If \(r<i\), then \(P<C\), so the bond sells at a discount.
              If \(r=i\), then \(P=C\), so the bond is priced at par.
            </div>
          </div>
        </details>
      </div>
    </details>

    <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Bonds and securities</span>
        <h3>Makeham's formula</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          Makeham's formula is another way to write the bond price in terms of the present value of the
          redemption value.
        </p>

        <div class="fm-formula-row">
          <strong>Formula:</strong>
          \[
          P=K+\frac{g}{i}(C-K)
          \]
        </div>

        <p>where</p>

        \[
        K=Cv_i^n.
        \]

        <p>
          Here, \(g\) is the coupon rate based on the redemption value, so the coupon amount is \(Cg\).
        </p>

        <details class="fm-toggle">
          <summary>Show derivation</summary>
          <div class="fm-toggle-content">
            <p>Start with the bond price formula written using coupons \(Cg\):</p>

            \[
            P=Cg\,a_{\overline{n}|i}+Cv_i^n.
            \]

            <p>Define</p>

            \[
            K=Cv_i^n.
            \]

            <p>Then</p>

            \[
            C-K=C-Cv_i^n=C(1-v_i^n).
            \]

            <p>Since</p>

            \[
            a_{\overline{n}|i}=\frac{1-v_i^n}{i},
            \]

            <p>we have</p>

            \[
            Cg\,a_{\overline{n}|i}
            =
            \frac{g}{i}C(1-v_i^n)
            =
            \frac{g}{i}(C-K).
            \]

            <p>Therefore,</p>

            \[
            P=K+\frac{g}{i}(C-K).
            \]

            <div class="fm-proof-note">
              Makeham's formula is useful when the problem gives or suggests \(K=Cv_i^n\).
              Otherwise, the basic bond price formula is usually faster.
            </div>
          </div>
        </details>
      </div>
    </details>

  </div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const cards = Array.from(document.querySelectorAll(".fm-card-toggle"));

    cards.forEach((card) => {
      card.addEventListener("toggle", function () {
        if (!card.open) return;

        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.open = false;
          }
        });
      });
    });

    const innerToggles = Array.from(document.querySelectorAll(".fm-toggle"));

    innerToggles.forEach((toggle) => {
      toggle.addEventListener("toggle", function () {
        if (!toggle.open) return;

        const parentCard = toggle.closest(".fm-card-toggle");
        const siblingToggles = parentCard
          ? Array.from(parentCard.querySelectorAll(".fm-toggle"))
          : innerToggles;

        siblingToggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            otherToggle.open = false;
          }
        });
      });
    });
  });
</script>
