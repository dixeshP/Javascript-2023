// ForEach

const eachArray = ["Dixesh", "Rajal", "Dhaval", "Dhivika", "Shamkit"];

eachArray.forEach(function (iteamForArrayShow) {
  //   console.log(iteamForArrayShow);
});

eachArray.forEach((valueForShow) => {
  //   console.log(valueForShow);
});

// external function declare and only refrance show
const showValue = (valArraySHow) => {
  //   console.log(`Direct show ${valArraySHow}`);
};

// eachArray.forEach(showValue);

// With For Each you can show The Index, Value and show in Array convert.
eachArray.forEach((key, idx) => {
  //   console.log(idx);
});

// ===================

// Object show in Array use in forEach
const arrayObject = [
  {
    language: "English",
    teacher: "Rajal",
  },
  {
    language: "Math",
    teacher: "Dixesh",
  },
  {
    language: "Art",
    teacher: "Sunny",
  },
  {
    language: "Gujarati",
    teacher: "Pancholi",
  },
];

arrayObject.forEach((arrayObj) => {
  console.log(
    `Show all teacher's name ${arrayObj.teacher} and Subject name is ${arrayObj.language}`
  );
});
