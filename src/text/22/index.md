---js
const layout = "mylayout.njk"
const title = "Salvation and the Holy Relationship"
const volume = "T"
const chapter = 22
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 261
}
const prev = "/text/21/viii"
const next = "/text/22/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}