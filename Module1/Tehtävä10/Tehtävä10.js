'use strict';

const input1 = prompt('Enter amount of dice:');
const input2 = prompt('Enter the sum of faces after rolling each die:');
const amount = parseInt(input1)
const sum = parseInt(input2)
let dicesum = 0;
let hits = 0;
const attempts = 1000000;
for (let j = 0; j < attempts; j++) {
  dicesum = 0;
  for (let i = 0; i < amount; i++) {
    let roll = Math.floor(Math.random() * 6 + 1);
    dicesum += roll;
  }
  if (dicesum === sum) {
    hits += 1;
  }
}

const probability = (100 * hits / attempts).toFixed(6) + '%'
document.querySelector('#result').innerHTML =
    'The probability of rolling ' + amount + ' dice and getting a ' + sum + ' is about: ' + probability