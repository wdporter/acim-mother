---js
const layout = "mylayout.njk"
const title = "The Idols of Sickness"
const reference = "T-10"
const referenceParts = reference.split("-")
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 138,
	navFormat: `${referenceParts[1]}. ${title}`
}
const prev = "/text/9/viii"
const next = "/text/10/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}

