`use strict`;

// // --- 14.	Get the middle name of a full name string, such as “Harry James Potter” ---
// const fullName = `Harry James Potter`;

// // let middleName = fullName.substring(6, 11);
// let middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" ")) + "_";

// console.log("middleName", middleName);

// // --- 17.	Convert only the first character in a string to CAPITAL, and the rest to non-capital? ---
// const str = "KlilLimaNjaro";

// // console.log(str.charAt(0).toUpperCase);
// // console.log(str.toLowerCase().substring(1).toLowerCase());
// console.log(str.charAt(0).toUpperCase() + str.substring(1).toLowerCase());

// // --- 18.	Convert a german word like “Goethestraße” correctly to “GOETHESTRASSE” ---
// const word = "Goethestraße";
// console.log(word.toUpperCase().toLocaleUpperCase());
