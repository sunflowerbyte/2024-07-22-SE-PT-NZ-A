/*console.log(1/10)
console.log(-1/10)
console.log( 4 * 5)
console.log("Mirza" * 2)
console.log(45/"IOD")*/

let one = 1;
let two = 2;
let three = 3;

//console.log(one + two - three * two / one)

one = one + 1
//one += 1 is a shortcut of above
console.log(one)

//two = two - 1//
two -= 1 
console.log(two)

const bigint_valid = 1234567890123456789012345n; //appending n allows for additional memory space
const bigint_invalid = 1234567890123456789012345; // too large for standard integers

console.log(bigint_valid)
console.log(bigint_invalid)
//console.log(bigint_valid == bigint_invalid) // false as they are not equal one is with memory
console.log("Mirza" == "IOD")