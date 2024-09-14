const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
])
console.log(priceMap)
const priceObject = Object.fromEntries(priceMap)
console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }