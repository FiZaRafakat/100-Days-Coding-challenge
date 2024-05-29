"use strict";
//*Question 28:* Stages of Life: Determine a person’s life stage with an if-else chain.
let age = 20;
if (age <= 2) {
    console.log("The person is a baby.");
}
else if (age <= 4) {
    console.log("The person is a toddler.");
}
else if (age <= 13) {
    console.log("The person is a kid.");
}
else if (age <= 20) {
    console.log("The person is a teenager.");
}
else if (age <= 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//*Question 29:* Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favouriteFruits = ["Mango", "Guava", "Apple", "Pomegranate"];
if (favouriteFruits.includes("Mango")) {
    console.log("I really like Mango !!!");
}
if (favouriteFruits.includes("Apple")) {
    console.log("I really like Apple!!!");
}
if (favouriteFruits.includes("Guava")) {
    console.log("I really like Guava!!!");
}
//*Question 30:* Hello Admin: Greet users differently, especially 'admin'.
let members = ["Fiza", "Nazia", "Maheen", "Farah", "Shiza", "Hafsa"];
members.forEach((member) => {
    if (member === "Fiza") {
        console.log(`Hello ${member} Admin , Would you like to see a status report.`);
    }
    else {
        console.log(`Hello ${member} , Thank you for logging in again.`);
    }
});
