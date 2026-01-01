---js
const layout = "mylayout.njk"
const title = "The Idols of Sickness"
const reference = "T-10"
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: reference[0]
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

