---js
const layout = "mylayout.njk"
const title = "Song of Prayer"
const reference = "S"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 922
}
const prev = "/psychotherapy/3/iii"
const next = "/song/1/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}



