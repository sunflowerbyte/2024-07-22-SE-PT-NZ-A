function Doubles(u,h) //function declaaration
{
    console.log(arguments[0] + " , " + arguments[1])
    return u * u 
}
Doubles(20,30)



const x = function(name) //Function expressions
{
    console.log("Your name is " + name)
}
x("Mirza")
x("David")
x("Kris")



const y = function(z)
{
    return z*z
}
console.log(y(4))
console.log(y(8))



const q = (k) => {
    return k * k
}
//alternatively
//const q = (k) => k * k

console.log(q(3))
console.log(q(6))
 