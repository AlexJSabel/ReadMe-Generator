// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const util = require('utils')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description"
    
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
    message: "What license is being used? (ie...MIT)",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Mit License', 'Boost Software License 1.0', 'The Unlicense', 'No license']
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
function writeToFile(data) {
    fs.writeFile(`./utils/README.md`, data, err => {
        if (err) {
            throw err
        };
        console.log('README written successfully!')
    })
    };
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        });
};

// Function call to initialize app
init();
