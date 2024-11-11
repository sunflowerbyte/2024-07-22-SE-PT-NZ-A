const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']

/*Rather than this: console.log(hobbits[0])
console.log(hobbits[1])
console.log(hobbits[2])
console.log(hobbits[3])
console.log(hobbits[4])
console.log(hobbits[5])*/

//create a loop

hobbits.forEach((item, index)=> {
    console.log(index)
    console.log(item)})
  //requires function

  //or 


hobbits.forEach((item, index)=> {
    console.log(item + "is stored at index " + index)})

/*function func1()
{
    return "true"
}

const func2 = function()
{
    return "false"
}

const func3 = () => 10*/

const students = ['John',"Bill", "Smith", "Tom"]

let newArray =[]
students.forEach((item, index) => {
    newArray.push(item.toUpperCase())
})

console.log(newArray)

const animals= ["elephant", "rabbit", "monkey", "tiger"]
console.log(animals.indexOf("monkey"))
console.log(animals.indexOf("lion")) //negative when not found

console.log(animals[animals.indexOf("Mirza")] + " is found")

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndex = marks.indexOf('B-')
let eIndex = marks.indexOf('E')

// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since not found
