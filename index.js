// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            type: 'input', 
            message: 'what is your GitHub Username?',
            name: 'username'
        },
        {
            type: 'input', 
            message: 'what is your email address?',
            name: 'email'
        },
        {
            type: 'input', 
            message: 'what is your project name?',
            name: 'project'
        },
        {
            type: 'input', 
            message: 'provide a short description of your project',
            name: 'description'
        },
        {
            type: 'list',
            message:'what kind of license should your project have?', 
            name: 'license',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input', 
            message: 'what command should be run to install dependencies?',
            name: 'installation'
        },
        {
            type: 'input', 
            message: 'what command should be run to to run tests?',
            name: 'tests'
        },
        {
            type: 'input', 
            message: 'what does the user need to know about using the repo?',
            name: 'usage'
        },
        {
            type: 'input', 
            message: 'what does the user need to know about contributing to the repo?',
            name: 'contributing'
        },        
    ])
];










// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
