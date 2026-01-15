---js
const prev = "/text/28/viii"
const next = "/text/29/i"
const title = "The Awakening"
const chapter = 29
const volume = "Tx"
const layout = "mylayout.njk"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  %}