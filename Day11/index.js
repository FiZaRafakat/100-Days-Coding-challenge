//*Question 31:* No Users: Ensure your user list isn’t empty.
var users = [];
if (users.length === 0) {
    console.log("\nWe need to find some users!!");
}
else {
    console.log("\nHello , Thanks for logging in again.");
}
console.log("\n----------------------------------------------\n");
// *Question 32:* Checking Usernames: Ensure uniqueness in usernames.
var userNames = ["Fiza", "Shiza", "Maheen", "Urooj", "Anaya"];
var newUsers = ["Nazia", "Parveen", "Anabya", "maheen", "Shazia", "Urooj"];
//method 1
newUsers.forEach(function (users) {
    if (userNames.some(function (New_Users) { return New_Users.toLowerCase() === users.toLowerCase(); })) {
        console.log("Sorry !! ".concat(users, " will need to enter a new user name ."));
    }
    else {
        console.log("".concat(users, " is available."));
    }
});
console.log("\n----------------------------------------------\n");
//method 2
for (var i = 0; i < newUsers.length; i++) {
    var userExists = false;
    for (var j = 0; j < userNames.length; j++) {
        if (userNames[j].toLowerCase() === newUsers[i].toLowerCase()) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        console.log("Sorry !! ".concat(newUsers[i], " will need to enter a new user name."));
    }
    else {
        console.log("".concat(newUsers[i], " is available."));
    }
}
console.log("\n----------------------------------------------\n");
//*Question 33:* Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var ordinalNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (ordinalNumber === 1) {
        ordinalEnding = "st";
    }
    else if (ordinalNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (ordinalNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(ordinalNumber).concat(ordinalEnding));
}
console.log("\n----------------------------------------------\n");
//method 2
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
console.log("\n----------------------------------------------\n");
