---js
const title = "Lessons 181–200"
const volume = "W"
const part = 1
const parent = `${volume}${part}`
const chapter = "181-200"
const reference = `${parent}:${chapter}`
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 12
}
const prev = "/workbook/p-vi/r-v/"
const next = "/workbook/p-i/r-vi"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}