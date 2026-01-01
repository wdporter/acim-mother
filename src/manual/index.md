---js
const layout = "mylayout.njk"
const title = "Manual for Teachers"
const reference = "M"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${reference} ${title}`,
	parent: "home",
	order: 801
}
---

{{ collections.all | eleventyNavigation: "M" | eleventyNavigationToHtml }}



