import Post, { Options as PostOptions } from './Post.class';

interface Options {
  selector: string;
  posts: PostOptions[];
}

export default class Posts {
  $postsContainer: HTMLElement;
  _posts: PostOptions[];

  constructor(options: Options) {
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