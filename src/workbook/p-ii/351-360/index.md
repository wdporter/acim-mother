---js
const title = "Lessons 351–360"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "351-360"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (14. What am I?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 14,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/341-350/"
const next = "/workbook/361-365/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}