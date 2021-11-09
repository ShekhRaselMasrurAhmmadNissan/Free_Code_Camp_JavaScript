// document.getElementById("count-el").innerText = 5

// let count = 10
// console.log(count)

// let myAge = 23
// console.log(myAge)

const btn = document.querySelector('#increment-btn')
const result = document.querySelector('#count-el')

let count = 0

btn.addEventListener('click', (e) => {
	count++
	result.textContent = count
})