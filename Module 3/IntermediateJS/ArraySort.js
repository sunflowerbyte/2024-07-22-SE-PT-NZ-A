
const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
]

products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2

products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1


const texts = ["first", "last", "mid", "second"]
console.log(texts.sort())


const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]

const StringNumbs = ["1", "81", "41", "102", "35", "1004"]
const numbersToSort = [...StringNumbs] // to keep a sorted array independent to the original, we need to clone it first
console.log( numbersToSort.sort((num1, num2) => num1 - num2) )
console.log(numbers)
console.log(numbersToSort)

