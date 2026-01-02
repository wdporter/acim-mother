---js
const layout = "mylayout.njk"
const title = "(321–330) 11. What is Creation"
const reference = "W-321–330"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title: `${title}`,
	parent: reference[0],
	order: 744
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.title }}</a></li>
{%- endfor %}
</ul>

