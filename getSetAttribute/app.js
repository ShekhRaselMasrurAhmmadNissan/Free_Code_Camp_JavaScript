// getAttribute()
// setAttribute()

const first = document.querySelector('.first')
const classValue = first.getAttribute('class')
console.log(classValue)
const idValue = first.getAttribute('id')
console.log(idValue)

const links = document.querySelectorAll('.first')
console.log(links)

const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink)

const last = link.nextElementSibling
last.setAttribute('class', 'first')
last.textContent = 'I have an attribute now and a class name First'
console.log(last)