// For loop show in details.
const showDataArray = ["Rajal", "Vivek", "Sunny", "Kashyap", "Ketan"];

const objectShow = {
  name: "Dixesh",
  sname: "Patel",
  city: "surat",
  state: "Gujarat",
};

// for (let i = 0; i < showDataArray.length; i++) {
//   console.log(showDataArray[i]);
// }

// console.log(Object.keys(objectShow).length);

for (let i = 0; i < Object.keys(objectShow).length; i++) {
  console.log(Object.values(objectShow)[i]);
}

// console.log(Object.keys(objectShow));
