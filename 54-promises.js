// let promise = new Promise(function (resolve, reject) {
//   alert("Hello");
//   resolve(56);
// });

// console.log("Hello One");
// setTimeout(function () {
//   console.log("Hello Two in 2 seconds");
// }, 2000);

// console.log("My name is " + "Hello Three");
// console.log(promise);

// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am A promise and I am RESOLVED");
    resolve(true);
  }, 3000);
});

console.log(p1);

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("I am A promise and I am REJECTED");
    reject(new Error("THIS IS AN ERROR"));
  }, 3000);
});

console.log(p2);

p1.then((value) => {
  console.log(value);
});

p2.catch((error) => {
  console.log("SOME ERROR HAS OCCURED");
});
