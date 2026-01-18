---js
const title = "Lessons 301–310"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "301-310"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (9. What is the Second Coming?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 10,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/291-300/"
const next = "/workbook/p-ii/311-320/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
