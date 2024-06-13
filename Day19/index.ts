// *Question55 :* Double Numbers in an Array : Make a list of numbers.Then use a trick to make a new list where each number is twice it's orginal value .

let number = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

let doubledNumbers = number.map(numbers => numbers * numbers)

//showing the list of doubled Numbers

console.log("Numbers : " , number );
console.log("\n*********************************\n");

console.log("Double Numbers : " ,doubledNumbers );
console.log("\n*********************************\n");

// *Question56 :* Keep Only String : Given a mix of different items , make a new list that includes only those words .

// Checking of a types 

//A mixed bag of items 
let mixedArray = ["Apple","Banana","Mango", 100 , 45,true ]

let stringArray = mixedArray.filter(items => typeof items === "string")

console.log(stringArray);
console.log("\n*********************************\n");

let booleanArray = mixedArray.filter(item => typeof item === "boolean")

console.log(booleanArray);
console.log("\n*********************************\n");

let numberArray = mixedArray.filter(item => typeof item === "number")

console.log(numberArray);
console.log("\n*********************************\n");

//*Question57 :* Find the Average Grade : Given a list of grades , calculate the average grade.

let grades :number[] = [88 , 97 , 34, 77, 50 , 68, 99]
let grade2 : number[] = [45, 55, 89, 90, 23, 20, 67,88]

let avgGrades = grades.reduce((total,grade)=> total + grade,0/grades.length)

console.log(avgGrades);

console.log("\n*********************************\n");