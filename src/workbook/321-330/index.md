---js
const layout = "mylayout.njk"
const title = "(321–330) 11. What is Creation"
const reference = "W-321–330"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 744
}
const templateEngineOverride = "njk"
---
{%- set navPages = collections.all | eleventyNavigation(reference) -%}
<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}
</ul>