//
// Promise without variable defind
// new Promise(function (resolve, reject) {
//   console.log("Hello Dixesh this is without variable defind");
//   resolve();
// }).then(() => {
//   console.log("Hello Dixesh");
// });

// ===============

// Promise with variable defind
// const promisesOne = new Promise((resolve, reject) => {
//   console.log("Hello Promise");
//   resolve();
// });
// promisesOne.then(() => {
//   console.log("Hello Then");
// });

// ===============

// const promiseTwo = new Promise((resolve, reject) => {
//   console.log("Hello Promise Two");
//   const userName = { name: "Dixesh", email: "dixesh3@gmail.com" };
//   resolve(userName);
// });
// promiseTwo.then((unameDetails) => {
//   console.log(unameDetails.name);
// });

// ===============

// const promisesThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const value = true;
//     const userDetails = { name: "Dixesh", email: "dixeshp3@gmail.com" };
//     if (!value) {
//       resolve(userDetails);
//     } else {
//       reject();
//     }
//   }, 1000);
// });
// promisesThree
//   .then((userData) => {
//     console.log(
//       `User Name = ${userData.name} , User Email = ${userData.email}`
//     );
//   })
//   .catch(() => {
//     console.log(`User data is wrong`);
//   });

// ===============

const promisesFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const condition = true;
    const data = { uname: "Dixesh", password: "Hello" };
    const e = "Sorry your data is not matched";
    if (!condition) {
      resolve(data);
      console.log("Your Data is Pass");
    } else {
      reject(e);
    }
  });
});
promisesFour
  .then((uData) => {
    console.log(
      `Your Data is success fully pass and Data is ${uData.uname} && ${uData.password}`
    );
    return uData.uname;
  })
  .then((passData) => {
    console.log(passData);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Your Data is Success store in Database");
    console.log("========");
  });

// ========

const promisesFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const condition = true;
    const data = { uname: "Dixesh", password: "Hello" };
    const e = "Sorry your data is not matched";
    if (condition) {
      resolve(data);
      console.log("Your Data is Pass");
    } else {
      reject(e);
    }
  }, 1000);
});
async function promisesCompFun() {
  try {
    const promiseDataShow = await promisesFive;
    console.log(promiseDataShow);
  } catch (error) {
    console.log(error);
  }
}
promisesCompFun();
