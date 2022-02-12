`use strict`;

// // Functions (2.14)
// function myFunc() {
//   //code goes here
// }
// myFunc();
// myFunc;

// // Function parameters
// function myFunc(parm1, parm2) {
//     // code uses parm1 and parm2
// }

// // We have used parameters before
// alert("Do not use alerts for user info!");
// console.log("JavaScript is running");
// const message = "JavaScript is running";
// console.log(message);

// // So let's start there: Exercise sayHello
// sayHello();
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// ---

// Testing the function sayHello
// // The function is called on an earlier line than it is created?
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }
// sayHello();

// // The function is called with a variable called myName?
// sayHello();
// function sayHello(myName) {
//   console.log(`Hello ${firstName}`);
// }

// // There is another variable called firstName outside the function?
// let firstName = "Kim";
// sayHello();
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// // The function is called without any parameter?
// sayHello();
// function sayHello() {
//   console.log(`Hello ${firstName}`);
// }

// // The function is called with firstName and lastName?
// sayHello();
// function sayHello(firstName, lastName) {
//   console.log(`Hello ${firstName}`);
// }

// // And the function is called with lastName before firstName?
// sayHello();
// function sayHello(lastName, firstName) {
//   console.log(`Hello ${firstName}`);
// }

// ---

// // Multiple parameters: Exercise presentPet
// presentPet();
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// // The function is called with variables named the same as the parameters?
// presentPet(firstName, animalType, animalName);
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// // The function is called with variables named something different?
// let ib;
// presentPet(ib);
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// // The function is called with strings?
// presentPet("firstName", "animalType", "animalName");
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// // The function is called with a mix of strings and variables?
// presentPet("firstName", animalType, "animalName");
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// // The function is called with variables, but in a different order?
// presentPet();
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }
