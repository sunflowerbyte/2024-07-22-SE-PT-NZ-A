const animalsArr = ["tiger", "lion", "elephant", "giraffe"];
for (let animal of animalsArr) {
  console.log(animal);
} // prints each animal in turn

const animalObj = { name: "tiger", genus: "panthera", class: "mammal" };
for (let property of animalObj) {
  console.log(property);
} // TypeError: animalObj is not iterable

