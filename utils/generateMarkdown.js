const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license === 'None') {
        return '';
    } else if (license === 'Apache'){
        return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
    } else if (license === 'MIT') {
        return `https://img.shields.io/badge/license-${license}-green.svg`;
    } else if (license === 'GNU') {
        return `https://img.shields.io/badge/license-${license}-orange.svg`;
    }

    return;
};

//TODO: Create a function that returns the license link
// If there is no license return an empty string
function renderLicenseLink(license) {
    if (license === 'None') {
        return '';
    } else if (license === 'Apache') {
        return '[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.txt)';
    } else if (license === 'MIT') {
        return '[MIT License](https://spdx.org/licenses/MIT.html)';
    } else if (license === 'GNU'){
    return '[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)';
    }

    return;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `
## License

${renderLicenseBadge(license)}

${renderLicenseLink(license)}
`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.name}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contribution](#contribution)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}
${renderLicenseSection(data.license)}
## Features

${data.features}

## Contribution

${data.contribution}
`;
};

module.exports = generateMarkdown;