// This function adds a badge based off of the license the user selects
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]';
  } else if (license === 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  } else if (license === 'BSD 2-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
  } else if (license === 'CCO 1.0 Universal') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
  } else if (license === 'GNU AGPL v3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'GNU LGPL v3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]';
  } else if (license === 'ISC') {
    return '[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)]';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
}

// This function adds a link to the license for what the user selected
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost') {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'BSD 2-Clause') {
    return '(https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'CCO 1.0 Universal') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'GNU AGPL v3') {
    return '(https://www.gnu.org/licenses/agpl-3.0)';
  } else if (license === 'GNU GPL v3') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'GNU LGPL v3') {
    return '(https://www.gnu.org/licenses/lgpl-3.0)';
  } else if (license === 'ISC') {
    return '(https://opensource.org/licenses/ISC)';
  } else if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } return '(https://opensource.org/licenses/MPL-2.0)';
}

function renderTOCLink(license) {
  if (license) {
    return '\n  - [License](#license)';
  }
  return '';
}

// This function creates the license section based on the selected license
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  
  This project is licensed under the ${license}`;
}

// This section generates the md for the README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const tocLink = renderTOCLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)${tocLink}
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
  
  ${licenseSection}${licenseLink}
  
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
