// Write a function which can concatenate 2 arrays
const concat = (arr1, arr2) => [...arr1, ...arr2];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concat(arr1, arr2));
