class Engineer extends Employee {
    constructor(name, id, email, github) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
      this.role = "Engineer";
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
    
    getGithub() {
      return `Their github is ${this.github}`;
    };

    getRole() {
        return this.role;
    };
  };