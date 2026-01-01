---js
const layout = "mylayout.njk"
const title = "What Are the Characteristics of God’s Teachers?"
const reference = "M-4"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

