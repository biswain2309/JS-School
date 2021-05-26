const fs = require('fs')

const readFile = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

module.exports = readFile