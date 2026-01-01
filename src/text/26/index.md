---js
const layout = "mylayout.njk"
const title = "The Transition"
const reference = "T-26"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

