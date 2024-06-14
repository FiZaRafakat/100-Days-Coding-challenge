//*Question 76:* Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

function addNumber(num1 : number , num2 : number): number{
    return num1 + num2
}

console.log(addNumber(367384, 983645));

//*Question 77:* Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greetUser(userName : string = "Anonymous"){
       return `Hello , ${userName} !!!!`
}
console.log(greetUser());
console.log(greetUser("Fiza"));

//*Question 78:* Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function funcDeclaration(num : number):number{
     return num * num
}
let funcExpression = function(num : number):number{
    return num * num
}

console.log(funcDeclaration(7));
console.log(funcExpression(9));