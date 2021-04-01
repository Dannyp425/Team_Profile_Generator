class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name);
      super(id);
      super(email);
      this.github = github;
      this.role = "Engineer";
    }
  
    getName() {
        return this.name;
    };
  
    getId() {
        return this.id;
    };

    getEmail() {
      return this.email;
    };
    
    getGithub() {
      return this.github;
    };

    getRole() {
        return this.role;
    };
  };