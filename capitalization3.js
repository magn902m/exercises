`use strict`;

// const newName = firstName.charAt(4).toUpperCase() + firstName.substring(1).toLowerCase();
const firstName = `magnus`;

const newName =
  firstName.substring(0, 2) + firstName.charAt(2).toUpperCase() + firstName.substring(3);
console.log(`Old name: ${firstName}
New name: ${newName}`);

const firstName2 = `MAGNUS`;

const newName2 =
  firstName2.substring(0, 2).toLowerCase() +
  firstName2.charAt(2).toUpperCase() +
  firstName2.substring(3).toLowerCase();
console.log(`Old name: ${firstName2}
New name: ${newName2}`);
