// Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

const asyncFunc1 = callback => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const asyncFunc2 = callback => {
  setTimeout(() => {
    callback(2);
  }, 2000);
};

const asyncFunc3 = callback => {
  setTimeout(() => {
    callback(3);
  }, 1000);
};

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
