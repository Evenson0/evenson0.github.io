---
layout: archive
title: "Mathematical Workshop"
permalink: /workshop/
author_profile: true
---

{% include base_path %}

<p>A recurring series of mathematical problems, short explorations, and elegant solutions.</p>

{% capture written_year %}'None'{% endcapture %}
{% assign workshop_posts = site.posts | where: "series", "mathematical-workshop" %}

{% for post in workshop_posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
