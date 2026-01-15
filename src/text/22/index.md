---js
const layout = "mylayout.njk"
const title = "Salvation and the Holy Relationship"
const volume = "Tx"
const chapter = 22
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/21/ix"
const next = "/text/22/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}