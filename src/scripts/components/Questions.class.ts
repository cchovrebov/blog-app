import Question, { Options as QuestionOptions } from './Question.class';

interface Options {
  selector: string;
  questions: QuestionOptions[];
}

export default class Questions {
  $questionsContainer: HTMLElement;
  _questions: QuestionOptions[];

  constructor(options: Options) {
    this.$questionsContainer = document.querySelector(options.selector);
    this._questions = options.questions;
  }

  renderQuestions() {
    this.$questionsContainer.innerHTML = '';
    for (let question of this._questions) {
      this.$questionsContainer.appendChild(new Question(question)
        .returnHTML());
    }
  }
}