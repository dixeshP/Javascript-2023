// Today three method I lern.
// 1. filter, 2. map and 3. reduce

// const arrayFilter = ["Dixesh", "Rajal", "Shasan", "Saiyam", "Ketan", "Dipesh"];

// const nameShow = arrayFilter.forEach((showData) => {
//     console.log(showData);
//   return showData;
// });
// console.log(nameShow);

// Filter Show in JS

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter is easy and understanding method
// const showFilterData = myNums.filter((showDataFilter) => {
//   const filterData = showDataFilter > 5;
//   return filterData;
// });
// console.log(showFilterData);

// Filter method but use with forEach
// const newNum = [];
// myNums.forEach((showDataFilter) => {
//   if (showDataFilter > 5) {
//     newNum.push(showDataFilter);
//   }
// });
// console.log(newNum);

// Map Loop useing So much in feature
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const showDataMap = myNums.map((showData) => {
//   return showData;
// });
// console.log(showDataMap);

// Map Loop So Important
const showbookData = [
  {
    bookName: "book one",
    shirsh: "Gujrati",
    publish: "1981",
    adition: "2010",
  },
  {
    bookName: "book two",
    shirsh: "Gujrati",
    publish: "1985",
    adition: "2012",
  },
  {
    bookName: "book three",
    shirsh: "English",
    publish: "1999",
    adition: "2005",
  },
  {
    bookName: "book four",
    shirsh: "English",
    publish: "1995",
    adition: "2007",
  },
  {
    bookName: "book five",
    shirsh: "Marathi",
    publish: "1990",
    adition: "2005",
  },
  {
    bookName: "book six",
    shirsh: "Marathi",
    publish: "1992",
    adition: "2012",
  },
  {
    bookName: "book seven",
    shirsh: "Marathi",
    publish: "1995",
    adition: "2014",
  },
  {
    bookName: "book eight",
    shirsh: "English",
    publish: "1995",
    adition: "2008",
  },
  {
    bookName: "book nine",
    shirsh: "Gujrati",
    publish: "1992",
    adition: "2011",
  },
  {
    bookName: "book ten",
    shirsh: "Gujrati",
    publish: "1996",
    adition: "2013",
  },
];

const showFilterData = showbookData.filter((showDataBook) => {
  return showDataBook.shirsh === "Marathi" && showDataBook.adition > 2010;
});
console.log(showFilterData);
