---js
const layout = "mylayout.njk"
const title = "The Body and the Dream"
const volume = "Tx"
const chapter = 27
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/26"
const next = "/text/28"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}