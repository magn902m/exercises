`use strict`;

// --- Exercise - Name-parts ---
const fullName = `Magnus "Maskinen" Nielsen`;

const firstName = fullName.substring(fullName.indexOf(0), fullName.indexOf(" "));
const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

console.log(firstName, middleName, lastName);

const fullName2 = "Albus Percival Wulfric Brian Dumbledore";

const firstName2 = fullName2.substring(fullName2.indexOf(0), fullName2.indexOf(" "));
const middleName2 = fullName2.substring(fullName2.indexOf(" ") + 1, fullName2.lastIndexOf(" "));
const lastName2 = fullName2.substring(fullName2.lastIndexOf(" ") + 1);

console.log(`Firstname: ${firstName2} 
Middle: ${middleName2} 
Last: ${lastName2}`);
