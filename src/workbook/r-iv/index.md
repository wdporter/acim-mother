---js
const layout = "mylayout.njk"
const title = "Lessons 141 to 150 — Review IV"
const reference = "W-rIV"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 546
}
const templateEngineOverride = "njk"
const prev = "/workbook/121-140/140"
const next = "/workbook/r-iv/in"
---
{%- set navPages = collections.all | eleventyNavigation(reference) -%}
<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}
</ul>