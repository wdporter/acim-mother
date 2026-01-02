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
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key}} {{ entry.title }}</a></li>
{%- endfor %}
</ul>
