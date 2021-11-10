const inquirer = require('inquirer');

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
            }

            // Credits section (collaborators)

            // License section (yes/no prompt, input if yes)

            // Features list prompt

            // How might one contribute? prompt
        ]);
};

promptUser()