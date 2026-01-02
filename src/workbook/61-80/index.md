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
const templateEngineOverride = "njk"
---
{%- set navPages = collections.all | eleventyNavigation(reference) -%}
<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}
</ul>