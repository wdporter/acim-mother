---js
const prev = "/text/13/xi"
const next = "/text/14/in"
const chapter = 14
const title = "Teaching for Truth"
const volume = "T"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 177
}
const layout = "mylayout.njk"
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}