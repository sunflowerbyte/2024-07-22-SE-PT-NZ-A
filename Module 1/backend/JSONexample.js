let trainerDetails = {
    "trainerName" : "Mirza",
    "trainerLocation" : "Auckland",
    "trainerCountry" : "IOD"
}

console.log(trainerDetails["trainerLocation"])

// objects in javascript contain keys (or properties) with corresponding values
const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987
}
// we can access properties with dot notation
console.log(user.first_name); // Sammy
console.log(user.age); // 25
// or with array style square bracket syntax
console.log(user["last_name"]); // Shark
user.followers = 988; // we can also assign new values to object properties
user.location = 'Pacific Ocean'; // or create new properties
console.log(user)