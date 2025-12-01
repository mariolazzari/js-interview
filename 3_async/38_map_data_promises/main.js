// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise(resolve => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise(resolve => {
    resolve(userStatuses);
  });
};

const getAvtiveUsers = () =>
  getUserStatuses().then(data => {
    const activeIds = data.filter(d => d.isActive).map(d => d.id);

    return getUsers().then(users =>
      users.filter(u => activeIds.includes(u.id))
    );
  });

getAvtiveUsers().then(users => console.log("Active users:", users));
