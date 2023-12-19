// Reduce in javascript

const arraynNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const accumlator = 0;
const showTotal = arraynNum.reduce((accumlator, arraynNum) => {
  return accumlator + arraynNum;
}, 0);
console.log(showTotal);

// Accumlator use in final cart

const eComCart = [
  {
    product: "js",
    price: 1000,
  },
  {
    product: "av",
    price: 650,
  },
  {
    product: "bs",
    price: 870,
  },
  {
    product: "tr",
    price: 985,
  },
  {
    product: "vl",
    price: 657,
  },
  {
    product: "swd",
    price: 120,
  },
];

const accumlatorTwo = 0;
const showTotalcart = eComCart.reduce((accumlatorTwo, eComCart) => {
  return accumlatorTwo + eComCart.price;
}, 0);
console.log(showTotalcart);
