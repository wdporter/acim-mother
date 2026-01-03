---js
const layout = "mylayout.njk"
const title = "God or the Ego"
const reference = "T-11"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 145
}
const prev = "/text/10/v"
const next = "/text/11/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>
