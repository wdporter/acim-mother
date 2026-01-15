---js
const layout = "mylayout.njk"
const title = "Psychotherapy"
const reference = "P"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 5
}
const prev = "/use-of-terms"
const next = "/song"
---

<h3>Purpose, Process and Practice</h3>

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}

