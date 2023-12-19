// Scope
// Two type of scope globle scope and Block scope

// Globle Scopes Variables
let a = 10;
const b = 20;
var c = 30;

if (true) {
  const a = 50;
  let b = 60;
  console.log(`I am Block scope variable ${a},${b}`);
}

console.log(`I am Globle scope variable ${a},${b},${c}`);

// Function in function scopes

function familyOne() {
  const a = "Dixesh";
  const b = "Jinal";
  function fmailyTwo() {
    const c = "Rajal";
    const d = "Dhaval";

    console.log(`Hello in family One have two kids and name are ${a} & ${b}`);
  }
  //   console.log(`Hello in family Two have two kids and name are ${c} & ${d}`);
  fmailyTwo();
}

familyOne();

// ===========

if (true) {
  const userName = "Dixesh";
  if (userName === "Dixesh") {
    const userSecondName = "Rajal";
    console.log(`Hello My name is ${userName}`);
  }
  //   console.log(`Hello my name is ${userSecondName}`);
}
// console.log(`Hello My name is ${userName}}`);

// How to function defind in Hoisting
console.log(userData(1));

function userData(num) {
  return num + 1;
}

// Hoisting Function define in const in function
const helloUser = function (nums) {
  return nums + 2;
};
console.log(helloUser(2));
