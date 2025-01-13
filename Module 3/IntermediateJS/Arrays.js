const cities = ["Auckland", "Wellington", "Christchurch"]

const Students = new Array()

Students.push("John")//adds item
Students.push("Bill")
console.log(Students)

Students.pop()//removes end of an array
console.log(Students)

cities.shift()
console.log(cities)


//Queues, removing and adding.FIFO
const OrderQueues = ["Order50", "Order20", "Order20", "Order100"]
OrderQueues.shift()
OrderQueues.push()
console.log(OrderQueues)

//Stack, LIFO             0        1      2
const stackOfOrders = ["item1", "item2","item3"]
stackOfOrders.push()
stackOfOrders.pop()
console.log(stackOfOrders[0])//accessing the indexes
console.log(stackOfOrders[1])
console.log(stackOfOrders[2]) //undefined because removed by pop()
console.log(stackOfOrders.length) //number of items of an array

