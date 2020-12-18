const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path")
const markDown = require("./generaremarkdown")
// const generateMarkdown = require('./utils/generateMarkdown.js');

const input = [

    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project",
    },

    {
        type: "input",
        name: "projectURL",
        message: "Please enter the URL to your deployed project",
    },

    { 
        type: "input",
        name: "filename",
        message: "Please enter the name of your file.md",
        default: "README",
    },
    
        {
            type: "input",
            name: "Introduction",
            message: "Please enter a brief description of your project",
        },

        {
            type: "input",
            name: "UserStory",
            message: "Please enter the user story for your project",
        },


        {
            type: "input",
            name: "Technology",
            message: "Please list the technology used to create your project",
        },

        {
            type: "input",
            name: "Screenshots",
            message: "Link to screenshot image",
        },

        {
                type: "input",
                name: "secondScreenshot",
                message: "Link to screenshot image",
                
        },
        


        {
            type: "input",
            name: "Usage",
            message: "Please list the technology used to create your project",
        },

        {
            type: "input",
            name: "Features",
            message: "Please list the features of your project",
        },

        {
            type: "input",
            name: "Credits",
            message: "Please list the resources, collaborators and databases that you used in your project",
        },

        {
            type: "list",
            name: "license",
            message: "Which license would you like to use for your project?",
            choices: [ 
                {
                    key:'mitBadge',
                    name: 'MIT',
                    value :`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
                },

                {
                    key:'mozillaBadge',
                    name: 'Mozilla',
                    value :`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
                },

                {
                    key:'iscBadge',
                    name: 'ISC',
                    value :`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
                },


                {
                    key:'bsdBadge',
                    name: 'BSD',
                    value :`[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
                },

                {
                    key:'apacheBadge',
                    name: 'Apache',
                    value :`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
                },
            ],
    
        },


       
];

function writeToFile(fileName, data) {
    console.log(fileName, data)
     fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(input)
    .then(data => { 
        console.log(data);
        var temp = markDown(data)
        writeToFile("readme.md", temp)
      
            
    })
}


// function call to initialize program
init();







