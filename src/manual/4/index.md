---js
const layout = "mylayout.njk"
const title = "What Are the Characteristics of God’s Teachers?"
const volume = "M"
const chapter = 4
const reference = `${volume}-${chapter}`
const headerTitle = `${chapter}. ${title}`
const eleventyNavigation = {
	key: reference,
	title: headerTitle,
	parent: volume,
	order: 805,
	indexPageTitle: headerTitle
}
const prev = "/manual/3"
const next = "/manual/4/i"

---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}


