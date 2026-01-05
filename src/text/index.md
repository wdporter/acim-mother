---js
const layout = "mylayout.njk"
const title = "Text"
const reference = "T"
const headerTitle = title
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 51
}
const prev = "/song/3/iv"
const next = "/text/in"
---

{% assign navPages = collections.all | eleventyNavigation: "T" %}
{%- render "indexpage", navPages: navPages  -%}

