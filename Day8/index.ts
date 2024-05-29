//*Question 22:* Intentional Error: Try to produce an array index error in one of your programs. 
//Correct the error before finishing.

let friends = ["Nazia","Ansa","Madiha","Laiba","Sumeira"]

// Internatianl Error :
console.log(friends[5]);

console.log(friends[4]);

//*Question 23:* Conditional Tests: Write a series of conditional tests. Predict the results of each test.

//I create this project on Friday {19/4/2024},So assume this Today....
//Test # 1
var today = "Friday"
console.log("Today is Friday .. I predict true.");
console.log(today == 'Friday');
//Test # 2
console.log("Today is Saturday .. I predict false.");
console.log(today == 'Saturday');
//Test # 3
var date = "19/4/2024"
console.log("Date ? 19/4/2024 .. I predict true.");
console.log(date == "19/4/2024");
//Test # 4
console.log("Date ? 20/4/2024 .. I predict false.");
console.log(date == '20/4/2024');
//Test # 5
console.log("Friday length == 6 .. I predict true.");
console.log(today.length == 6 );
//Test # 6
console.log("Friday length == 11 .. I predict false.");
console.log(today.length == 11);
//Test # 7
var addition = 2 + 8
console.log("2 + 8 == 10 .. I predict true .");
console.log(addition == 10);
//Test # 8
console.log("2 + 8 == 12 .. I predict false .");
console.log(addition != 10);
//Test # 9
var sign = 5<7
console.log("5 is not less than 7 .. I predict false.");
console.log(sign != 5<7);
//Test # 10
console.log("5 is greater than 7 .. I predict false .");
console.log(sign == 5>7);


//*Question 24:* More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.


let typescript = "typescript"
let TYPESCRIPT =  "TYPESCRIPT"
let Five = 5
let Seven = 7
let myFriend = ["Nazia","Maheen","Shiza","Mahnoor","Maria"]

 //Tests for equality and inequality with strings

console.log("Is typescript equal to typescript?");
console.log(typescript == "typescript");

console.log("Is tyescript equal to javascript?");
console.log(typescript != "typescript");

 //Tests using the lower case function

console.log("Is TYPESCRIPT  equal to typescript?");
console.log(TYPESCRIPT.toLowerCase() == "typescript");

console.log("Is TYPESCRIPT  not  equal to typescript?");
console.log(TYPESCRIPT.toLowerCase() != "typescript");

 //Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

 console.log("Is Five  Equal to Seven ?");
 console.log(Five == Seven);

 console.log("Is Five not Equal to seven ?");
 console.log(Five != Seven);
 
 console.log("Is five Greater than seven ?");
 console.log(Five > Seven);
 
 console.log("Is five less than seven ?");
 console.log(Five < Seven);

 console.log("Is five Greater than or equal to seven ?");
 console.log(Five >= Seven);

 console.log("Is five less than or equal to seven ?");
 console.log(Five <= Seven);

 //Tests using "and" and "or" operators

 console.log("Is five Equal to seven and five less than seven.");
 console.log(Five == Seven && Five < Seven);

 console.log("Is five Equal to seven Or five less than seven.");
 console.log(Five == Seven || Five < Seven);
 
 //Test whether an item is in a array

console.log("Is Nazia is my Friend ?");
 console.log(myFriend.includes("Nazia"));
 
 //Test whether an item is not in a array

 console.log("Is Nazia not my Friend ?");
 console.log(!myFriend.includes("Nazia"));