---js
const layout = "mylayout.njk"
const title = "The Vision of Holiness"
const reference = "T-20"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

