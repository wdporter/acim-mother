---js
const title = "Lessons 321–330"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "321-330"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (11. What is Creation?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 12,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/311-320/"
const next = "/workbook/p-ii/321-330/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}