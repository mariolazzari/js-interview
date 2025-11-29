// Write a function which get's an array and an element and returns a array with this element at the end

const addElement = (arr, el) => [...arr, el];

const arr = [1, 2];
console.log(addElement(arr, 3));
