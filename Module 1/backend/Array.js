//push() is used to add an element to the end of an array. 
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
seas.push('Red Sea');
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
seas.push('Arabian Sea');
console.log(seas);

//unshift() add to beginning of an array

seas.unshift('Adriatic Sea');
console.log(seas); // [ 'Adriatic Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]


//The pop() method is used to remove an element from the end of an array.

let rivers = ['Mississippi', 'Amazon', 'Nile','Yellow River'];
//let lastRiver = rivers.pop();
//console.log(lastRiver); // Nile
//console.log(rivers); // [ 'Mississippi', 'Amazon' ]

//The shift() method is used to remove an element from the beginning of an array.
//let firstRiver = rivers.shift();
//console.log(firstRiver); // Mississippi
//console.log(rivers); // [ 'Amazon' ]

//how to find index in an array

console.log(rivers)
console.log(rivers.indexOf("Yellow River"))