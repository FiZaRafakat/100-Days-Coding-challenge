// *Question55 :* Double Numbers in an Array : Make a list of numbers.Then use a trick to make a new list where each number is twice it's orginal value .
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubledNumbers = number.map(function (numbers) { return numbers * numbers; });
//showing the list of doubled Numbers
console.log("Numbers : ", number);
console.log("\n*********************************\n");
console.log("Double Numbers : ", doubledNumbers);
console.log("\n*********************************\n");
// *Question56 :* Keep Only String : Given a mix of different items , make a new list that includes only those words .
// Checking of a types 
//A mixed bag of items 
var mixedArray = ["Apple", "Banana", "Mango", 100, 45, true];
var stringArray = mixedArray.filter(function (items) { return typeof items === "string"; });
console.log(stringArray);
console.log("\n*********************************\n");
var booleanArray = mixedArray.filter(function (item) { return typeof item === "boolean"; });
console.log(booleanArray);
console.log("\n*********************************\n");
var numberArray = mixedArray.filter(function (item) { return typeof item === "number"; });
console.log(numberArray);
console.log("\n*********************************\n");
//*Question57 :* Find the Average Grade : Given a list of grades , calculate the average grade.
var grades = [88, 97, 34, 77, 50, 68, 99];
var grade2 = [45, 55, 89, 90, 23, 20, 67, 88];
var avgGrades = grades.reduce(function (total, grade) { return total + grade; }, 0 / grades.length);
console.log(avgGrades);
console.log("\n*********************************\n");
