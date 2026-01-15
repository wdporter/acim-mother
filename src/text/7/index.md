---js
const layout = "mylayout.njk"
const title = "The Consistency of the Kingdom"
const volume = "Tx"
const chapter = 7
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/6/v-c"
const next = "/text/7/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
