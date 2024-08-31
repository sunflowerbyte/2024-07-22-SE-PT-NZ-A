const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location; would be different if = [...fruits1]
fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they are both references to the same place
console.log('fruit at index 0: '+fruits1[0]) // Apple - accessed using numeric index 0
console.log('fruit at index 1: '+fruits1[1]) // Orange - accessed using numeric index 1
fruits2.unshift("Pineapple")
console.log(fruits1)
//[...fruits1]
console.log(fruits2)