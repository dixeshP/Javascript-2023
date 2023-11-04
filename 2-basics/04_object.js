// Single tune Object

const tinderUser = new Object();

tinderUser.id = "1";
tinderUser.name = "Dixesh";
tinderUser.lname = "Patel";

// console.log(tinderUser);

// =====
const tinderids = {
  username: {
    name: "Dixeshp",
    fullname: {
      firstname: "Dixesh",
      lastname: "patel",
    },
  },
};

console.log(tinderids.username.fullname.firstname);

// =========
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = {
  5: "e",
  6: "f",
};

// Sprade object
// const obj4 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// Join object second method
// const obj5 =

// Object in Array

const arrayobject = [
  {
    userid: 1,
    username: "Dixesh",
  },
  {
    userid: 2,
    username: "Rajal",
  },
  {
    userid: 3,
    username: "Kashyap",
  },
  {
    userid: 4,
    username: "Ketan",
  },
];

console.log(arrayobject[0]);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));
