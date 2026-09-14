---
title: "SOA P Formula Boxes"
permalink: /notes/soa-p/formula-boxes/
layout: single
author_profile: true
mathjax: true
---

<link rel="stylesheet" href="{{ '/assets/css/soa-p-notes.css' | relative_url }}">

<div class="p-notes" id="p-formula-guide">

  <div class="p-hero">
    <h2>Probability: Formulas and Methods</h2>

    <p>
      A growing problem-solving guide with formulas,
      explanations, and worked examples for SOA Exam P.
    </p>

    <div class="p-actions">
      <a
        href="{{ '/tools/soa-p-practice/' | relative_url }}"
        class="p-btn p-btn-secondary">
        Open the P practice tool
      </a>

      <a
        href="{{ '/notes/soa-p/' | relative_url }}"
        class="p-btn">
        Back to P notes
      </a>
    </div>
  </div>

  <section id="probability-bounds">

    <span class="p-tag">Rule 01 · General Probability</span>

    <h2>Minimum and Maximum Probabilities</h2>

    <p>
      Suppose only the marginal probabilities
      \(P(A)=a\) and \(P(B)=b\) are known.
      How small or large can the probability of their union
      or intersection be?
    </p>

    <div class="p-note">
      <p>
        <strong>Scope of the rule.</strong>
        These are the sharp bounds implied by the two marginal
        probabilities alone. No independence assumption is made.
        The extrema are taken over all joint arrangements
        compatible with those probabilities.
      </p>
      <p>
        Additional information, such as independence or a specified
        sample space, may further restrict the possible values.
      </p>
    </div>

    <h3>The starting identity</h3>

    <div class="p-equation">
      \[
        P(A\cup B)=P(A)+P(B)-P(A\cap B).
      \]
    </div>

    <p>
      With \(a\) and \(b\) fixed, increasing the overlap decreases
      the union. Decreasing the overlap increases the union.
    </p>

    <div class="p-table-wrap">
      <table>
        <caption>Four bounds to remember</caption>
        <thead>
          <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Minimum possible value</th>
            <th scope="col">Maximum possible value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">\(P(A\cup B)\)</th>
            <td>\(\max(a,b)\)</td>
            <td>\(\min(1,a+b)\)</td>
          </tr>
          <tr>
            <th scope="row">\(P(A\cap B)\)</th>
            <td>\(\max(0,a+b-1)\)</td>
            <td>\(\min(a,b)\)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <article class="p-formula-box" id="minimum-union">

      <span class="p-tag">01A</span>
      <h3>Minimum of the Union</h3>

      <div class="p-equation">
        \[
          \boxed{\min P(A\cup B)=\max(a,b)}
        \]
      </div>

      <p>
        <strong>Intuition.</strong>
        The union contains both events, so it cannot have a
        smaller probability than either one.
        Make the events overlap as much as possible.
      </p>

      <p>
        <strong>How the bound is attained.</strong>
        Place the smaller-probability event entirely inside
        the larger one. If \(a\leq b\), take \(A\subseteq B\).
        Then \(A\cup B=B\).
      </p>

      <details class="p-proof">
        <summary>Why the formula works</summary>

        <div class="p-proof-content">
          <p>
            Since \(A\subseteq A\cup B\) and
            \(B\subseteq A\cup B\),
          </p>

          <div class="p-math">
            \[
              P(A\cup B)\geq a,
              \qquad
              P(A\cup B)\geq b.
            \]
          </div>

          <p>
            Hence \(P(A\cup B)\geq\max(a,b)\).
            Nesting the smaller event inside the larger one
            achieves equality.
          </p>
        </div>
      </details>

      <div class="p-note">
        <p>
          <strong>Example.</strong>
          If \(a=0.3\) and \(b=0.4\), then
        </p>
        <div class="p-math">
          \[
            \min P(A\cup B)=\max(0.3,0.4)=0.4.
          \]
        </div>
        <p>
          This is possible when \(A\subseteq B\).
        </p>
      </div>

    </article>

    <article class="p-formula-box" id="maximum-union">

      <span class="p-tag">01B</span>
      <h3>Maximum of the Union</h3>

      <div class="p-equation">
        \[
          \boxed{\max P(A\cup B)=\min(1,a+b)}
        \]
      </div>

      <p>
        <strong>Intuition.</strong>
        Spread the two events out as much as possible.
        Their union cannot exceed their summed probabilities,
        and no probability can exceed 1.
      </p>

      <p><strong>How the bound is attained.</strong></p>

      <ul>
        <li>
          If \(a+b\leq1\), take mutually exclusive events:
          \(P(A\cap B)=0\).
        </li>
        <li>
          If \(a+b&gt;1\), some overlap is unavoidable.
          Choose an arrangement with \(P(A\cup B)=1\)
          and \(P(A\cap B)=a+b-1\).
        </li>
      </ul>

      <details class="p-proof">
        <summary>Why the formula works</summary>

        <div class="p-proof-content">
          <p>By the addition rule and nonnegativity,</p>

          <div class="p-math">
            \[
              P(A\cup B)
              =a+b-P(A\cap B)
              \leq a+b.
            \]
          </div>

          <p>
            Also \(P(A\cup B)\leq1\).
            Combining the two bounds gives
          </p>

          <div class="p-math">
            \[
              P(A\cup B)\leq\min(1,a+b).
            \]
          </div>

          <p>
            The arrangements described above attain this bound
            in both cases.
          </p>
        </div>
      </details>

      <div class="p-note">
        <p>
          <strong>Example.</strong>
          If \(a=0.3\) and \(b=0.4\), then
        </p>
        <div class="p-math">
          \[
            \max P(A\cup B)=\min(1,0.7)=0.7.
          \]
        </div>
        <p>
          If instead \(a=0.7\) and \(b=0.6\), the maximum
          is 1, not 1.3.
        </p>
      </div>

    </article>

    <article class="p-formula-box" id="minimum-intersection">

      <span class="p-tag">01C</span>
      <h3>Minimum of the Intersection</h3>

      <div class="p-equation">
        \[
          \boxed{\min P(A\cap B)=\max(0,a+b-1)}
        \]
      </div>

      <p>
        <strong>Intuition.</strong>
        Avoid overlap whenever possible. If the two probabilities
        sum to more than 1, their excess over 1 must overlap.
      </p>

      <p><strong>How the bound is attained.</strong></p>

      <ul>
        <li>
          If \(a+b\leq1\), mutually exclusive events give
          an intersection probability of 0.
        </li>
        <li>
          If \(a+b&gt;1\), make the union have probability 1.
          The remaining overlap is exactly \(a+b-1\).
        </li>
      </ul>

      <details class="p-proof">
        <summary>Why the formula works</summary>

        <div class="p-proof-content">
          <p>Rearrange the addition rule:</p>

          <div class="p-math">
            \[
              P(A\cap B)=a+b-P(A\cup B).
            \]
          </div>

          <p>Because \(P(A\cup B)\leq1\),</p>

          <div class="p-math">
            \[
              P(A\cap B)\geq a+b-1.
            \]
          </div>

          <p>
            The intersection probability is also nonnegative.
            Therefore,
          </p>

          <div class="p-math">
            \[
              P(A\cap B)\geq\max(0,a+b-1).
            \]
          </div>
        </div>
      </details>

      <div class="p-note">
        <p>
          <strong>Example.</strong>
          If \(a=0.7\) and \(b=0.6\), then
        </p>
        <div class="p-math">
          \[
            \min P(A\cap B)
            =\max(0,0.7+0.6-1)=0.3.
          \]
        </div>
        <p>
          An attainable arrangement assigns 0.4 to A only,
          0.3 to B only, 0.3 to both, and 0 to neither.
        </p>
      </div>

    </article>

    <article class="p-formula-box" id="maximum-intersection">

      <span class="p-tag">01D</span>
      <h3>Maximum of the Intersection</h3>

      <div class="p-equation">
        \[
          \boxed{\max P(A\cap B)=\min(a,b)}
        \]
      </div>

      <p>
        <strong>Intuition.</strong>
        The intersection is part of each event.
        Its probability cannot exceed that of the smaller event.
      </p>

      <p>
        <strong>How the bound is attained.</strong>
        Place the smaller event entirely inside the larger one.
        If \(b\leq a\), take \(B\subseteq A\).
        Then \(A\cap B=B\).
      </p>

      <details class="p-proof">
        <summary>Why the formula works</summary>

        <div class="p-proof-content">
          <p>
            Since \(A\cap B\subseteq A\) and
            \(A\cap B\subseteq B\),
          </p>

          <div class="p-math">
            \[
              P(A\cap B)\leq a,
              \qquad
              P(A\cap B)\leq b.
            \]
          </div>

          <p>
            Consequently \(P(A\cap B)\leq\min(a,b)\).
            Nesting the smaller event inside the larger one
            attains the bound.
          </p>
        </div>
      </details>

      <div class="p-note">
        <p>
          <strong>Example.</strong>
          If \(a=0.7\) and \(b=0.6\), then
        </p>
        <div class="p-math">
          \[
            \max P(A\cap B)=\min(0.7,0.6)=0.6.
          \]
        </div>
        <p>
          This is possible when \(B\subseteq A\).
        </p>
      </div>

    </article>

    <h3>A single method that gives all four bounds</h3>

    <p>
      Let \(x=P(A\cap B)\). The four disjoint regions
      determined by A and B have the following probabilities:
    </p>

    <div class="p-table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">Region</th>
            <th scope="col">Probability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Both: \(A\cap B\)</td>
            <td>\(x\)</td>
          </tr>
          <tr>
            <td>A only: \(A\cap B^c\)</td>
            <td>\(a-x\)</td>
          </tr>
          <tr>
            <td>B only: \(A^c\cap B\)</td>
            <td>\(b-x\)</td>
          </tr>
          <tr>
            <td>Neither: \(A^c\cap B^c\)</td>
            <td>\(1-a-b+x\)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      All four quantities must be nonnegative. This gives
      \(x\geq0\), \(x\leq a\), \(x\leq b\), and
      \(x\geq a+b-1\).
    </p>

    <div class="p-equation">
      \[
        \max(0,a+b-1)\leq x\leq\min(a,b).
      \]
    </div>

    <p>
      Conversely, every x in this interval produces four
      nonnegative probabilities summing to 1, so it defines
      a valid joint arrangement. This proves that the bounds
      are attainable when only the marginals are prescribed.
    </p>

    <p>
      Since \(P(A\cup B)=a+b-x\), the smallest intersection
      gives the largest union, and the largest intersection
      gives the smallest union.
    </p>

    <h3>Common mistakes</h3>

    <ul>
      <li>
        <strong>Assuming independence.</strong>
        The formula \(P(A\cap B)=ab\) requires independence.
        Marginal probabilities alone do not imply it.
      </li>
      <li>
        <strong>Forgetting the cap at 1.</strong>
        The maximum union is \(\min(1,a+b)\), not always \(a+b\).
      </li>
      <li>
        <strong>Forgetting the floor at 0.</strong>
        The minimum intersection is \(\max(0,a+b-1)\),
        not always \(a+b-1\).
      </li>
      <li>
        <strong>Confusing mutually exclusive and independent events.</strong>
        Mutually exclusive events have zero intersection.
        Independent events have intersection probability \(ab\).
        When both marginal probabilities are positive,
        these are different conditions.
      </li>
    </ul>

    <div class="p-note">
      <strong>Memory aid.</strong>
      The union is at least as large as the larger event.
      The intersection is at most as large as the smaller event.
      For the other two bounds, use the sum of the probabilities
      and enforce the limits 0 and 1.
    </div>

  </section>


  <section id="variance-standard-deviation-moments">

  <h2 class="p-section-title">
    Variance, Standard Deviation, and Moments
  </h2>

  <p>
    Let \(X\) be a random variable with finite second moment.
    Write \(\mu=E[X]\) and \(\sigma^2=\operatorname{Var}(X)\).
    The formulas below apply to both discrete and continuous
    random variables.
  </p>

  <article class="p-formula-box" id="variance-second-moment">

    <span class="p-tag">Variance and second moment</span>

    <h3>Calculate variance from the first two moments</h3>

    <div class="p-equation">
      \[
        \operatorname{Var}(X)
        =E[(X-\mu)^2]
        =E[X^2]-(E[X])^2
      \]
    </div>

    <div class="p-equation">
      \[
        E[X^2]=\operatorname{Var}(X)+(E[X])^2
      \]
    </div>

    <p>
      Variance measures the expected squared distance from the mean.
      To calculate it, subtract the square of the mean from the
      second raw moment.
    </p>

    <details class="p-proof">
      <summary>Show proof</summary>
      <div class="p-proof-content">
        <p>
          Expand the square and use linearity of expectation.
          Since \(\mu=E[X]\) is a constant,
        </p>

        <div class="p-math">
          \[
          \begin{aligned}
            \operatorname{Var}(X)
            &=E[(X-\mu)^2]\\
            &=E[X^2-2\mu X+\mu^2]\\
            &=E[X^2]-2\mu E[X]+\mu^2\\
            &=E[X^2]-2\mu^2+\mu^2\\
            &=E[X^2]-\mu^2.
          \end{aligned}
          \]
        </div>
      </div>
    </details>

    <div class="p-note">
      <p>
        <strong>Consequences.</strong>
        \(\operatorname{Var}(X)\geq 0\), so
        \(E[X^2]\geq(E[X])^2\).
        Equality holds exactly when \(X=\mu\) with probability 1.
      </p>
      <p>
        <strong>Common mistake.</strong>
        \(E[X^2]\) and \((E[X])^2\) are generally different.
        Their difference is the variance.
      </p>
    </div>

  </article>

  <article class="p-formula-box" id="variance-affine-transformation">

    <span class="p-tag">Shifting and scaling</span>

    <h3>Transform the mean and variance</h3>

    <p>For real constants \(a\) and \(b\),</p>

    <div class="p-equation">
      \[
        E[aX+b]=aE[X]+b
      \]
      \[
        \operatorname{Var}(aX+b)=a^2\operatorname{Var}(X).
      \]
    </div>

    <p>
      Adding a constant moves every value and the mean by the same
      amount, leaving the distances from the mean unchanged.
      Multiplying by \(a\) multiplies squared distances by \(a^2\).
    </p>

    <details class="p-proof">
      <summary>Show proof: adding a constant</summary>
      <div class="p-proof-content">
        <div class="p-math">
          \[
          \begin{aligned}
            \operatorname{Var}(X+b)
            &=E[(X+b-E[X+b])^2]\\
            &=E[(X+b-E[X]-b)^2]\\
            &=E[(X-E[X])^2]\\
            &=\operatorname{Var}(X).
          \end{aligned}
          \]
        </div>
      </div>
    </details>

    <details class="p-proof">
      <summary>Show proof: multiplying by a constant</summary>
      <div class="p-proof-content">
        <div class="p-math">
          \[
          \begin{aligned}
            \operatorname{Var}(aX)
            &=E[(aX)^2]-(E[aX])^2\\
            &=a^2E[X^2]-a^2(E[X])^2\\
            &=a^2\operatorname{Var}(X).
          \end{aligned}
          \]
        </div>

        <p>
          Combining scaling with translation gives
          \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)\).
          For example,
          \(\operatorname{Var}(3X)=9\operatorname{Var}(X)\).
        </p>
      </div>
    </details>

  </article>

  <article class="p-formula-box" id="standard-deviation">

    <span class="p-tag">Standard deviation</span>

    <h3>Express dispersion in the original units</h3>

    <div class="p-equation">
      \[
        \operatorname{SD}(X)=\sigma_X
        =\sqrt{\operatorname{Var}(X)}
      \]
      \[
        \operatorname{SD}(aX+b)
        =|a|\operatorname{SD}(X).
      \]
    </div>

    <p>
      If \(X\) is measured in dollars, its variance is measured in
      dollars squared, while its standard deviation is measured
      in dollars. Standard deviation is the root mean square
      distance from the mean.
    </p>

    <details class="p-proof">
      <summary>Show proof of the transformation rule</summary>
      <div class="p-proof-content">
        <div class="p-math">
          \[
          \begin{aligned}
            \operatorname{SD}(aX+b)
            &=\sqrt{\operatorname{Var}(aX+b)}\\
            &=\sqrt{a^2\operatorname{Var}(X)}\\
            &=|a|\operatorname{SD}(X).
          \end{aligned}
          \]
        </div>
        <p>
          The absolute value is necessary because a standard
          deviation cannot be negative.
        </p>
      </div>
    </details>

    <div class="p-note">
      <p>
        <strong>Interpretation.</strong>
        Standard deviation does not give a maximum possible distance
        from the mean. Knowing the mean and standard deviation alone
        does not determine the exact proportion of observations
        within one standard deviation of the mean.
      </p>
    </div>

  </article>

  <article class="p-formula-box" id="coefficient-of-variation">

    <span class="p-tag">Coefficient of variation</span>

    <h3>Measure dispersion relative to the mean</h3>

    <p>
      For a random variable with strictly positive mean,
      the coefficient of variation is
    </p>

    <div class="p-equation">
      \[
        \operatorname{CV}(X)
        =\frac{\sigma_X}{\mu_X}
        =\frac{\operatorname{SD}(X)}{E[X]}.
      \]
    </div>

    <p>
      It is dimensionless and may be expressed as a percentage.
      For example, a mean of 100 and a standard deviation of 20
      give a coefficient of variation of \(0.20=20\%\).
    </p>

    <div class="p-equation">
      \[
        \operatorname{CV}(cX)=\operatorname{CV}(X),
        \qquad c>0.
      \]
    </div>

    <details class="p-proof">
      <summary>Show proof of scale invariance</summary>
      <div class="p-proof-content">
        <p>For \(c>0\),</p>
        <div class="p-math">
          \[
          \begin{aligned}
            \operatorname{CV}(cX)
            &=\frac{\operatorname{SD}(cX)}{E[cX]}\\
            &=\frac{c\operatorname{SD}(X)}{cE[X]}\\
            &=\operatorname{CV}(X).
          \end{aligned}
          \]
        </div>
        <p>
          Thus, converting monetary amounts from dollars to cents
          does not change the coefficient of variation.
        </p>
      </div>
    </details>

    <div class="p-note">
      <p>
        <strong>Conditions and interpretation.</strong>
        The coefficient of variation is undefined when the mean
        is zero. Its usual interpretation as relative dispersion
        assumes a positive mean and a meaningful zero.
        With a fixed positive mean, increasing the standard
        deviation increases the coefficient of variation.
      </p>
      <p>
        Adding a constant generally changes the coefficient of
        variation: when \(E[X]+b>0\),
        \[
          \operatorname{CV}(X+b)
          =\frac{\operatorname{SD}(X)}{E[X]+b}.
        \]
      </p>
    </div>

  </article>

  <article class="p-formula-box" id="moment-terminology">

    <span class="p-tag">Moment terminology</span>

    <h3>Distinguish raw moments from central moments</h3>

    <p>
      For a positive integer \(k\), assuming the relevant moments exist:
    </p>

    <div class="p-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Terminology</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>\(E[X^k]\)</td>
            <td>\(k\)th raw moment, or moment about zero</td>
          </tr>
          <tr>
            <td>\(E[X]=\mu\)</td>
            <td>First raw moment; mean</td>
          </tr>
          <tr>
            <td>\(E[X^2]\)</td>
            <td>Second raw moment</td>
          </tr>
          <tr>
            <td>\(E[(X-\mu)^k]\)</td>
            <td>\(k\)th central moment</td>
          </tr>
          <tr>
            <td>\(E[X-\mu]=0\)</td>
            <td>First central moment</td>
          </tr>
          <tr>
            <td>\(E[(X-\mu)^2]=\sigma^2\)</td>
            <td>Second central moment; variance</td>
          </tr>
          <tr>
            <td>\(E[(X-a)^k]\)</td>
            <td>\(k\)th moment about a constant \(a\)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-note">
      <p>
        <strong>Useful connection.</strong>
        The second moment about \(a\) satisfies
        \[
          E[(X-a)^2]
          =\operatorname{Var}(X)+(E[X]-a)^2.
        \]
        It equals the variance when \(a=E[X]\).
      </p>
    </div>

  </article>

</section>

  <!-- Add future rules here, before the closing div. -->

</div>

<script>
(function () {
  const guide = document.getElementById('p-formula-guide');

  function typesetGuide() {
    const mj = window.MathJax;

    if (mj && typeof mj.typesetPromise === 'function') {
      const ready = mj.startup && mj.startup.promise
        ? mj.startup.promise
        : Promise.resolve();

      ready
        .then(function () {
          return mj.typesetPromise([guide]);
        })
        .catch(function (error) {
          console.error('Unable to render guide formulas:', error);
        });
    }
  }

  const existingLoader = document.querySelector(
    'script[src*="mathjax"], script[src*="MathJax"]'
  );

  if (
    window.MathJax &&
    typeof window.MathJax.typesetPromise === 'function'
  ) {
    typesetGuide();
  } else if (existingLoader) {
    existingLoader.addEventListener('load', typesetGuide, { once: true });
  } else {
    window.MathJax = {
      tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']]
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      }
    };

    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  }

  guide.querySelectorAll('details').forEach(function (details) {
    details.addEventListener('toggle', function () {
      if (details.open) {
        typesetGuide();
      }
    });
  });
})();
</script>
