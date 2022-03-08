import Question, { Options as QuestionOptions } from './Question.class';
const _ = require('lodash');

interface Options {
  selector: string;
  questions: QuestionOptions[];
  answers?: AnswerOptions[];
}

interface AnswerOptions {
  text: string;
  questionId: string;
}

export default class Questions {
  private $questionsContainer: HTMLElement;
  private _questions: QuestionOptions[];
  private _answers: AnswerOptions[];

  constructor(options: Options) {
    this.$questionsContainer = document.querySelector(options.selector);
    this._questions = options.questions;
    this._answers = options.answers;
  }

  renderQuestions() {
    this.$questionsContainer.innerHTML = '';
    const groupedAnswers = _.groupBy(this._answers, 'questionId');

    for (let question of this._questions) {
      this.$questionsContainer.appendChild(
        new Question({
          ...question,
          answers: groupedAnswers[question.id],
        }).returnHTML()
      );
    }
  }
}