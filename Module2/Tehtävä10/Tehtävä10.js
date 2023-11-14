'use strict';

const amount = prompt('Enter amount of candidates (max 5):');
let candidates = []

if (amount <= 5) {
  for (let i = 0; i < amount; i++) {
    const input = prompt('Enter candidate name:');
    let candidate = {'name': input, 'votes': 0};
    candidates.push(candidate);
  }
}
else {
  alert('Too many candidates!');
}

const voters = prompt('Enter amount of voters (max 10):');
let allvotes = [];

if (voters <= 10) {
  for (let i = 0; i < voters; i++) {
    let vote = prompt('Enter the name of who you will vote for:');
    allvotes.push(vote);
  }
}
else {
  alert('Too many voters');
}

allvotes.sort();
for (let j = 0; j < amount; j++) {
  let votes = 0;
  for (let i = 0; i < allvotes.length; i++) {
    let vote = allvotes[i]
    if (vote === candidates[j]['name']) {
      votes += 1;
    }
  }
  candidates[j]['votes'] = votes;
}

candidates.forEach(element => (console.log(element)));

