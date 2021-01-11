//id#, class., tags
let counter_value = document.querySelector('#counter_value')
const increase_button = document.querySelector('#increase_button')
const decrease_button = document.querySelector('#decrease_button')
const reset_button = document.querySelector('#reset_button')
const error_message = document.querySelector('#error_message')
// console.dir(increase_button)
decrease_button.disabled = true
reset_button.disabled = true

if (localStorage.getItem("local_counter") && localStorage.getItem("local_counter") !== "0") { 
    counter_value.textContent = localStorage.getItem("local_counter")
    decrease_button.disabled = false
    reset_button.disabled = false
}

increase_button.addEventListener('click', function() {
    //Falsy - 0, null, NaN, undefined, false, ""
    counter_value.textContent = (parseInt(counter_value.textContent) + 1)
    decrease_button.disabled = false
    reset_button.disabled = false
    localStorage.setItem("local_counter", counter_value.textContent)
})

decrease_button.addEventListener('click', function() {
    if (counter_value.textContent > 0) {
        counter_value.textContent = counter_value.textContent - 1
        localStorage.setItem("local_counter", counter_value.textContent)
        if (counter_value.textContent == 0) {
            decrease_button.disabled = true
            reset_button.disabled = true
        }
        else {
            decrease_button.disabled = false
        }
    }
})

reset_button.addEventListener('click', function() {
    counter_value.textContent=0
    decrease_button.disabled = true
    reset_button.disabled = true
    localStorage.setItem("local_counter", counter_value.textContent)
})

