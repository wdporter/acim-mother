---js
const title = "Review V: Lessons 171–180"
const volume = "W"
const part = "1"
const parent = `${volume}${part}`
const chapter = "171-180"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 11
}
const prev = "/workbook/p-i/151-170/"
const next = "/workbook/p-i/181-200/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}