const person = {
	firstName: `John`,
	lastName: `Peter`,
	age: 40,
	education: false,
	married: true,
	siblings: [`Anna`, `Jesica`, `Jisan`],
	greeting: function () {
		console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
	}
}

console.log(`My name is ${person.firstName} ${person.lastName}.
I'm ${person.age} years old.`)
person.greeting()