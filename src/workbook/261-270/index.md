---js
const title = "(261–270) 5. What is the Body?"
const prev = "/workbook/251-260/260"
const next = "/workbook/261-270/5"
const volume = "W"
const reference = volume + "-261–270"
const layout = "mylayout.njk"
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 676
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}