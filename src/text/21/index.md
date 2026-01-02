---js
const layout = "mylayout.njk"
const title = "Reason and Perception"
const reference = "T-21"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 251
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>
