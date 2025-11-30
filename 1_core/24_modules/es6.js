// Create a es6 module with function getName, getSurname and default export getFullname.

export const getName = name => {
  return name;
};

export const getSurname = surname => {
  return surname;
};

export const getFullname = (name, surname) => {
  return `${name} ${surname}`;
};

export default getFullname;
