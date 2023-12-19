const userDetails = {
  id: 1,
  name: "Dixesh",
  information: function () {
    console.log(`Hello my name is ${this.name}.`);
    console.log(this);
  },
};

// userDetails.information();
// userDetails.name = "Rajal";
// userDetails.information();

function chau() {
  const dixesh = "Dixesh";
  console.log(this.dixesh);
}

// This use only in object
const chauArrow = () => {
  const dixesh = "Dixesh";
  console.log(this.dixesh);
};

// chau();
// chauArrow();

// Explicit means in use return
const arrowExample = (name) => {
  console.log(`Hello bhai my name is ${name}`);
};

const arrowExampleImplecit = (name) => ({ uname: "Dixesh" });
//   console.log(`Hello bhai my name is ${name}`);

arrowExample("Dixesh");
arrowExampleImplecit("Diepsh");
console.log(arrowExampleImplecit());
