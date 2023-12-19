// Function
function simplefun(number1 = 50) {
  if (number1 === undefined) {
    return console.log("Input number is not valid");
  } else {
    return (number3 = number1);
  }
}

// let result = simplefun(100);
// console.log(`Show me result = ${result}`);

// Object in Function

const myUserObj = {
  username: "Dixesh",
  age: 29,
};

const myUserObj2 = {
  username: "Rajal",
  age: 30,
};

function objInFun(userObj) {
  console.log(
    `Hello my name is ${userObj.username} and my age is ${userObj.age}.`
  );
}

objInFun(myUserObj);
objInFun(myUserObj2);
objInFun({ username: "Kashyap", age: 33 });

// Array in Function

const myArray = [100, 200, 300, 400, 500];

function showArrayFun(num1, num2, ...showArray) {
  return showArray;
}

console.log(showArrayFun(100, 200, 300, 400, 500));
