const add_button = document.querySelector('#add_button')
const sub_button = document.querySelector('#sub_button')
const mul_button = document.querySelector('#mul_button')
const div_button = document.querySelector('#div_button')


function result_func(operand) {
    const result_add = document.createElement("p")
    const num1 = Number(document.querySelector("#number1").value)
    const num2 = Number(document.querySelector("#number2").value)
    switch (operand) {
        case "+":
            result_add.innerText = "Addition result is" + " " + (num1 + num2)
            break;
        case "-":
            result_add.innerText = "Subtraction result is" + " " + (num1 - num2)
            break;
        case "*":
            result_add.innerText = "Multiplication result is" + " " + (num1 * num2)
            break;
        case "/":
            result_add.innerText = "Division result is" + " " + (num1 / num2)
            break;
    }
    document.body.appendChild(result_add)
}

add_button.addEventListener('click', () => result_func("+"))
sub_button.addEventListener('click', () => result_func("-"))
mul_button.addEventListener('click', () => result_func("*"))
div_button.addEventListener('click', () => result_func("/"))