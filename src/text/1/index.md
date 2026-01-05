---js
const layout = "mylayout.njk"
const title = "The Meaning of Miracles"
const volume = "T"
const chapter = 1
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 53
}
const prev = "/text/in"
const next = "/text/1/i"
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}