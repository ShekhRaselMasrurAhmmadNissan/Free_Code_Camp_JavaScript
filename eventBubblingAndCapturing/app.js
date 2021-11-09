// Event bubbling Capturing
// Allows Select Dynamic elements
// event propagation - Order the events are fired
// event bubbling - Click element first then bubbles up - default
// Event capturing - Fires at the root and fires until reaches target

const container = document.querySelector('.container')
const list = document.querySelector('.listItems')

let showBubbling = (e) => {
	console.log(e.currentTarget)
	console.log(e.target)

	if (e.target.classList.contains('link')) {
		console.log(`You have clicked a link.`)
	}
}
let stopProp = (e) => {
	console.log(`You clicked on a list.`)

	e.stopPropagation()
}

list.addEventListener('click', showBubbling, {capture: true})
container.addEventListener('click', showBubbling, {capture: true})
window.addEventListener('click', showBubbling, {capture: true})
document.addEventListener('click', showBubbling, {capture: true})
