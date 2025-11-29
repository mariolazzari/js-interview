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
