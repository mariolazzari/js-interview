// Design a class for employee which takes id and name in during construction of object and has a salary property
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return salary;
  }
}

// Design a class for manager which is employee and can have department property

class Manager extends Employee {
  constructor(id, name) {
    super(id, name);
  }

  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const mario = new Employee(1, "Mario");
mario.setSalary(100000);
console.log(mario);

const mng = new Manager(1, "Manager");
mng.setSalary(200000);
mng.setDepartment("IT");
console.log(mng);
