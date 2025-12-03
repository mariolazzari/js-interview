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
const asyncFn = cb => {
  setTimeout(() => {
    cb("done");
  }, 1000);
};

asyncFn(msg => {
  console.log("callback", msg);
});
```

### Parallel async arrays

Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

```js
asyncParallel(asyncFuncs, cb => {
  const results = new Array(asyncFuncs.length);
  let count = 0;

  asyncFuncs.forEach((fn, idx) => {
    fn(val => {
      result[idx] = val;
      count++;

      if (count === asyncFuncs.length) {
        cb(results);
      }
    });
  });
  console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)
});
```

### Callback to promise

Create a promise function to be able to use callback function via promise approach

```js
const asyncFunc = callback => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const promisify = () => {
  return new Promise(res => {
    asyncFunc(data => {
      res(data);
    });
  });
};

promisify().then(console.log);
```

### Map data in promises

You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

```js
// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
// Rewrite previous task in async await

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise(resolve => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise(resolve => {
    resolve(userStatuses);
  });
};

const getActiveUsers = async () => {
  const [users, statuses] = await Promise.all([
    await getUsers(),
    await getUserStatuses(),
  ]);

  const activeIds = statuses.filter(s => s.isActive).map(s => s.id);
  return users.filter(u => activeIds.includes(u.id));
};

(async () => {
  console.log("Active users:", await getActiveUsers());
})();
```

### Design

- Design a utility which takes URL and a value for attempts which will attempt to make a fetch request.
- If on failure it tries again with increasing delay for number of times which user has requested

```js
const refetch = async (url, maxRetries = 0, delay = 500) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    return await res.json();
  } catch (ex) {
    console.error(`Attempt failed: ${ex.message}`);

    // no retries left
    if (maxRetries === 0) {
      throw ex;
    }

    // wait before retry
    await new Promise(resolve => setTimeout(resolve, delay));

    // retry with increased delay
    return refetch(url, maxRetries - 1, delay * 2);
  }
};
```

## Comparison functions

### Shallow comparison

```js
// Type helper
const typeOf = input => {
  const rawObj = Object.prototype.toString.call(input).toLowerCase();
  const type = /\[object (.*)]/.exec(rawObj)[1];
  return type;
};

// Shallow comparison
const shallowCompare = (source, target) => {
  const typeSrc = typeOf(source);
  const typeTgt = typeOf(target);

  // Different types → not equal
  if (typeSrc !== typeTgt) return false;

  // For primitives → rely on ===
  if (typeSrc !== "object" && typeSrc !== "array") {
    return source === target;
  }

  // Handle arrays
  if (typeSrc === "array") {
    if (source.length !== target.length) return false;

    for (let i = 0; i < source.length; i++) {
      if (source[i] !== target[i]) return false;
    }

    return true;
  }

  // Handle objects
  if (typeSrc === "object") {
    const srcKeys = Object.keys(source);
    const tgtKeys = Object.keys(target);

    if (srcKeys.length !== tgtKeys.length) return false;

    for (const key of srcKeys) {
      if (!target.hasOwnProperty(key)) return false;
      if (source[key] !== target[key]) return false;
    }

    return true;
  }

  // Fallback (should not be reached)
  return false;
};
```

### Deep comparison

```js
// Type helper
const typeOf = input => {
  const rawObj = Object.prototype.toString.call(input).toLowerCase();
  return /\[object (.*)]/.exec(rawObj)[1];
};

// Deep comparison
const deepCompare = (a, b) => {
  const typeA = typeOf(a);
  const typeB = typeOf(b);

  // Type mismatch → not equal
  if (typeA !== typeB) return false;

  // Primitive values
  if (
    typeA !== "object" &&
    typeA !== "array" &&
    typeA !== "date" &&
    typeA !== "regexp" &&
    typeA !== "map" &&
    typeA !== "set"
  ) {
    return a === b;
  }

  // Date → compare timestamps
  if (typeA === "date") return a.getTime() === b.getTime();

  // RegExp → compare pattern + flags
  if (typeA === "regexp") return a.toString() === b.toString();

  // Array → compare length + deep items
  if (typeA === "array") {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepCompare(a[i], b[i])) return false;
    }
    return true;
  }

  // Map → compare size + entries
  if (typeA === "map") {
    if (a.size !== b.size) return false;
    for (const [key, val] of a.entries()) {
      if (!b.has(key)) return false;
      if (!deepCompare(val, b.get(key))) return false;
    }
    return true;
  }

  // Set → compare size + content
  if (typeA === "set") {
    if (a.size !== b.size) return false;
    for (const val of a.values()) {
      if (!b.has(val)) return false;
    }
    return true;
  }

  // Object → compare keys + deep values
  if (typeA === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!b.hasOwnProperty(key)) return false;
      if (!deepCompare(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
};
```

### Memoization function

Design a memoization function which adds 10 to provided value and take it from cache if it was already calculated.

```js
const memoAdd = () => {
  const cache = {};

  return val => {
    if (!cache[val]) {
      cache[val] = val + 10;
      console.log("val added to cache", cache[val]);
    }

    console.log("val from cache", cache[val]);
    return cache[val];
  };
};
```

## Tasks

### Fibonacci

```js
const fib = n => {
  if (n < 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};
```

### Anagrams

```js
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lower1 = str1.toLowerString();
  const lower2 = str2.toLowerString();
  if (lower1 === lower2) {
    return false;
  }

  const sorted1 = lower1.split("").sort();
  const sorted2 = lower2.split("").sort();

  return sorted1 === sorted2;
};
```

### Finding vowels

```js
const vowels = ["a", "e", "i", "o", "u"];

const findVowels = str => {
  let count = 0;

  for (const word of str) {
    if (vowels.includes(word)) {
      count++;
    }
  }

  return count;
};

const findVowels2 = str =>
  str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
```

## Tasks

### Title case

```js
const capitalize = str =>
  str
    .split(" ")
    .map(s => `${s.slice(0, 1).toUpperCase()}${s.slice(1)}`)
    .join(" ");
```

### 24h

```js
function convertTo24HrsFormat(timeText) {
  // Extract parts: time (HH:MM) and meridian (AM/PM)
  let [time, modifier] = timeText.split(/(AM|PM)/i).filter(Boolean);
  let [hours, minutes] = time.split(":");

  hours = parseInt(hours, 10);
  minutes = minutes.padStart(2, "0");

  if (modifier.toUpperCase() === "AM") {
    if (hours === 12) hours = 0; // 12AM → 00
  } else {
    if (hours !== 12) hours += 12; // PM → add 12 unless it's 12PM
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}
```

### Mapping data

```js
const result = bulkConfig.flatMap((config, index) => {
  const { config_key } = config.dataValues;
  const { location_key, autoassign } = loc[index];

  return location_key.map(key => ({
    config_key,
    location_key: key,
    autoassign,
  }));
});
```
