//Explicit Conversion
/*let number = "20"
console.log(Number(number))
console.log(Number("Mirza")) //cannot convert string to number = NaN
console.log(Number("35x")) //still string hence NaN*/


console.log( Number("      4      ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

//Implicit Conversion
console.log("6" / "2") // 3
console.log("6" * "2") // 12
console.log("6" - "2") // 4
console.log(+"6") // 6
console.log("7"   *   "Mirza")

//Note: implicit conversion does NOT happen when using + with two or more operands, as JS can (and will) ‘add’ two strings by concatenating them.