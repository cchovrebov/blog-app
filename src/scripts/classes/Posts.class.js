import Post from './Post.class';

export default class Posts {
  constructor(options) {
    this.$postsContainer = document.querySelector(options.selector);
    this._posts = options.posts;
  }

  renderPosts() {
    this.$postsContainer.innerHTML = '';
    for (let post of this._posts) {
      this.$postsContainer.innerHTML += new Post({
        ...post,
        style: `
          background: red;
          padding: 15px;
          margin: 10px 0;
        `
      }).returnHTML();
    }
  }
}