---js
const prev = "/text/15/xi"
const next = "/text/16/i"
const title = "The Forgiveness of Illusions"
const chapter = 16
const volume = "T"
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 202
}
const layout = "mylayout.njk"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}

