---js
const title = "Lessons 121–140"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "121-140"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 8
}
const prev = "/workbook/p-i/r-iii/"
const next = "/workbook/p-i/r-iv/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}