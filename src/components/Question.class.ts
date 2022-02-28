import * as moment from 'moment';

export interface Options {
  title: string;
  body: string;
  id?: string;
  userEmail?: string;
  date?: string;
}
export default class Question {
  private _userEmail: string;
  private _id: string;
  private _title: string;
  private _body: string;
  private _date: string;
  private _isExpanded: boolean = false;

  constructor(options: Options) {
    this._userEmail = options.userEmail;
    this._id = options.id;
    this._title = options.title;
    this._body = options.body;
    this._date = options.date || moment().format('YYYY-MM-DD HH:mm:ss');
  }

  get getTitle() {
    return this._title;
  }

  get getBody() {
    return this._body;
  }

  get getDate() {
    return this._date;
  }

  get getUserEmail() {
    return this._userEmail;
  }

  get getId() {
    return this._id;
  }

  private getPeriod() {
    const currentDate = moment();
    const diffDays = currentDate.diff(this._date, 'days');
    const diffHours = currentDate.diff(this._date, 'hours');
    const diffMinutes = currentDate.diff(this._date, 'minutes');
    const diffSeconds = currentDate.diff(this._date, 'seconds');

    if (diffMinutes < 1) return `${diffSeconds === 1 ? `${diffSeconds} minute` : `${diffSeconds} minutes`}`;
    if (diffHours < 1) return `${diffMinutes === 1 ? `${diffMinutes} minute` : `${diffMinutes} minutes`}`;
    if (diffDays < 1) return `${diffHours === 1 ? `${diffHours} hour` : `${diffHours} hours`}`;
    return `${diffDays === 1 ? `${diffDays} day` : `${diffDays} days`}`;
  }

  private setExpanded(id: string) {
    const element = document.getElementById(id)
      .querySelector('span');
    const span = document.createElement('span');
    const a2 = document.createElement('a');
    a2.addEventListener('click', () => this.setExpanded(id));
    if (this._isExpanded) {
      a2.innerText = ' Read more';
      span.innerHTML = `${this._body.substring(0, 100)}... `;
      span.appendChild(a2);
      this._isExpanded = false;
    } else {
      a2.innerText = 'Suppress';
      span.innerHTML = `${this._body} `;
      span.appendChild(a2);
      this._isExpanded = true;
    }
    element.innerHTML = '';
    element.appendChild(span);
  }

  private getBodyContent(body: any, _id?: string) {
    if (this._body.length > 200 && !this._isExpanded) {
      const span = document.createElement('span');

      const a2 = document.createElement('a');
      a2.innerText = 'Read more';
      a2.addEventListener('click', () => this.setExpanded(_id));
      span.innerHTML = `${this._body.substring(0, 100)}... `;
      span.appendChild(a2);
      body.appendChild(span);
      return body;
    } else {
      body.innerText = this._body;
      return body;
    }
  }

  returnHTML() {
    const article = document.createElement('article');
    article.setAttribute('id', this._id);
    article.setAttribute('class', 'question-item')

    const title = document.createElement('div');
    title.innerText = this._title;
    title.className = 'mui--text-headline';

    const body = document.createElement('div');
    body.className = 'mui--text-dark-secondary';
    this.getBodyContent(body, this._id);

    const a1 = document.createElement('a');
    a1.setAttribute('href', '#');
    a1.innerHTML = `By <a href="#">${this._userEmail}</a> ${this.getPeriod()} ago`;

    article.appendChild(title);
    article.appendChild(a1);
    article.appendChild(body);

    return article;
  }
}
