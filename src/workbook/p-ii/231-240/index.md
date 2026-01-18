---js
const title = "Lessons 231–240"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "231-240"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (2. What is Salvation?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 3,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/221-230/"
const next = "/workbook/p-ii/241-250/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}