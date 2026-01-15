---js
const layout = "mylayout.njk"
const title = "Retraining the Mind"
const volume = "Tx"
const chapter = 3
const reference = `${volume}:${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: chapter
}
const prev = "/text/2/vi"
const next = "/text/3/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
