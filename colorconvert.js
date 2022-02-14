`use strict`;

// Notes in class

// //Convert from hex to integer
// let numberAsHex = "f3";
// let numberAsInteger = parseInt(numberAsHex, 16); //Second argument is a base
// console.log("numberAsInteger: ", numberAsInteger);

// //Convert from ineger to hex
// let someNumberAsInteger = 255;
// let someBase16NumberAsString = someNumberAsInteger.toString(16);
// console.log(parseInt("someBase16NumberAsString: ", someBase16NumberAsString));

// //Simple integer convertion
// let simpleNumberAsStringg = "234";
// let simpleNumber = parseInt(numberAsString)
// console.log(simpleNumber);

// --- Exercise - hexToRGB( hex ) ---
// We want a function that receives a color in hex-format - like #c0ffee - and returns an object with the r, g, and b values (numbers) - in this case: {r:192, g:255, b:238}.
// The function must receive a single string, that will always start with a # symbol, followed by six hex-digits.
// The function must create three variables, r, g, and b - set their values correctly, and return them in a single object.
// Modify your existing hexToRGB function, so it doesn't console.log anything, but returns an object.
// Test it from the console, and make sure you still get the correct r, g and b values.
// When complete: add, commit, and paste the js-code as an answer to this exercise!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt

// Make this object { r: 192, g: 255, b: 238 };

//Convert from hex to integer
function hexToRGB(hexCode) {
  console.log("hexToRGB");
  let r = parseInt(hexCode.substring(1, 3), 16);
  let g = parseInt(hexCode.substring(3, 5), 16);
  let b = parseInt(hexCode.substring(5, 7), 16);
  //   console.log(`{r: ${r}, g: ${g}, b: ${b}}`);
  let rgb = { r, g, b };
  console.log(rgb);
}

hexToRGB("#c0ffee");

// --- Exercise - rgbToHex( rgb ) ---
// We want a function that receives a color in {r,g,b} format, as an object with number values for r, g, and b - and returns a hex-color code as a single string.
// The function must receive an object with three properties: r, g, and b.
// The function must convert these three numbers into a string with a # followed by six hexadecimal digits, representing the three colors. Make sure that each color has two digits, so the result is always six digits. The function returns that string.
// Modify your existing rgbToHex function, so it doesn't console.log anything, but returns a string.
// Test it from the console, and make sure you still get the correct hex values
// When complete: add, commit, and paste the js-code as an answer to this exercise!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

//Convert from ineger to hex
let someNumberAsInteger = 255;
let someBase16NumberAsString = someNumberAsInteger.toString(16);
console.log(parseInt("someBase16NumberAsString: ", someBase16NumberAsString));

// --- Exercise - cssToRGB function ---
// Create a function to convert from a CSS color-definition string, like "rgb(192, 13, 1)" to r, g, and b values (numbers), in this case: 192, 13 and 1 respectively.
// The function must receive a single string.
// The function must create three variables, r, g, and b - set their values correctly, and log them to the console.
// A CSS color-string always starts with rgb, and has three numbers inside a set of parenthesis, each number separated by a comma, and possibly a space. There are other CSS color-definitions, but this function should only be able to handle that one.
// Use substring and/or split, and possibly trim, to get the three values into three separate strings - and use parseInt to convert them into numbers. Create variables for r, g, and b, and console.log them at the end of the function.
// Test that your code works for both 3, 2, and 1-digit numbers as either r, g and b.
// When complete: add, commit, and paste the js-code as an answer to this exercise!
