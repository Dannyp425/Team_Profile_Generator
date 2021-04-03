class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
    }
  
    getName() {
        return `Their name is ${this.name}`;
    };
  
    getId() {
        return `Their id is ${this.id}`;
    };
  
    getEmail() {
      return `Their email is ${this.email}`;
    };

    getRole() {
        return this.role;
    };
  };

  module.exports = Employee;