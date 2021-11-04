// Date Objects

const months = [
	`January`,
	`February`,
	`March`,
	`April`,
	`May`,
	`June`,
	`July`,
	`August`,
	`September`,
	`October`,
	`November`,
	`December`
]

const days = [
	`Sunday`,
	`Monday`,
	`Tuesday`,
	`Wednesday`,
	`Thursday`,
	`Friday`,
	`Saturday`
]

const date = new Date()
console.log(date)

const month = months[date.getMonth()]
console.log(month)

const day = days[date.getDay()]
console.log(day)
console.log(date.getDate())
console.log(date.getFullYear())


const sentences = `${day}, ${date.getDate()} ${month}, ${date.getFullYear()}`

console.log(sentences)

document.body.innerHTML = sentences