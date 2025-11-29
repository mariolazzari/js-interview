// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

const checkUser = (name, users) => {
  const user = users.find(
    user => user.name.toLowerCase() === name.toLowerCase()
  );
  // if (user) {
  //   return true;
  // }
  // return false;

  return !!user;
};

const checkUser2 = (name, users) => users.some(u => u.name === name);

console.log(checkUser("mario", users));
console.log(checkUser("Jack", users));
