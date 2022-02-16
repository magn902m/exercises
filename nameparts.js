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

// ----- Exercise - Name-parts function
// Find the old code you made to split a string into three variables: firstName, middleName and lastName, and put it inside a function named getNameParts( fullname ), where fullname is the parameter, the string you want to split up.
// Use your original code with indexOf and substring, don't "cheat" and use .split()!
// Make sure that the function creates three new strings: firstName, middleName and lastName. Console.log them at the end of the function. You can console.log them as an object to make it easier, like console.log( { firstName, middleName, lastName } );
// Test the function by calling it with various combinations of names with no, one, two or more middle names.
// For an extra challenge, fix it so that the middleName is either null or undefined, if there were no middle name in the fullname!
// When complete: add, commit, and paste the js-code as an answer to this exercise!

// const fullName = `Magnus "Maskinen" Nielsen`;

// function getNameParts(fullName) {
//   const firstName = fullName.substring(fullName.indexOf(0), fullName.indexOf(" "));
//   const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
//   const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
//   console.log({ firstName, middleName, lastName });
// }

// getNameParts(fullName);

// ----- Exercise - FullName function
// Create a function called fullName, that receives three parameters:
// lastName, firstName, and middleName (in that order!)
// The function should combine the three names into a new string, the full name, with a single space between each, but ignoring the middleName completely if it wasn't given.
// The function should write the new string to the console.
// Test the function with these combinations:
// fullName("Potter", "Harry", "James"); should console.log "Harry James Potter"
// fullName("Potter", "Harry"); should console.log "Harry Potter"
// fullName("Harry", "Potter"); should console.log "Potter Harry"
// fullName("Potter", "Harry", "James", "Pottypotpot"); should console.log "Harry James Potter"
// Make sure there aren't extra spaces when there is no middleName.
// Try to call this function directly from within the getNameParts function, and observe if you get the same result as the original parameter to nameParts! - this is only a temporary test, you should comment-out the function call afterwards!
// When complete: add, commit, and paste the js-code as an answer to this exercise!

// const fullName = `Magnus "Maskinen" Nielsen`;

// function fullName(lastName, firstName, middleName) {
//   if (middleName === undefined) {
//     console.log(`Fullname: ${firstName} ${lastName}`);
//   } else {
//     console.log(`Fullname: ${firstName} ${middleName} ${lastName}`);
//   }
// }

// fullName("Potter", "Harry", "James");
// // // should console.log "Harry James Potter"

// fullName("Potter", "Harry");
// // // should console.log "Harry Potter"

// fullName("Harry", "Potter");
// // // should console.log "Potter Harry"

// fullName("Potter", "Harry", "James", "Pottypotpot");
// // // should console.log "Harry James Potter"

// // -----

// const aName = "Albus Percival Wulfric Brian Dumbledore";

// function getNameParts(fullName) {
//   const firstName = fullName.substring(fullName.indexOf(0), fullName.indexOf(" "));
//   const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
//   const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
//   console.log({ firstName, middleName, lastName });
//   fullName(lastName, firstName, middleName);
// }

// function fullName(lastName, firstName, middleName) {
//   if (middleName) {
//     console.log(`Fullname: ${firstName} ${middleName} ${lastName}`);
//   } else {
//     console.log(`Fullname: ${firstName} ${lastName}`);
//   }
// }

// ----- Exercise - fullName( lastName, firstName [, middleName] ) -----

// const name = "pETer";
// const cap = capitalize(name);

// function capitalize(str) {
//   let capitalizedName = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//   // console.log(`My name is ${capitalizedName}`);
//   return `My name is ${capitalizedName}`;
// }

// console.log(cap);
// // console.log(capitalize(cap));

// //---

// const aName = "ALbus PerCIval wulfric BRIaN dumbLEdOre";
// const nameParts = getNameParts(aName);

// function capitalize(str) {
//   let capitalizedStr = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//   return `${capitalizedStr}`;
// }

// function getNameParts(inputName) {
//   const firstName = capitalize(inputName.substring(inputName.indexOf(0), inputName.indexOf(" ")));
//   const middleName = capitalize(
//     inputName.substring(inputName.indexOf(" ") + 1, inputName.lastIndexOf(" "))
//   );
//   const lastName = capitalize(inputName.substring(inputName.lastIndexOf(" ") + 1));
//   //console.log({ firstName, middleName, lastName });
//   return fullName(lastName, firstName, middleName);
// }

// function fullName(lastName, firstName, middleName) {
//   let theFullName;
//   if (middleName) {
//     theFullName = `${firstName} ${middleName} ${lastName}`;
//   } else {
//     theFullName = `${firstName} ${lastName}`;
//   }
//   return theFullName;
// }

// console.log(nameParts);

// --- Exercise - getNameParts( fullName )

const aName = "ALbus PerCIval wulfric BRIaN dumbLEdOre";
const nameParts = getNameParts(aName);

function capitalize(str) {
  let capitalizedStr = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  return `${capitalizedStr}`;
}

function getNameParts(inputName) {
  const firstName = capitalize(inputName.substring(inputName.indexOf(0), inputName.indexOf(" ")));
  const middleName = capitalizationMiddleName(
    inputName.substring(inputName.indexOf(" ") + 1, inputName.lastIndexOf(" "))
  );
  const lastName = capitalize(inputName.substring(inputName.lastIndexOf(" ") + 1));
  //console.log({ firstName, middleName, lastName });
  return { lastName, firstName, middleName };
}

function capitalizationMiddleName(middleName) {
  let middleNameArr = middleName.split("");
  middleNameArr.forEach((elm, index, arr) => {
    if (elm === " ") {
      arr[index + 1] = arr[index + 1].toUpperCase() + arr[index + 1].substring(1).toLowerCase();
    }
  });
  let result = middleNameArr.join("");
  return result;
}

console.log(nameParts);
