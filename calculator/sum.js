const sum = (num1, num2) => {
    if (num1 % 5 == 0) {
        return num1 + num2
    }
    return num1 - num2
}

module.exports = sum