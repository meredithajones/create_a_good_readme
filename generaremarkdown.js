// function to generate markdown for README
function generateMarkdown(data) {
    console.log("WE MADE IT!", data)
  return `# ${data.title}

  ## Table of Contents

  -[Introduction](##Introduction)
  
  -[Technology](##Technology)
  
  -[Screenshots](##Screenshots)
     
  -[Usage](##Usage)
  
  -[Features](##Features)
  
  -[Credits](##Credits)
  
  -[License](##License) 



        ${data.projectURL}
        ${data.filename}

## Introduction
    ${data.Introduction}
        * User Story
          ${data.UserStory}

## Technology

    ${data.Technology}

## Screenshots
    ${data.Screenshots}

      ${data.secondScreenshot}

## Usage
    ${data.Usage}

## Features
    ${data.Features}

## Credits
  ${data.Credits}

## License
  ${data.License}

      

      
`;
};
// Installation
// Usage
// Credits
// License


// Installation
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// Usage
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
// ![alt text](assets/images/screenshot.png)

// Credits
// List your collaborators, if any, with links to their GitHub profiles.
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// If you followed tutorials, include links to those here as well.

// License
// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/

// 🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// Badges

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.

// Features
// If your project has a lot of features, consider adding a heading called "Features" and listing them there.

// Contributing
// If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.

module.exports = generateMarkdown;
