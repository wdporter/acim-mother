---js
const layout = "mylayout.njk"
const title = "The Transition"
const reference = "T-26"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 295,
	navFormat: "26. " + title
}
const prev = "/text/25/ix"
const next = "/text/26/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
