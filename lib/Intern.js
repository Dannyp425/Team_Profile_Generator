class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name);
      super(id);
      super(email);
      this.school = school;
      this.role = "Intern";
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
        return this.role;
    };
  };