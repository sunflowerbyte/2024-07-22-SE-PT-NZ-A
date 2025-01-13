
//Explicit Conversion
let isPassed = false
let number = 123

console.log(String(isPassed))
console.log(String(number))
console.log( String(false) ) // false - string form of boolean

//Implicit Conversion
console.log("2" + 1)
console.log(1 + "2")
console.log( "1" + 1 + 2 ) // 112 - string ‘1’ is concatenated with number 1 then number 2
console.log( 1 + 1 + "2" ) // 22 - number 1 is added to number 1 then concatenated with string ‘2’