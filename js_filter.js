`use strict`;

// let someNumber = 12;
// let someOtherNumber = 2;

// let theResult;

// function multiply(num1, num2) {
//   return num1 * num2;
// }
// multiply();

// theResult = multiply(someNumber, someOtherNumber);
// console.log(theResult);

// // Slide 3 and 4 --- "fit certain criteria"

// const animal = [
//   {
//     name: "Mandu",
//     type: "Cat",
//   },
//   {
//     name: "Mia",
//     type: "Cat",
//   },
//   {
//     name: "Leeloo",
//     type: "Dog",
//   },
//   {
//     name: "Doooo",
//     type: "Dog",
//   },
// ];

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   }
//   return false;
// }

// isCat(animal);
// console.log("animal: ", animal);

// Slide 3 and 4 --- "fit certain criteria"

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "Leeloo",
    type: "dog",
  },
  {
    name: "Doooo",
    type: "dog",
  },
];

function isCat(animals, i, arr) {
  if (animals.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function firstLetterBeginsWith(animal, i, arr) {
  if (animal.name.startsWith("s")) {
    return true;
  } else {
    return false;
  }
}

function all() {
  return true;
}

console.log("animals", animals);

console.log("---");

//Given a table in HTML
//Click on a filer filters table
function prepareAnimals(filterFunction) {
  //filter on a criteia
  let filteredAnimals = animals.filter(filterFunction);

  displayAnimals(filteredAnimals);
}

function displayAnimals(filteredAnimals) {
  //Fill table with filtered animals
  filteredAnimals.forEach((animal) => console.log(animal));
}

// console.log("animal: ", animals);

// console.log("---");

// let cats = animals.filter(isCat);

// console.log("cats", cats);

// console.log("---");

// let allAnimals = animals.filter(all);

// console.log("all animals", allAnimals);

// console.log("---");

prepareAnimals(isCat);

// -----

// prepareAnimals(isCat);

// function prepareAnimals(filterFunction) {
//   //filter on a criteia
//   let filteredAnimals = animals.filter(filterFunction);

//   displayAnimals(filteredAnimals);
// }

// function isCat(animals, i, arr) {
//   if (animals.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }
