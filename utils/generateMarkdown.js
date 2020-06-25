const generateMarkdown = data => {
  // return JSON.stringify(data)
  return `

# ${data.title.toUpperCase()}
![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/github/languages/top/kikaiaku/readmegen.io)
_Repo by ${data.name.toUpperCase()}_

__Table of contents:__
- [Installation](#inst)
- [Description](#use)
- [Licence](#cb)
- [Contributors](#con)
- [Tests](#test)
- [Questions](#qs)

__Installation:__
${data.inst}

__Description:__
${data.use}



__licence:__
${data.cb}

__Contributors:__
${data.con}

__Tests:__
${data.test}

__Questions:__
${data.qs}
`
}

module.exports = generateMarkdown