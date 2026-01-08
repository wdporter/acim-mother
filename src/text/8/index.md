---js
const layout = "mylayout.njk"
const title = "The Journey Back"
const volume = "T"
const chapter = 8
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 119
}
const prev = "/text/8/viii"
const next = "/text/9/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}