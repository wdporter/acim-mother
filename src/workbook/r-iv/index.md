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
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key}} {{ entry.title }}</a></li>
{%- endfor %}
</ul>
