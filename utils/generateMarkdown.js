const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `

# ${data.title.toUpperCase()}
![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/github/languages/top/kikaiaku/readmegen.io)
_Repo by ${data.name.toUpperCase()}_

## Table of contents:
- [Installation](#Installation)
- [Description](#Description)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation:
${data.inst}

## Description:
${data.use}



## Licence:
${data.cb}

## Contributors:
${data.con}

## Tests:
${data.test}

## Questions:
${data.qs}
`
}

module.exports = generateMarkdown