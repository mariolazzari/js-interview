const getName = name => {
  return name;
};

const getSurname = surname => {
  return surname;
};

const getFullname = (name, surname) => {
  return `${name} ${surname}`;
};

export default getFullname;

mdoules.exports = {
  getName,
  getSurname,
  getFullname,
};
