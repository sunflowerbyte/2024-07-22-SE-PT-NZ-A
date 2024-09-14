let student = {
    university: "AUT",
    Country:"NZ"
}

let customer = {
    "customerID": 1,
    "location": "USA"
}

let Orders ={
    "OrderID": "order1234",
    "OrderDate": "2024-08-28"
}
const newMap = new Map()
newMap.set("firstName", "Mirza")
newMap.set("Location","Auckland")

newMap.set(student, "0282828918")
newMap.set(customer, Orders)
console.log(newMap)

console.log(newMap.size)

console.log(newMap.get("Location"))
console.log(newMap.get(customer)) //to get Order. call the key 
console.log(newMap.has("Mirza")) // does not exist
console.log(newMap.get(student)) //to get phone number. call the key

newMap.delete(customer)
console.log(newMap)
newMap.clear
console.log (newMap)