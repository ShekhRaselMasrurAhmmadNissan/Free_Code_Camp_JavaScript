// innerHtml
// textContent

const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.getElementById('.item')

console.log(div.textContent)
console.log(list.innerHTML)
console.log(list.textContent)


// Creating an Un-Order List
const randomValue = `Random Text`
const ul = document.createElement('ul')
ul.innerHTML = `<li class="item">${randomValue}</li>
<li>List Item</li>
<li>List Item</li>`

document.body.appendChild(ul)

div.innerHTML = `${randomValue}`