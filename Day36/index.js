//*Question 106:* Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("\n********************************\n");
console.log(isLeapYear(2019));
console.log(isLeapYear(2024));
console.log("\n********************************\n");
//*Question 107:* Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(9));
console.log("\n********************************\n");
//*Question 108:* Compare two strings to check if they are identical, ignoring case sensitivity.
function compareTwoStrings(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}
console.log(compareTwoStrings("Hello", "hellO"));
console.log(compareTwoStrings("hello", "Hey"));
console.log("\n********************************\n");
