// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3, 1, 1];

const findMin = list => {
  let min = Number.MAX_SAFE_INTEGER;
  let count = 0;

  list.forEach(n => {
    if (n < min) {
      min = n;
      count = 1;
    } else if (n === min) {
      count++;
    }
  });

  return { min, count };
};

console.log(findMin(arr));

const findMinCount = list => {
  const min = Math.min(...arr);
  const mins = arr.filter(n => n === min);

  return mins.length;
};

console.log(findMinCount(arr));
