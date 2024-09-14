const priceObject = { banana: 1, pineapple: 2, watermelon: 5 }
const priceMap = new Map( Object.entries(priceObject) )
console.log(priceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap.get('banana')) // 1