const container = document.querySelector('.container')
// const heading = document.querySelector('.heading')
const clickMeButton = document.querySelector('.btn')

sayHello = () => {
	console.log(`Hello There.`)
}

// heading.addEventListener('click', sayHello)


clickMeButton.addEventListener('click', () => {
	const element = document.createElement('h1')
	element.classList.add('heading')
	element.textContent = `I'm a dynamic content`
	// element.addEventListener('click', sayHello)
	container.appendChild(element)
})

container.addEventListener('click', (e) => {
	if (e.target.classList.contains('heading')) {
		console.log(`Hello There.`)
	}
})