---js
const layout = "mylayout.njk"
const title = "(291–300) 8. What is the Real World?"
const reference = "W-291–300"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "W",
	order: 709
}
const prev = "/workbook/281-290/290"
const next = "/workbook/291-300/8"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}