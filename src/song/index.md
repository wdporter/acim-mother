---js
const title = "Song of Prayer"
const reference = "S"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 6
}
const prev = "/psychotherapy"
const next = "/text"
const layout = "mylayout.njk"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}



