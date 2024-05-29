//*Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guests.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["Shiza", "Anaya", "Anabya", "Hira"];
guests.unshift("Fiza");
guests.push("Maheen");
guests.splice(Math.floor(guests.length / 2), 0, "Alisha");
console.log("Great news !!! We've arranged a bigger dinner table.");
guests.forEach(function (guests) {
    console.log("Hey ".concat(guests, ",You are invited for dinner."));
});
console.log("************************************************");
//*Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
console.log("************************************************");
//*Question 18:* Seeing the World: Think of at least five places you’d like to visit.
var favPlaces = [" Pakistan", " Turkey", " Paris", " China", " Italy"];
//Original Order
console.log("Original Order : ", favPlaces);
//Alphabetical order without modifying Original Array
console.log("Alphabetical Order : ", __spreadArray([], favPlaces, true).sort());
//Original Order 
console.log("Original Order : ", favPlaces);
//Reverse Alphabetical Order without modifying Original Array 
console.log("Reverse Alphabetical order : ", __spreadArray([], favPlaces, true).sort().reverse());
//Original Order
console.log("Original Order : ", favPlaces);
//Reverse  the original Array
favPlaces.reverse();
console.log("Reverse Original Array : ", favPlaces);
//Original Order
favPlaces.reverse();
console.log("Original order : ", favPlaces);
//Sorted the Original array
favPlaces.sort();
console.log("Sorted Orginal Array : ", favPlaces);
//Reverse the sorted Array
favPlaces.reverse();
console.log("Reverse The sorted Array : ", favPlaces);
