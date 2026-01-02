---js
const layout = "mylayout.njk"
const title = "Lessons 61 to 80"
const reference = "W-61–80"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: "W",
	order: 464
}
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key}} {{ entry.title }}</a></li>
{%- endfor %}
</ul>
