//*Question 16:* More Guests: You've found a bigger dinner table, so there's room for more guests.

 let guests : string[] = ["Shiza","Anaya","Anabya","Hira"]
guests.unshift("Fiza")
guests.push("Maheen")
guests.splice(Math.floor(guests.length/2),0,"Alisha")
console.log("Great news !!! We've arranged a bigger dinner table.");
guests.forEach((guests)=> {
    console.log(`Hey ${guests},You are invited for dinner.`); 
})

console.log("************************************************");

//*Question 17:* Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

    console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

console.log("************************************************");

//*Question 18:* Seeing the World: Think of at least five places you’d like to visit.

let favPlaces = [" Pakistan"," Turkey"," Paris", " China"," Italy"]

//Original Order
console.log("Original Order : ", favPlaces);

//Alphabetical order without modifying Original Array
console.log("Alphabetical Order : ", [...favPlaces].sort());

//Original Order 
console.log("Original Order : ", favPlaces);

//Reverse Alphabetical Order without modifying Original Array 
console.log("Reverse Alphabetical order : ",[...favPlaces].sort().reverse());

//Original Order
console.log("Original Order : ", favPlaces);

//Reverse  the original Array
favPlaces.reverse()
console.log("Reverse Original Array : ", favPlaces);

//Original Order
favPlaces.reverse()
console.log("Original order : ",favPlaces);

//Sorted the Original array
favPlaces.sort()
console.log("Sorted Orginal Array : ",favPlaces);

//Reverse the sorted Array
favPlaces.reverse()
console.log("Reverse The sorted Array : ",favPlaces);
