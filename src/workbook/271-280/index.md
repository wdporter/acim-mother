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
<ul  class="list-none">
{%- for entry in navPages %}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key | split: "-" | last}}. {{ entry.title }}</a>
{%- endfor %}
</ul>