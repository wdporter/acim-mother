---js
const title = "Review VI: Lessons 201–220"
const volume = "W"
const part = "1"
const parent = `${volume}${part}`
const chapter = "201-220"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 13
}
const prev = "/workbook/p-i/181-200/"
const next = "/workbook/p-ii/i"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{% render "indexpage", navPages: navPages  -%}