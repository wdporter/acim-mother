---js
const layout = "mylayout.njk"
const title = "God and the Ego"
const volume = "Tx"
const chapter = 10
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/9"
const next = "/text/11"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}

