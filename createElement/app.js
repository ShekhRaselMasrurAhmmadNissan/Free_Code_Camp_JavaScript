// createElement('element')
// createTextNode('text node')
// element.appendChild(childElement)

// insertBefore('element', 'location')

// replaceChild('newElement', 'oldElement')

const result = document.querySelector('#result')
const first = document.querySelector('.red')

// Create Empty Element
const bodyDiv = document.createElement('div')

// Create text node
const textNode = document.createTextNode(`I am an Empty Element`)

// Add the text node to an Element
bodyDiv.appendChild(textNode)

// Append the body Div to the Body
// document.body.appendChild(bodyDiv)
document.body.insertBefore(bodyDiv, result)

// Result Element
const heading = document.createElement('h2')
const headingText = document.createTextNode('Dynamic Heading')
heading.appendChild(headingText)
heading.classList.add('blue')
result.insertBefore(heading, first)
// result.appendChild(heading)


const smallHeading = document.createElement('h6')
const smallHeadingText = document.createTextNode(`I am a small heading Element`)
smallHeading.appendChild(smallHeadingText)
smallHeading.classList.add('red')
result.replaceChild(smallHeading, heading)

console.log(result.children)