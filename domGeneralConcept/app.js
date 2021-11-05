// Similar to CSS

// Select the elements or the group of elements that we want to affect
// Decide the effect that we want to apply to the selection

// Many different ways

document.body.style.background = `aqua`
// document.body.style.color = `Yellow`
document.getElementById(`btn`).style.color = `red`

// assign to a variable
// const 


// Window object
// console.log(window)

// Returns a node object or node list , Which is an array like object
const btn = document.getElementById(`btn`)
const btnName = btn.nodeName
const btnCss = btn.style
console.log(btn)

console.log(btnName)
console.log(btnCss)