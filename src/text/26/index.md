---js
const layout = "mylayout.njk"
const title = "The Transition"
const reference = "T-26"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 295
}
const prev = "/text/25/ix"
const next = "/text/26/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>
