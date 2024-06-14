//*Question 73:* Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function updateVariable(){
    let number = 10 ; 
    console.log(`\nOriginal Value : ${number}`);
    console.log("\n*******************************\n");
    number = 20 ;
    console.log(`Updated Value : ${number}`);
    console.log("\n*******************************\n"); 
}
updateVariable()

//*Question 74:* Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapVariable(){
    let a = 5 ; 
    let b = 10 ;
    console.log(`Before Swap : a = ${a} 
              b = ${b} .`);
    console.log("\n*******************************\n");
    let swap = a ;
    a = b ; 
    b = swap 
    console.log(`After Swap : a = ${a}
             b = ${b}`);
    console.log("\n*******************************\n");
}

swapVariable()

//*Question 75:* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function compoundOperators(){
    let x = 10 ;
    console.log("Initial Value : ", x);
    x += 5 ;
    console.log("After Addition : ", x);
    x -= 7 ;
    console.log("After Substraction : ", x);
    x *= 2
    console.log("After Multiplication : ",x);
    x /= 8
    console.log("After Division : ", x);
}
compoundOperators()
console.log("\n*******************************\n");