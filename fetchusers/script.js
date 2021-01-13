const root = document.querySelector('#root')
const fetchbutton = document.querySelector('#fetchbutton')
const textbox = document.querySelector('#textbox')
// const loader = document.querySelector('#loader')


async function getUsers() {
    try {
        root.innerHTML = 'Loading...'
        let response = await fetch('http://jsonplaceholder.typicode.com/users')

        if (response.ok) {
            root.innerHTML = ''
        }
        const data = await response.json();

        const card = document.createElement('div')

        const table = document.createElement("TABLE")
        table.style.width = '100%'
        table.setAttribute('border', '1')

        let tableheaders = ["User", "Email", "Details"]

        const tablehead = document.createElement('thead')
        const tablerow = document.createElement('tr')

        tableheaders.forEach(header => {
            const th = document.createElement('th')
            th.innerText = header
            tablerow.append(th)
        })

        tablehead.append(tablerow)
        table.append(tablehead)

        const tbody = document.createElement('tbody')

        // root.append(table)

        data.forEach((user) => {

            const trow = document.createElement('tr')

            const username = document.createElement('td')
            username.innerText = user.name

            const email = document.createElement('td')
            email.innerText = user.email

            const details = document.createElement('td')
            details.innerText = 'Details'

            trow.append(username, email, details)

            tbody.append(trow)
            table.append(tbody)
            root.append(table)


            details.addEventListener('click', () => {
                textbox.value = 'UserName: ' + user.name + '\n' + 'Company: ' + user.company.name + '\n' + 'City: ' + user.address.city
            })
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