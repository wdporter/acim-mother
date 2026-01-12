---js
const prev = "/text/14/xi"
const next = "/text/15/i"
const chapter = 15
const title = "The Holy Instant"
const volume = "T"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 190
}
const layout = "mylayout.njk"
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}