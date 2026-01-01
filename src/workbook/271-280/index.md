---js
const layout = "mylayout.njk"
const title = "(271–280) 6. What is the Christ?"
const reference = "W-271–280"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 687
}
---




{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul>
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
{%- endfor %}
</ul>

