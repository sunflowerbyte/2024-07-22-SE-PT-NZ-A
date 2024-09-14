let A = 10
let B = 20

if (A > B)
    console.log(true)
else 
    console.log(false)


    //Java reads the string by assigning value to each letter based on position in the alphabetical order. Smaller letter < Capital letter
let C = "Mirza"
let D = "IOD"

if (C == D)
    console.log("greater")
else
    console.log("smaller")

    console.log("2" > 1) // true - converts to 2 > 1
    console.log("2" != 1) // true - converts to 2 is not equal to 1
    console.log("02" == 2) // true - converts to 2 == 2
    console.log(true == 1) // true - true converts to 1
    console.log(false == 0) // true - false converts to 0
    console.log(null == undefined) // true - both convert to 0

    //Replacing the == (equivalence) in the above with === (strict equality) will check for matching types as well and change the results to false.
    console.log("02" === 2) // true - converts to 2 == 2
    console.log(true === 1) // true - true converts to 1
    console.log(false === 0) // true - false converts to 0
    console.log(null === undefined) // true - both convert to 0
