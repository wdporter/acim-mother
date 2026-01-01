---js
const layout = "mylayout.njk"
const title = "The Innocent Perception"
const reference = "T-3"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

