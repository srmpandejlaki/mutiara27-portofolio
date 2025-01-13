const AboutMe = {
  async render() {
    return `
      <div id="aboutMe" class="container">
          <h1>ABOUT ME</h1>
          <img src="iceBear-kapak.jpg" alt="Sedang dalam Pengembangan">
          <p>Sepertinya owner sedang mengembangkan bagian ini</p>
      </div>
    `;
  },

  async afterRender() {}
};

export default AboutMe;