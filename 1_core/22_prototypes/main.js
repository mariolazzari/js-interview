// Design the same classes by using only Javascript prototypes
const Employee = function (id, name) {
  this.id = id;
  this.name = name;
};

Employee.prototype.setSalary = function (salary) {
  this.salary = salary;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

const mario = new Employee(1, "Mario");
mario.setSalary(100000);
console.log(mario);

// Manager constructor function
function Manager(id, name) {
  // Call Employee constructor with 'this'
  Employee.call(this, id, name);
}

// Inherit from Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Add Manager-specific methods
Manager.prototype.setDepartment = function (name) {
  this.department = name;
};

Manager.prototype.getDepartment = function () {
  return this.department;
};
