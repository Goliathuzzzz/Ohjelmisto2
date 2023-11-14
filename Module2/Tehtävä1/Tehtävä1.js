'use strict';

const first = prompt('Enter a number:');
const second = prompt('Enter a number:');
const third = prompt('Enter a number:');
const fourth = prompt('Enter a number:');
const fifth = prompt('Enter a number:');

const numbers = [first, second, third, fourth, fifth];

for (let i = 4; i >= 0; i--) {
  console.log(`number: ${numbers[i]}`);
}
