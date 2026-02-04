---js
const title = "Review II: Lessons 81–90"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "81-90"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 5
}
const prev = "/workbook/p-i/61-80"
const next = "/workbook/p-i/91-110"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}