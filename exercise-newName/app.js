let names = ['Bob', 'Anna', 'Susan']
let lastName = 'Peter'
let newNames = []
names.forEach(firstName => {
	newNames.push(`${firstName} ${lastName}`)
})

console.log(names)
console.log(newNames)