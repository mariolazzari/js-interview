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

### Min occurence in a list

```js
const findMinCount = list => {
  const min = Math.min(...arr);
  const mins = arr.filter(n => n === min);

  return mins.length;
};
```

### This

What will be logged here?

```js
// Task 1
function getItem() {
  console.log(this);
}

getItem();

// Task 2
const item = {
  title: "Ball",
  getItem() {
    console.log("this", this);
  },
};

item.getItem();

// Task 3
class Item {
  title = "Ball";
  getItem() {
    function someFn() {
      console.log("this", this);
    }
    someFn();
  }
}

const itemObj = new Item();
itemObj.getItem();
```

### Classes

- Design a class for employee which takes id and name in during construction of object and has a salary property
- Design a class for manager which is employee and can have department property

```js
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return salary;
  }
}

class Manager extends Employee {
  constructor(id, name) {
    super(id, name);
  }

  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const mario = new Employee(1, "Mario");
mario.setSalary(100000);
console.log(mario);

const mng = new Manager(1, "Manager");
mng.setSalary(200000);
mng.setDepartment("IT");
console.log(mng);
```

### Prototypes

Design the same classes by using only Javascript prototypes

```js
// Design the same classes by using only Javascript prototypes
const Employee = function (id, name) {
  this.id = id;
  this.name = name;
};

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

// Manager constructor function
function Manager(id, name) {
  // Call Employee constructor with 'this'
  Employee.call(this, id, name);
}

// Inherit from Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Add Manager-specific methods
Manager.prototype.setDepartment = function (name) {
  this.department = name;
};

Manager.prototype.getDepartment = function () {
  return this.department;
};
```

### Modules

- Create a es6 module with function getName, getSurname and default export getFullname.
- Create the same with commonJS module

```js
export const getName = name => {
  return name;
};

export const getSurname = surname => {
  return surname;
};

export const getFullname = (name, surname) => {
  return `${name} ${surname}`;
};

export default getFullname;
```

### Debounce

```js
const debounce = (fn, ms) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

// Usage
const debouncedLog = debounce(name => console.log("Ciao " + name), 500);

// Call it multiple times
debouncedLog("Mario");
debouncedLog("Mario");
debouncedLog("Mario"); // Only this call will log "ciao" after 500ms
```

### Throttling

```js
const throttle = (fn, ms) => {
  let isWaiting = false;

  return (...args) => {
    if (isWaiting) {
      return;
    }

    fn(...args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, ms);
  };
};

// Usage
const throttledLog = throttle(name => console.log("Ciao " + name), 500);
// Call it multiple times
throttledLog("Mario");
throttledLog("Luigi");
throttledLog("Giovanni");
// Only the first call logs immediately, then the next allowed after 500ms
```

## Working with DOM

### Highlight all words over 8 chars

```js
const p = document.querySelector("p");
p.innerHTML = p.innerHTML
  .split(" ")
  .map(word =>
    word.length > 8
      ? `<span style="background-color:yellow; font-weight:bold; padding:2px 4px;">${word}</span>`
      : word
  )
  .join(" ");
```

### Add a link

Add a link back to the source of the text after the paragraph tag

```js
const link = document.createElement("a");
link.href = "https://mariolazzari.it";
link.innerText = "Mario Lazzari";
link.target = "_blank";

document.body.appendChild(link);
```

### Split sentence to new line

- Split each new sentence to a separate line in the paragraph text.
- A sentence can be assumed to be a string of text terminated with a period (.)

```js
const p = document.querySelector("p");
p.innerHTML = p.innerHTML.split(".").join(".</p><p>") + "</p>";
```

### Event delegation

```js
const app = document.querySelector(".todo-app");
app.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("item")) {
    window.alert("click: " + e.target.innerText);
  }
});
```

## Async JavaScript

### Xml Http request

Write an example of fetching data with XMLHttpRequest.

```js
// Write an example of fetching data with XMLHttpRequest.
const url = "https://api.github.com/users/mariolazzari/repos";
const xhr = new XMLHttpRequest();

// Initialize a GET request
xhr.open("GET", url);
// Send the request
xhr.send();
// Handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Successful response
    const data = JSON.parse(xhr.responseText);
    console.log("Repositories:", data);
  } else {
    // Handle errors
    console.error("Error fetching data:", xhr.status, xhr.statusText);
  }
};
// handle network errors
xhr.onerror = function () {
  console.error("Network Error");
};
```

### Fetch API

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(ex => console.error(ex));
```

### Basic callback

- Write an asynchronous function which executes callback after finishing it's asynchronous task
- What problem callbacks solve?

```js

```
