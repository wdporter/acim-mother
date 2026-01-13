---js
const layout = "mylayout.njk"
const title = "Review IV"
const volume = "W"
const chapter = "rIV"
const reference = `${volume}-${chapter}`
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 546
}
const prev = "/workbook/121-140/140"
const next = "/workbook/r-iv/in"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}