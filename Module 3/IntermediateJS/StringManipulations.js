const string = 'I could be anything you like'

console.log(string.toUpperCase())
console.log(string.length)
console.log(string.indexOf('anything')) //use to find position. count starts at 0 from "I"
console.log(string.indexOf('could'))
console.log(string.indexOf('Mirza')) //will return -1 if not found

console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string + ' plus more') // I could be anything you like plus more