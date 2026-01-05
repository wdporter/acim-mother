---js
const layout = "mylayout.njk"
const title = "Workbook for Students"
const reference = "W"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 401
}
const prev = "/text/31/viii"
const next = "/workbook/1-50/1"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}