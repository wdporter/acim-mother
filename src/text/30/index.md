---js
const title = "The New Beginning"
const chapter = 30
const prev = "/text/30/viii"
const next = "/text/31/i"
const layout = "mylayout.njk"
const volume = "T"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 333
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}