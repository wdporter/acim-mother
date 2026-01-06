---js
const layout = "mylayout.njk"
const title = "(301–310) 9. What is the Second Coming?"
const volume = "W"
const reference = volume + "-301–310"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 720
}
const prev = "/workbook/291-300/300"
const next = "/workbook/301-310/9"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
