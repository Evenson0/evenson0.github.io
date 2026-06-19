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
    <span class="fm-proof-label">Spot rates</span>
    <h3>Spot rates and exact cash-flow matching</h3>
  </summary>
  <div class="fm-card-content">
    <p>
      A spot rate depends on two things: the calendar year in which the investment starts, and the
      length of the investment period. If \(s_m^{(Y)}\) is the spot rate available in calendar year
      \(Y\) for an \(m\)-year zero-coupon investment, then an amount invested at the beginning of
      year \(Y\) for \(m\) years accumulates according to
    </p>

    <div class="fm-formula-row">
      \[
      \text{Accumulated value}
      =
      A\left(1+s_m^{(Y)}\right)^m.
      \]
    </div>

    <p>
      Equivalently, the amount needed at the beginning of year \(Y\) to fund a payment \(L\) due
      \(m\) years later is
    </p>

    <div class="fm-formula-row">
      \[
      \text{Required investment}
      =
      \frac{L}{\left(1+s_m^{(Y)}\right)^m}.
      \]
    </div>

    <div class="fm-proof-note">
      Memory rule: the superscript tells you when the money is invested; the subscript tells you how
      long the money is invested. An investment made in 2012 for 3 years uses \(s_3^{(2012)}\), not a
      rate from 2015.
    </div>

    <details class="fm-toggle">
      <summary>Show general cash-flow matching method</summary>
      <div class="fm-toggle-content">
        <p>
          In exact cash-flow matching, premiums or asset cash flows are invested in zero-coupon bonds
          so that future liabilities are paid exactly.
        </p>

        <p>
          Suppose an amount \(A\) is received at time \(Y\), and it is used to fund a liability at time
          \(Y+m\). Then the correct spot rate is the \(m\)-year spot rate available at time \(Y\):
        </p>

        \[
        A\left(1+s_m^{(Y)}\right)^m.
        \]

        <p>
          If the future liability is \(L\), the amount required at time \(Y\) is
        </p>

        \[
        \frac{L}{\left(1+s_m^{(Y)}\right)^m}.
        \]

        <p>
          When the shortest-duration liability has priority, work forward in liability order:
        </p>

        <div class="fm-formula-row">
          <strong>Step 1:</strong>
          Use the earliest available premium to fund the earliest liability.
        </div>

        <div class="fm-formula-row">
          <strong>Step 2:</strong>
          If the earliest premium is not enough, use part of the next premium to complete the earliest liability.
        </div>

        <div class="fm-formula-row">
          <strong>Step 3:</strong>
          Any leftover premium is then invested toward the next liability.
        </div>

        <div class="fm-formula-row">
          <strong>Step 4:</strong>
          Continue until every liability is exactly matched.
        </div>

        <div class="fm-proof-note">
          The key is not to average spot rates. Each invested amount uses the spot rate corresponding
          to its own start date and its own investment length.
        </div>
      </div>
    </details>

    <details class="fm-toggle">
      <summary>Show example</summary>
      <div class="fm-toggle-content">
        <p>
          A company expects to make the following claims:
        </p>

        <div class="fm-table-wrap">
          <table class="fm-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Claim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1/1/2015</td>
                <td>50,000</td>
              </tr>
              <tr>
                <td>1/1/2017</td>
                <td>70,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          It expects to receive the following premiums:
        </p>

        <div class="fm-table-wrap">
          <table class="fm-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1/1/2012</td>
                <td>30,000</td>
              </tr>
              <tr>
                <td>1/1/2013</td>
                <td>32,000</td>
              </tr>
              <tr>
                <td>1/1/2014</td>
                <td>\(X\)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Spot rates are given below. The row gives the calendar year in which the investment begins,
          and the column gives the length of the investment.
        </p>

        <div class="fm-table-wrap">
          <table class="fm-table">
            <thead>
              <tr>
                <th>Calendar year of original investment</th>
                <th>\(s_1\)</th>
                <th>\(s_2\)</th>
                <th>\(s_3\)</th>
                <th>\(s_4\)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2012</td>
                <td>4.25%</td>
                <td>4.70%</td>
                <td>4.95%</td>
                <td>5.10%</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>4.45%</td>
                <td>4.80%</td>
                <td>5.05%</td>
                <td>5.25%</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>4.50%</td>
                <td>4.85%</td>
                <td>5.15%</td>
                <td>5.40%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The shortest-duration claim is first priority, so the 2015 claim is funded first.
        </p>

        <p>
          The 30,000 premium received on 1/1/2012 is invested for 3 years, from 2012 to 2015. Therefore,
          we use \(s_3^{(2012)}=4.95\%\).
        </p>

        \[
        30{,}000(1.0495)^3=34{,}679.16.
        \]

        <p>
          The remaining amount needed for the 2015 claim is
        </p>

        \[
        50{,}000-34{,}679.16=15{,}320.84.
        \]

        <p>
          This remaining amount is funded using part of the 2013 premium. Since the money is invested
          from 2013 to 2015, the investment length is 2 years, so we use \(s_2^{(2013)}=4.80\%\).
        </p>

        \[
        \frac{15{,}320.84}{(1.048)^2}=13{,}949.54.
        \]

        <p>
          Therefore, the unused part of the 2013 premium is
        </p>

        \[
        32{,}000-13{,}949.54=18{,}050.46.
        \]

        <p>
          This remaining 2013 premium is now invested toward the 2017 claim. Since the money is invested
          from 2013 to 2017, the investment length is 4 years, so we use \(s_4^{(2013)}=5.25\%\).
        </p>

        \[
        18{,}050.46(1.0525)^4=22{,}150.15.
        \]

        <p>
          The remaining amount needed for the 2017 claim is
        </p>

        \[
        70{,}000-22{,}150.15=47{,}849.85.
        \]

        <p>
          Finally, the premium \(X\) received on 1/1/2014 is invested for 3 years, from 2014 to 2017.
          Therefore, we use \(s_3^{(2014)}=5.15\%\).
        </p>

        \[
        X(1.0515)^3=47{,}849.85.
        \]

        \[
        X=\frac{47{,}849.85}{(1.0515)^3}=41{,}157.86.
        \]

        <div class="fm-formula-row">
          \[
          X\approx 41{,}000.
          \]
        </div>

        <div class="fm-proof-note">
          The most common mistake is to use the year of the claim to choose the rate. The correct
          rate is chosen using the year the money is invested and the number of years until the claim.
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
        <span class="fm-proof-label">Varying annuities</span>
        <h3>Arithmetic varying annuities</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          An arithmetic varying annuity has payments that change by a constant amount each period.
          The most common special cases are increasing annuities and decreasing annuities.
        </p>

        <div class="fm-formula-row">
          <strong>Increasing immediate:</strong>
          \[
          (Ia)_{\overline{n}|}
          =
          \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Decreasing immediate:</strong>
          \[
          (Da)_{\overline{n}|}
          =
          \frac{n-a_{\overline{n}|}}{i}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Increasing due:</strong>
          \[
          (I\ddot{a})_{\overline{n}|}
          =
          \frac{\ddot{a}_{\overline{n}|}-nv^n}{d}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Decreasing due:</strong>
          \[
          (D\ddot{a})_{\overline{n}|}
          =
          \frac{n-a_{\overline{n}|}}{d}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Accumulated values:</strong>
          \[
          (Is)_{\overline{n}|}=(Ia)_{\overline{n}|}(1+i)^n,
          \qquad
          (Ds)_{\overline{n}|}=(Da)_{\overline{n}|}(1+i)^n
          \]
          \[
          (I\ddot{s})_{\overline{n}|}=(I\ddot{a})_{\overline{n}|}(1+i)^n,
          \qquad
          (D\ddot{s})_{\overline{n}|}=(D\ddot{a})_{\overline{n}|}(1+i)^n
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Perpetuities:</strong>
          \[
          (Ia)_{\overline{\infty}|}
          =
          \frac{1}{id}
          \]
          \[
          (I\ddot{a})_{\overline{\infty}|}
          =
          \frac{1}{d^2}
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show payment patterns</summary>
          <div class="fm-toggle-content">
            <p>
              For an increasing annuity-immediate, payments occur at the end of each period:
            </p>

            \[
            1,\ 2,\ 3,\ \ldots,\ n.
            \]

            \[
            (Ia)_{\overline{n}|}
            =
            v+2v^2+3v^3+\cdots+nv^n.
            \]

            <p>
              For a decreasing annuity-immediate, payments occur at the end of each period:
            </p>

            \[
            n,\ n-1,\ n-2,\ \ldots,\ 1.
            \]

            \[
            (Da)_{\overline{n}|}
            =
            nv+(n-1)v^2+(n-2)v^3+\cdots+v^n.
            \]

            <p>
              For annuity-due versions, all payments are shifted one period earlier.
            </p>

            \[
            (I\ddot{a})_{\overline{n}|}
            =
            1+2v+3v^2+\cdots+nv^{n-1}.
            \]

            \[
            (D\ddot{a})_{\overline{n}|}
            =
            n+(n-1)v+(n-2)v^2+\cdots+v^{n-1}.
            \]

            <div class="fm-proof-note">
              Memory rule: immediate annuities start at time \(1\); due annuities start at time \(0\).
              The payment amounts are the same, but the timing changes.
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show derivation of \((Ia)_{\overline{n}|}\)</summary>
          <div class="fm-toggle-content">
            <p>
              Start from the present value of the increasing annuity-immediate:
            </p>

            \[
            (Ia)_{\overline{n}|}
            =
            v+2v^2+3v^3+\cdots+nv^n.
            \]

            <p>
              Multiply by \(1+i\). Since \((1+i)v^k=v^{k-1}\), we get
            </p>

            \[
            (1+i)(Ia)_{\overline{n}|}
            =
            1+2v+3v^2+\cdots+nv^{n-1}.
            \]

            <p>
              Subtract the original expression:
            </p>

            \[
            (1+i)(Ia)_{\overline{n}|}-(Ia)_{\overline{n}|}
            =
            1+v+v^2+\cdots+v^{n-1}-nv^n.
            \]

            <p>
              The left side is \(i(Ia)_{\overline{n}|}\). The sum on the right is
              \(\ddot{a}_{\overline{n}|}\). Therefore,
            </p>

            \[
            i(Ia)_{\overline{n}|}
            =
            \ddot{a}_{\overline{n}|}-nv^n.
            \]

            \[
            (Ia)_{\overline{n}|}
            =
            \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}.
            \]

            <div class="fm-proof-note">
              This is the key formula behind many arithmetic annuity shortcuts.
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show derivation of \((Da)_{\overline{n}|}\)</summary>
          <div class="fm-toggle-content">
            <p>
              Start from the decreasing annuity-immediate:
            </p>

            \[
            (Da)_{\overline{n}|}
            =
            nv+(n-1)v^2+(n-2)v^3+\cdots+v^n.
            \]

            <p>
              Multiply by \(1+i\):
            </p>

            \[
            (1+i)(Da)_{\overline{n}|}
            =
            n+(n-1)v+(n-2)v^2+\cdots+v^{n-1}.
            \]

            <p>
              Subtract the original expression:
            </p>

            \[
            (1+i)(Da)_{\overline{n}|}-(Da)_{\overline{n}|}
            =
            n-(v+v^2+\cdots+v^n).
            \]

            <p>
              The left side is \(i(Da)_{\overline{n}|}\), and the sum is
              \(a_{\overline{n}|}\). Therefore,
            </p>

            \[
            i(Da)_{\overline{n}|}
            =
            n-a_{\overline{n}|}.
            \]

            \[
            (Da)_{\overline{n}|}
            =
            \frac{n-a_{\overline{n}|}}{i}.
            \]

            <div class="fm-proof-note">
              The decreasing annuity formula is often easier to remember because the numerator is
              simply \(n-a_{\overline{n}|}\).
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show why the due formulas use \(d\)</summary>
          <div class="fm-toggle-content">
            <p>
              A due annuity shifts each payment one period earlier. Therefore,
            </p>

            \[
            (I\ddot{a})_{\overline{n}|}
            =
            (1+i)(Ia)_{\overline{n}|}.
            \]

            <p>
              Using the immediate formula,
            </p>

            \[
            (I\ddot{a})_{\overline{n}|}
            =
            (1+i)
            \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}.
            \]

            <p>
              Since \(d=\frac{i}{1+i}\), we have \(\frac{1+i}{i}=\frac{1}{d}\).
              Therefore,
            </p>

            \[
            (I\ddot{a})_{\overline{n}|}
            =
            \frac{\ddot{a}_{\overline{n}|}-nv^n}{d}.
            \]

            <p>
              Similarly,
            </p>

            \[
            (D\ddot{a})_{\overline{n}|}
            =
            (1+i)(Da)_{\overline{n}|}
            =
            \frac{n-a_{\overline{n}|}}{d}.
            \]

            <div class="fm-proof-note">
              Memory rule: immediate formulas divide by \(i\); due formulas divide by \(d\).
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show perpetuity limits</summary>
          <div class="fm-toggle-content">
            <p>
              From the increasing annuity-immediate formula,
            </p>

            \[
            (Ia)_{\overline{n}|}
            =
            \frac{\ddot{a}_{\overline{n}|}-nv^n}{i}.
            \]

            <p>
              As \(n\to\infty\), we have \(v^n\to 0\) and \(nv^n\to 0\). Also,
            </p>

            \[
            \ddot{a}_{\overline{\infty}|}
            =
            \frac{1}{d}.
            \]

            <p>
              Therefore,
            </p>

            \[
            (Ia)_{\overline{\infty}|}
            =
            \frac{1/d}{i}
            =
            \frac{1}{id}.
            \]

            <p>
              For the due version,
            </p>

            \[
            (I\ddot{a})_{\overline{\infty}|}
            =
            (1+i)(Ia)_{\overline{\infty}|}.
            \]

            \[
            (I\ddot{a})_{\overline{\infty}|}
            =
            (1+i)\frac{1}{id}.
            \]

            <p>
              Since \(d=\frac{i}{1+i}\), this simplifies to
            </p>

            \[
            (I\ddot{a})_{\overline{\infty}|}
            =
            \frac{1}{d^2}.
            \]

            <div class="fm-proof-note">
              For an increasing perpetuity, \(nv^n\) disappears in the limit because exponential discounting
              dominates linear growth.
            </div>
          </div>
        </details>
      </div>
    </details>











            <details class="fm-proof-card fm-card-toggle">
      <summary class="fm-card-summary">
        <span class="fm-proof-label">Varying annuities</span>
        <h3>Geometric varying annuities</h3>
      </summary>
      <div class="fm-card-content">
        <p>
          A geometric varying annuity has payments that grow by a constant percentage \(r\) each period.
          If the first payment is \(X\), then the payment pattern is
        </p>

        <div class="fm-formula-row">
          \[
          X,\quad X(1+r),\quad X(1+r)^2,\quad \ldots,\quad X(1+r)^{n-1}.
          \]
        </div>

        <p>
          The key idea is that the present values form a geometric series with common ratio
        </p>

        <div class="fm-formula-row">
          \[
          q=(1+r)v=\frac{1+r}{1+i}.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Geometric immediate:</strong>
          \[
          PV_{\text{immediate}}
          =
          X
          \frac{
          1-\left(\frac{1+r}{1+i}\right)^n
          }{i-r},
          \qquad i\ne r.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Geometric due:</strong>
          \[
          PV_{\text{due}}
          =
          X
          \frac{
          1-\left(\frac{1+r}{1+i}\right)^n
          }{
          1-\frac{1+r}{1+i}
          },
          \qquad i\ne r.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Geometric due, simplified:</strong>
          \[
          PV_{\text{due}}
          =
          X(1+i)
          \frac{
          1-\left(\frac{1+r}{1+i}\right)^n
          }{i-r},
          \qquad i\ne r.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Equivalent-rate form:</strong>
          \[
          j=\frac{i-r}{1+r}
          \]
          \[
          PV_{\text{due}}
          =
          X\ddot{a}_{\overline{n}|j}
          =
          X\ddot{a}_{\overline{n}|\frac{i-r}{1+r}}.
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Immediate perpetuity:</strong>
          \[
          PV_{\text{immediate}}
          =
          \begin{cases}
          \dfrac{X}{i-r}, & r<i,\\
          \text{does not converge}, & r\ge i.
          \end{cases}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Due perpetuity:</strong>
          \[
          PV_{\text{due}}
          =
          \begin{cases}
          \dfrac{X(1+i)}{i-r}, & r<i,\\
          \text{does not converge}, & r\ge i.
          \end{cases}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Special case \(i=r\):</strong>
          \[
          PV_{\text{immediate}}=Xnv,
          \qquad
          PV_{\text{due}}=Xn.
          \]
        </div>

        <details class="fm-toggle">
          <summary>Show derivation of the immediate formula</summary>
          <div class="fm-toggle-content">
            <p>
              For the immediate version, payments occur at times \(1,2,\ldots,n\).
              Therefore, the present value is
            </p>

            \[
            PV_{\text{immediate}}
            =
            Xv+X(1+r)v^2+X(1+r)^2v^3+\cdots+X(1+r)^{n-1}v^n.
            \]

            <p>
              Factor out the first discounted payment \(Xv\):
            </p>

            \[
            PV_{\text{immediate}}
            =
            Xv\left[
            1+(1+r)v+\big((1+r)v\big)^2+\cdots+\big((1+r)v\big)^{n-1}
            \right].
            \]

            <p>
              The expression inside the brackets is a geometric series. Its common ratio is
            </p>

            \[
            q=(1+r)v=\frac{1+r}{1+i}.
            \]

            <p>
              So
            </p>

            \[
            PV_{\text{immediate}}
            =
            Xv\frac{1-q^n}{1-q}.
            \]

            <p>
              Now simplify the denominator:
            </p>

            \[
            1-q
            =
            1-\frac{1+r}{1+i}
            =
            \frac{i-r}{1+i}.
            \]

            <p>
              Since \(v=\frac{1}{1+i}\),
            </p>

            \[
            \frac{v}{1-q}
            =
            \frac{1}{1+i}\cdot\frac{1+i}{i-r}
            =
            \frac{1}{i-r}.
            \]

            <p>
              Therefore,
            </p>

            \[
            PV_{\text{immediate}}
            =
            X
            \frac{
            1-\left(\frac{1+r}{1+i}\right)^n
            }{i-r}.
            \]

            <div class="fm-proof-note">
              Memory rule: the ratio is \(\frac{1+r}{1+i}\). Growth fights against discounting.
              If \(i=r\), do not use this formula because the denominator becomes \(0\).
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show derivation of the due formula</summary>
          <div class="fm-toggle-content">
            <p>
              For the due version, payments occur at times \(0,1,\ldots,n-1\).
              Therefore, the present value is
            </p>

            \[
            PV_{\text{due}}
            =
            X+X(1+r)v+X(1+r)^2v^2+\cdots+X(1+r)^{n-1}v^{n-1}.
            \]

            <p>
              Factor out \(X\):
            </p>

            \[
            PV_{\text{due}}
            =
            X\left[
            1+(1+r)v+\big((1+r)v\big)^2+\cdots+\big((1+r)v\big)^{n-1}
            \right].
            \]

            <p>
              This is a geometric series with common ratio
            </p>

            \[
            q=(1+r)v=\frac{1+r}{1+i}.
            \]

            <p>
              Therefore,
            </p>

            \[
            PV_{\text{due}}
            =
            X\frac{1-q^n}{1-q}.
            \]

            <p>
              Substituting \(q=\frac{1+r}{1+i}\), we get
            </p>

            \[
            PV_{\text{due}}
            =
            X
            \frac{
            1-\left(\frac{1+r}{1+i}\right)^n
            }{
            1-\frac{1+r}{1+i}
            }.
            \]

            <p>
              Since
            </p>

            \[
            1-\frac{1+r}{1+i}
            =
            \frac{i-r}{1+i},
            \]

            <p>
              the formula can also be written as
            </p>

            \[
            PV_{\text{due}}
            =
            X(1+i)
            \frac{
            1-\left(\frac{1+r}{1+i}\right)^n
            }{i-r}.
            \]

            <p>
              Another useful form comes from defining an equivalent rate \(j\):
            </p>

            \[
            1+j=\frac{1+i}{1+r}.
            \]

            \[
            j=\frac{1+i}{1+r}-1=\frac{i-r}{1+r}.
            \]

            <p>
              Since
            </p>

            \[
            \frac{1}{1+j}=\frac{1+r}{1+i},
            \]

            <p>
              the geometric due annuity becomes an ordinary annuity-due at rate \(j\):
            </p>

            \[
            PV_{\text{due}}
            =
            X\ddot{a}_{\overline{n}|j}
            =
            X\ddot{a}_{\overline{n}|\frac{i-r}{1+r}}.
            \]

            <div class="fm-proof-note">
              Memory rule: the geometric due annuity starts at time \(0\), so there is no initial discount factor \(v\).
              It is one period earlier than the geometric immediate annuity.
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show perpetuity cases</summary>
          <div class="fm-toggle-content">
            <p>
              The finite immediate formula is
            </p>

            \[
            PV_{\text{immediate}}
            =
            X
            \frac{
            1-\left(\frac{1+r}{1+i}\right)^n
            }{i-r}.
            \]

            <p>
              Let
            </p>

            \[
            q=\frac{1+r}{1+i}.
            \]

            <p>
              A geometric perpetuity has a finite present value only when \(q<1\).
            </p>

            \[
            \frac{1+r}{1+i}<1
            \]

            \[
            1+r<1+i
            \]

            \[
            r<i.
            \]

            <p>
              If \(r<i\), then \(q^n\to 0\), and the immediate perpetuity becomes
            </p>

            \[
            PV_{\text{immediate}}
            =
            \frac{X}{i-r}.
            \]

            <p>
              The due perpetuity is one period earlier than the immediate perpetuity, so
            </p>

            \[
            PV_{\text{due}}
            =
            (1+i)PV_{\text{immediate}}.
            \]

            \[
            PV_{\text{due}}
            =
            \frac{X(1+i)}{i-r}.
            \]

            <p>
              If \(r\ge i\), the payments grow at least as fast as the discount rate, so the present value
              does not converge.
            </p>

            <div class="fm-proof-note">
              A geometric perpetuity exists only if discounting dominates growth. That is the condition \(r<i\).
            </div>
          </div>
        </details>

        <details class="fm-toggle">
          <summary>Show special case \(i=r\)</summary>
          <div class="fm-toggle-content">
            <p>
              When \(i=r\), the growth rate of the payments exactly matches the interest rate.
              The usual formula cannot be used because the denominator \(i-r\) becomes \(0\).
            </p>

            <p>
              For the immediate version, the \(k\)-th payment is \(X(1+r)^{k-1}\) at time \(k\),
              where \(k=1,2,\ldots,n\). Its present value is
            </p>

            \[
            X(1+r)^{k-1}v^k.
            \]

            <p>
              Since \(i=r\), we have \(v=\frac{1}{1+r}\). Therefore,
            </p>

            \[
            X(1+r)^{k-1}v^k
            =
            X(1+r)^{k-1}\frac{1}{(1+r)^k}
            =
            \frac{X}{1+r}
            =
            Xv.
            \]

            <p>
              Every discounted payment equals \(Xv\), and there are \(n\) payments:
            </p>

            \[
            PV_{\text{immediate}}=Xnv.
            \]

            <p>
              For the due version, the \(k\)-th payment is \(X(1+r)^k\) at time \(k\),
              where \(k=0,1,\ldots,n-1\). Its present value is
            </p>

            \[
            X(1+r)^kv^k.
            \]

            <p>
              Since \(i=r\), we have \(v=\frac{1}{1+r}\). Therefore,
            </p>

            \[
            X(1+r)^kv^k
            =
            X(1+r)^k\frac{1}{(1+r)^k}
            =
            X.
            \]

            <p>
              Every discounted payment equals \(X\), and there are \(n\) payments:
            </p>

            \[
            PV_{\text{due}}=Xn.
            \]

            <div class="fm-proof-note">
              When \(i=r\), growth exactly cancels discounting. In the due case, each payment has present value \(X\);
              in the immediate case, each payment has present value \(Xv\).
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
    <h3>Accumulation of discount and book value</h3>
  </summary>
  <div class="fm-card-content">
    <p>
      When a bond is purchased at a discount, its book value increases over time until it reaches the
      redemption value at maturity. The increase in book value during a coupon period is called the
      accumulation of discount.
    </p>

    <div class="fm-formula-row">
      <strong>Discount bond:</strong>
      \[
      P<C
      \]
    </div>

    <div class="fm-formula-row">
      <strong>Book value recursion:</strong>
      \[
      B_t=B_{t-1}(1+i)-Fr
      \]
    </div>

    <div class="fm-formula-row">
      <strong>Accumulation of discount at coupon \(t\):</strong>
      \[
      A_t=B_t-B_{t-1}
      =
      (Ci-Fr)v^{n-t+1}
      \]
    </div>

    <div class="fm-formula-row">
      <strong>Total discount in the purchase price:</strong>
      \[
      C-P=(Ci-Fr)a_{\overline{n}|i}
      \]
    </div>

    <p>
      Here, \(C\) is the redemption value, \(Fr\) is the coupon per period, \(i\) is the yield rate per
      period, \(n\) is the total number of coupons, \(v=\frac{1}{1+i}\), and \(B_t\) is the book value
      just after the \(t\)-th coupon.
    </p>

    <details class="fm-toggle">
      <summary>Show why the exponent is \(n-t+1\)</summary>
      <div class="fm-toggle-content">
        <p>
          The accumulation of discount in coupon \(t\) happens during the period from \(t-1\) to \(t\).
          Therefore, it starts from the book value just after coupon \(t-1\).
        </p>

        <p>
          Just after coupon \(t-1\), the coupon \(t\) has not been paid yet. The remaining coupon dates are
        </p>

        \[
        t,\ t+1,\ t+2,\ldots,n.
        \]

        <p>
          The number of remaining coupons is therefore
        </p>

        \[
        n-t+1.
        \]

        <p>
          This is why the formula uses \(v^{n-t+1}\), not \(v^{n-t}\).
        </p>

        <div class="fm-proof-note">
          Memory rule: coupon \(t\) is included because the accumulation of discount in coupon \(t\)
          is measured during the period before coupon \(t\) is paid.
        </div>
      </div>
    </details>

    <details class="fm-toggle">
      <summary>Show derivation</summary>
      <div class="fm-toggle-content">
        <p>
          The book value just after coupon \(t-1\) is the present value, at the bond yield \(i\), of all
          remaining cash flows:
        </p>

        \[
        B_{t-1}
        =
        Fr\,a_{\overline{n-t+1}|i}
        +
        Cv^{n-t+1}.
        \]

        <p>
          The accumulation of discount during coupon period \(t\) is
        </p>

        \[
        A_t=B_t-B_{t-1}.
        \]

        <p>
          Using the book value recursion,
        </p>

        \[
        B_t=B_{t-1}(1+i)-Fr.
        \]

        <p>
          Therefore,
        </p>

        \[
        A_t
        =
        B_{t-1}(1+i)-Fr-B_{t-1}.
        \]

        \[
        A_t
        =
        iB_{t-1}-Fr.
        \]

        <p>
          Substitute the expression for \(B_{t-1}\):
        </p>

        \[
        A_t
        =
        i\left(Fr\,a_{\overline{n-t+1}|i}+Cv^{n-t+1}\right)-Fr.
        \]

        \[
        A_t
        =
        Fr\left(ia_{\overline{n-t+1}|i}\right)+Civ^{n-t+1}-Fr.
        \]

        <p>
          Since
        </p>

        \[
        ia_{\overline{m}|i}=1-v^m,
        \]

        <p>
          with \(m=n-t+1\), we get
        </p>

        \[
        A_t
        =
        Fr(1-v^{n-t+1})+Civ^{n-t+1}-Fr.
        \]

        \[
        A_t
        =
        Fr-Frv^{n-t+1}+Civ^{n-t+1}-Fr.
        \]

        \[
        A_t
        =
        (Ci-Fr)v^{n-t+1}.
        \]

        <div class="fm-proof-note">
          For a discount bond, \(Ci>Fr\), so \(A_t>0\). The book value increases toward the redemption
          value \(C\).
        </div>
      </div>
    </details>

    <details class="fm-toggle">
      <summary>Show example</summary>
      <div class="fm-toggle-content">
        <p>
          A 40-year bond is purchased at a discount and pays annual coupons. The accumulation of discount
          in the 15th coupon is \(194.82\), and the accumulation of discount in the 20th coupon is \(306.69\).
          Find the amount of discount in the purchase price.
        </p>

        <p>
          Since \(n=40\), the accumulation of discount at coupon \(t\) is
        </p>

        \[
        A_t=(Ci-Fr)v^{40-t+1}.
        \]

        <p>
          For the 15th coupon,
        </p>

        \[
        194.82=(Ci-Fr)v^{40-15+1}.
        \]

        \[
        194.82=(Ci-Fr)v^{26}.
        \]

        <p>
          For the 20th coupon,
        </p>

        \[
        306.69=(Ci-Fr)v^{40-20+1}.
        \]

        \[
        306.69=(Ci-Fr)v^{21}.
        \]

        <p>
          Divide the two equations:
        </p>

        \[
        \frac{194.82}{306.69}
        =
        \frac{(Ci-Fr)v^{26}}{(Ci-Fr)v^{21}}
        =
        v^5.
        \]

        \[
        v
        =
        \left(\frac{194.82}{306.69}\right)^{1/5}.
        \]

        \[
        v\approx 0.91324.
        \]

        <p>
          Therefore,
        </p>

        \[
        i=\frac{1}{v}-1\approx 0.095.
        \]

        <p>
          Now solve for \(Ci-Fr\) using the 15th coupon:
        </p>

        \[
        Ci-Fr
        =
        \frac{194.82}{v^{26}}.
        \]

        \[
        Ci-Fr\approx 2062.53.
        \]

        <p>
          The total discount in the purchase price is the present value of all future accumulations of
          discount:
        </p>

        \[
        C-P=(Ci-Fr)a_{\overline{40}|i}.
        \]

        \[
        C-P
        =
        2062.53a_{\overline{40}|0.095}.
        \]

        \[
        a_{\overline{40}|0.095}
        =
        \frac{1-v^{40}}{0.095}.
        \]

        \[
        C-P\approx 21{,}135.
        \]

        <div class="fm-formula-row">
          \[
          \boxed{C-P\approx 21{,}135}
          \]
        </div>

        <div class="fm-proof-note">
          The amounts \(194.82\) and \(306.69\) are not the total discount. They are two individual
          coupon-period accumulations of discount. The total discount in the purchase price is the present
          value of all 40 such accumulations.
        </div>
      </div>
    </details>

    <details class="fm-toggle">
      <summary>Show endpoint intuition</summary>
      <div class="fm-toggle-content">
        <p>
          The exponent \(n-t+1\) gives a useful way to check the formula.
        </p>

        <div class="fm-formula-row">
          <strong>First coupon:</strong>
          \[
          A_1=(Ci-Fr)v^n
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Coupon \(t\):</strong>
          \[
          A_t=(Ci-Fr)v^{n-t+1}
          \]
        </div>

        <div class="fm-formula-row">
          <strong>Last coupon:</strong>
          \[
          A_n=(Ci-Fr)v
          \]
        </div>

        <p>
          For a discount bond, the accumulation of discount grows over time because the exponent decreases:
        </p>

        \[
        v^n<v^{n-1}<\cdots<v.
        \]

        <p>
          Therefore,
        </p>

        \[
        A_1<A_2<\cdots<A_n.
        \]

        <div class="fm-proof-note">
          At time \(0\), there is no coupon-period accumulation yet. What exists at time \(0\) is the
          total discount in the purchase price, \(C-P\).
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
