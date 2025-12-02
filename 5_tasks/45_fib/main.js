// Design a function which returns a fibonacci sequence value
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;

const fib = n => {
  if (n < 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log("fib(10) = ", fib(10));
