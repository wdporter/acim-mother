---js
const layout = "mylayout.njk"
const title = "The Holy Spirit’s Curriculum"
const reference = "T-12"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 155,
	navFormat: `12. ${title}`
}
const prev = "/text/11/viii"
const next = "/text/12/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
