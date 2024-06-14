//*Question 76:* Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(367384, 983645));
//*Question 77:* Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(userName) {
    if (userName === void 0) { userName = "Anonymous"; }
    return "Hello , ".concat(userName, " !!!!");
}
console.log(greetUser());
console.log(greetUser("Fiza"));
//*Question 78:* Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function funcDeclaration(num) {
    return num * num;
}
var funcExpression = function (num) {
    return num * num;
};
console.log(funcDeclaration(9));
console.log(funcExpression(9));
