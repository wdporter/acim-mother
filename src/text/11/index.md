---js
const layout = "mylayout.njk"
const title = "God or the Ego"
const volume = "T"
const chapter = 11
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 145
}
const prev = "/text/10/v"
const next = "/text/11/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}