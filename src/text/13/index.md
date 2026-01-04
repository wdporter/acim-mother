---js
const layout = "mylayout.njk"
const title = "The Guiltless World"
const reference = "T-13"
const eleventyNavigation = {
	key: reference,
	title,
	parent: "T",
	order: 164
}
const prev = "/text/12/viii"
const next = "/text/13/in"
---

{% assign navPages = collections.all | eleventyNavigation: reference %}
<ul class="list-none">
{%- for entry in navPages %}
  <li><a href="{{ entry.url }}">{{ entry.key | split: "." | last }}. {{ entry.title }}</a></li>
{%- endfor %}
</ul>
