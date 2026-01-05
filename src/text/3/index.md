---js
const layout = "mylayout.njk"
const title = "The Innocent Perception"
const volume = "T"
const chapter = 3
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 71
}
const prev = "/text/2/viii"
const next = "/text/3/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
