// Event object argument e, evt
// info about triggered events
// event.type
// event.currentTarget
// this keyword
// preventDefault() - Prevent default behaviour

// const clickMeButton = document.querySelector('.btn')
// const heading = document.querySelector('h1')
// const link = document.querySelector('#link')

// clickMeButton.addEventListener('click', (event) => {
// 	console.log('You Clicked the Button.')
// 	event.currentTarget.classList.add('blue')
	// clickMeButton.classList.add('blue')
	// clickMeButton.className = 'blue'
// 	console.log(event.type)
// 	console.log(event.currentTarget)
// })

// let someFunction = (e) => {
// 	e.preventDefault()
// }

// link.addEventListener('click', someFunction)





// currentTarget - always refers to the element to which the event handler has been attached to
// target - Identifies the element on which the event occurs

// const buttons = document.querySelectorAll('.btn')

// buttons.forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
		// console.log(e.currentTarget)
		// e.currentTarget.style.color = 'black'

// 		console.log(`target -> ${e.target}`)
// 		e.target.style.color = 'black'
// 	})
// })