---js
const title = "Prayer"
const chapter = 1
const prev = "/psychotherapy/4"
const next = "/song/2/"
const layout = "mylayout.njk"
const volume = "S"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
