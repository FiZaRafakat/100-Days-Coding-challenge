//*Question 94:* Use the .map() method to create a new array that contains the length of each word from an array of words.

const words : string[] = ["Hello","World","TypeScript","I love JavaScript"]

const lengths : number[] = words.map(word => word.length) 

console.log(lengths);

//*Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.

function greaterThanTen(array : number[]):number[]{

    return array.filter(number => number >10)

}

let numbers : number[] = [1,27,30,4,67,50,9,45,2,5,100]

console.log(greaterThanTen(numbers));

//*Question 96:* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(numbers : number[]):number{

     return numbers.reduce((accumulator , current )=> accumulator + current , 0)

}

let sum = calculateSum(numbers)

console.log(sum);