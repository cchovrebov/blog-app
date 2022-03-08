import { QuestionService, AnswerService } from "../services/index";
import { Questions } from ".";
const _ = require('lodash');

interface AnswerOptions {
  text: string;
  questionId: string;
}

export default class Answer {
  private _answers: AnswerOptions[];
  private _questionId: string;

  constructor(answers: AnswerOptions[], questionId: string) {
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
    showAnswersButton.innerText = `Show answers (${this._answers?.length})`;
    anwerButtonsContainer.appendChild(showAnswersButton);

    const answersList = document.createElement('ul');
    answersList.className = 'hidden';
    answersList.id = `answerList${this._questionId}`;
    showAnswersButton.addEventListener('click', (e: any) => {
      e.preventDefault();
      const list = document.getElementById(`answerList${this._questionId}`);
      if (list.classList.contains('hidden')) list.className = 'visible';
      else list.className = 'hidden';
    });

    _.forEach(this._answers, (answer: AnswerOptions) => {
      const answerElement = document.createElement('li');
      answerElement.className = 'answer-item';
      answerElement.innerText = answer.text;
      answersList.appendChild(answerElement);
    });

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
      const input = form.querySelector('input')
      const text = input.value;
      if (text) {
        AnswerService.createAnswer({
          text,
          questionId: this._questionId,
        }).then(() => {
          input.value = '';
          form.className = 'hidden';

          AnswerService.getAnswers().then(answers => {
            QuestionService.getQuestions()
              .then(res => {
                new Questions({
                  questions: res,
                  selector: '#questions',
                  answers
                }).renderQuestions()
              }).catch(err => console.log(err));
          })
        })
      }
    })

    answerForm.appendChild(button);
    answerContainer.appendChild(answerForm);

    answerContainer.appendChild(anwerButtonsContainer);
    answerContainer.appendChild(answerFormContainer);

    answerContainer.appendChild(answersList);

    return answerContainer;
  }
}