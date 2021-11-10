const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!')
                        return false;
                    }
                }
            },
            {

            }
        ]);
};

promptUser()
    .then(promptProject)