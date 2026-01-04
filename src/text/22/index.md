---js
const layout = "mylayout.njk"
const title = "Salvation and the Holy Relationship"
const reference = "T-22"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 261,
	navFormat: "22. " + title
}
const prev = "/text/21/viii"
const next = "/text/22/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}