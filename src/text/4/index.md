---js
const prev = "/text/3/vii"
const next = "/text/4/in"
const title = "The Illusions of the Ego"
const chapter = 4
const layout = "mylayout.njk"
const volume = "T"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 79
}
---
{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
