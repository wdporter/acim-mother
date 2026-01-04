---js
const layout = "mylayout.njk"
const title = "Reason and Perception"
const reference = "T-21"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 251,
	navFormat: "21. " + title
}
const prev = "/text/20/viii"
const next = "/text/20/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
