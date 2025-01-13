const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

const sentence2 = "Joe,Bill,Will,Smith"
console.log(sentence2.split(','))

const sentence3 = "name:Mirza;Name:Tricia;Name:Smith"
console.log(sentence3.split(';'))

console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
console.log(sentence.slice(15, 19))
console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.

let modifiedText = sentence.replace('quick','brown')