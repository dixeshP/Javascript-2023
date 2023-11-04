// Object Start
// Non-single tune object

// Symbol adding in obj
const sym = Symbol("symb");

let myObj = {
  name: "Dixesh",
  age: 30,
  [sym]: "&",
  "full Name": "Patel Dixesh Ravindrabhai",
  city: "Surat",
  email: "dixesh@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Sunday"],
};

console.log(myObj.name);
console.log(myObj["email"]);
// console.log(myObj["full Name"]);

myObj["full Name"] = "Shah Rajal Jagdishbhai";
console.log(myObj["full Name"]);
// Object.freeze(myObj); // Freeze the object nathing to chnage will perform

myObj.name = "Rajal";
console.log(myObj.name);

console.log(typeof myObj[sym]);

myObj.abc = function () {
  console.log("Hello My name is abc");
};
console.log(myObj.abc());
// console.log(myObj);

myObj.friendName = function () {
  console.log(`My friend name id ${this["full Name"]}`);
};
console.log(myObj.friendName());
