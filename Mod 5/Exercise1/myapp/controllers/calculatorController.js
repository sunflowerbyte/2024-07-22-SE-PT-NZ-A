const calculatorLibrary = require("../Libraries/CalculatorLibrary") //library to do calculator operations
let calc = new calculatorLibrary()

let addNumbers = (req, res)=>{
    let number1 = parseInt(req.query.num1)
    let number2 = parseInt(req.query.num2)
    if(!number1 || !number2)
        {
            res.status(500).json({Error: `Invalid data`})
            return
        }
    let result = calc.add(number1, number2) //using library to add
    //res.send("Result : " + result)
    res.status(200)
    res.json({res: result})

}

let subtractNumbers = (req, res)=> {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    if(!number1 || !number2)
        {
            res.status(500).json({Error: `Invalid data`})
            return
        }
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})
}

let divideNumbers = (req,res)=> {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    if(!number1 || !number2)
        {
            res.status(500).json({Error: `Invalid data`})
            return
        }
    let quotient = number1 / number2
    console.log(quotient)
    res.status(200)
    res.json({result:quotient})
}

let multiplyNumbers = (req, res)=>{
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    if(!number1 || !number2)
        {
            res.status(500).json({Error: `Invalid data`})
            return
        }
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})
}



module.exports = {addNumbers,subtractNumbers, divideNumbers, multiplyNumbers}