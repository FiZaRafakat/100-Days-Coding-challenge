//*Question 31:* No Users: Ensure your user list isn’t empty.

let users = []
if(users.length === 0 ){
    console.log("\nWe need to find some users!!");
}else {
    console.log("\nHello , Thanks for logging in again.");
}
console.log("\n----------------------------------------------\n");


// *Question 32:* Checking Usernames: Ensure uniqueness in usernames.

let userNames = ["Fiza","Shiza","Maheen","Urooj","Anaya"]
let newUsers = ["Nazia","Parveen","Anabya","maheen","Shazia","Urooj"]
//method 1
newUsers.forEach((users)=>{
    if(userNames.some((New_Users)=>New_Users.toLowerCase()=== users.toLowerCase())){
        console.log(`Sorry !! ${users} will need to enter a new user name .`);  
    }else {
        console.log(`${users} is available.`);
    }
})
console.log("\n----------------------------------------------\n");
//method 2
for (let i = 0; i < newUsers.length; i++) {
    let userExists = false;
    for (let j = 0; j < userNames.length; j++) {
        if (userNames[j].toLowerCase() === newUsers[i].toLowerCase()) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        console.log(`Sorry !! ${newUsers[i]} will need to enter a new user name.`);
    } else {
        console.log(`${newUsers[i]} is available.`);
    }
}
console.log("\n----------------------------------------------\n");
//*Question 33:* Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers = [1 , 2 , 3 , 4 , 5 , 6 ,7 , 8 , 9 , 10 ]

for( let ordinalNumber of  numbers ){
    let ordinalEnding : string 

    if(ordinalNumber === 1 ){
        ordinalEnding = "st"
    }else if (ordinalNumber === 2 ){
        ordinalEnding = "nd"
    }else if (ordinalNumber === 3 ){
        ordinalEnding = "rd"
    }else {
        ordinalEnding = "th"
    }
    console.log(`${ordinalNumber}${ordinalEnding}`);   
}
console.log("\n----------------------------------------------\n");

//method 2
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
})

console.log("\n----------------------------------------------\n");