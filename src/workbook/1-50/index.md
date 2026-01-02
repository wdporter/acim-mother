---js
const layout = "mylayout.njk"
const title = "Lessons 1 to 50"
const reference = "W-1–50"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: "W",
	order: 403
}
const templateEngineOverride = "njk"
---

{%- set navPages = collections.all | eleventyNavigation(reference) -%}

<ul  class="list-none">
{%- for entry in navPages -%}
  <li class="pl-8 -indent-8"><a href="{{ entry.url }}">{{ entry.key.split(r/\.|-/) | last}}. {{ entry.title }}</a>
{%- endfor -%}

</ul>