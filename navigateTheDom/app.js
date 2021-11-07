// Select the Element and Group of element we want
// Choose the effect we want to apply on the selection

// Child Nodes - Return all child nodes including white spaces which is treated as text nodes

// Children
// First Child
// Last Child

// const result = document.querySelector('#result')
// const allChildrenNodes = result.childNodes
// console.log(allChildrenNodes)

// const children = result.children
// console.log(children)
// console.log(result.firstChild)
// console.log(result.lastChild)



// Parent Element
// const heading = document.querySelector('h2')
// console.log(heading)
// console.log(heading.parentElement.parentElement.parentElement.parentElement)
// const parent = heading.parentElement
// parent.style.color = 'red'




// Previous Sibling
// Next Sibling
// Return WhiteSpace

// const first = document.querySelector('.first')
// console.log(first)
// const second = first.nextSibling.nextSibling
// console.log(second)

// const last = document.querySelector('#last')
// console.log(last)
// const previousLast = last.previousSibling.previousSibling
// console.log(previousLast)

// Previous Element Sibling
// Next Element Sibling
const first = document.querySelector('.first')
const second = first.nextElementSibling
console.log(second)

const last = document.querySelector('#last')
const secondLast = last.previousElementSibling
console.log(secondLast)