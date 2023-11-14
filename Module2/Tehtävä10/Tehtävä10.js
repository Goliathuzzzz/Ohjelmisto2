'use strict';

const amount = prompt('Enter amount of candidates (max 5):');
let candidates = []

if (amount <= 5) {
  for (let i = 0; i < amount; i++) {
    const candidate = prompt('Enter candidate name:');
    let i = {}
    candidates.push({name: candidate, votes: 0,});
  }
}
else {
  alert('Too many candidates!');
}

const voters = prompt('Enter amount of voters (max 10):');
let votes = []

if (voters <= 10) {
  for (let i = 0; i < voters; i++) {
    const vote = prompt('Enter the name of who you will vote for:');
    votes.push(vote);
  }
}
else {
  alert('Too many voters');
}

candidates.sort(name);
votes.sort();

for (let j = 0; j < candidates.length; j++) {
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] === candidates.entries()) {
      candidates[i].votes += 1
    }
  }
}

