// For in use for object ease for object

const showArrayData = ["Dixesh", "Rajal", "Shamkit"];

const myObj = {
  item1: "Dixesh1",
  item2: "Dixesh2",
  item3: "Dixesh3",
  item4: "Dixesh4",
  item5: "Dixesh5",
};

// for (const inData in showArrayData) {
//   console.log(showArrayData[inData]);
// }

for (const inObj in myObj) {
  console.log(myObj[inObj]);
}
