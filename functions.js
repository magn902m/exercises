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

// // ----- examples in class -----

// let number1 = 2;
// let theOtherNumber = 35;
// let result;

// // this function is not dynamic
// // function multiply() {
// //   result = number1 * theOtherNumber;
// // }

// // the parameters make the function mere dynamic
// function multiply(num1, num2) {
//   result = num1 * num2;
// }

// // this is how to change a para to a other value
// function multiply(anOldBoot, num2) {
//   let anotherBoot = 2 * anOldBoot;
//   result = anotherBoot * num2;
// }

// // this i mini fydt code, there is hard to read by human
// function _m(a, b) {
//   let a = 2 * a;
//   c = a * b;
// }

// // num1 doesn´t exsis here, only in the function
// console.log(num1);

// multiply(number1, theOtherNumber);
// // multiply(23, 1000);

// console.log("Result: ", result);
// console.log("Result: ", c);

// // -----

// let aNumber = 3;
// let theThirdNumber;

// function addingNumber(aNumber, bNumber) {
//   let theThirdNumber = 5;
//   console.log(aNumber + bNumber + theThirdNumber);
// }

// addingNumber(2, 4);

// // -----

// sayHello("Peter");
// console.log(aNumber);

// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// let sayWhatEver = function (firstName) {
//   console.log(`What ever ${firstName}`);
// };

// let aNumber = 34;

// let sayHoney = (firstName) => {
//   console.log(`Honey ${firstName}`);
// };

// sayWhatEver("Peter");
// sayHoney("Peter");

// window.addEventListener("DOMContentLoaded", start);
// // window.addEventListener("DOMContentLoaded", () => {});

// function start(event) {
//   console.log("I am here");
// }

// let myName = "Peter";

// sayHello(myName);

// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// // -----

// let myName = "Peter";

// sayHello(myName, "some string", 23);

// function sayHello(firstName, b, c) {
//   console.log(`Hello ${firstName} and ${b} and ${c}`);
// }
