// Remove all duplicates in the array
const distinct = arr => [...new Set(arr)];

const arr = [1, 2, 3, 3, 4, 5, 6, 3, 4, 5, 6, 7];
console.log(distinct(arr));

const distinctObj = arr =>
  arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);

const arr2 = [{ name: "Mario" }, { name: "Mariarosa" }, { name: "Mario" }];
console.log(distinctObj(arr2));
