---js
const layout = "mylayout.njk"
const title = "The Final Vision"
const volume = "T"
const chapter = 31
const reference = `${volume}-${chapter}`
const eleventyNavigation = {
	key: reference,
	title: title,
	parent: volume,
	order: 343,
	navFormat: `${chapter}. ${title}`
}
const prev = "/text/30/viii"
const next = "/text/31/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}