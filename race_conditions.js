`use strict`;

// // Exampel 1 - fetch then
// function start() {
//   console.log("1");
//   let url = "https://petlatkea.dk/2021/hogwarts/students.json";
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log("2");
//       prepareData();
//     });

//   console.log("3");
//   useData();
//   console.log("4");
// }

// function prepareData() {
//   console.log("5");
// }

// function useData() {
//   console.log("6");
// }
// start();

// // Exampel 2 - fetch then
// function start() {
//   console.log("1");
//   let url = "https://petlatkea.dk/2021/hogwarts/students.json";
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log("2");
//       prepareData();
//     });

//   console.log("3");
//   console.log("4");
// }

// function prepareData() {
//   console.log("5");
//   useData();
// }

// function useData() {
//   console.log("6");
// }
// start();

// // Exampel 3 - fetch await
// function start() {
//   console.log("1");
//   loadJSON();
//   console.log("2");
//   useData();
// }

// async function loadJSON() {
//   let url = "https://petlatkea.dk/2021/hogwarts/students.json";
//   console.log("3");
//   const resp = await fetch(url);
//   console.log("4");
//   const data = await resp.json();
//   prepareData();
// }

// function prepareData() {
//   console.log("5");
// }

// function useData() {
//   console.log("6");
// }
// start();

// // Exampel 4 - fetch await
// async function start() {
//     console.log("1");
//     await loadJSON();
//     console.log("2");
//     useData();
//   }

//   async function loadJSON() {
//     let url = "https://petlatkea.dk/2021/hogwarts/students.json";
//     console.log("3");
//     const resp = await fetch(url);
//     console.log("4");
//     const data = await resp.json();
//     prepareData();
//   }

//   function prepareData() {
//     console.log("5");
//   }

//   function useData() {
//     console.log("6");
//   }
//   start();

// // Exampel 5 - fetch await
// function start() {
//   console.log("1");
//   loadJSON();
// }

// async function loadJSON() {
//   let url = "https://petlatkea.dk/2021/hogwarts/students.json";
//   console.log("3");
//   const resp = await fetch(url);
//   console.log("4");
//   const data = await resp.json();
//   prepareData();
// }

// function prepareData() {
//   console.log("5");
//   console.log("2");
//   useData();
// }

// function useData() {
//   console.log("6");
// }
// start();

// But let's continue – and load two files
// // Exampel 1 - load two files
// const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
// const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";

// function start() {
//   console.log("1");
//   loadFile1();
//   console.log("2");
//   loadFile2();
//   console.log("3");
//   useData();
// }

// function useData() {
//   console.log("6");
// }

// async function loadFile1() {
//   const resp = await fetch(url1);
//   const data = await resp.json();
//   console.log("4");
// }

// async function loadFile2() {
//   const resp = await fetch(url2);
//   const data = await resp.json();
//   console.log("5");
// }
// start();

// // Exampel 2 - load two files
// const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
// const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";

// async function start() {
//   console.log("1");
//   await loadFile1();
//   console.log("2");
//   await loadFile2();
//   console.log("3");
//   useData();
// }

// function useData() {
//   console.log("6");
// }

// async function loadFile1() {
//   const resp = await fetch(url1);
//   const data = await resp.json();
//   console.log("4");
// }

// async function loadFile2() {
//   const resp = await fetch(url2);
//   const data = await resp.json();
//   console.log("5");
// }
// start();

// Exampel 3 - load two files
const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";

function start() {
  console.log("1");
  loadFile1();
  console.log("2");
  console.log("3");
}

function useData() {
  console.log("6");
}

async function loadFile1() {
  const resp = await fetch(url1);
  const data = await resp.json();
  console.log("4");
  loadFile2();
}

async function loadFile2() {
  const resp = await fetch(url2);
  const data = await resp.json();
  console.log("5");
  useData();
}
start();
