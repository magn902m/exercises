`use strict`;

// Slide 23 --- Maybe we should just try it …

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Ron",
  lastName: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

console.log("Harry:", person3);

hire(person3);
console.log("(Hopefully) hired Harry:", person3);
