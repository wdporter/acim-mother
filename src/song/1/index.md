---js
const layout = "mylayout.njk"
const title = "Prayer"
const volume = "S"
const chapter = 1
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 922
}
const prev = "/psychotherapy/3/iii"
const next = "/song/1/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
