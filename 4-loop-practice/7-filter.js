// Filter Show in JS

const myArray = ["Dixesh", "Jayshree", "Hitarth", "Jennu"];
const showData = myArray.filter((varDataShow) => {
  return varDataShow === "Dixesh";
});
// console.log(showData);

// condition set
const myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterValue = myNumArray.filter((filterNum) => {
  const lessThenFive = 5 >= filterNum;
  return lessThenFive;
});
// console.log(filterValue);

const showArray = [
  {
    book: "book1",
    publish: 1990,
  },
  {
    book: "book2",
    publish: 2000,
  },
  {
    book: "book3",
    publish: 2001,
  },
  {
    book: "book4",
    publish: 2010,
  },
  {
    book: "book5",
    publish: 2003,
  },
];

const filterBook = showArray.filter((afterTwoThousand) => {
  return afterTwoThousand.publish >= 2000;
});
filterBook.map((Item) => {
  console.log(Item.book);
});
