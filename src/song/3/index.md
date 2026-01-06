---js
const title = "Healing"
const chapter = 3
const prev = "/song/2/iii"
const next = "/song/3/in"
const layout = "mylayout.njk"
const volume = "S"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 934
}
---
{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}
