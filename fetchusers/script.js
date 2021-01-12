const root = document.querySelector('#root')
const fetchbutton = document.querySelector('#fetchbutton')


async function getUsers() {
    try {
        let response = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        data.forEach((user) => {
            const card = document.createElement('div')
        
            const h1 = document.createElement('h1')
            h1.textContent = user.name
        
            const h2 = document.createElement('h2')
            h2.textContent = user.email
        
            root.appendChild(card)
            card.appendChild(h1)
            card.appendChild(h2)
        })
    } catch (error) {
        console.log(error.message);
    }
}

fetchbutton.addEventListener('click', getUsers)

// const nat = [{id: 1, n: 'su'},{id: 2, n: 'in'},{id: 3, n: 'efsf'}]
// const square = nat.reduce((a,c) => {
//     a[c.id] = c;//a[1] ==> a["1"] = {id: 1, n: 'su'}
//     return a;
// }, {})
// console.log(square["1"])

//for(let i=0;i<5;i++)
//for(let item of list)
//for(let item in obj) --> not recommended
//[1,2.3].forEach((item, i) => {})
//[1,2,3].map((item, i) => {})