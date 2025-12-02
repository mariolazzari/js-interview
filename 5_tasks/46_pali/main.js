// Write a function which checks if string is a palindrome

const isPali = str => str.split("").reverse().join("") === str;

console.log(isPali("anna"));
console.log(isPali("mario"));
