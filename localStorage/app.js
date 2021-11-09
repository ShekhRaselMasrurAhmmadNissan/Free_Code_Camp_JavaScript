// WEB Storage API - Provided by browser
// Session Storage, Local Storage
// setItem, getItem, removeItem, clear

localStorage.setItem('name', 'John')
// sessionStorage.setItem('name', 'John')
localStorage.setItem('friend', 'Peter')
localStorage.setItem('job', 'developer')
localStorage.setItem('address', '123 Street')


const userName = localStorage.getItem('name')
const friend = localStorage.getItem('friend')
const job = localStorage.getItem('job')
const address = localStorage.getItem('address')

console.log(userName)
console.log(friend)
console.log(job)
console.log(address)

localStorage.removeItem('friend')
localStorage.removeItem('address')
const anotherFriend = localStorage.getItem('friend')
console.log(anotherFriend)

localStorage.clear()