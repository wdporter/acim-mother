---js
const layout = "mylayout.njk"
const title = "Clarification of Terms"
const reference = "C"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 851
}
const prev = "/manual/29"
const next = "/clarification/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}



