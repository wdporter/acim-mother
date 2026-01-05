---js
const layout = "mylayout.njk"
const title = "The Idols of Sickness"
const volume = "T"
const chapter = 10
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 138
}
const prev = "/text/9/viii"
const next = "/text/10/in"
---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}

