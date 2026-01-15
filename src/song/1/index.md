---js
const title = "Prayer"
const chapter = 1
const prev = "/psychotherapy/3/iii"
const next = "/song/1/in"
const layout = "mylayout.njk"
const volume = "S"
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 922
}
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
