`use strict`;

// // Sort is a bit different from the other array functions

// const people = ["Harry", "Ron", "Hermione", "Neville"];
// people.sort();
// // people.reverse();
// console.log("People: ", people);

// // compareFunction

// function compareFunction(a, b) {
//   if (a.compareFunction(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// Example – sort by name

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "Freddoe", type: "dog" },
];
console.log(animals);

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}

animals.sort(compareName);
console.log(animals);
