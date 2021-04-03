const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./util/generateHtml");

let team = [
    {
        manager: {
            name: " ",
            id: " ",
            email: " ",
            officeNumber: " ",
            role: "Manager"
        }
    },
    {
        engineer: {
            name: " ",
            id: " ",
            email: " ",
            officeNumber: " ",
            role: "Engineer"
        }
    },
    {
        intern: {
            name: " ",
            id: " ",
            email: " ",
            officeNumber: " ",
            role: "Intern"
        }
    },
];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your team's manager?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number? (i.e. 1, 2D, 301)"
    },
    {
        type: "list",
        name: "newMember",
        message: "Would you like to add a member to your team?",
        choices: ["Engineer", "Intern", "Finish building my team"]
    }];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this engineer?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is their Github username?"
    },
    {
        type: "list",
        name: "newMember",
        message: "Would you like to add a member to your team?",
        choices: ["Engineer", "Intern", "Finish building my team"]
    }
];
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this intern?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school are they attending?"
    },
    {
        type: "list",
        name: "newMember",
        message: "Would you like to add a member to your team?",
        choices: ["Engineer", "Intern", "Finish building my team"]
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let html = generateHtml(data);
    fs.writeFile(fileName, html, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Team profile has been created succefully!");
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
        .then(answers => {
            let manager = new Manager(answers);
            team[0].manager.name = answers.name;
            team[0].manager.id = answers.id;
            team[0].manager.email = answers.email;
            team[0].manager.officeNumber = answers.officeNumber;
            console.log(team[0]);
            console.log(answers.newMember);
            while (answers)
            {
            if(answers.newMember !== "Finished building my team")
                switch (answers.newMember) {
                case Engineer: 
                    inquirer.prompt(engineerQuestions)
                    .then(answers => {
                        let engineer = new Engineer(answers);
                        team[1].engineer.name = answers.name;
                        team[1].engineer.id = answers.id;
                        team[1].engineer.email = answers.email;
                    });
                    break;
                case Intern: 
                    inquirer.prompt(internQuestions)
                    .then(answers => {
                        let intern = new Intern(answers);
                        team[2].intern.name = answers.name;
                        team[2].intern.id = answers.id;
                        team[2].intern.email = answers.email;              
                    });
                    break;
                default:
                    break;
                }
            }
        });
};

// Function call to initialize app
init();