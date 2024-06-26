"use strict";
//*Question 139:* List three reserved words in JavaScript and create a valid use case for each.
// Reserved Word are a special words in javascript / TypeScript that have a special meaning and cannot be used as identifier.
const count = 5; // const is as reserved words
if (count > 0) {
    console.log("Count is greater than 0.");
} // if else is used as a reserved words.
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 7));
// Function is a reserved word.... 
//*Question 140:* Explain the error that occurs when trying to use a reserved word as a variable name.
//let if = "Error" ; tries to use a reserved word as variable name 
console.log("Reserved Words used as a variable name cause a syntax error.");
//*Question 141:* Discuss the significance of the await reserved word in asynchronous JavaScript.
async function fetchData() {
    let greet = "Hello World !!";
    const data = await greet;
    console.log(data);
    console.log("The await keyword allows asynchronous, promised-based behaviour to be written in a cleaner,more linear fashion. ");
}
console.log(fetchData());
