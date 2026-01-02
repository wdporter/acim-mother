---js
const layout = "mylayout.njk"
const title = "The Idols of Sickness"
const reference = "T-10"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 138
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>

