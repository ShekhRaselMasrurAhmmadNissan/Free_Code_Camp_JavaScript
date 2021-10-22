// const firstName = `John`
// const lastName = `Jordan`

// const fullName = `${firstName} ${lastName}`
// console.log(fullName)

// const number = 4
// const number2 = 10

// const resultOfSum = number + number2
// console.log(resultOfSum)


// const value = firstName - lastName
// console.log(value)

// let number3 = `10`
// let number4 = `23`
// const result = number3 + number4
// console.log(result);

const randomNumber = 13

document.querySelector('.form').addEventListener('submit', function (e) {
	e.preventDefault()
	let value = document.getElementById('value').value
	value = parseInt(value)
	console.log(`Input value type:`)
	console.log(value);
	console.log(`Sum of two value:`);
	console.log(randomNumber + value);
})