---js
const layout = "mylayout.njk"
const title = "Lessons 181 to 200"
const reference = "W-181–200"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: "W",
	order: 589
}
---

{{ collections.all | eleventyNavigation: reference | eleventyNavigationToHtml }}
