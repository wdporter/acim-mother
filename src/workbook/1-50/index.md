---js
const layout = "mylayout.njk"
const title = "Lessons 1 to 50"
const volume = "W"
const reference = volume + "-1–50"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 2
}
const prev = "/workbook/in"
const next = "/workbook/1-50/1"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}