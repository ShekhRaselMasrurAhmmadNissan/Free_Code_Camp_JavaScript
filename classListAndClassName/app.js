// className
// classList

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

const firstClassValue = first.className
console.log(firstClassValue)

second.className = 'colors text'

// third.classList.add('colors')
// third.classList.add('text')
third.classList.add('text', 'colors')
let result = third.classList.contains('colors')

if (result) {
	console.log(`Hello World`)
} else {
	console.log(`The class list does not contains the class named 'colors'`)
}

const classValue = third.classList
console.log(classValue)