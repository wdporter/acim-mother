---js
const layout = "mylayout.njk"
const title = "Workbook for Students"
const reference = "W"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 2
}
const prev = "/text"
const next = "/manual"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}