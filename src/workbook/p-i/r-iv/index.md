---js
const title = "Review IV: Lessons 141–150"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "141-150"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 9
}
const prev = "/workbook/p-i/121-140/"
const next = "/workbook/p-i/151-170/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}