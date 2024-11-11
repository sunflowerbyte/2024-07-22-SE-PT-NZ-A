const arrayStrings = ["First", "Second", "Third", "Fourth"]

/*const student = {
    "firstName": "Mirza",
    "Company": "IOD"
}

const student2 = {
    "firstName": "John",
    "Company": "IOD"
}

const arrayOfObjects = [student,student2]*/

//alt syntax of above:

const arrayOfObjects = [
    {firstName: "Mirza", company: "IOD"},
    {firstName: "John", company: "IOD"},
    {firstName: "Will", company: "IOD"},
    ]

console.log(arrayOfObjects[2].firstName)

//finding an array element

const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 3, title: "Winter pants", price: 49.95, category: 'Pants' },
    { id: 3, title: "Snow Pants", price: 49.95, category: 'Pants' },
    { id: 3, title: "Spring pants", price: 49.95, category: 'Pants' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
]

let denims = products.find((item)=> {
    if(item.title =="Denim Jeans")
        return item;
}
)
console.log(denims)

/*let pants = products.find((item)=> {
    if(item.category =="Pants")
        return item;
})*/ //this can be simplified to:

let pants = products.find((item)=> item.category == "Pants")

let shirts = products.find((item)=> item.category == "Shirts")

console.log(pants)
console.log(shirts)

/*/ we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
let shirt = products.find(product => product.category == 'Shirts') // returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }*/

let pantsFiltered = products.filter((item)=> item.category == "Pants") 
console.log(pantsFiltered)


let productsUnder50 = products.filter((item)=>item.price < 50)
console.log(productsUnder50)