---js
const layout = "mylayout.njk"
const title = "Psychotherapy"
const reference = "P"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 901
}
const prev = "/clarification/ep"
const next = "/psychotherapy/2/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
</ul>



