---js
const layout = "mylayout.njk"
const title = "The Innocent Perception"
const reference = "T-3"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 71
}
const prev = "/text/2/viii"
const next = "/text/3/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>
