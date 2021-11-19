const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


const promptUser = () => {
    return inquirer
        .prompt([
            {

                // Project name prompt
                type: 'input',
                name: 'name',
                message: 'What is your project name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your project name!')
                        return false;
                    }
                }
            },

            // Description section prompt
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a description of your project'
            },

            // Installation section prompt
            {
                type: 'input',
                name: 'installation',
                message: 'How do you install your project?'
            },

            // Usage section prompt
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use your project?'
            },

            // Credits section (collaborators)
            {
                type: 'input',
                name: 'credits',
                message: 'Please list project contributors.'
            },

            // License section (yes/no prompt, input if yes)
            {
                type: 'input',
                name: 'license',
                message: 'Please include a license link.'
            },

            // Features list prompt
            {
                type: 'input',
                name: 'features',
                message: 'Please list your project\'s features.'
            },

            // How might one contribute? prompt
            {
                type: 'input',
                name: 'contribution',
                message: 'How might one contribute to your project?'
            }
        ])
        .then(answers => {
            console.log(answers);
        });
};

// Function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeToFile(fileName, data, err => {
            // if there's an error, rejet the Promise and send the error to the Promise's `.catch()` method
            if(err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everyting went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

// Function call to initialize app
function init() {

};

promptUser()