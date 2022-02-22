import { Questions, Question } from "./components/index";
import { QuestionService } from "./services/index";
import { validateQuestionForm } from './helpers/form.helper';
import './styles/index.scss';


(function () {
  const questionBtn: any = document.getElementById('questionBtn');
  questionBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    // Jusu kodas kuris saugos klausima ir atnaujina sarasa
    const title: any = document.getElementById('questionTitle');
    const body: any = document.getElementById('questionBody');


    if (validateQuestionForm()) {
      const question = new Question({
        title: title.value,
        body: body.value,
        userId: '1',
        userName: 'My user'
      });
      questionBtn.disabled = true;
      QuestionService.createQuestion({
        title: question.getTitle,
        body: question.getBody,
        date: question.getDate,
        userId: question.getUserId,
        userName: question.getUserName,
      }).then(() => {
        renderQuestionList();
        title.value = '';
        body.value = '';
        questionBtn.disabled = false;
      }).catch(() => {
        questionBtn.disabled = false;
      })
    }

  })

  function renderQuestionList() {
    QuestionService.getQuestions()
      .then(res => {
        new Questions({
          questions: res,
          selector: '#questions'
        }).renderQuestions()
      }).catch(err => console.log(err));
  }
  renderQuestionList();

})();