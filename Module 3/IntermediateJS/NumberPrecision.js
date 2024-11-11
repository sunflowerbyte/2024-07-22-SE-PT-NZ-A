const toobig = 1e350 // 1 * 10350 - overflows storage
console.log(toobig) // Infinity
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

const point1 = 0.1
const point2 = 0.2

console.log(point1 + point2) //0.30000000000000004 imprecise, can be fixed by
console.log(toFixed(2)())