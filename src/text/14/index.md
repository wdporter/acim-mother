---js
const prev = "/text/13/xi"
const next = "/text/14/i"
const chapter = 14
const title = "Bringing Illusions to Truth"
const volume = "Tx"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const layout = "mylayout.njk"
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}