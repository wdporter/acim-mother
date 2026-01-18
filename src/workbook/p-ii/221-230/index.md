---js
const title = "Lessons 221–230"
const volume = "W"
const part = 2
const parent = `${volume}${part}`
const chapter = "221-230"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (1. What is Forgiveness?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 2,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-i/r-vi"
const next = "/workbook/231-240"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}