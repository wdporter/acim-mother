---js
const title = "Lessons 271–280"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "271-280"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (6. What is the Christ?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 7,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/261-270/"
const next = "/workbook/p-ii/281-290/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}