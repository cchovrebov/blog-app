export function validateQuestionForm(): boolean {
  const title: any = document.getElementById('questionTitle');
  const body: any = document.getElementById('questionBody');
  let isValid = true;

  if (!title.value) {
    document.getElementById('titleError').innerText = 'This field is required';
    isValid = false;
  }
  if (!body.value) {
    document.getElementById('bodyError').innerText = 'This field is required';
    isValid = false;
  }

  // Papildyti validacija kad tikrintu
  // 1. Title ir body maziausiai butu 3 simboliai
  // 2. Title daugiausiai butu 50 simboliai
  // 3. Body max simboliu skaicius 2000
  // Jeigu forma validi, istrinti visus errorus

  return isValid;
}