class AcimOrgLink extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const a = document.createElement("a")
		a.setAttribute("href", `https://acim.org/acim/en/s/${this.getAttribute("pageNumber")}?wid=toc` )
		a.setAttribute("title", "view on acim.org")
		a.classList.add("whitespace-nowrap", "not-italic")
		a.textContent = this.getAttribute("reference")
		this.appendChild(a)
	}
}

customElements.define("acim-org-link", AcimOrgLink)