class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
      this.role = "Manager";
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
    
    getOfficeNumber() {
      return `Their office number is ${this.officeNumber}`;
    };

    getRole() {
        return this.role;
    };
  };