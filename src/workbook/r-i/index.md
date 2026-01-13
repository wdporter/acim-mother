---js
const layout = "mylayout.njk"
const title = "Review I"
const volume = "W"
const chapter = "rI"
const reference = `${volume}-${chapter}`
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 453
}
const prev = "/workbook/1-50/50"
const next = "/workbook/r-i/61"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}