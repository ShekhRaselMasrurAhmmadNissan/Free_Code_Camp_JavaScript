/* 
 ** Powerful Array Method
 ** forEach, Map, Filter, Find, Reduce
 ** Iterate over Array - no For Loop Required
 ** Accept Call Back Function as Argument. Calls Call back function against every Item of an Array. Reference Item in the call back Parameter.
 */

// const number = [0, 1, 2, 3, 4]
// for (let i = 0; i < number.length; i++) {
// 	console.log(number[i])	
// }

// ForEach - Does not return new Array
// const people = [{
// 		userName: `Bob`,
// 		age: 20,
// 		position: `Developer`
// 	},
// 	{
// 		userName: `Anna`,
// 		age: 45,
// 		position: `Tester`
// 	},
// 	{
// 		userName: `Peter`,
// 		age: 35,
// 		position: `Designer`
// 	}
// ]

// showPerson = (person) => {
// 	console.log(person.position.toUpperCase())
// }

// people.forEach(showPerson)

// people.forEach(element => {
// 	console.log(element.position.toUpperCase())
// })


/*
 ** Map - Does return a new Array
 ** Does not change the size of original Array
 ** Use value from original array when making new one.
 */

// const people = [{
// 		userName: `Bob`,
// 		age: 20,
// 		position: `Developer`
// 	},
// 	{
// 		userName: `Anna`,
// 		age: 45,
// 		position: `Tester`
// 	},
// 	{
// 		userName: `Peter`,
// 		age: 35,
// 		position: `Designer`
// 	}
// ]

// const ages = people.map((person) => {
// console.log(person)
// 	return person.age + 20
// })

// const newPeople = people.map((person) => {
// 	return {
// 		firstName: person.userName.toUpperCase(),
// 		oldAge: person.age + 20
// 	}
// })

// const names = people.map((person) => {
// 	return `<h1>${person.userName.toUpperCase()}</h1>`
// })

// document.body.innerHTML = names.join(``)
// console.log(names)
// console.log(ages)
// console.log(newPeople)


/*
 ** Filter - Does return a new Array
 ** Can manipulate the size of new Array
 ** returns based on condition
 */

// const people = [{
// 		userName: `Bob`,
// 		age: 20,
// 		position: `Developer`
// 	},
// 	{
// 		userName: `Anna`,
// 		age: 45,
// 		position: `Tester`
// 	},
// 	{
// 		userName: `Peter`,
// 		age: 35,
// 		position: `Designer`
// 	},
// 	{
// 		userName: `Susan`,
// 		age: 25,
// 		position: `Analyzer`
// 	}
// ]

// const youngPeople = people.filter((person) => {
// 	return (person.age <= 25)
// })

// const developers = people.filter((person) => {
// 	return (person.position.toLowerCase() == `developer`)
// })

// console.log(developers)
// console.log(youngPeople)


/*
 ** Find - Returns Instances - in this case Object
 ** Returns First Match if No Match undefined
 ** Great for getting unique value
 */

// const people = [{
// 		id: 1,
// 		userName: `Bob`,
// 		age: 20,
// 		position: `Developer`
// 	},
// 	{
// 		id: 2,
// 		userName: `Anna`,
// 		age: 45,
// 		position: `Tester`
// 	},
// 	{
// 		id: 3,

// 		userName: `Peter`,
// 		age: 35,
// 		position: `Designer`
// 	},
// 	{
// 		id: 4,
// 		userName: `Susan`,
// 		age: 25,
// 		position: `Analyzer`
// 	}
// ]
// const names = [`Bob`, `Peter`, `Susan`]
// const person = people.find((person) => {
// 	return (person.id === 2)
// })

// console.log(person)
// console.log(
// 	names.find((userName) => {
// 	return (userName.toLowerCase() === 'susan')
// 	})
// )
// const person2 = people.filter((person) => {
// 	return (person.id === 2)
// })
// console.log(person2)

/*
 ** Reduce - Iterates, callback Function
 ** Reduce to Single value - Number, Array, Object
 ** 1 Parameter (ACC) - Total of all calculation
 ** 2 Parameter (CURR) - Current Iteration/ Value
 */

const people = [{
		id: 1,
		userName: `Bob`,
		age: 20,
		position: `Developer`,
		salary: 200
	},
	{
		id: 2,
		userName: `Peter`,
		age: 25,
		position: `Designer`,
		salary: 300
	},
	{
		id: 3,
		userName: `Susy`,
		age: 30,
		position: `The Boss`,
		salary: 500
	},
	{
		id: 4,
		userName: `Anna`,
		age: 35,
		position: `The Boss`,
		salary: 500
	}
]

const total = people.reduce((acc, currentItem) => {
	console.log(`Total: ${acc}`)
	console.log(`Current salary: ${currentItem.salary}`)
	acc += currentItem.salary
	console.log(`Current Total: ${acc}`)
	return acc
}, 0)

console.log(total)