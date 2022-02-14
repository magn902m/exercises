`use strict`;

// // Use the 3caPitalization exercise as a basis for this exercise. Modify the code, so that only the first letter is upper case, and the rest is lower case.
// // Make sure that it can take names of any length!
// // Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.
// // When complete, add, commit, and also paste the js-code here below.

// const firstName = `magnus`;
// const newName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
// console.log(`Old name: ${firstName}
// New name: ${newName}`);

// const firstName2 = `magnus`;
// const newName2 = firstName2.substring(0, 1).toUpperCase() + firstName2.substring(1).toLowerCase();
// console.log(`Old name: ${firstName2}
// New name: ${newName2}`);

// -----

// Capitalization function
// Put the code you made to capitalize a string (a name) inside a function named capitalize( str ), where str is the parameter, the string you want to capitalize.
// Capitalization meaning that the first letter is uppercase, and all other letters are lowercase. Don't care about spaces or hyphens, only capitalize the first letter!
// Make sure that the function creates a new string with the correctly capitalized string, and console.log that new string.
// Test the function by calling it with various crazy combinations of your own name, like "pETer", "PEter", "peteR", "PEtER" and so on, to make sure it always handles all letters correctly.
// When complete: add, commit, and paste the js-code as an answer to this exercise!

// const firstName = `magnus`;
// const firstName = `Magnus`;
// const firstName = `mAgnus`;
// const firstName = `maGnus`;
// const firstName = `maGnus`;
// const firstName = `magNus`;
const firstName = `mAGNUS`;

const newName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();

function capitalize(str) {
  console.log(`My name is ${str}`);
}

capitalize(newName);
