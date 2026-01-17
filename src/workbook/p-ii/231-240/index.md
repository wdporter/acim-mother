---js
const title = "(231–240) 2. What is Salvation?"
const prev = "/workbook/221-230/230"
const next = "/workbook/241-250/3"
const volume = "W"
const reference = volume + "-231–240"
const layout = "mylayout.njk"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 643
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}