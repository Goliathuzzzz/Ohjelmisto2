'use strict';

const name = prompt('Enter a name:');
const number = Math.floor(Math.random() * 4 + 1);

if (number === 1) {
  document.querySelector('#house').innerHTML = name + ', your house is Gryffindor';
}
else if (number === 2) {
  document.querySelector('#house').innerHTML = name + ', your house is Slytherin';
}
else if (number === 3) {
  document.querySelector('#house').innerHTML = name + ', your house is Hufflepuff';
}
else {
  document.querySelector('#house').innerHTML = name + ', your house is Ravenclaw';
}