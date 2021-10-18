// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
    validate: (value) => { 
        if(value) {return true
        }else {
            return 'I need a value to continue'
        };
    }
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description",
    validate: (value) => { 
        if(value) {return true
        }else {
            return 'I need a value to continue'
        };
    }
}, {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the user need to install to run this app (ie...dependencies)?",
    name: "Installation"
}, {
    type: "input",
    message: "How is the app used? Give instructions",
    name: "Usage"
}, {
    type: "input",
    message: "What liscence is being used? (ie...MIT)",
    name: "License"
}, {
    type: "input",
    message: "Who contributed to this project?:",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Contact info for inquiries.",
    name: "Questions"
}, {
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
