// . - betkoks simbolius
// [] - diapazonas
//  $ - eilutes galas
// ^ - eilutes prazia
// \ - ekranizavimas
// \d - skaiciai
// \D - viskas isskyrus skaicius
// \s - tarpai
// \S - Viskas isskyrus tarpai
// \w - raide
// \W - viskas isskyrus raides is skaicius
// \b - zodzio sonai
// \B - zodzio vidine dali, pazymi kiekviena raide
// {4} - kiek simboliu turi but
// {3,6}
// * - nera ieskomo elemento arba yra vienas
// + - 1 arba daugiau elementas
// | - arba oretoriu

const number = '+370 677 77 777';
const number2 = '+370 (677) 77 777';
const number3 = '+370-(677)-77-777';
const number4 = '+370(677)77777';
const number5 = '867777777';

const numberRegex = /(^(\d){9})|(\+370\([0-9]{3}\)[0-9]{5})|(\+370-\([0-9]{3}\)-[0-9]{2}-[0-9]{3})|(\+370\s\([0-9]{3}\)\s[0-9]{2}\s[0-9]{3})|(\+370\s[0-9]{3}\s[0-9]{2}\s[0-9]{3})/;

console.log('Regex 1', numberRegex.test(number));
console.log('Regex 2', numberRegex.test(number2));
console.log('Regex 3', numberRegex.test(number3));
console.log('Regex 4', numberRegex.test(number4));
console.log('Regex 5', numberRegex.test(number5));