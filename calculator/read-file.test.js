const readFile = require('./read-file')
const fs = require('fs')


jest.mock('fs')

test('if it reads file', () => {
    expect.assertions(2)
    fs.readFile.mockImplementation((file, cb) => {
        expect(file).toBe('users.txt')
        cb(null, 'users')
    })

    readFile('users.txt')
        .then(data => expect(data).toBe('users'))
})
test('if it doesnot read file', () => {
    expect.assertions(2)
    fs.readFile.mockImplementation((file, cb) => {
        expect(file).toBe('users.txt')
        cb('error', null)
    })

    readFile('users.txt')
        .then(data => expect(data).toBe(null))
        .catch(err => expect(err).toBe('error'))
})