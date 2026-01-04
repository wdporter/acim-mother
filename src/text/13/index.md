---js
const layout = "mylayout.njk"
const title = "The Guiltless World"
const volume = "T"
const chapter = 13
const reference = `${volume}-${chapter}`
const eleventyNavigation = {
	key: reference,
	title,
	parent: volume,
	order: 164,
	navFormat: `${chapter}. ${title}`
}
const prev = "/text/12/viii"
const next = "/text/13/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
