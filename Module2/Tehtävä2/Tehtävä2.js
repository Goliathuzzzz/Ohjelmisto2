'use strict';

const amount = prompt('Enter the amount of participants (max 10):');
let list = []

for (let i = 0; i < amount; i++) {
  const i = prompt('Enter name of participant:');
  list.push(i)
}

list.sort();
for (let name of list) {
  const li = document.createElement('li');
  li.innerText = name
  document.getElementById('participants').appendChild(li)
}
