---js
const layout = "mylayout.njk"
const title = "(351–360) 14. What am I?"
const reference = "W-351–360"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "W",
	order: 775
}
const prev = "/workbook/341-350/350"
const next = "/workbook/351-360/14"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}