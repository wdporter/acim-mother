---js
const layout = "mylayout.njk"
const title = "Lessons 51 to 60 — Review I"
const reference = "W-rI"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 453
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}


