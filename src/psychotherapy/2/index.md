---js
const layout = "mylayout.njk"
const title = "The Process of Psychotherapy"
const reference = "P-2"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 904,
	navFormat: `${reference.split("-")[1]}. ${title}`
}
const prev = "/psychotherapy/1"
const next = "/psychotherapy/2/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
