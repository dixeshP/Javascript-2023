// Primitive
// 7 types ; String, Number, Boolean, Null, Undefined, Symbol, Bigint

// const testNum = 100;
// const testNum2 = 100.1;

// const outsideTemp = null;
// const name = "Dixesh";
// let email;

// const id = Symbol("123");
// const customId = Symbol("123");
// const compare = id === customId;
// console.log(id, customId, compare);

// const bigInt = 122262661626262n;

// Reference (Non Primitive)

// Array, Object, Functions

// const heros = ["rajal", "dixesh", "ketan"];

// let userData = {
//   name: "Dixesh",
//   age: 30,
//   email: "dixesh@gmail.com",
// };

// console.log("Name =", userData.name, userData.age, userData.email);

// ========================================

// Stack(Primitive), Heap(Non-Primitive)
// MediaStreamTrack(Primitive)
// let email = "dixesh@gmail";
// let remail = email;
// remail = "rajal@gmail";
// console.log(email, remail);

// Heap(Non-Primitive)
let dixeshDetails = {
  name: "Dixesh",
  sureName: "Patel",
  age: 20,
};

let rajalDetails = dixeshDetails;
rajalDetails.name = "Rajal";
rajalDetails.sureName = "Shah";
rajalDetails.age = 22;

console.log(rajalDetails);
