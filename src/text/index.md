---js
const layout = "mylayout.njk"
const title = "Text"
const reference = "T"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 51
}
---

{% assign navPages = collections.all | eleventyNavigation: "T" %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "-" | last}}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>

