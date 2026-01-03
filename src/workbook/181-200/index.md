---js
const layout = "mylayout.njk"
const title = "Lessons 181 to 200"
const reference = "W-181–200"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: "W",
	order: 589
}
const templateEngineOverride = "njk"
const prev = "/workbook/r-v/180"
const next = "/workbook/181-200/181"

---
{%- set navPages = collections.all | eleventyNavigation(reference) -%}
<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}
</ul>