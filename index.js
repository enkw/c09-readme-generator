// Calls all required variables for the project
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Below is an array with each questions for the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions if needed:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please list credits for this project:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license used:',
        choices: [
            'None',
            'Apache 2.0',
            'Boost',
            'BSD 2-Clause',
            'CCO 1.0 Universal',
            'GNU AGPL v3',
            'GNU GPL v3',
            'GNU LGPL v3',
            'ISC',
            'MIT',
            'MPL 2.0'
        ]
      },
      {
        type: 'input',
        name: 'features',
        message: 'Please list your project features:'
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to your project if needed?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions if needed:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      }
];

// This function creates the README.md
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
            err ? console.error("Error generating file.") : console.log("README.md generated!")
        );
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
