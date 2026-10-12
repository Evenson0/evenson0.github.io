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

{% include soa-p-guide-sections.html %}

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
