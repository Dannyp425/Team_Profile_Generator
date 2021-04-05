const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./util/generateHtml");

let team = [];

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
];

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

function toDecideWhetherToAddNewEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: "newMember",
            message: "Would you like to add a member to your team?",
            choices: ["Engineer", "Intern", "Finish building my team"]
        }
    ])
}

function whatToDoWhenWeDecideToHaveANewEmployee(newMember) {
    switch (newMember) {
        case "Engineer": 
            inquirer.prompt(engineerQuestions)
            .then (async answers => {
                let engineer = new Engineer(answers);
                engineer.name = answers.name;
                engineer.id = answers.id;
                engineer.email = answers.email;
                engineer.github = answers.github;
                team.push(engineer);
                const response = await toDecideWhetherToAddNewEmployee();
                whatToDoWhenWeveMadeADecision(response);

            });
            break;
        case "Intern": 
            inquirer.prompt(internQuestions)
            .then(async answers => {
                let intern = new Intern(answers);
                intern.name = answers.name;
                intern.id = answers.id;
                intern.email = answers.email;              
                intern.school = answers.school;
                team.push(intern);
                const response = await toDecideWhetherToAddNewEmployee();
                whatToDoWhenWeveMadeADecision(response);

            });
            break;
        default:
            break;
        }
}

function whatToDoWhenWeveMadeADecision(response) {
    if(response.newMember !== "Finish building my team"){
        whatToDoWhenWeDecideToHaveANewEmployee(response.newMember);
    } else {
        console.log("We're done.", team);
        generateHtml(team);
    }
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(managerQuestions)
        .then( async answers => {
            let manager = new Manager(answers);
            manager.name = answers.name;
            manager.id = answers.id;
            manager.email = answers.email;
            manager.officeNumber = answers.officeNumber;
            console.log(team[0]);
            team.push(manager);
            const response = await toDecideWhetherToAddNewEmployee();
            console.log(response);
            whatToDoWhenWeveMadeADecision(response);
        });
    };

// Function call to initialize app
init();