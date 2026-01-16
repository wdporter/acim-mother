---js
const title = "Review I: Lessons 51–60"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "51-60"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 3
}
const prev = "/workbook/p-i/1-50"
const next = "/workbook/p-i/61-80"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}