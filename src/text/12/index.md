---js
const layout = "mylayout.njk"
const title = "The Problem of Guilt"
const volume = "Tx"
const chapter = 12
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/11"
const next = "/text/13"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
