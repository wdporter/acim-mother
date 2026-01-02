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
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key | split: "-" | last}}. {{ entry.title }}</a>
{%- endfor %}
</ul>
