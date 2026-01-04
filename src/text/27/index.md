---js
const layout = "mylayout.njk"
const title = "The Healing of the Dream"
const reference = "T-27"
const eleventyNavigation = {
	key: reference,
	title: title,
	parent: reference[0],
	order: 306,
	navFormat: "27. " + title
}
const prev = "/text/26/x"
const next = "/text/27/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}