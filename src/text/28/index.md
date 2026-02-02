---js
const layout = "mylayout.njk"
const title = "The Undoing of Fear"
const volume = "Tx"
const chapter = 28
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/27"
const next = "/text/29"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}