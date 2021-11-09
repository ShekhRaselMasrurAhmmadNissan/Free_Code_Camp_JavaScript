// Submit event listener
// Prevent default
// How to get a value

const form = document.querySelector('#form')
const userName = document.querySelector('#userName')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log(`You submitted the form.`)
	console.log(`User Name: ${userName.value}`)
	console.log(`Password: ${password.value}`)
})