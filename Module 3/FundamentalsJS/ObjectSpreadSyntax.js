let person1 = {
    firstName:"John",
    age: 40,
    address: {
        unit:40,
        street:"Auckland CBD"
    }
}

let person2 = {...person1, school:"XYZ", location:"Auckland"} //spread syntax

console.log(person1)
console.log(person2)

person2.firstName="Will"

console.log(person1)
console.log(person2)