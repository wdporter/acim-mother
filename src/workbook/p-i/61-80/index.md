---js
const title = "Lessons 61–80"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "61-80"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 4
}
const prev = "/workbook/p-i/r-i"
const next = "/workbook/p-i/r-ii"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}