//  Higher order functions are those functions that return another function (func1 ex)
//  or a function that receives a function as a paramater(calculator ex)
// Examples:
const func1 = () => () => 1


const calculator = (op, value1, value2) => {
    return op(value1, value2)
}

const sum = (value1, value2) => value1 + value2

const c1 = calculator(sum, 2, 3)
console.log(c1)


const users = [
    { id: 1, name: 'Indrani', salary: 1000 },
    { id: 2, name: 'Sunny', salary: 2000 },
    { id: 3, name: 'Rama', salary: 3000 }
]

/* const userNames = []
for (let i = 0; i < users.length; i++) {
    usernames.push(users[i].name)
}

console.log(userNames)
*/

const mapFilterName = user => user.name
const userNames = users.map(mapFilterName)

console.log(userNames)

console.log(users.filter(user => user.name === 'Sunny'))

const sumOfSalaries = users.reduce((prev, user) => prev + user.salary, 0)

console.log('sumOfSalaries---', sumOfSalaries)