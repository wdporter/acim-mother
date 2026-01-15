---js
const prev = "/workbook/r-ii/90"
const next = "/workbook/91-110/91"
const title = "Lessons 91 to 110"
const volume = "W"
const reference = volume + "-91–110"
const layout = "mylayout.njk"
headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 6
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}