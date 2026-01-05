---js
const layout = "mylayout.njk"
const title = "The Transition"
const volume = "T"
const chapter = 26
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 295
}
const prev = "/text/25/ix"
const next = "/text/26/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
