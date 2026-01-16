---js
const prev = "/text/18"
const next = "/text/20"
const title = "Beyond the Body"
const chapter = 19
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
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}

