// function hello() {
// 	console.log(`Hello there Peter`);
// 	console.log(`Hello there Anna`);
// 	console.log(`Hello there John`);
// }

// hello()
// hello()
// hello()

// function greeting(personName) {
// 	console.log(`Hello there ${personName}`)
// }

// // Peter
// greeting(`Peter`)

// // Anna
// greeting(`Anna`)

// // John
// greeting(`John`)

// const wallHeight = 80

// function calculate(value) {
// 	let newValue = value * 2.54
// 	return newValue
// }

// let width = calculate(100)
// let height = calculate(wallHeight)

// let dimensions = [width, height]
// console.log(dimensions)

function addValues(number1, number2) {
	return number1 + number2
}

const multiply = (number1, number2) => {
	return number1 * number2
}

let firstValue = addValues(4, 7)
let secondValue = addValues(50, 65)

const add = function (number1, number2) {
	return number1 + number2
}

let thirdNumber = add(45, 65)

let fourthNumber = multiply(5, 8)

let values = [firstValue, secondValue, thirdNumber, fourthNumber]
console.log(values)