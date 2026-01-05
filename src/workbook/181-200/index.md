---js
const layout = "mylayout.njk"
const title = "Lessons 181 to 200"
const volume = "W"
const reference = volume + "-181–200"
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 589
}
const prev = "/workbook/r-v/180"
const next = "/workbook/181-200/181"

---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}