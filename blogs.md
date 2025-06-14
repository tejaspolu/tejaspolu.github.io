---
layout: blogs
title: My Blog 📝
permalink: /blog/
---

<div class="blog-list">
  {% for blog in site.blogs %}
  <div class="blog-summary">
    <h2><a href="{{ blog.url }}">{{ blog.title }}</a></h2>
    <p><small>Published on {{ blog.date | date: "%B %d, %Y" }}</small></p>
    <p><em>{{ blog.synopsis }}</em></p>
  </div>
  <hr>
  {% endfor %}
</div>
