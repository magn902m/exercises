`use strict`;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  // --- Basic arrays (5.4) ---
  let letters = [..."abcdefghijklmnopqrstuvwxyz"];
  console.log(letters);

  let someLetter = letters[4];
  let anotherLetter = letters[7];
  console.log(`someLetter: ${someLetter}
    anotherLetter: ${anotherLetter}`);

  console.log(`letters[4] ${letters[4]}`);
  let newarr = letters;
  newarr[4] = `*`;

  console.log(`letters[4] ${letters[4]}`);

  // --- Array methods (5.5) ---
  const people = ["Harry", "Ron", "Hermione"];
  let result;

  result = people.push("Draco");

  console.log(`Result: ${result}
    People: ${people}`);

  // Try others array methods
  // result = people.push;

  // Push a objcet in to the array last
  result = people.push("Draco");

  // Remove the last objcet form the array
  result = people.pop();

  result = people.push("Neville");

  result = people.push("Luna");

  // Slice a array up, so you can remove a spec objcet
  result = people.slice(0, 3);

  // Put a objcet in to a definite place in the array
  result = people.splice(1, 0, "Cho");

  // Replacing "Cho" with "Ginny"
  people[1] = "Ginny";

  result = people.push("Fred", "George");

  // Finds the index of the objcet in the array
  result = people.indexOf("Fred");
  console.log((result = people.indexOf("Fred")));

  // Remove the second last objcet in the array
  result = people.splice(result, 1);

  console.log(`Result: ${result}
    People: ${people}`);
  console.log(people);

  // --- We can convert them to arrays ---
  const letters2 = Array.from("abcdefghijklmn");
  console.log(letters2);

  const str = "abcdefghijklmn";
  const arr1 = str.split();
  const arr2 = Array.from(str);
  console.log(`str: `, str, `arr1: `, arr1, `arr2: `, arr2);
}
