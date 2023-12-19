// for of Loop

const arrayData = ["Dixesh", "Rajal", "Ketan", "Sunny", "Dipesh", "Darshit"];

for (const arryNum of arrayData) {
  //   console.log(arryNum);
}

const greetings = "Hello World!";

for (const greeNum of greetings) {
  if (greeNum === " ") {
    // console.log("Space Detected");
    break;
  }
  //   console.log(greeNum);
}

// Map

const map = new Map();
// console.log(map);

map.set("DX", "Dixesh");
map.set("DP", "Dipesh");
map.set("RJ", "Rajal");
map.set("SN", "Sunny");
console.log(map);

for (const [key, valchu] of map) {
  console.log(key, ":=", valchu);
}
