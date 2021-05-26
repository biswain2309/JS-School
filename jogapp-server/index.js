const express = require('express')

// Creating a new instance of express
const app = express()

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(3000, err => {
    if (err) {
        console.log('Something went wrong..', err)
    } else {
        console.log('JogApp running on port 3000')
    }
})