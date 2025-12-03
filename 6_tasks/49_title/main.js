// Write a function to convert a string to title case

// Provided test cases
//   titleCase(“I’m a little tea pot”) should return a string.
//   titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
//   titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
//   titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

const capitalize = str =>
  str
    .split(" ")
    .map(s => `${s.slice(0, 1).toUpperCase()}${s.slice(1)}`)
    .join(" ");

console.log(capitalize("ciao da mario"));
