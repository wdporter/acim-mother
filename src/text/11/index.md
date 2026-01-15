---js
const layout = "mylayout.njk"
const title = "God’s Plan for Salvation"
const volume = "Tx"
const chapter = 11
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/10/viii"
const next = "/text/11/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}