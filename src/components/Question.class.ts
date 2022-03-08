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

    const p = document.createElement('p');
    p.setAttribute('href', '#');
    p.innerHTML = `By <a href="#">${this._userEmail}</a> ${this.getPeriod()} ago`;


    // Perkelti i Answer component
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';

    const anwerButtonsContainer = document.createElement('div');
    anwerButtonsContainer.className = 'answer-buttons-container';

    const replyButton = document.createElement('a');
    replyButton.setAttribute('href', '#');
    replyButton.innerText = 'Reply';
    anwerButtonsContainer.appendChild(replyButton);

    replyButton.addEventListener('click', (e: any) => {
      e.preventDefault();
      const answerForm = document.getElementById(`answerForm${this._id}`);
      if (answerForm.classList.contains('hidden')) answerForm.className = 'visible';
      else answerForm.className = 'hidden';
    })

    const showAnswersButton = document.createElement('a');
    showAnswersButton.setAttribute('href', '#');
    showAnswersButton.innerText = 'Show answers';
    anwerButtonsContainer.appendChild(showAnswersButton);

    const answersList = document.createElement('ul');
    answersList.className = 'hidden';
    answersList.id = `answerList${this._id}`;
    showAnswersButton.addEventListener('click', (e: any) => {
      e.preventDefault();
      const list = document.getElementById(`answerList${this._id}`);
      if (list.classList.contains('hidden')) list.className = 'visible';
      else list.className = 'hidden';
    })
    const answer = document.createElement('li');

    answer.innerText = 'Answer';

    answersList.appendChild(answer);

    const answerFormContainer = document.createElement('div');
    answerFormContainer.innerHTML = `
      <form class="hidden" id="answerForm${this._id}">
        <input type="text" />
        <button>Submit</button>
      </form>
    `;
    answerContainer.appendChild(anwerButtonsContainer);
    answerContainer.appendChild(answerFormContainer);

    answerContainer.appendChild(answersList);

    // Perkelti i Answer component END of block

    body.appendChild(answerContainer);

    article.appendChild(title);
    article.appendChild(p);
    article.appendChild(body);

    return article;
  }
}
