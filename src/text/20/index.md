---js
const layout = "mylayout.njk"
const title = "The Vision of Holiness"
const reference = "T-20"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 242
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>
