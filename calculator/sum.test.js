const sum = require('./sum')

test('adds 10 + 3 to equal to 13', () => {
    expect(sum(10, 3)).toBe(13)
    expect(sum(11, 3)).toBe(8)
})
