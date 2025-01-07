class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
      <p>&#169 copyright Mutii 2024</p>
    </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);