---js
const layout = "mylayout.njk"
const title = "The Final Vision"
const volume = "T"
const chapter = 31
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 343
}
const prev = "/text/30/viii"
const next = "/text/31/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}