---js
const layout = "mylayout.njk"
const title = "(321–330) 11. What is Creation"
const reference = "W-321–330"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "W",
	order: 744
}
const prev = "/workbook/311-320/320"
const next = "/workbook/321-330/11"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}