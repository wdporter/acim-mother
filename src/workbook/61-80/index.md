---js
const layout = "mylayout.njk"
const title = "Lessons 61 to 80"
const reference = "W-61–80"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: "W",
	order: 464
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}

