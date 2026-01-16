---js
const layout = "mylayout.njk"
const title = "The Inner Picture"
const volume = "Tx"
const chapter = 21
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/20"
const next = "/text/22"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
