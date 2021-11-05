// Select the element or the Group of element we want
// Decide the effect we want to apply on that selection


// getElementById(`elementId`)
// const h1 = document.getElementById(`greeting`)
// h1.style.color = `Green`

// const clickMeButton = document.getElementById(`btn`)
// clickMeButton.style.background = `cyan`
// clickMeButton.style.color = `Black`



// getElementByTagName(`elementTagName`)
// node-List = Array Like Object
// index, Length Property but not Array like methods

// const headings = document.getElementsByTagName('h2')
// console.log(headings)
// headings[0].style.color = `Blue`

// const items = [...document.getElementsByTagName('li')]
// items.forEach(item => {
// 	console.log(item)
// })

// items[3].style.color = 'Orange'
// const betterItems = [...items]
// betterItems.forEach(item => {
// 	console.log(item)
// })




// getELementByClassName(`elementClassName`)
// Node list = Array Like Object 
// index, length property but no Array Methods

// const listItems = [...document.getElementsByClassName(`special`)]
// console.log(listItems)
// listItems[1].style.color = 'Orange'



// querySelector(`any css`) - Select's Single
// querySelectorAll(`any css`) - Select's ALl

// const result = document.querySelector('#result')
// result.style.backgroundColor = 'cyan'

// const items = document.querySelector('.special')
// console.log(items)

// const lastItem = document.querySelector('li:last-child')
// console.log(lastItem)

const items = document.querySelectorAll('.special')
items.forEach(item => {
	console.log(item)
	item.style.color = 'yellow'
})