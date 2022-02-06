"use strict";

// exercise 1, js 1 - variables
// y = 14;
let y = 14;

console.log("Basics!");

// exercise 2, js 1 - variables
const bool = true;
const num = 22;
const str = "Magnus";
const obj = {
  dogs: 2,
  pc: 1,
};
const nothing = null;
let undf;
const symbol = Symbol("symbol");

console.log(bool, num, str, obj, nothing, undf, symbol);

// // exercise 3, js 1 - variables
console.log("typeof bool:", typeof bool);
console.log("typeof num:", typeof num);
console.log("typeof str:", typeof str);
console.log("typeof obj:", typeof obj);
console.log("typeof nothing:", typeof nothing);
console.log("typeof undf:", typeof undf);
console.log("typeof symbol:", typeof symbol);

// // exercise 4, js 2 - Data type conversion
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

console.log("n1 + n2:", n1 + n2);
console.log("s1 + s2:", s1 + s2);

console.log("n1 + s2:", n1 + s2);
console.log("s1 + n2:", s1 + n2);

// // exercise 5, js 2 - Data type conversion
const value = true;

if (value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}
