---js
const layout = "mylayout.njk"
const title = "The Innocent Perception"
const reference = "T-3"
const referenceParts = reference.split("-")
const eleventyNavigation = {
	key: reference,
	title,
	parent: referenceParts[0],
	order: 71,
	navFormat: `${referenceParts[1]}. ${title}`
}
const prev = "/text/2/viii"
const next = "/text/3/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
