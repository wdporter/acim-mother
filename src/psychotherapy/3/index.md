---js
const layout = "mylayout.njk"
const title = "The Process of Psychotherapy"
const volume = "P"
const chapter = 3
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/psychotherapy/2"
const next = "/psychotherapy/4"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
