---js
const title = "Lessons 1–50"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "1-50"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 2
}
const prev = "/workbook/p-i/i"
const next = "/workbook/r-i"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%} 
