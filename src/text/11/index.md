---js
const layout = "mylayout.njk"
const title = "God or the Ego"
const reference = "T-11"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

