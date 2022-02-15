`use strict`;

// // ----- Examples in class -----
// let actualResult = multiply(2, 2);

// console.log(actualResult);

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }
// multiply();

// // -----

// let name = "Peter";

// let theGreeting = greeting(name);

// // let randomNum = Math.round(Math.random() * 4);

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// console.log(theGreeting);

// // -----

function createSortOfHuman(name) {
  let humanName = name;
  let legs = createLimb(2);
  let arms = createLimb(4);
  let head = createBetterHead(0.8);
  let someThingNiceToSayToTheBoss = `You very ${createBetterHead(0.2)}`;
  return { head, arms, legs, humanName, someThingNiceToSayToTheBoss };
}

function createLimb(numOfLimbs) {
  return Math.round(Math.random() * numOfLimbs);
}

function createBetterHead(chanceOfNiceness) {
  if (Math.random() > chanceOfNiceness) {
    return (head = "nice");
  } else {
    return (head = "super niceness");
  }
}

let superNormalHuman = createSortOfHuman("Peter");
console.log("superNormalHuman: ", superNormalHuman);

// // // ----- Form the power point -----

// function createHuman(name) {
//   let humanName = name;
//   let legs = Math.round(Math.random() * 2);
//   let arms = Math.round(Math.random() * 2);
//   let head;
//   if (Math.random() > 0.5) {
//     head = "nice";
//   } else {
//     head = "nicer";
//   }

//   //   -- Ideas that don't work #1: multiple return lines
//   //   return head;
//   //   return legs;
//   //   return arms;
//   //   return humanName;

//   //   -- Ideas that don't work #2: return a string
//   //   return head + " " + arms + " " + legs + " " + humanName + " ";

//   //   -- Ideas that don't work #4: return an array
//   //   return [head, arms, legs, humanName];

//   //   Use objects for multiple return values!
//   return { head, arms, legs, humanName };
// }

// let superNormalHuman = createHuman("Peter");
// // console.log(createHuman("Peter"));
// console.log("superNormalHuman: ", superNormalHuman);
// console.log("Initiate leg status report: ... counting leg ...");
// console.log(`Number of legs ${superNormalHuman.legs}`);

// // ----- Function return value - try it out -----
// greeting("Magnus");
// function greeting(firstName) {
//   let thGreeting = `Hello ${firstName}!`;
//   console.log(thGreeting);
// }

// // - Testing the function further -
// let theGreeting = greeting("Magnus");
// function greeting(firstName) {
//   return `Hello ${firstName}!`;
// }
// console.log(theGreeting);
