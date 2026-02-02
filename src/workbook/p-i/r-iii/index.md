---js
const title = "Review III: Lessons 111–120"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "111-120"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 7
}
const prev = "/workbook/p-i/91-110/"
const next = "/workbook/p-i/121-140/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}