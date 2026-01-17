---js
const title = "Lessons 91–110"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "91-110"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 6
}
const prev = "/workbook/p-i/r-ii/"
const next = "/workbook/p-i/r-iii/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}