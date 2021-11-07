const item = document.getElementById('special')
const nodeValue = item.nodeValue
console.log(nodeValue)

const childNodes = item.childNodes
console.log(childNodes)

const firstNode = childNodes[0]
console.log(firstNode.nodeValue)

const easyValue = item.textContent
console.log(easyValue)
