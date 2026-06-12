---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

Welcome to my portfolio. This space gathers my tools, articles, research notes, and technical projects in actuarial science, quantitative finance, mathematics, and programming.

{% assign portfolio_items = site.portfolio | sort: "date" | reverse %}

{% for post in portfolio_items %}
  {% include archive-single.html %}
{% endfor %}
