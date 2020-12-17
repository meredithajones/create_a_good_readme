// function to generate markdown for README
function generateMarkdown(data) {
    console.log("WE MADE IT!", data)
  return `# ${data.title}
    Goodbye
       site [website](${data.filename})'
        Hello
        #${data.description}
`;
};

module.exports = generateMarkdown;
