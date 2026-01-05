---js
const layout = "mylayout.njk"
const title = "The Holy Spirit’s Curriculum"
const volume = "T"
const chapter = 12
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 155
}
const prev = "/text/11/viii"
const next = "/text/12/i"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
{%- render "indexpage", navPages: navPages  -%}
