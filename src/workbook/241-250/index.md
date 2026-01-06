---js
const title = "(241–250) 3. What is the World?"
const prev = "/workbook/231-240/240"
const next = "/workbook/241-250/3"
const volume = "W"
const reference = volume + "-241–250"
const layout = "mylayout.njk"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 654
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}