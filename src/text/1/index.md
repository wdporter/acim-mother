---js
const layout = "mylayout.njk"
const title = "The Meaning of Miracles"
const reference = "T-1"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 53,
	navFormat: `${reference.split("-")[1]}. ${title}`
}
const prev = "/text/in"
const next = "/text/1/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}