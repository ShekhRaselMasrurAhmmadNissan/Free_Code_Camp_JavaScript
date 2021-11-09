// JSON.stringify(), JSON.parse()

const friends = [`John`, `Peter`, `Bob`]

localStorage.setItem('friends', JSON.stringify(friends))

const values = JSON.parse(localStorage.getItem('friends'))
console.log(values)

let fruits = []

// localStorage.setItem('fruits', JSON.stringify(fruits))
if (localStorage.getItem('fruits')) {
	fruits = JSON.parse(localStorage.getItem('fruits'))
} else {
	fruits = []
	localStorage.setItem('fruits', JSON.stringify(fruits))

}

console.log(fruits)

fruits.push('Apple')
fruits.push('Orange')

localStorage.setItem('fruits', JSON.stringify(fruits))