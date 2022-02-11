`use strict`;

// // Basic objects (4.1)
// let object = {
//   firstName: "Peter",
//   age: 29,
//   student: false,
// };

// console.log(object);

// // Properties can be accessed with . dot notation
// console.log(`${object.firstName} is ${object.age} years old.`);

// object.firstName = "Newname";
// console.log(`${object.firstName} is ${object.age} years old.`);

// // If an object doesn't have a property - we can add it.
// let person1 = {
//   firstName: "Peter",
//   age: 29,
//   student: false,
// };

// console.log(person1.lastName);
// person1.lastName = "Lind";
// console.log(person1.lastName);

// // Properties can also be removed - first try
// person1.lastName = undefined;
// console.log(person1.lastName);
// console.log(person1.middleName);

// // Properties can also be removed - second try
// delete person1.lastName;
// console.log(person1.lastName);
// console.log(person1);

// // // Like arrays, const objects can be modified
// // const person1 = {
// //   firstName: "Peter",
// //   age: 29,
// //   student: false,
// // };

// // person1.age++;

// // console.log(person1);

// // const person2 = {
// //   firstName: "_your name_",
// //   age: 23,
// //   student: true,
// // };

// // person1 = person2;

// // The same object can exist in multiple places

// const person2 = person1;

// person2.firstName = "other Peter";

// console.log(person1.firstName);

// // Try playing with variables:
// let person1 = {
//   firstName: "Peter",
//   age: 29,
//   student: false,
// };

// let person2 = {
//   firstName: "other Peter",
//   age: 28,
//   student: false,
// };

// let person3 = person1;
// console.log(person3);

// person3.firstName = "Charged";

// person3 = person2;
// console.log(person3);

// person2.firstName = "Also changed";

// person1 = person3;
// console.log(person1);

// // Are these two objects the same?
// const student1 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// const student2 = student1;
// console.log(student2);

// if (student1 == student2) {
//   console.log("They are the same");
// } else {
//   console.log("They are not ...");
// }

// How about these two?
const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

if (student1 == student2) {
  console.log("They are the same");
} else {
  console.log("They are not ...");
}

// Try modifying one object
student1.firstName = "Potty";

console.log(student1);
console.log(student2);

// Try making one object, exactly like the other
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

console.log(student1);
console.log(student2);

if (student1 == student2) {
  console.log("They are the same");
} else {
  console.log("They are not ...");
}
