---js
const layout = "mylayout.njk"
const title = "The Meaning of Miracles"
const reference = "T-1"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 53
}
const prev = "/text/in"
const next = "/text/1/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
<ul class="list-none">
{%- for entry in navPages -%}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor -%}
</ul>