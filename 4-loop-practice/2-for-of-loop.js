// For of loop
const showData = ["Dixesh", "Rajal", "Ketan", "Shamkit", "Shasan"];

const objectShow = [
  {
    name: "Dixesh",
    sname: "Patel",
    city: "surat",
    state: "Gujarat",
  },
  {
    name: "Dixesh",
    sname: "Patel",
    city: "rajeshthan",
    state: "Gujarat",
  },
  {
    name: "Dixesh",
    sname: "Patel",
    city: "ahmdabad",
    state: "Gujarat",
  },
];

// for (const sData of showData) {
//   console.log(sData);
// }

// for (const showObject of objectShow) {
//   console.log(showObject.city);
// }

const map = new Map();

map.set("DX", "Dixesh");
map.set("RJ", "Rajal");
map.set("KS", "Kashyap");
map.set("VK", "Vivek");

for (const [keys, values] of map) {
  console.log(keys, values);
}
