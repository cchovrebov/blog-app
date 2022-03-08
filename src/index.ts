import { Questions, Question } from "./components/index";
import { QuestionService, AuthService, AnswerService } from "./services/index";
import { User } from './classes/index';
import { validateQuestionForm, validateLoginForm, validateSignUpForm } from './helpers/form.helper';
import { ErrorMessages } from './helpers/error.helper';
import { getMui } from './helpers/modal.helper';
import { disconnectUser, sendMessage } from './services/ChatService';
import './styles/index.scss';

const moment = require('moment');

(function () {
  let user: User = null;
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  if (email) user = new User({ email });

  const questionBtn: any = document.getElementById('questionBtn');
  const loginBtn: any = document.getElementById('loginBtn');
  const signUpBtn: any = document.getElementById('signUpBtn');
  const logOutBtn: any = document.getElementById('logOutBtn');
  const chatTabBtn: any = document.getElementById('chatTabBtn');
  const sendMsgBtn: any = document.getElementById('sendMsgBtn');
  const createQuestionError: any = document.getElementById('createQuestionError');

  questionBtn.disabled = !token;
  loginBtn.style.display = token ? 'none' : 'inline-block';
  signUpBtn.style.display = token ? 'none' : 'inline-block';
  logOutBtn.style.display = token ? 'inline-block' : 'none';

  setTabDisabled(!!token);

  function setTabDisabled(isEnabled: boolean) {
    if (isEnabled) chatTabBtn.removeAttribute('disabled');
    else chatTabBtn.setAttribute('disabled', '');
  }

  sendMsgBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    const msg: any = document.getElementById('msg');
    const message = {
      message: msg.value,
      dateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
      email: localStorage.getItem('email'),
    }
    sendMessage(message);
    msg.value = '';
  })

  logOutBtn.addEventListener('click', function (e: any) {
    e.preventDefault();
    disconnectUser({ email: localStorage.getItem('email') });
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    loginBtn.style.display = 'inline-block';
    signUpBtn.style.display = 'inline-block';
    logOutBtn.style.display = 'none';
    setTabDisabled(false);
  })

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
        AuthService.singUp({
          email: email.value,
          password: password.value,
          returnSecureToken: true,
        }).then((res: any) => {
          loginError.innerText = '';
          localStorage.setItem('token', res.idToken);
          localStorage.setItem('email', email.value);
          loginBtn.style.display = 'none';
          signUpBtn.style.display = 'none';
          questionBtn.disabled = false;
          getMui().close
          user = new User({
            email: email.value
          });
          setTabDisabled(true);
          logOutBtn.style.display = 'inline-block';
        })
          .catch((err) => {
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
          signUpBtn.style.display = 'none';
          questionBtn.disabled = false;
          user = new User({
            email: email.value
          });
          setTabDisabled(true);
          logOutBtn.style.display = 'inline-block';
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

  async function renderQuestionList() {
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
  }
  renderQuestionList();

})();