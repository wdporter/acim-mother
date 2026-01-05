---js
const layout = "mylayout.njk"
const title = "The Process of Psychotherapy"
const volume = "P"
const chapter = 2
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 904
}
const prev = "/psychotherapy/1"
const next = "/psychotherapy/2/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
