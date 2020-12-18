const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path")
const markDown = require("./generaremarkdown")

const input = [

    { 
        type: "input",
        name: "tableOfContentsOne",
        message: "Please enter the first item to list in your table of contents",
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
            name: "description",
            message: "Please enter a brief description of your project",
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







