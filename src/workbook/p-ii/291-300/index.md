---js
const title = "Lessons 291–300"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "291-300"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (8. What is the Real World?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 9,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/281-290/"
const next = "/workbook/p-ii/301-310/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}