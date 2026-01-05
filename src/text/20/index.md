---js
const layout = "mylayout.njk"
const title = "The Vision of Holiness"
const volume = "T"
const chapter = 20
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 242
}
const prev = "/text/19/iv-d"
const next = "/text/20/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
