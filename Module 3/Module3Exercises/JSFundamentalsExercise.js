//1
/*
"" + 1 + 0 = 10 
"" - 1 + 0 = -10 
true + false = false
!true= false
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
" -9 " + 5 = -95
" -9 " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
undefined == null = true
undefined === null = false
" \t \n" - 2 = NaN

\t \n are white space characters tab and newline = converted to string = 0
hence, 0 - 2 =-2
*/

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

//2

let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four; //wrong: string concatenation = 34
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

let lessThan1 = three < four;
let lessThan2 = thirty < four; //wrong; 30 and 4 as string: first characters: 3 is less than 4.

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);

console.log(lessThan1);
console.log(lessThan2);

//3
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true"); //will print
if (null) console.log("null is true");
if (-1) console.log("negative is true"); //will print
if (1) console.log("positive is true"); //will print

//4 += adds another value to the variable and assigns the result back to that variable
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";
console.log(result);

//5
//Function Expression Syntax
const getGreeting = function (name) {
  return "Hello " + name + "!";
};

//Arrow Function
const getGreetingArrow = (name) => "Hello " + name + "!";

console.log(getGreeting());
console.log(getGreetingArrow());

//6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);

//7

const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls++;
    return this;
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
    return this; 
  },

  fullTime() {
    console.log(`Full-time score is ${this.score}. Fouls: ${this.fouls}`);
    return this; 
  }
};


basketballGame
  .basket()       // 2 points
  .freeThrow()    // +1 point (3 total)
  .foul()         // 1 foul
  .threePointer() // +3 points (6 total)
  .halfTime()     // Halftime score is 6. Fouls: 1
  .freeThrow()    // +1 point (7 total)
  .threePointer() // +3 points (10 total)
  .foul()         // 2 fouls
  .fullTime();    // Full-time score is 10. Fouls: 2
