---js
const title = "Lessons 261–270"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "261-270"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (5. What is the Body?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 6,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/251-260/"
const next = "/workbook/p-ii/271-280/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}