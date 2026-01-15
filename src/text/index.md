---js
const layout = "mylayout.njk"
const title = "Text"
const reference = "Tx"
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 1
}
const prev = "/song/3/iv"
const next = "/text/in"
---

{% assign navPages = collections.all | eleventyNavigation: "Tx" %}
{%- render "indexpage", navPages: navPages  -%}

