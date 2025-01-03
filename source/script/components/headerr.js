class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header">
      <div class="logo">
        <p>Mu<span>Di</span>.io</p>
        <p class="descLogo">Mutiara Digital Portofolio</p>
      </div>
      <nav class="navbar-list">
        <ul>
          <li><a href="#/home">Dashboard</a></li>
          <li><a href="#/about-me">About Me</a></li>
          <li><a href="#/journey">Journey</a></li>
          <li><a href="#/blog">Blog</a></li>
        </ul>
      </nav>
    </div>
    `;
  }
}

customElements.define('header-bar', HeaderBar);