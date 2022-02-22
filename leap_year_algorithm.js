`use strict`;

// In JavaScript, you can test if a number is divisible by another number, with the % operator. E.g. year%4, will return 0, if year is divisible by 4.

// Using this knowledge, implement your designed algorithm as a function: isLeapYear, that receives a year as parameter, and returns true if it is a leap year, false if it isn't.

// Test the function with the years:
// 2020: true
// 2019: false
// 1900: false
// 2000: true

// Paste the code for the function in as the answer.

// // First try
// window.addEventListener("DOMContentLoaded", setup);

// function setup() {
//   console.log("setup");
//   getYear();
// }

// function getYear() {
//   let year = 2020;
//   checkYear(year);
// }

// function isLeapYear(year) {
//   console.log(year);
//   if (year % 4) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Second try

//
console.log("2020: true\n2019: false\n1900: false\n2000: true");
console.log(
  `2020: ${isLeapYear(2020)}\n2019: ${isLeapYear(2019)}\n1900: ${isLeapYear(
    1900
  )}\n2000: ${isLeapYear(2000)}`
);

function isLeapYear(year) {
  let leapFlag = false;

  if (year % 100 === 0) {
    if (year % 400 === 0) {
      leapFlag = true;
    }
  } else if (year % 4 === 0) {
    leapFlag = true;
  }
  return leapFlag;
}
