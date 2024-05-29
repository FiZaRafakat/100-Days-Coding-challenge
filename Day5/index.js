//*Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let  transportationMode : string[] =["Lamborghini","BMW","Ferrari","Audi","Land Cruiser","Bugatti"]
// transportationMode.map((items) => console.log(`I would like to own a ${items} `))
// console.log("*******************************************");
// Map method => This method creates a new array from calling a function for every array element.
//Yahan map aik callback function ko call karta hai jo item ke naam se har array ke item ko represent karta hai.
//method 2
// transportationMode.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });
// console.log("*******************************************");
// *Question 14:* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Fiza", "Nazia", "Maheen", "Nimra", "Anaya", "Anabya"];
guestList.forEach(function (guests) {
    console.log("Hello ".concat(guests, ", You are inviting to dinner."));
});
console.log("*******************************************");
//*Question 15:* Changing Guest List: One of your guests can't make it to the dinner, 
//so you need to send out a new set of invitations with a replacement guest.
//Method 1
var changeGuest = guestList.splice(4, 1, "Shiza");
console.log("Hey ".concat(changeGuest, ", You are not inviting to dinner."));
// guestList.push("Shiza")
guestList.forEach(function (guests) {
    console.log("Hello ".concat(guests, ", You are inviting to dinner."));
});
console.log("*******************************************");
//Method 2
var unableToAttend = "Anaya";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Shiza";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
// New invitations
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
console.log("*******************************************");
