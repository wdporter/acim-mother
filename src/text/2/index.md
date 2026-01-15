---js
const layout = "mylayout.njk"
const title = "The Illusion of Separation"
const volume = "Tx"
const chapter = 2
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/1/ii"
const next = "/text/2/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
