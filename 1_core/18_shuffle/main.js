// Write a function which implements shuffle
const shuffle = items =>
  items
    .map(item => ({ sort: Math.random(), item }))
    .sort((a, b) => (a.sort < b.sort ? -1 : 1))
    .map(i => i.item);

const nums = [1, 2, 3, 4, 5];
console.log(shuffle(nums));
