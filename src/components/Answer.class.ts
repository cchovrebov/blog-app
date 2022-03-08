import { AnswerService, QuestionService } from "../services";
import { Questions } from '../components';
import { getPeriod } from '../helpers/date.helper';
const _ = require('lodash');
const moment = require('moment');

interface Answer {
  text: string;
  questionId: string;
  email: string;
  date: string;
}

export default class Answers {
  private _answers: Answer[];
  private _questionId: string;

  constructor(answers: Answer[], questionId: string) {
    this._answers = answers;
    this._questionId = questionId;
  }

  returnHTML() {
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
      const answerForm = document.getElementById(`answerForm${this._questionId}`);
      if (answerForm.classList.contains('hidden')) answerForm.className = 'visible';
      else answerForm.className = 'hidden';
    })

    const showAnswersButton = document.createElement('a');
    showAnswersButton.setAttribute('href', '#');

    showAnswersButton.innerText = `Show answers (${this._answers?.length || 0})`;
    anwerButtonsContainer.appendChild(showAnswersButton);

    const answersList = document.createElement('ul');
    answersList.className = 'hidden';
    answersList.id = `answerList${this._questionId}`;
    showAnswersButton.addEventListener('click', (e: any) => {
      e.preventDefault();
      const list = document.getElementById(`answerList${this._questionId}`);
      if (list.classList.contains('hidden')) list.className = 'visible';
      else list.className = 'hidden';
    })

    if (this._answers) {
      _.forEach(this._answers, (answer: Answer) => {
        const answerElement = document.createElement('li');
        answerElement.className = 'answer-item';

        const p = document.createElement('p');
        p.setAttribute('href', '#');
        p.innerHTML = `By <a href="#">${answer.email}</a> ${getPeriod(answer.date)} ago`;
        answerElement.appendChild(p);

        const answerText = document.createElement('p');
        answerText.innerText = answer.text;
        answerElement.appendChild(answerText);

        answersList.appendChild(answerElement);
      })
    }


    const answerFormContainer = document.createElement('div');
    const answerForm = document.createElement('form');
    answerForm.className = 'hidden';
    answerForm.id = `answerForm${this._questionId}`;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    answerForm.appendChild(input);

    const button = document.createElement('button');
    button.innerText = 'Submit';
    button.addEventListener('click', (e: any) => {
      e.preventDefault();
      const form = document.getElementById(`answerForm${this._questionId}`);
      const input = form.querySelector('input');

      if (input.value) {
        const email = localStorage.getItem('email');

        const payload = {
          text: input.value,
          questionId: this._questionId,
          email,
          date: moment().format('YYYY-MM-DD HH:mm:ss'),
        };
        AnswerService.createAnswer(payload)
          .then(() => {
            form.className = 'hidden';
            input.value = '';

            AnswerService.getAnswers().then(answers => {
              QuestionService.getQuestions()
                .then(res => {
                  new Questions({
                    questions: res,
                    selector: '#questions',
                    answers,
                  }).renderQuestions()
                }).catch(err => console.log(err));
            })
          })
      }
    })

    answerForm.appendChild(button);

    answerFormContainer.appendChild(answerForm);

    answerContainer.appendChild(anwerButtonsContainer);
    answerContainer.appendChild(answerFormContainer);

    answerContainer.appendChild(answersList);

    return answerContainer;
  }
}