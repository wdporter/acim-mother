---js
const layout = "mylayout.njk"
const title = "The Process of Psychotherapy"
const reference = "P-2"
const eleventyNavigation = {
	key: reference,
	title,
	parent: reference[0],
	order: 904
}
const prev = "/psychotherapy/1"
const next = "/psychotherapy/2/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key}} {{ entry.title }}</a></li>
{%- endfor %}
</ul>
