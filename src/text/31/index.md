---js
const title = "The Simplicity of Salvation"
const chapter = 31
const prev = "/text/30"
const next = "/workbook/in"
const layout = "mylayout.njk"
const volume = "Tx"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}