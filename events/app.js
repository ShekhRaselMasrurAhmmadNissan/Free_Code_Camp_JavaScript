// Select Elements
// addEventListener()
// What event and what to do

// const clickMeButton = document.querySelector('.btn')
// const heading = document.querySelector('h1')
// let count = 0
// clickMeButton.addEventListener('click', () => {
// 	console.log(`Hey, You clicked me.`)
// 	heading.classList.add('red')
	// clickMeButton.disabled = 'true'
	// count++
	// if (count % 2 == 0) {
	// 	heading.className = 'red'
	// } else {
	// 	heading.className = 'blue'
	// }
// })

// changeColors = () => {
	// console.log(`Hello`)
// 	let hasClass = heading.classList.contains('red')
// 	if (hasClass) {
// 		heading.classList.remove('red')
// 		console.log(`Removed the class named Red`)
// 	} else {
// 		heading.classList.add('red')
// 		console.log(`Added the class named Red`)
// 	}
// }

// clickMeButton.addEventListener('click', changeColors)





// Click - Fires after full action occurs
// Mouse Down - Button is Pressed
// Mouse Up - Button is Removed
// Mouse Enter - Move onto an element
// Mouse Leave - Move out of an element

// const clickMeButton = document.querySelector('.btn')
// const heading = document.querySelector('h1')

// clickMeButton.addEventListener('click', () => {
// 	console.log(`You Clicked Me.`)
// })

// clickMeButton.addEventListener('mousedown', () => {
// 	console.log(`Mouse Down.`)
// })

// clickMeButton.addEventListener('mouseup', () => {
// 	console.log(`Mouse Up.`)
// })

// clickMeButton.addEventListener('mouseenter', () => {
// 	console.log(`Mouse Entered in the area.`)
// })

// clickMeButton.addEventListener('mouseleave', () => {
// 	console.log(`Mouse Left the area.`)
// })





// KeyPressed -> When Key is pressed
// Keydown -> When Key is down
// Keyup -> When Key is released

const nameInput = document.querySelector('#name')

// nameInput.addEventListener('keypress', () => {
// 	console.log(`You Pressed a key.`)
// })

// nameInput.addEventListener('keydown', () => {
// 	console.log(`Kye Down`)
// })

nameInput.addEventListener('keyup', () => {
	console.log(`The text in that input field is: ${nameInput.value}`)
})