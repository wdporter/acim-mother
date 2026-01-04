---js
const layout = "mylayout.njk"
const title = "The Final Vision"
const reference = "T-31"
const eleventyNavigation = {
	key: reference,
	title: title,
	parent: reference[0],
	order: 343
}
const prev = "/text/30/viii"
const next = "/text/31/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
<ul class="list-none">
{%- for entry in navPages -%}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor -%}
</ul>