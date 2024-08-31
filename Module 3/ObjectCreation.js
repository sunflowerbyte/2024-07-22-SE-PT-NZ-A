/*let User = {} //object literals

let User2 = new Object //constructor literals2

let Student = {
    firstName: "Mirza",
    Institute: "IOD"
}

let Student2 = {...Student}
Student2.firstName = "Will"

let Student3 = {...Student}
Student3.firstName = "Bruce"*/

//This is too long. Better to write constructor functions


function Student(firstName,Institute, location)
{
    this.firstName = firstName
    this.Institute = Institute
    this.location = "Auckland"
    this.doWork = () =>
    {
        console.log('Doing Work')
    }
}

let student1 = new Student("Mirza", "IOD", "Auckland")
let student2 = new Student("Bruce", "IOD", "Wellington")
let student3 = new Student("Willis", "IOD", "Christchurch")
let student4 = new Student ("Grace", "IOD", "Queenstown")

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
student1.doWork()