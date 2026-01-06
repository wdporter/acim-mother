---js
const title = "The Goal of Specialness"
const chapter = 24
const prev = "/text/24/i"
const next = "/text/24/iii"
const layout = "mylayout.njk"
const volume = "T"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 275
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}