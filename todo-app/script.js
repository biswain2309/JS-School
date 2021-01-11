const note = document.querySelector('#note')
const add_button = document.querySelector('#add_button')
const ul = document.createElement('ul')
ul.setAttribute('id', 'thelist')


function note_addition(text_toadd) {
    const p_note = document.createElement('li')
    p_note.setAttribute('id', String(Date.now()))
    p_note.innerHTML = text_toadd
    p_note.addEventListener('click', (e) => {
        e.target.remove();
    })
    ul.appendChild(p_note)
    note.value = "";
    document.querySelector('#list_notes').appendChild(ul)
}

add_button.addEventListener('click', () => note_addition(note.value))