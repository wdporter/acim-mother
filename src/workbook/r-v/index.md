---js
const layout = "mylayout.njk"
const title = "Review V"
const volume = "W"
const chapter = "rV"
const reference = `${volume}-${chapter}`
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 577
}
const prev = "/workbook/151-170/170"
const next = "/workbook/r-v/in"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}