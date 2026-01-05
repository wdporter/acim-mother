---js
const layout = "mylayout.njk"
const title = "The Healing of the Dream"
const volume = "T"
const chapter = 27
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 306
}
const prev = "/text/26/x"
const next = "/text/27/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}