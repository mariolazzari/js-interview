# JavaScript coding interview

## Core concepts

### Mapping users to get username

- Write code to get array of names from given array of users
- Get back only active users
- Sort users by age descending

```js
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

const names = users
  .filter(u => u.isActive)
  .sort((a, b) => a.age > b.age)
  .map(u => u.name);

console.log(names);
```

### Difference between null and undefined

What will be logged in first example and in second example?

```js
let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);
```

### Hoisting

What will be console.logged here

```js
// Question 1
console.log(foo);
foo = 1;

// question 2
console.log(foo);
var foo = 2;

// question 3
foo = 3;
console.log(foo);
var foo;
```

### Closures

```js
function counter() {
  let count = 0;

  return {
    increment: () => count++,
    getValue: () => count,
  };
}
```

### Currying

Write a function which helps to achieve multiply(a)(b) and returns product of a and b

```js
const multiply = a => b => a * b;
console.log("3x4 =", multiply(3)(4));

const curry = fn => {
  const arity = fn.length;
  console.log("Arity:", arity);

  return function f(...args) {
    console.log("f", args);
  };
};

const curriedSum = curry((a, b, c) => a + b + c);
curriedSum(1, 2, 3);

const get = curry((prop, obj) => obj[prop]);
const getId = get("id");
```

### Add element to array

Write a function which get's an array and an element and returns a array with this element at the end

```js
const addElement = (arr, el) => [...arr, el];

const arr = [1, 2];
console.log(addElement(arr, 3));
```

### Concatenating arrays

Write a function which can concatenate 2 arrays

```js
const concat = (arr1, arr2) => [...arr1, ...arr2];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concat(arr1, arr2));
```

### Check if user exists

Check that user with such name exists in array of objects

```js
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

const checkUser = (name, users) => {
  const user = users.find(
    user => user.name.toLowerCase() === name.toLowerCase()
  );
  // if (user) {
  //   return true;
  // }
  // return false;

  return !!user;
};

const checkUser2 = (name, users) => users.some(u => u.name === name);
```

### Remove duplicates in array

```js
const distinct = arr => [...new Set(arr)];

const arr = [1, 2, 3, 3, 4, 5, 6, 3, 4, 5, 6, 7];
console.log(distinct(arr));

const distinctObj = arr =>
  arr.reduce((acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]), []);

const arr2 = [{ name: "Mario" }, { name: "Mariarosa" }, { name: "Mario" }];
console.log(distinctObj(arr2));
```

### Sorting array

```js
// Sort the array of numbers
const numComparator = (a, b) => (a < b ? -1 : 1);

const nums = [1, 11, 2, 44, 2];
console.log(nums.sort(numComparator));

// Sort array of objects by author's lastname
const nameComparator = (a, b) => {
  const last1 = a.author.split(" ")[1];
  const last2 = b.author.split(" ")[1];

  return last1 < last2 ? -1 : 1;
};

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];
console.log(books.sort(nameComparator));
```

### Range function

Write a function which implement range

```js
const range = (from, to) => {
  const nums = [];
  for (let n = from; n <= to; n++) {
    nums.push(n);
  }
  return nums;
};

const nums = range(1, 50);
console.log(nums);

const range2 = (from, to) => [...Array(to - from).keys()].map(i => i + from);

const nums2 = range2(1, 50);
console.log(nums2);
```

### Shuffle

Write a function which implements shuffle

```js
const shuffle = items =>
  items
    .map(item => ({ sort: Math.random(), item }))
    .sort((a, b) => (a.sort < b.sort ? -1 : 1))
    .map(i => i.item);
```
