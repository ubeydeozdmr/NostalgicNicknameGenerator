'use strict';

let adjective, subject, number;
const adjectives = [
  'Powerful',
  'Dark',
  'Wonderful',
  'Numb',
  'Artistic',
  'Brave',
  'Gentle',
  'Flying',
  'Delicious',
  'Victorious',
  'Sassy',
  'Noisy',
  'Troubled',
  'Pink',
  'White',
  'Psycho',
  'Energetic',
  'Silly',
  'Faithful',
  'Cynical',
];
const subjects = [
  'Angel',
  'Wolf',
  'Soldier',
  'Assassin',
  'Muffin',
  'Midilli',
  'Slayer',
  'Destroyer',
  'Pirate',
  'Captain',
  'Ambush',
  'Flagship',
  'Atomic',
  'Bender',
  'Bomber',
  'Heart',
  'Warrior',
  'King',
  'Queen',
  'Prince',
  'Princess',
  'Man',
  'Woman',
  'Boy',
  'Girl',
  'Dragon',
  'Lion',
  'Gunner',
  'Killer',
  'Savage',
];
const multiplers = [
  100, 100, 1000, 1000, 1000, 1000, 10000, 10000, 100000, 100000,
];
function newNickName() {
  let number = Math.trunc(
    Math.random() * multiplers[Math.trunc(Math.random() * 10)]
  );
  let randomAdj = Math.trunc(Math.random() * 20);
  let randomSub = Math.trunc(Math.random() * 30);
  document.querySelector('h1').textContent =
    adjectives[randomAdj] + subjects[randomSub] + number;
  navigator.clipboard.writeText(document.querySelector('h1').textContent);
}
