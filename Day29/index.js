"use strict";
//*Question 85:* Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function positionOfCode(sentence) {
    return sentence.indexOf("code");
}
console.log(positionOfCode("Do you want to write code in TypeScript."));
//*Question 86:* Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function hasJavaScript(sentence) {
    return sentence.includes("JavaScript");
}
console.log(hasJavaScript("I like to code in JavaScript"));
console.log(hasJavaScript("I love to write a code in TypeScript."));
//*Question 87:* Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractSubstring(string) {
    return string.substring(0, 10);
}
console.log(extractSubstring("Do you really Enjoy coding in typeScript."));
