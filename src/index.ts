import { Questions, Question } from "./components/index";
import { QuestionService, AuthService } from "./services/index";
import { User } from './classes/index';
import { validateQuestionForm, validateLoginForm, validateSignUpForm } from './helpers/form.helper';
import { ErrorMessages } from './helpers/error.helper';
import { getMui } from './helpers/modal.helper';
import './styles/index.scss';


(function () {
  let user: User = null;
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  if (email) user = new User({ email });

  const questionBtn: any = document.getElementById('questionBtn');
  const loginBtn: any = document.getElementById('loginBtn');
  const signUpBtn: any = document.getElementById('signUpBtn');
  const createQuestionError: any = document.getElementById('createQuestionError');

  questionBtn.disabled = !token;
  loginBtn.style.display = token ? 'none' : 'inline-block';

  signUpBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    const modalEl = document.createElement('div');
    modalEl.className = 'modal';
    modalEl.innerHTML = `
      <form class="mui-form">
        <p id="loginError" class="error"></p>
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
        <div class="mui-textfield mui-textfield--float-label">
          <input type="repeatPassword" id="repeatPassword">
          <label>Repeat password</label>
          <p id="repeatPasswordError" class="error"></p>
        </div>
        <button type="button" id="signUp"
          class="mui-btn mui-btn--raised mui--bg-color-indigo-500 mui--color-indigo-50">Sign Up</button>
      </form>`;
    // show modal
    getMui().overlay('on', modalEl);
    const signUp = document.getElementById('signUp');
    signUp.addEventListener('click', function (e: any) {
      e.preventDefault();
      const email: any = document.getElementById('email');
      const password: any = document.getElementById('password');
      const loginError: any = document.getElementById('loginError');

      if (validateSignUpForm()) {
        console.log(email.value, password.value);
        AuthService.singUp({
          email: email.value,
          password: password.value,
          returnSecureToken: true,
        }).then((res: any) => {
          console.log(res);

          loginError.innerText = '';
          localStorage.setItem('token', res.idToken);
          localStorage.setItem('email', email.value);
          loginBtn.style.display = 'none';
          questionBtn.disabled = false;
          user = new User({
            email: email.value,
          });
        })
          .catch((err) => {
            console.log(err);

            loginError.innerText = ErrorMessages.wrong_password;
          });
      }
    });
  })

  loginBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    const modalEl = document.createElement('div');
    modalEl.className = 'modal';
    modalEl.innerHTML = `
      <form class="mui-form">
        <p id="loginError" class="error"></p>
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
      const loginError: any = document.getElementById('loginError');

      if (validateLoginForm()) {
        console.log(email.value, password.value);
        AuthService.login({
          email: email.value,
          password: password.value,
          returnSecureToken: true,
        }).then((res: any) => {
          loginError.innerText = '';
          localStorage.setItem('token', res.idToken);
          localStorage.setItem('email', email.value);
          loginBtn.style.display = 'none';
          questionBtn.disabled = false;
          user = new User({
            email: email.value,
          });
        })
          .catch(() => {
            loginError.innerText = ErrorMessages.wrong_password;
          });
      }
    });
  })

  questionBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    // Jusu kodas kuris saugos klausima ir atnaujina sarasa
    const title: any = document.getElementById('questionTitle');
    const body: any = document.getElementById('questionBody');


    if (validateQuestionForm() && user) {
      const question = new Question({
        title: title.value,
        body: body.value,
        userEmail: user.getEmail
      });
      questionBtn.disabled = true;
      QuestionService.createQuestion({
        title: question.getTitle,
        body: question.getBody,
        date: question.getDate,
        userEmail: question.getUserEmail,
      }).then(() => {
        createQuestionError.innerText = '';
        renderQuestionList();
        title.value = '';
        body.value = '';
        questionBtn.disabled = false;
      }).catch(() => {
        questionBtn.disabled = false;
        createQuestionError.innerText = ErrorMessages.no_token;
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