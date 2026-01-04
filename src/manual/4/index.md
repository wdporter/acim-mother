---js
const layout = "mylayout.njk"
const title = "What Are the Characteristics of God’s Teachers?"
const reference = "M-4"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 805,
	navFormat: `${reference.split("-")[1]}. ${title}`
}
const prev = "/manual/3"
const next = "/manual/4/i"

---

{%- assign navPages = collections.all | eleventyNavigation: reference -%}
{%- render "indexpage", navPages: navPages  -%}


