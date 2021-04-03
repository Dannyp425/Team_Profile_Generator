const Employee = require("./Employee") 

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name,id, email);
      this.school = school;
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
    
    getSchool() {
      return `Their school is ${this.school}`;
    };

    getRole() {
        return "Intern";
    };
  };

  module.exports= Intern;