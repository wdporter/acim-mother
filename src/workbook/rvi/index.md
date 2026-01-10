---js
const prev = "/workbook/181-2000/200"
const next = "/workbook/r-vi/in"
const title = "Review VI"
const chapter = "rVI"
const layout = "mylayout.njk"
const volume = "W"
const reference = `${volume}-${chapter}`
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 609
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{% render "indexpage", navPages: navPages  -%}