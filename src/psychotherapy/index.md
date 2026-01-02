---js
const layout = "mylayout.njk"
const title = "Psychotherapy"
const reference = "P"
const hideReference = true
const eleventyNavigation = {
	key: reference,
	title,
	parent: "home",
	order: 901
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "-" | last}}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>



