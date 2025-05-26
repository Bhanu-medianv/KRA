// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");




// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });





// console.log("begins");

// setTimeout(() => {
//   console.log("setTimeout 1");
//   Promise.resolve().then(() => {
//     console.log("promise 1");
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log("promise 2");
//   setTimeout(function () {
//     console.log("setTimeout 2");
//     resolve("resolve 1");
//   }, 0);
// }).then((res) => {
//   console.log("dot then 1");
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });






async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");