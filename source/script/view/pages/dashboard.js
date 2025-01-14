const Dashboard = {
  async render() {
    return `
      <div id="dashboard" class="container">
        <section class="hero-section">
          <div class="black-filter"></div>
            <div class="heroDesc">
              <h3>Code is an art, and the masterpiece is always a work in progress!!</h3>
              <button id="btn-hero">Track the Owner</button>
          </div>
        </section>
        <section id="aboutSection" class="aboutMe-section">
          <h1>ABOUT ME</h1>
          <div class="profilContainer">
            <div class="profil">
              <img src="ice-bear.jpg" alt="Foto Profil">
              <p><a href="#/about-me">Sesilia Pandejlaki</a></p>
            </div>
            <p class="desc">Seorang mahasiswa semester lima yang mendapatkan motivasi untuk terus berkembang dan belajar hal baru demi mencapai cita-citanya karena berhasil masuk ke dunia teknologi khususnya di bidang Web Development.</p>
          </div>
          <div class="iconConnection">
            <p>Ayo Terhubung</p>
            <div class="icon">
              <a href="https://www.linkedin.com/in/sesilia-pandejlaki/"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/srmpandejlaki"><i class="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/mutiarapandejlaki27/?hl=en"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-regular fa-envelope"></i></a>
            </div>
          </div>
        </section>
        <section class="projects-section">
          <h1>PROJECTS</h1>
          <div class="buildingAlert">
            <img src="iceBear-kapak.jpg" alt="Sedang dalam Pengembangan">
            <p>Sepertinya owner sedang mengembangkan bagian ini</p>
          </div>
        </section>
        <section class="message-section">
          <h1>MESSAGE</h1>
        </section>
      </div>
    `
  },

  async afterRender() {
    const btnHero = document.querySelector('#btn-hero');
    const scroll = document.querySelector('#aboutSection');

    btnHero.addEventListener('click', () => {
      const scrolling = -50;
      const position = scroll.offsetTop + scrolling;

      window.scrollTo({ top: position, behavior:'smooth' });
    });
  }
};

export default Dashboard;