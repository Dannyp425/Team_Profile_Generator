const inquirer = require("inquirer");
const Manager = require("./Manager");
const Intern = require("./Manager");
const Engineer = require("./Manager");

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
        });
};

// Function call to initialize app
init();