const citiesNZ = ["Auckland", "Christchurch", "Wellington"]
const citiesAU = ["Brisbane", "Sydney", "Melbourne"]
const combinedCities = citiesNZ.concat(citiesAU,citiesNZ)

console.log(combinedCities)
console.log(combinedCities.concat("Queensland","Dunedin"))