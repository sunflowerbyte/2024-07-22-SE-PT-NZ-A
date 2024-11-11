let user = {
    firstName: "Mirza",
    secondName: "Arshad",
    toString()
    {
        return this.firstName + " " + this.secondName
    }
}
console.log("The object is: " + user)


let Apple = {
    color: "Red",
    Type: "Ambrosia",
    Quantity: 4,

    valueOf()
    {
        return this.Quantity
    }
}

console.log(Apple * 4)


const billion1 = 1_000_000_000 //underscores are ignored
const billion2 = 1e9 //exponential format
const microSecs1 = 0.000_001
const microSecs2 = 1.e-6

const hexnumber = 0xAFE7 //hexadecimal
const binarynumber = 0b01001
const octalnumber = 0o01371323
const mobilenumber = "02102432312"
//best way to store mobile numbers is to store them as a string