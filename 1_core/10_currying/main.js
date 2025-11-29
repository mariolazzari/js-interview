// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

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
