---js
const layout = "mylayout.njk"
const title = "Prayer"
const reference = "S-1"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 922,
	navFormat: `${reference.split("-")[1]}. ${title}`
}
const prev = "/psychotherapy/3/iii"
const next = "/song/1/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
