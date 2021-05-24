const fs = require('fs')

const function1 = () => {
    console.log('a1')
    console.log('b1')
}

console.log('a')
function1()

// The below command is quite slow
/*const content = fs.readFile('./basic-syntax.js', (err, content) => {
    console.log('content---', String(content))
})*/

const readFilePromise = filePath => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}

/*readFilePromise('./basic-syntax.js')
    .then(content => console.log(content))
    .catch(err => console.log(err))
*/

const processing = async () => {
    try {
        const content = await readFilePromise('./baic-syntax.js')
        return (content)

    }
    catch (err) {
        console.log(err)
    }
    return ''
}

processing()

console.log('b')