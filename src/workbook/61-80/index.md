---js
const layout = "mylayout.njk"
const title = "Lessons 61 to 80"
const volume = "W"
const reference = volume + "-61–80",
headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 464
}
const prev = "/workbook/r-i/60"
const next = "/workbook/61-80/61"

---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}