---js
const layout = "mylayout.njk"
const title = "Reason and Perception"
const volume = "T"
const chapter = 21
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 251
}
const prev = "/text/20/viii"
const next = "/text/20/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
