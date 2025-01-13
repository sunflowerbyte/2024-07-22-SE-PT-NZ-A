const mobile = 041234567
console.log(mobile) // 8730999 - decimal equivalent
const binary = 0b11111111 // binary form of 255
const octal = 0o377 // octal form of 255

console.log(binary) // 255
console.log(binary === octal) // true


const decimal1 = 255
const result = decimal1.toString(16) //hex base 16
console.log(result)

console.log(decimal1.toString(8)) //octal number

console.log(decimal1.toString(2)) //binary number