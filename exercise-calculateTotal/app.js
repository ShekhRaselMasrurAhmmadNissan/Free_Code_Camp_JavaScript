calculateTotal = (array) => {
	let total = 0
	array.forEach(value => {
		total+=value
	})
	return total	
}

let food = [10, 50, 100]
let gas = [60, 45, 89]

let totalCost = calculateTotal(food) + calculateTotal(gas)
console.log(totalCost)
