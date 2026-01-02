---js
const layout = "mylayout.njk"
const title = "(291–300) 8. What is the Real World?"
const reference = "W-291–300"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 709
}
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
{%- endfor %}
</ul>