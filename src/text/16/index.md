---js
const prev = "/text/15"
const next = "/text/17"
const title = "The Forgiveness of Illusions"
const chapter = 16
const volume = "Tx"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const layout = "mylayout.njk"
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}

