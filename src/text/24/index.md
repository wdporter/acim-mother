---js
const title = "Specialness and Separation"
const chapter = 24
const prev = "/text/23"
const next = "/text/25"
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