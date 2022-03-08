import Question, { Options as QuestionOptions } from './Question.class';
const _ = require('lodash');

interface Options {
  selector: string;
  questions: QuestionOptions[];
  answers: Answer[];
}

interface Answer {
  text: string;
  questionId: string;
}

export default class Questions {
  private $questionsContainer: HTMLElement;
  private _questions: QuestionOptions[];
  private _answers: Answer[];

  constructor(options: Options) {
    this.$questionsContainer = document.querySelector(options.selector);
    this._questions = options.questions;
    this._answers = options.answers;
  }

  renderQuestions() {
    const groupedAnswers = _.groupBy(this._answers, 'questionId');

    this.$questionsContainer.innerHTML = '';
    for (let question of this._questions) {
      this.$questionsContainer.appendChild(
        new Question({
          ...question,
          answers: groupedAnswers[question.id]
        }).returnHTML()
      );
    }
  }
}