const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path")
const markDown = require("./generaremarkdown")
// const generateMarkdown = require('./utils/generateMarkdown.js');

const input = [

    {
        type: "input",
        name: "ProjectURL",
        message: "Please enter the URL to your deployed project",
    },

    { 
        type: "list",
        name: "tableOfContentsOne",
        message: "Please select the first item to list in your table of contents from the list below",
        choices: [ "-[Introduction](#Introduction)" ,"-[Technology](#Technologies)", 
        "-[Screenshots](#Screenshots)", "-[Usage](#Usage)", "-[Features](#Features)", 
        "-[Credits](#Credits)", "-[License](#License)" ]
    },

    { 
        type: "input",
        name: "tableOfContentsTwo",
        message: "Please enter the second item to list in your table of contents",
    },

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
            name: "userStory",
            message: "Please enter the user story for your project",
        },

        {
            type: "input",
            name: "description",
            message: "Please enter a brief description of your project",
        },

        {
            type: "list",
            name: "license",
            message: "Please select a license below",
            choices: ["MIT", "ISC", "Apache", "IPL", "Unlicense"]
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
        writeToFile("README.md", temp)
      
            
    })
}

// function call to initialize program
init();







