const fs = require('fs');
const inquirer = require('inquirer');

const input = [
    { 
        type: "input",
        name: "filename",
        message: "Please enter the name of your file.md",
        default: "README",
    },

    {
            type: "input",
            name: "title",
            message: "Please enter the name of your project",
        },

        {
            type: "input",
            name: "description",
            message: "Please enter a brief description of your project",
        },

    }
]

