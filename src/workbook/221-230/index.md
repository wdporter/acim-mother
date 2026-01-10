---js
const title = "(221–230) 1. What is Forgiveness?"
const prev = "/workbook/pii/in"
const next = "/workbook/221-230/1"
const volume = "W"
const reference = volume + "-221–230"
const layout = "mylayout.njk"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 632
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}