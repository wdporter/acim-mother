---js
const prev = "/text/3/ix"
const next = "/text/4/i"
const title = "The Root of All Evil"
const chapter = 4
const layout = "mylayout.njk"
const volume = "Tx"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
