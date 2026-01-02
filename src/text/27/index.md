---js
const layout = "mylayout.njk"
const title = "The Healing of the Dream"
const reference = "T-27"
const eleventyNavigation = {
	key: reference,
	title: title,
	parent: reference[0],
	order: 306
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key}} {{ entry.title }}</a></li>
{%- endfor %}
</ul>

