'use strict';

const first = prompt('Enter the first number:');
const second = prompt('Enter the seconed number:');
const third = prompt('Enter the third number:');

const number1 = parseInt(first);
const number2 = parseInt(second);
const number3 = parseInt(third);

document.querySelector('#sum').innerHTML = `Sum of numbers is: ${number1 + number2 + number3}`;
document.querySelector('#product').innerHTML = `Product of numbers is: ${number1 * number2 * number3}`;
document.querySelector('#average').innerHTML = `Average of numbers is: ${(number1 + number2 + number3) / 3}`;