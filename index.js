// Local storage
// localStorage.setItem('KEY', 'VALUE');
// localStorage.setItem('KEY1', 'VALUE1');
// console.log(localStorage.getItem('KEY'));
// localStorage.removeItem('KEY');
// localStorage.clear();

// Math func
const random = Math.random();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// // Math.floor apvalina i mazesne puse
// console.log(Math.floor(1.9));

// // Math.abs apvalinimas
// console.log(Math.round(1.4));

// // Module
// console.log(Math.abs(-4));

// Parse
const num = 100; // Integer
const float = 1.3434;
const double = 124.3355235235235235178263816;
const stringNumb = '300';
const nan = NaN;

// console.log(num, num.toString(), parseFloat('100.2141'), num.toFixed(2));

// console.log(parseInt(float), parseInt(double), parseInt(stringNumb));
// console.log(typeof 1 / 0, nan);
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

// Regex
const text = 'bla bla email@mail.com';
const emailRegex = /email@mail.com/;