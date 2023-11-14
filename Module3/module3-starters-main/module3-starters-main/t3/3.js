'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  document.querySelector('#target').innerHTML += `<li>${name}</li>`;
}