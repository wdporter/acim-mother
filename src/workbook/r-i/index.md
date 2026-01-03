---js
const layout = "mylayout.njk"
const title = "Lessons 51 to 60 — Review I"
const reference = "W-rI"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 453
}
const templateEngineOverride = "njk"
const prev = "/workbook/1-50/50"
const next = "/workbook/r-i/61"
---
{%- set navPages = collections.all | eleventyNavigation(reference) -%}
<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}
</ul>