const root = document.querySelector('#root')
const startstop = document.querySelector('#startstop')
const reset = document.querySelector('#reset')
const record = document.querySelector('#record')
const counter = document.querySelector('#counter')

let flag = true
let setTimeid

let mseconds = 0
let seconds = 0
let minutes = 0
let hr = 0

function starttimer() {
    // counter.textContent = parseInt(counter.textContent) + 1
    // console.log(counter.textContent)

    mseconds++
    if (mseconds >= 99) {
        seconds++
        mseconds = 0
    }
    if (seconds >= 60) {
        seconds = 0
        minutes++
    }
    if (minutes >= 60) {
        minutes = 0
        hr++
    }
    if (String(seconds).length < 2) {
        seconds = String('0' + seconds)
    }

    if (String(minutes).length < 2) {
        minutes = String('0' + minutes)
    }

    if (String(hr).length < 2) {
        hr = String('0' + hr)
    }
    counter.textContent = hr + ':' + minutes + ':' + seconds + '.' + mseconds
}

function startStopHandler() {
    if (flag) {
        setTimeid = setInterval(starttimer, 10)
        flag = false
    }
    else {
        clearInterval(setTimeid)
        flag = true
    }
}

function resettime() {
    clearInterval(setTimeid)
    counter.textContent = '00:00:00.00'
}

function recordtime() {
    if (counter.textContent != '00:00:00.00') {
        const rectime = document.createElement('p')
        rectime.textContent = counter.textContent
        root.appendChild(rectime)
    }
}

startstop.addEventListener('click', startStopHandler)
reset.addEventListener('click', resettime)
record.addEventListener('click', recordtime)

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key == 's') {
        startStopHandler()
    }
    if (event.ctrlKey && event.key == 'r') {
        resettime()
    }
    if (event.ctrlKey && event.key == 'p') {
        recordtime()
    }
})




