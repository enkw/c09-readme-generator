// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return license = '';
  }
  return license = 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how to contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${}
  
  ## Usage
  
  ${}
  
  ## Credits
  
  Me
  
  ## License
  
  ${}
  
  ## Features
  
  ${}
  
  ## How to Contribute
  
  ${}
  
  ## Tests
  
  ${}

  ## Questions

  ${}
  ${}
`;
}

module.exports = generateMarkdown;
