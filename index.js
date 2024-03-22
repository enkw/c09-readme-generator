// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
        message: 'Please select the license used:'
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

// TODO: Create a function to write README file
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
