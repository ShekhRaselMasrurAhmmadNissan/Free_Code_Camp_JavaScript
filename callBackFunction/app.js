// greetMorning = (userName) => {
// 	const myName = `Susan`
// 	console.log(`Good Morning ${userName}, My name is ${myName}.`)
// }

// greetAfternoon = (userName) => {
// 	const myName = `Peter`
// 	console.log(`Good Afternoon ${userName}, My name is ${myName}.`)
// }

// greetMorning(`Bobo`)
// greetAfternoon(`Anna`)

/*
** Higher Order Function
*/

morning = (userName) => {
	return `Good Morning ${userName}`
}

afternoon = (userName) => {
	return `Good Afternoon ${userName}`
}

evening = (userName) => {
	return `Good Evening ${userName}`
}

greet = (userName, callBack) => {
	const myName = `John`
	console.log(`${callBack(userName)}, My name is ${myName}.`)
}

greet(`Susan`, morning)
greet(`Anna`, afternoon)
greet(`Peter`, evening)
