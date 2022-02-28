import { Questions, Question } from "./components/index";
import { QuestionService, AuthService } from "./services/index";
import { validateQuestionForm, validateLoginForm } from './helpers/form.helper';
import { getMui } from './helpers/modal.helper';
import './styles/index.scss';


(function () {
  const token = localStorage.getItem('token');

  const questionBtn: any = document.getElementById('questionBtn');
  const loginBtn: any = document.getElementById('loginBtn');
  questionBtn.disabled = !token;

  loginBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    const modalEl = document.createElement('div');
    modalEl.className = 'modal';
    modalEl.innerHTML = `
      <form class="mui-form">
        <div class="mui-textfield mui-textfield--float-label">
          <input type="text" id="email">
          <label>Email</label>
          <p id="emailError" class="error"></p>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input type="password" id="password">
          <label>Password</label>
          <p id="passwordError" class="error"></p>
        </div>
        <button type="button" id="signIn"
          class="mui-btn mui-btn--raised mui--bg-color-indigo-500 mui--color-indigo-50">Login</button>
      </form>`;
    // show modal
    getMui().overlay('on', modalEl);
    const signInBtn = document.getElementById('signIn');
    signInBtn.addEventListener('click', function (e: any) {
      e.preventDefault();
      const email: any = document.getElementById('email');
      const password: any = document.getElementById('password');

      if (validateLoginForm()) {
        console.log(email.value, password.value);
        AuthService.login({
          email: email.value,
          password: password.value,
          returnSecureToken: true,
        }).then((res: any) => {
          localStorage.setItem('token', res.idToken);
          loginBtn.style.display = 'none';
        })
          .catch((err: any) => {
            console.log({ err });
          });
      }
    });
  })

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