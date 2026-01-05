---js
const layout = "mylayout.njk"
const title = "The Gifts of the Kingdom"
const volume = "T"
const chapter = 7
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 107
}
const prev = "/text/6/iv-c"
const next = "/text/7/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
