---js
const prev = "/text/19/v-d"
const next = "/text/20/i"
const title = "The Promise of the Resurrection"
const chapter = 20
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
