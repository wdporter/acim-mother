---js
const title = "Lessons 311–320"
const volume = "W"
const part = "2"
const parent = `${volume}${part}`
const chapter = "311-320"
const reference = `${parent}:${chapter}`
const indexPageTitle = `${title} (10. What is the Last Judgement?)`
const eleventyNavigation = {
	key: reference,
	title,
	parent,
	order: 10,
	indexPageTitle,
	menuTitle: indexPageTitle
}
const prev = "/workbook/p-ii/301-310/"
const next = "/workbook/p-ii/321-330/"
const layout = "mylayout.njk"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
