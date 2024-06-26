"use strict";
//*Question 142:* Create a Promise that resolves with "Hello, World!" after 2 seconds.
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World!!!!!");
    }, 1000);
});
helloPromise.then((message) => console.log(message));
//*Question 143:* Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
const conditionalPrmoise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("Success!!");
    }
    else {
        reject(new Error("Failure !!!"));
    }
});
conditionalPrmoise.then((result) => console.log(result))
    .catch((error) => console.log(error.message));
//*Question 144:* Explain the use of the Promise.all() method with an example.
const promise1 = Promise.resolve(3);
const promise2 = 40;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
