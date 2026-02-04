---js
const prev = "/text/4"
const next = "/text/6"
const title = "Healing and Wholeness"
const chapter = 5
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
