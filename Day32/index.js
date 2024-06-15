//*Question 94:* Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["Hello", "World", "TypeScript", "I love JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
//*Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greaterThanTen(array) {
    return array.filter(function (number) { return number > 10; });
}
var numbers = [1, 27, 30, 4, 67, 50, 9, 45, 2, 5, 100];
console.log(greaterThanTen(numbers));
//*Question 96:* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var sum = calculateSum(numbers);
console.log(sum);
