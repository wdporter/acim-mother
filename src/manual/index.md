---js
const layout = "mylayout.njk"
const title = "Manual for Teachers"
const reference = "M"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 3
}
const prev = "/workbook"
const next = "/use-of-terms"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
