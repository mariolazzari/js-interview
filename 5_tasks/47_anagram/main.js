// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lower1 = str1.toLowerString();
  const lower2 = str2.toLowerString();
  if (lower1 === lower2) {
    return false;
  }

  const sorted1 = lower1.split("").sort();
  const sorted2 = lower2.split("").sort();

  return sorted1 === sorted2;
};
