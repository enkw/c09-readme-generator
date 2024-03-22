// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-brightblue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// This function creates the license section based on the selected license
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  
  This project is licensed under the ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge}
  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ${licenseSection}
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  For any questions about this project, please visit my [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
