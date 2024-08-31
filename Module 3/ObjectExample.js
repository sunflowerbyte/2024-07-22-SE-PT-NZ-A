

/*let firstName = "Mirza"
let lastName = "Arshad"
let company = "IOD"
const country = "New Zealand"
const city = "Auckland"

let firstNameStudent1 = "Josh"
let lastNameStudent1 = "Fuimaono"
let company1 = "IOD"
const country1 = "New Zealand"
const city1 = "Auckland"*/

//above can be shortened to:
let person = {
    firstName : "Mirza",
    lastName : "Arshad",
    company : "IOD",
    country : "New Zealand",
    city : "Auckland",
    postcode : 600,
    mobile : "021909032",
    isDirector: false,
    "has a dog" : "no" //requires a square syntax [] see line  32
}

//to access the data

console.log(person.lastName)
console.log(person["company"])
console.log(person["has a dog"])

//printing all data of person
console.log(person)
//another way to add a new key:value e.g. car: true instead of adding to let person {}
person.car = true
console.log(person)


//Another example
const tv = { // object starts here
    brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
    size: "55-inch", // values can be any data type
    model: 2023, // multiple key-value pairs are separated by commas
    resolution: "4K", // the comma on the last key-value pair can be omitted
   // object ends here. All data is stored in tv variable.
  turnOn: function(){
    console.log("TV turned on")
  }

}

tv.isPopular = true
tv.turnOn()