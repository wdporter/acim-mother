---js
const layout = "mylayout.njk"
const title = "Lessons 1 to 50"
const reference = "W-1–50"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: "W",
	order: 403
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}
