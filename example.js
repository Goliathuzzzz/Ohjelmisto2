// 'use strict';
// console.log('This is text is printed to the console.');
// alert('Hi from here too!');
//
// const age = 23;
// const agestr = age.toString();
//
// const moneystr = '15.48';
// const money = parseInt(moneystr);
// const moneyfloat = parseFloat(moneystr);
//
// const money2 = +moneystr;
//
// console.log(typeof money);
// console.log(money);
//
// const string = `Ukko on ihan
// vitun kova äijä lolol ${money}`;
//
// console.log(string);
//
// const nimi = prompt('Enter your name:');
// console.log('Hello ' + nimi + ', nice to meet you!');

// const age = prompt('Enter your age:');
// if (age < 18) {
//   console.log('You are a minor.');
// }
// else if (30 > age >= 18) {
//   console.log('You are an adult.');
// }
// else if (65 > age >= 30) {
//   console.log('You are old.');
// }
// else {
//   console.log('Turned into ashes.');
// }

const cabinclass = prompt('Enter your cabin class (A/B/C):').toUpperCase()
switch (cabinclass) {
  case 'A':
    console.log('Top deck with window.');
    break;
  case 'B':
    console.log('Top deck without window.');
    break;
  case 'C':
    console.log('Middle deck with window.');
    break;
  default:
    console.log('Invalid cabin class.')
}