---js
const title = "(271–280) 6. What is the Christ?"
const prev = "/workbook/261-270/270"
const next = "/workbook/271-280/6"
const reference = volume + "-271–280"
const layout = "mylayout.njk"
const volume = "W"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 687
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}