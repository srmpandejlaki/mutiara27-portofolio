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
          <div class="project-items">
            <img class="img-item" src="Macbook-Air-mamen-mdo.vercel.app.png" alt="Capstone Project MAMEN">
            <p>MAMEN <br> Manado Micro Enterprises Website</p>
          </div>
          <div class="project-items overlay">
            <img src="Macbook-Air-mamen-mdo.vercel.app.png" alt="Capstone Project MAMEN">
            <div class="overlay-desc">
              <h2>MAMEN <br> Manado Micro Enterprises Website</h2>
              <p>
                website ini akan membantu para pelaku UMKM dalam mempromosikan produk mereka khususnya yang berada di daerah Manado.
                Dalam website ini, pelaku UMKM dapat melihat informasi produk-produk mereka, promosi, testimoni, dan lain-lain.
                
              </p>
            </div>
          </div>
        </section>
        <section class="message-section">
          <h1>MESSAGE</h1>
        </section>
      </div>
    `
  },

  async afterRender() {
    // button on hero section
    const btnHero = document.querySelector('#btn-hero');
    const scroll = document.querySelector('#aboutSection');

    btnHero.addEventListener('click', () => {
      const scrolling = -50;
      const position = scroll.offsetTop + scrolling;

      window.scrollTo({ top: position, behavior:'smooth' });
    });

    // project-item pop up
    // Menggunakan kelas untuk elemen gambar jika ada banyak
    const projectItems = document.querySelector('.img-item');
    const target = document.querySelector('.overlay');
    
    projectItems.addEventListener('click', () => {
      if(target.style.display === 'none' || target.style.display === '') {
        target.style.display = 'block';
      } else {
        target.style.display = 'none';
      }
    });

    // Event listener untuk tombol tutup (dipasang sekali)
    // const closeBtn = document.querySelector('.close-btn');
    // closeBtn.addEventListener('click', () => {
    //   const overlay = document.querySelector('.overlay');
    //   overlay.classList.remove('active');
    // });
  }
};

export default Dashboard;