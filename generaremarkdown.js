// function to generate markdown for README
function generateMarkdown(data) {
    console.log("WE MADE IT!", data)
  return `# ${data.title}
       site [website](${data.filename})'
        #${data.description}
`;
};

module.exports = generateMarkdown;
