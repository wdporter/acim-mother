---js
const layout = "mylayout.njk"
const title = "Reason and Perception"
const reference = "T-21"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

