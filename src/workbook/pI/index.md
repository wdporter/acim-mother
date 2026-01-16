---js
const layout = "mylayout.njk"
const title = "Part I"
const volume = "W"
const reference = "W1"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 1
}
const prev = "/manual"
const next = "/workbook/pII"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}