---js
const title = "Lessons 241–250"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "241-250"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (3. What is the World?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 4,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/231-240/"
const next = "/workbook/251-260/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}