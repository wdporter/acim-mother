---js
const layout = "mylayout.njk"
const title = "What Are the Characteristics of God’s Teachers?"
const reference = "M-4"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 805
}
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key}} {{ entry.title }}</a></li>
{%- endfor %}
</ul>


