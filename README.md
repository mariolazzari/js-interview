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
