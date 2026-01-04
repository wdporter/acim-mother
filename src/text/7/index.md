---js
const layout = "mylayout.njk"
const title = "The Gifts of the Kingdom"
const reference = "T-7"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 107
}
const prev = "/text/6/iv-c"
const next = "/text/7/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
<ul class="list-none">
{%- for entry in navPages -%}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor -%}
</ul>
