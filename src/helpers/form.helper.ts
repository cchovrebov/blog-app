export function validateQuestionForm(): boolean {
  const title: any = document.getElementById('questionTitle');
  const body: any = document.getElementById('questionBody');
  let isValid = true;

  if (!title.value) {
    document.getElementById('titleError')
      .innerText = 'This field is required';
    isValid = false;
  }
  if (!body.value) {
    document.getElementById('bodyError')
      .innerText = 'This field is required';
    isValid = false;
  }

  if (title.value.length < 3) {
    document.getElementById('titleError')
      .innerText = 'This field should have at least 3 characters';
    isValid = false;
  }
  if (title.value.length > 50) {
    document.getElementById('titleError')
      .innerText = 'This field exceeds characters limit';
    isValid = false;
  }


  if (!body.value) {
    document.getElementById('bodyError')
      .innerText = 'This field is required';
    isValid = false;
  }
  if (body.value.length < 3) {
    document.getElementById('bodyError')
      .innerText = 'This field should have at least 3 characters';
    isValid = false;
  }
  if (body.value.length > 2000) {
    document.getElementById('bodyError')
      .innerText = 'This field exceeds characters limit';
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
      .innerText = 'This field is required';
    isValid = false;
  }
  if (!password.value) {
    document.getElementById('passwordError')
      .innerText = 'This field is required';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
  }

  return isValid;
}