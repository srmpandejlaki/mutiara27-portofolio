const Blog = {
  async render() {
    return `
      <div id='blog' class='container buildingAlert'>
        <h1>BLOG</h1>
        <img src="iceBear-kapak.jpg" alt="Sedang dalam Pengembangan">
        <p>Sepertinya owner sedang mengembangkan bagian ini</p>
      </div>
    `;
  },

  async afterRender() {}
};

export default Blog;