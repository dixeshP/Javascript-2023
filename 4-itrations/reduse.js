// Reduse Count loop
// const showData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const initialValue = 0;
// const showPlusData = showData.reduce((accumulator, curruntValue) => {
//   console.log(accumulator);
//   return accumulator + curruntValue;
// }, initialValue);
// console.log(showPlusData);

// const showNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const accumulator = 0;
// const showData = showNum.reduce((accumulator, curruntValue) => {
//   return accumulator + curruntValue;
// });
// console.log(showData);

// Reduse Data in Data
const checkOutTotal = [
  {
    product: "JS",
    price: 2000,
  },
  {
    product: "BS",
    price: 1550,
  },
  {
    product: "TS",
    price: 1260,
  },
  {
    product: "LPS",
    price: 6352,
  },
  {
    product: "PUT",
    price: 9635,
  },
];
const showTotalData = checkOutTotal.reduce((accumlator, curruntValue) => {
  return accumlator + curruntValue.price;
}, 0);
console.log(showTotalData);
