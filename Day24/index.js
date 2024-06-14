//*Question 70:* Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function loopWithLet() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}
loopWithLet();
//*Question 71:* Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// 1st Example
var age = 20;
age = 30;
console.log(age);
2n;
d;
Example;
var Name = "Fiza";
try {
    Name = "Shiza";
}
catch (error) {
    console.log("Can't reassign a `const`-declared variable.");
}
//*Question 72:* Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    var blocklet = "Visible inside the block.";
    var blockconst = "Also only inside the block.";
    console.log(blocklet);
    console.log(blockconst);
}
try {
    console.log(blocklet);
}
catch (error) {
    console.log("`Blocklet` is not accessible outside the block.");
}
try {
    console.log(blockconst);
}
catch (error) {
    console.log("`Blockconst` is not accessible outside the block.");
}
