let x = 10
let y = x

console.log(`value of x is ${x}`)
console.log(`value of y is ${y}`)

x = x + 1
y = y + 3

//string primitives do not share the same memory and have separate memory locations

console.log(`value of x is ${x}`)
console.log(`value of y is ${y}`)



let person1 = {

    firstName:"Mirza",
    company:"IOD"
}

let person2= {}

person2 = person1

console.log(person1)
console.log(person2)

person2.firstName = "Smith"
person2.company = "abc"
//this will also modify person1 because it copies by reference as they share the same memory block/same address in memory

console.log(person1)
console.log(person2)

person1.firstName = "ABC"
person1.company = "SanJuan"

console.log(person1)
console.log(person2)
