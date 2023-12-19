// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  console.log("Hello my name is Dixesh");
})();

(function chai(uname) {
  console.log(`Hello my name is ${uname}`);
})("Rajal");

((age) => {
  console.log(`Hello my name is Denish and my age is ${age}`);
})(22);
