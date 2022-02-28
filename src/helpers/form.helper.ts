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

  // Your code goes here

  // Validation rules
  // Is email exist
  // Is password exist
  // Is password match repeat password

  return isValid;
}