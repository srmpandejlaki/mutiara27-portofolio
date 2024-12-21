class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
      <p>copyright Mutii</p>
    </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);