//*Question 82:* Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function lengthOfString(characters) {
    return characters.length;
}
console.log(lengthOfString("Hello Fiza!!!"));
console.log("\n***********************************\n");
//*Question 83:* Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both
function convertCase(Words) {
    var uppCase = Words.toUpperCase();
    var lowCase = Words.toLowerCase();
    return "Original Words : ".concat(Words, ",\nUpperCase : ").concat(uppCase, ",\nLowerCase : ").concat(lowCase, "....");
}
console.log(convertCase("Nazia"));
console.log("\n***********************************\n");
console.log(convertCase("Fiza"));
console.log("\n***********************************\n");
//*Question 84:* Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceJSintoTS(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJSintoTS("I love JavaScript language."));
console.log("\n***********************************\n");
console.log(replaceJSintoTS("JavaScript is awesome !!!!!"));
console.log("\n***********************************\n");
