// Write a function which implement range

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
