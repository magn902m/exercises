`use strict`;

// // --- Exercise - Name-parts ---
// const fullName = `Magnus "Maskinen" Nielsen`;

// const firstName = fullName.substring(fullName.indexOf(0), fullName.indexOf(" "));
// const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
// const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

// console.log(firstName, middleName, lastName);

// const fullName2 = "Albus Percival Wulfric Brian Dumbledore";

// const firstName2 = fullName2.substring(fullName2.indexOf(0), fullName2.indexOf(" "));
// const middleName2 = fullName2.substring(fullName2.indexOf(" ") + 1, fullName2.lastIndexOf(" "));
// const lastName2 = fullName2.substring(fullName2.lastIndexOf(" ") + 1);

// console.log(`Firstname: ${firstName2}
// Middle: ${middleName2}
// Last: ${lastName2}`);

// -----
// Find the old code you made to split a string into three variables: firstName, middleName and lastName, and put it inside a function named getNameParts( fullname ), where fullname is the parameter, the string you want to split up.
// Use your original code with indexOf and substring, don't "cheat" and use .split()!
// Make sure that the function creates three new strings: firstName, middleName and lastName. Console.log them at the end of the function. You can console.log them as an object to make it easier, like console.log( { firstName, middleName, lastName } );
// Test the function by calling it with various combinations of names with no, one, two or more middle names.
// For an extra challenge, fix it so that the middleName is either null or undefined, if there were no middle name in the fullname!
// When complete: add, commit, and paste the js-code as an answer to this exercise!

const fullName = `Magnus "Maskinen" Nielsen`;

function getNameParts(fullName) {
  const firstName = fullName.substring(fullName.indexOf(0), fullName.indexOf(" "));
  const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
  console.log({ firstName, middleName, lastName });
}

getNameParts(fullName);

// const fullName2 = "Albus Percival Wulfric Brian Dumbledore";

// const firstName2 = fullName2.substring(fullName2.indexOf(0), fullName2.indexOf(" "));
// const middleName2 = fullName2.substring(fullName2.indexOf(" ") + 1, fullName2.lastIndexOf(" "));
// const lastName2 = fullName2.substring(fullName2.lastIndexOf(" ") + 1);

// console.log(`Firstname: ${firstName2}
// Middle: ${middleName2}
// Last: ${lastName2}`);
