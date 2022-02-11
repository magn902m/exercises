`use strict`;

// // Configuration / storage objects (“one-of”)
// window.addEventListener("DOMContentLoaded", start);

// const list = document.querySelector("#list");
// const dest = document.querySelector("list tbody");
// const template = document.querySelector("template#animal");

// // Configuration objects
// window.addEventListener("DOMContentLoaded", start);

// const HTML = {};

// function start() {
//   HTML.list = document.querySelector("#list");
//   HTML.dest = document.querySelector("list tbody");
//   HTML.template = document.querySelector("template#animal");
// }

// // Combination of data
// // let hex = "#c0ffee";

// // let r = 192;
// // let g = 255;
// // let b = 238;

// // let h = 164;
// // let s = 100;
// // let l = 88;

// const rgb = {
//   r: 192,
//   g: 255,
//   b: 238,
// };

// const hsl = {
//   h: 164,
//   s: 100,
//   l: 88,
// };

// let hex = "#c0ffee";

// const color = {
//   rgb: {
//     r: 192,
//     g: 255,
//     b: 238,
//   },

//   hsl: {
//     h: 164,
//     s: 100,
//     l: 88,
//   },

//   hex: "#c0ffee",
// };

// let red = color.rgb.r;
// console.log(`Red is: ${red}`);

// So you define a template for your data objects
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

// const animal = Object.create(Animal);

// animal.name = name;
// animal.type = type;
// animal.desc = desc;

const animal = Object.create(Animal);

animal.image = "image.jpg";

console.log(animal.image);
