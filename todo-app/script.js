const note = document.querySelector('#note')
const add_button = document.querySelector('#add_button')
const res_button = document.querySelector('#res_button')
const ul = document.createElement('ul')
ul.setAttribute('id', 'thelist')


function note_addition() {
    const li = document.createElement('li')
    const p_note = document.createElement('p')
    const del_button = document.createElement('button')
    const edit_button = document.createElement('button')
    del_button.textContent = 'Del'
    edit_button.textContent = 'Edit'

    p_note.setAttribute('id', String(Date.now()))
    p_note.textContent = note.value
    p_note.addEventListener('click', (e) => {
        e.target.setAttribute('style', 'text-decoration:line-through')
    })
    
    li.appendChild(p_note)
    li.appendChild(del_button)
    li.appendChild(edit_button)

    del_button.addEventListener('click', () => {
        li.remove()
    })

    edit_button.addEventListener('click', () => {
        note.value = p_note.innerText
        li.remove()
        add_button.textContent = 'Save'
        add_button.addEventListener('click', () => {
            p_note.textContent = note.value
            add_button.textContent = 'Add'
        })
    })
    
    ul.appendChild(li)
    note.value = "";
    document.querySelector('#list_notes').appendChild(ul)
}

function note_reset() {
    let reset_elements = document.getElementById('list_notes');
    reset_elements.innerHTML = ""
    // reset_elements.forEach((item, index) => {item.remove()})
}

add_button.addEventListener('click', note_addition)
res_button.addEventListener('click', note_reset)