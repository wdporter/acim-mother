---js
const layout = "mylayout.njk"
const title = "Use of Terms"
const reference = "C"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 4
}
const prev = "/manual/29"
const next = "/use-of-terms/1"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}



