'use strict';
console.log('This is text is printed to the console.');
alert('Hi from here too!');

const age = 23;
const agestr = age.toString();

const moneystr = '15.48';
const money = parseInt(moneystr);
const moneyfloat = parseFloat(moneystr);

const money2 = +moneystr;

console.log(typeof money);
console.log(money);

const string = `Ukko on ihan
vitun kova äijä lolol ${money}`;

console.log(string);

const nimi = prompt('Enter your name:');
console.log('Hello ' + nimi + ', nice to meet you!');
