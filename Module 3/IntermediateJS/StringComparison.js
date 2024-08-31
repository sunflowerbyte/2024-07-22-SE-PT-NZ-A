const string1 = "A";
const string2 = "B";
const string3 = "a";
const string4 = "b";

if (string1 > string2) {
  console.log("A  is greater than B");
} else console.log("B is greater than A");

if (string3 > string4) {
  console.log("a is greater than b");
} else console.log("b is greater than a");

if (string1 > string3) {
  console.log("A is greater than a");
  console.log(string1.codePointAt(0));
} else console.log("a is greater than A");
console.log(string3.codePointAt(0));

console.log("A value is " + string1.codePointAt(0))

console.log("B value is: " + "B".codePointAt(0))

console.log("Z".codePointAt(0))
console.log(String.fromCodePoint(68))