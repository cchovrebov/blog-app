export default class Post {
  constructor(options) {
    this._userId = options.userId;
    this._id = options.id;
    this._title = options.title;
    this._body = options.body;
    this._style = options.style;
  }

  returnHTML() {
    return `
      <article
        style="${this._style}"
        id="${this._id}"
      >
        <h3>${this._title}</h3>
        <p>${this._body}</p>
      </article>
    `
  }
}