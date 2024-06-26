//*Question 67:* Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function mixedType(num1 : number , num2 : string):number {

            return num1 + Number(num2) 
}

console.log(mixedType(5,"10"));

//*Question 68:* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyingDecimal(num1 : number , num2 : number): number{
      return (Math.round(num1 * num2 * 100)/100)
}

console.log(multiplyingDecimal(0.2, 0.1));

//*Question 69:* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function divideAndRemainder(dividend : number , divisor : number):{quotient : number ; remainder : number}{
           let quotient = Math.floor(dividend / divisor)
           let remainder = dividend % divisor

           return {quotient , remainder}
}

console.log(divideAndRemainder(90, 40));
//  It shows how many times 40 goes into 90, and what's left over.
