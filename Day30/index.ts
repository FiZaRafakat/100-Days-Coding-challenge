//*Question 88:* Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.

function roundToInteger(number : number): number{
      return Math.round(number)
}
console.log(roundToInteger(7.0008));

//*Question 89:* Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function convertStrToNum(num : string ){
    return parseFloat(num)
}
console.log(convertStrToNum("7890"));
console.log(convertStrToNum("234.342"));

// *Question 90:* Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result

function checkNaN(type : any): boolean{
         return isNaN(type)
}
console.log(checkNaN("Shiza"));
console.log(checkNaN(123));
