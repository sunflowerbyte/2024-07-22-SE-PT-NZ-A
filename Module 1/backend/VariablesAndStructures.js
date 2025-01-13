
let trainerName ="Tricia" //global scope
let city = "Auckland"

function SayHello()
{//local scope within the curly brackets, it can be accessed within the bracket
    let company = "IOD"
    let country = "New Zealand"
    console.log(name)
    console.log(company)
    console.log(city)
    console.log(country)
}
//SayHello()
//console.log(company)

let trainerDetails = ["Tricia", "IOD", "Auckland","New Zealand"]//declaring array; index starts from 0

console.log (trainerDetails[1]) //index 1 will print IOD
console.log (trainerDetails[3]) //calls index 3 will print New Zealand

//below is modifying arrays
console.log(trainerDetails)
trainerDetails[2]="Wellington"
trainerDetails[3]="Australia"
console.log(trainerDetails)

