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
const templateEngineOverride = "njk"
const prev = "/workbook/281-290/290"
const next = "/workbook/291-300/8"
---
{%- set navPages = collections.all | eleventyNavigation(reference) -%}
<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}
</ul>