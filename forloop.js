`use strict`;

// // --- We have used this kind of a "manual" loop ---
// let counter;

// init();

// function init() {
//   counter = 0;
//   loop();
// }

// function loop() {
//   console.log(counter);
//   counter++;

//   if (counter < 10) {
//     loop();
//   }
// }

// // --- We can create other “automatic” loops (2.13) ---
// let counter2 = 0;

// while (counter2 < 10) {
//   console.log(counter2);
//   counter2++;
// }

// // --- for to the rescue ---
// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// console.log(`after the loop, counter is ${counter}`);

// // --- For loop exercises ---
// // -- From 0 to 9 --
// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// // -- From 1 to 10 --
// for (let counter = 1; counter < 11; counter++) {
//   console.log(counter);
// }

// // -- From 10 to 0, and after 0 it console.logs the text: “liftoff” --
for (let counter = 10; counter >= 0; counter--) {
  if (counter !== 0) {
    console.log(counter);
  } else {
    console.log(counter);
    console.log("liftoff");
  }
}

// // -- From 1 to 19, but only counts odd numbers (no if-statement, change the increment!) --
// for (let counter = 1; counter < 20; counter += 2) {
//   console.log(counter);
// }

// // -- From 1 to 16777216, but doubling each time (2, 4, 8, 16 …) --
// for (let counter = 1; counter < 16777216; counter *= 2) {
//   console.log(counter);
// }

// // -- From 111 to 138, in steps of 3 (meaning the second number is 114 (111+3)) --
// for (let counter = 111; counter <= 138; counter += 3) {
//   console.log(counter);
// }

// // // -- From 100 down to 0 in steps of 10 --
// for (let counter = 100; counter >= 0; counter -= 10) {
//   console.log(counter);
// }
