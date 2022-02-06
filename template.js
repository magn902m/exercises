`use strict`;

window.addEventListener("DOMContentLoaded", start);

function start() {
  // --- Strings (5.3) small “Template literal” exercise ---
  const humanName = `Magnus`;
  const animalType = `Turtle`;
  const animalName = `Sungam`;
  console.log(`My name is ${humanName}.
      I have a ${animalType} called ${animalName}`);

  // --- Exercise with .length and [ index ] ---
  const name = "Albus Percival Wulfric Brian Dumbledore";
  // What is the total number of characters, including spaces?
  const totalChar = name.length;
  console.log(`${name} is ${totalChar} characters long`);
  // What is the character at index 2?
  const letter = name[2];
  console.log(`The index 2 of ${name} is the letter ${letter}`);
  // Which character is at index 6?
  const letter2 = name[6];
  console.log(`The index 6 of ${name} is the letter ${letter2}`);
  // What is the index of the first D in Dumbledore?
  const letter3 = name[29];
  const indexD = `29`;
  console.log(`The index of the first ${letter3} in Dumbledore is index ${indexD}`);
  // What is the index of the last e in Dumbledore?
  const letter4 = name[38];
  const indexE = `38`;
  console.log(`The index of the last ${letter4} in Dumbledore is index ${indexE}`);

  //   --- Quick exercises with .substring ---
  const fullName = "Albus Percival Wulfric Brian Dumbledore";

  // "Albus"
  const firstName = fullName.substring(0, 5);
  console.log(`${firstName}`);

  // "Dumbledore" (can you do it with just one parameter?)
  const lastName = fullName.substring(29);
  console.log(`${lastName}`);

  // "Wulfric"
  const wulfric1 = fullName.substring(15, 22);
  console.log(`${wulfric1}`);

  // " Wulfric "
  const wulfric2 = fullName.substring(14, 23);
  console.log(`_${wulfric2}_`);

  // "ian"
  const ian = fullName.substring(25, 28);
  console.log(`${ian}`);

  // "bus"
  const bus = fullName.substring(2, 6);
  console.log(`${bus}`);
}
