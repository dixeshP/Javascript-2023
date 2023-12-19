// 1. For Loop
const arrayData = ["Dixesh", "Rajal", "Shamkit", "Sunny", "Hiral", "Mehul"];

for (let i = 0; i < arrayData.length; i++) {
  //   console.log(arrayData[i]);
}

// 2. While Loop
let iNum = 0;
while (iNum < arrayData.length) {
  //   console.log(arrayData[iNum]);
  iNum = iNum + 1;
}

// 3. do while loop
let dNum = 0;
do {
  //   console.log(arrayData[dNum]);
  dNum = dNum + 1;
} while (dNum < arrayData.length);

// 4. For of loop
for (const iNum of arrayData) {
  //   console.log(iNum);
}
// Note :  For of not Working in Object for Object you need to set For In
// Map Set
const mapData = new Map();
mapData.set("IND", "India");
mapData.set("NZ", "Newziland");
mapData.set("SA", "South Africa");
mapData.set("AUS", "Australia");

for (const [mapKey, mapValue] of mapData) {
  //   console.log(mapValue);
}

// For In Loop
// note : For object use forIn
// const myObject = {
//   uname: "Dixesh",
//   age: 22,
//   uid: "dixeshp",
//   designation: "sr. designer",
// };
// for (const objNum in myObject) {
//   console
//     .log
//     `Obejct Keys name ${objNum} and Value name is ${myObject[objNum]}`
//     ();
// }

// Array in for in
for (const objmNum in arrayData) {
  //   console.log(arrayData[objmNum]);
}

// forEach
// arrayData.forEach(function (valNum) {
//   console.log(valNum);
// });

arrayData.forEach((keyVal) => {
  //   console.log(keyVal);
});

const showDataFun = (showData) => {
  console.log(showData);
};

// arrayData.forEach(showDataFun);

const arrayObj = [
  {
    subject: "English",
    teacher: "Rajal",
  },
  {
    subject: "Gujrati",
    teacher: "Ketan",
  },
  {
    subject: "Math",
    teacher: "Dixesh",
  },
  {
    subject: "Java",
    teacher: "Sharita",
  },
];

arrayObj.forEach((showAData, index, array) => {
  console.log(
    `In school subject is ${showAData.subject} and teacher's name is ${showAData.teacher}`
  );
  //   console.log(array);
  //   console.log(index);
});
