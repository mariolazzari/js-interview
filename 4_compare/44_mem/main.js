// Design a memoization function which adds 10 to provided value and take it from cache if it was already calculated.

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

const addTen = memoAdd();

addTen(1);
addTen(2);
addTen(1);
addTen(1);
addTen(2);
