// Logical Oprators
// && || !

// Assignment Operators
// ==, ===, !=, !==, >, <, <=, >=, ?

// If else
// const result = 50 ?? 0;
// console.log(`Your score is = ${result}`);
// if (result < 0 && result > 100) {
//   console.log("Please Enter valid Number");
// } else if (result >= 0 && result <= 34) {
//   console.log("You are Fail");
// } else if (result >= 35 && result <= 54) {
//   console.log("You are just pass Grade = D");
// } else if (result >= 55 && result <= 74) {
//   console.log("You are just pass Grade = C");
// } else if (result >= 75 && result <= 84) {
//   console.log("You are just pass Grade = B");
// } else if (result >= 85 && result <= 100) {
//   console.log("You are just pass Grade = A");
// } else {
//   console.log("Please Enter Valid Number");
// }

// Switch case
// const month = "November";

const month = "December";
console.log(month);

switch (true) {
  case month === "January":
    console.log("This is January month");
    break;
  case month === "Fabuary":
    console.log("This is Fabuary month");
    break;
  case month === "March":
    console.log("This is March month");
    break;
  case month === "April":
    console.log("This is April month");
    break;
  case month === "May":
    console.log("This is May month");
    break;
  case month === "June":
    console.log("This is June month");
    break;
  case month === "July":
    console.log("This is July month");
    break;
  case month === "August":
    console.log("This is August month");
    break;
  case month === "Septmber":
    console.log("This is Septmber month");
    break;
  case month === "Octomber":
    console.log("This is Octomber month");
    break;
  case month === "November":
    console.log("This is November month");
    break;
  case month === "December":
    console.log("This is December month");
    break;
  default:
    console.log("Please enter valid Month");
    break;
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", "false", " ", [], {}, function(){}

const checkValue = {};

if (Object.keys(checkValue).length === 0) {
  console.log("Hello this value is truth");
}

// Nullish Coalescing Operator (??): null undefined
let val1 = null ?? 20;
let val2 = undefined ?? 20;
console.log(val1);
