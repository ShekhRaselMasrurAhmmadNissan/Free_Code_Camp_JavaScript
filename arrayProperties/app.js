let names = ['Noman', 'Sabab', 'Siam', 'Rasel', 'Sidhu']

let anotherNames = ['Rakib', 'Arif', 'Emon']

// Length of an Array
console.log(names.length)
console.log(names[(names.length - 1)])

// Concat of two Array
let allNames = names.concat(anotherNames)
console.log(allNames)

// Reverse of an Array
console.log(allNames.reverse())
allNames.reverse()

// Unshift Insertion (Insert in Front)
allNames.unshift('Susy')
allNames.unshift('Anna')
console.log(allNames)

// Shift (Delete from first)
allNames.shift()
allNames.shift()
allNames.shift()
allNames.shift()
console.log(allNames)

// Push (Insert in Last Position)
allNames.push('Susan')
allNames.push('Suly')
allNames.push('Ruby')
console.log(allNames)

// Pop (Delete from Last Position)
allNames.pop()
allNames.pop()
allNames.pop()
console.log(allNames)

// Splice - Mutates Original Array
allNames.push('Susan')
allNames.push('Suly')
allNames.push('Ruby')

let specificNames = allNames.splice(2, 2)
console.log(specificNames)
console.log(allNames)