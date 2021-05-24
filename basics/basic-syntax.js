// const functionOne = function () {
//     const subFunction = function () {
//         return 1 + 1
//     }
//     return subFunction
// }
// const functionCopy = functionOne()
// const valFunctionCopy = functionCopy()

// console.log(functionCopy)
// console.log(valFunctionCopy)

const counter = function (increment) {
    // Anonymous function
    return function (num) {
        return num + increment
    }
}

const value = counter(5)
const finalValue = value(10)
const sum = value(20)

console.log(finalValue)
console.log(sum)