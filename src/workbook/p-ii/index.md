---js
const layout = "mylayout.njk"
const title = "Part II"
const volume = "W"
const part = 2
const reference = `${volume}${part}`
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 2
}
const prev = "/workbook/p-i"
const next = "/manual"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}