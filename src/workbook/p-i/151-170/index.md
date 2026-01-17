---js
const title = "Lessons 151–170"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "151-170"
const reference = `${parent}:${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 10
}
const prev = "/workbook/p-i/r-iv/"
const next = "/workbook/p-i/r-v/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}