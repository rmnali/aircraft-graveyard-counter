let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let text = "test is working"
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

function reset() {
    count = 0
    countEl.textContent = count
}

function test() {
    console.log(text)
}