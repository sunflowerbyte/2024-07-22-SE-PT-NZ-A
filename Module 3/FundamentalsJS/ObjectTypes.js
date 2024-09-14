let Student = { //object literals
    firstName: "James",
    schoolName: "XYZ",
    visaStatus: "Citizen",
    City: "Auckland",
    postCode: 600
}

let person = {} //object literals
let Employee = new Object()

person.country = "AU"

console.log(Student)
console.log(person)

Employee.Employer = "ABC Corp"
Employee.StaffCount = 200

console.log(Employee)
Student.City = "Christchurch"

delete Student.visaStatus
delete Student.schoolName
delete Student.postCode
console.log(Student)