const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
names.add('Mateo')
names.add('Oliver')
names.add('Bruno')
console.log(names.size) // 5 - only the unique names
console.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' } //eliminates any duplicates

 const colorArray = ['blue', 'yellow', 'red', 'purple', 'blue', 'red']

 const newColorSet = new Set(colorArray)
 console.log(newColorSet)

if(newColorSet.has("alice-blue"))
{
    //do nothing
}
else
{
    newColorSet.add("alice-blue")
}

newColorSet.delete("blue")
console.log(newColorSet)
console.log(newColorSet.size)
//newColorSet.clear()
//console.log(newColorSet)

for(let setValue of newColorSet)
{
    console.log(setValue)
}
//or
newColorSet.forEach(value => console.log(value))