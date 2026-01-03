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
const templateEngineOverride = "njk"
const prev = "/workbook/261-270/270"
const next = "/workbook/271-280/6"
---

{%- set navPages = collections.all | eleventyNavigation(reference) -%}

<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}

</ul>