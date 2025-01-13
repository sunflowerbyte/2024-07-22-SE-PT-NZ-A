//This function returns the sum of two numbers
function add(a, b) 
{
    return a + b
}

//This function returns the difference of two numbers
function subtract(a, b) 
{
    return a - b
}

//This function returns the product of two numbers
function multiply(a, b) 
{
    return a * b
}

//This function returns the quotient of two numbers
function divide(a, b) 
{
    return a / b
}

//Unit tests for add function
console.log(add(1,3)) //expected 4
console.log(add(9,1)) //expected 10
console.log(add(1298,837)) //expected 2135

//Unit tests for subtract function
console.log(subtract(10,1)) //expected 9
console.log(subtract(89,9)) //expected 80
console.log(subtract(679,679)) //expected 0

//Unit tests for multiplication function
console.log(multiply(-7,100)) //expected -700
console.log(multiply(78,1)) //expected 78
console.log(multiply(-10,-10)) //expected 100

//Unit tests for division function
console.log(divide(10,2)) //expected 5
console.log(divide(90,90)) //expected 1
console.log(divide(10,5)) //expected 2

//Function to print a greeting message with the given name
function SayMyName(name)
{
    console.log("Hello "  + name)
}
console.log(SayMyName("Tricia"));