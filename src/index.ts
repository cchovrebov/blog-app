import { Questions } from "./components/index";
import { QuestionService } from "./services/index";
import './styles/index.scss';


(function () {
  const questionBtn = document.getElementById('questionBtn');
  questionBtn.addEventListener('click', function (e: any) {
    e.preventDefault();

    // Jusu kodas kuris saugos klausima
  })


  QuestionService.getQuestions()
    .then(res => {
      new Questions({
        questions: res,
        selector: '#questions'
      }).renderQuestions()
    }).catch(err => console.log(err))

})();