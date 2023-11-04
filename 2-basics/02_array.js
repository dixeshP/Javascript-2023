// Array 2

const marvel_heros = ["Thor", "Ironman", "Dr.Strange"];
const dc_heros = ["Batman", "Superman", "Flash", "Aquaman"];

// marvel_heros.push(dc_heros); // It's only push and create one Array in second
// console.log(marvel_heros);

// 1. Method For connect we can use concet for array
// const joinArray = marvel_heros.concat(dc_heros);
// console.log(joinArray);

// 2. Method for second method
// const joinArray2 = [...marvel_heros, ...dc_heros];
// console.log(joinArray2);
// const indexDesign = joinArray2[2];
// console.log(indexDesign);

// Array in Array how to join
// const multidimentialArray = [
//   1,
//   2,
//   3,
//   4,
//   [5, 6, 7, 8],
//   9,
//   10,
//   11,
//   [12, 13, 14, [15, 16, 17]],
// ];
// console.log(multidimentialArray);
// console.log(multidimentialArray.flat(Infinity));

// const arrayq = Array(FormData("Dixesh"));
// console.log(arrayq);

console.log(Array.isArray("Dixesh"));
console.log(Array.from("Dixesh"));
console.log(Array.from({ name: "Dixesh" }));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
