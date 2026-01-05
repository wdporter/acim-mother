---js
const layout = "mylayout.njk"
const title = "Manual for Teachers"
const reference = "M"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 801
}
const prev = "/workbook/ep"
const next = "/manual/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
