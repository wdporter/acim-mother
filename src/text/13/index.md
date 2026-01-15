---js
const layout = "mylayout.njk"
const title = "From Perception to Knowledge"
const volume = "Tx"
const chapter = 13
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 13
}
const prev = "/text/12/vii"
const next = "/text/13/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
