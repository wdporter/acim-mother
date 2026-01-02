---js
const layout = "mylayout.njk"
const title = "Workbook for Students"
const reference = "W"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 401
}
---

{% assign navPages = collections.all | eleventyNavigation: "W" %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
{%- endfor %}
</ul>