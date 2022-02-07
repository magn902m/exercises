`use strict`;

// Use the 3caPitalization exercise as a basis for this exercise. Modify the code, so that only the first letter is upper case, and the rest is lower case.
// Make sure that it can take names of any length!
// Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.
// When complete, add, commit, and also paste the js-code here below.

const firstName = `magnus`;
const newName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
console.log(`Old name: ${firstName}
New name: ${newName}`);

const firstName2 = `magnus`;
const newName2 = firstName2.substring(0, 1).toUpperCase() + firstName2.substring(1).toLowerCase();
console.log(`Old name: ${firstName2}
New name: ${newName2}`);
