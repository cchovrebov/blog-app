import * as moment from 'moment';
import { getPeriod } from '../helpers/date.helper';
import { Answer } from '.';

export interface Options {
  title: string;
  body: string;
  id?: string;
  userEmail?: string;
  date?: string;
  answers?: AnswerOptions[];
}

interface AnswerOptions {
  text: string;
  questionId: string;
}

export default class Question {
  private _userEmail: string;
  private _id: string;
  private _title: string;
  private _body: string;
  private _date: string;
  private _isExpanded: boolean = false;
  private _answers: AnswerOptions[];

  constructor(options: Options) {
    this._userEmail = options.userEmail;
    this._id = options.id;
    this._title = options.title;
    this._body = options.body;
    this._date = options.date || moment().format('YYYY-MM-DD HH:mm:ss');
    this._answers = options.answers;
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

    const p = document.createElement('p');
    p.setAttribute('href', '#');
    p.innerHTML = `By <a href="#">${this._userEmail}</a> ${getPeriod(this._date)} ago`;

    const answers = new Answer(this._answers || [], this._id).returnHTML();
    body.appendChild(answers);

    article.appendChild(title);
    article.appendChild(p);
    article.appendChild(body);

    return article;
  }
}
