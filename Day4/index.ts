///*Question 10:* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If the programs are straightforward at this point, just add your name and the current date at the top of each program file. 
//Then, write one sentence describing what the program does.

///       Fiza      {  1 / May / 2024  }

let myName = "FIZA"
console.log(`\n\t Hello ${myName}, Are You Enjoying Coding ?`);

console.log("\t****************************************");

//*Question 11:* Names: Store the names of a few of your friends in an array called names.
// Print each person’s name by accessing each element in the list, one at a time.

let myFriends = ["Nazia", "Maheen" , "Sana", "Nimra" ]
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);

console.log("****************************************");

// 2nd Method

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
console.log("****************************************");

//*Question 12:* Greetings: Use the array from Exercise 11.
// Instead of just printing each person’s name, print a message to them. 
//The message should be the same for each person, but personalized with their name.


for(let name of myFriends){
          console.log(`Hello ${name} , How are you Dear :)`);
          
}
console.log("****************************************");

//(let name of myFriends) === ^
// name: This is the name of the variable being declared. Each element of the names array will be assigned to this variable during each iteration of the loop.
//of: This is a keyword used to specify the source of the values over which the loop will iterate.
//myFriends : This is the array from which values will be taken during each iteration. In this case, it's the array containing the names "Nazia", "Maheen", "Sana","Nimra".
//So, (let name of myFriends) can be understood as: "For each element in the array names, assign the current element to the variable name and execute the loop body."







