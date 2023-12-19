console.log("Hello Bhai");

const masg = () => {
  console.log("Hello world!");
};

setTimeout(masg, 2000);

setTimeout(() => {
  console.log("I am interval function");
}, 5000);

const changeTxt = () => {
  document.querySelector("#changeText").innerHTML = "Hello Dixesh!";
};

const chnageMe = setTimeout(changeTxt, 5000);

document.querySelector("#stopChange").addEventListener("click", () => {
  clearTimeout(chnageMe);
  console.log("Stop clickedddd");
});
