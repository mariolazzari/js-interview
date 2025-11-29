// Create a counter function which has increment and getValue functionality

function counter() {
  let count = 0;

  return {
    increment: (val = 1) => {
      count += val;
    },
    getValue: () => count,
  };
}

const counter1 = counter();
counter1.increment();
counter1.increment();
console.log("counter1:", counter1.getValue());

const counter2 = counter();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
console.log("counter2:", counter2.getValue());

console.dir(counter.getValue);
