import { ErrorMessages } from './error.helper';

export function validateQuestionForm(): boolean {
  const title: any = document.getElementById('questionTitle');
  const body: any = document.getElementById('questionBody');
  let isValid = true;

  if (!title.value) {
    document.getElementById('titleError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }
  if (!body.value) {
    document.getElementById('bodyError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }

  if (title.value && title.value.length < 3) {
    document.getElementById('titleError')
      .innerText = ErrorMessages.field_too_short;
    isValid = false;
  }
  if (title.value && title.value.length > 50) {
    document.getElementById('titleError')
      .innerText = ErrorMessages.field_too_long;
    isValid = false;
  }


  if (!body.value) {
    document.getElementById('bodyError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }
  if (body.value && body.value.length < 3) {
    document.getElementById('bodyError')
      .innerText = ErrorMessages.field_too_short;
    isValid = false;
  }
  if (body.value && body.value.length > 2000) {
    document.getElementById('bodyError')
      .innerText = ErrorMessages.field_too_long;
    isValid = false;
  }

  if (isValid) {
    document.getElementById('titleError').innerText = '';
    document.getElementById('bodyError').innerText = '';
  }

  return isValid;
}


export function validateLoginForm(): boolean {
  let isValid = true;

  const email: any = document.getElementById('email');
  const password: any = document.getElementById('password');

  if (!email.value) {
    document.getElementById('emailError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }
  if (!password.value) {
    document.getElementById('passwordError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }

  if (isValid) {
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
  }

  return isValid;
}


export function validateSignUpForm(): boolean {
  let isValid = true;

  const email: any = document.getElementById('email');
  const password: any = document.getElementById('password');
  const repeatPassword: any = document.getElementById('repeatPassword');

  const emailRegex: RegExp = /^([a-zA-Z0-9]{1}[a-zA-Z0-9_-]{1,50}[a-zA-Z0-9]{1})@([a-zA-Z0-9]+_*-*[a-zA-Z0-9]+)\.(com|ru|eu|lt|org|net)/;
  const passwordRegex: RegExp = /\d/;

  //   my_mail@mail.com
  // my-mail@gmail.com
  // mymail@gmail.net
  // mymail@mail.caa
  // my@mail@mail.com
  // mY-MaIl@mail.ru
  // 777-MaIl@mail.ru
  // _777-MaIl12712@mail.ru
  // 777-MaIl12712_@mail.ru
  // console.log(emailRegex.test('777-MaIl12712_@mail.ru'));

  // Email regex
  // pvz: mymail@mail.com
  // (mymail) - Prasidet turi nuo mazuju/diziuju raidziu, skaiciu, taip pat galima naudoti simbolius _ - ir ne daugiau nei 50 simboliu
  // (@)
  // (mail) - Gali tureti savyje tuos pacius simbolius kaip ir mailo pradzia tik ne daugiau nei 15 simboliu
  // (.)
  // pasibaigt turi zodziais com, ru, eu, lt, org, net


  // Password regex
  // Turi tureti bent viena didziaja raide
  // Turi tureti bent viena mazaja raide
  // Turi tureti bent viena skaiciu
  // Turi tureti bent special character is duotu !@#$%^&*()-+/.,


  if (!email.value) {
    document.getElementById('emailError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }
  if (!emailRegex.test(email.value)) {
    // Your code
  }

  if (!password.value) {
    document.getElementById('passwordError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }
  if (!passwordRegex.test(password.value)) {
    // Your code
  }

  if (!repeatPassword.value) {
    document.getElementById('repeatPasswordError')
      .innerText = ErrorMessages.field_required;
    isValid = false;
  }
  if (password.value !== repeatPassword.value) {
    document.getElementById('repeatPasswordError')
      .innerText = ErrorMessages.password_not_match;
    isValid = false;
  }


  return isValid;
}