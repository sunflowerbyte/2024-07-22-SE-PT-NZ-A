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

 const titles = products.map((item)=>item.category)

 let raisedPrices = products.map(product => ({...product, price: product.price +5}))

 console.log(titles)
 console.log(raisedPrices)