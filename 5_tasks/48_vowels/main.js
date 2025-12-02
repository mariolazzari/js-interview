// Write a function which counts vowels in a string

const vowels = ["a", "e", "i", "o", "u"];

const findVowels = str => {
  let count = 0;

  for (const word of str) {
    if (vowels.includes(word)) {
      count++;
    }
  }

  return count;
};

const findVowels2 = str =>
  str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);

console.log(findVowels("Mario"), findVowels2("Mario"));
