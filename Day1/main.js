//*Question 2:* Personal Message: Store a person’s name in a variable and print a message to them,
// like “Hello Asharib, would you like to learn some TypeScript today?”
var myName = "Fiza";
console.log("\nHello ".concat(myName, ", would you like to learn some TypeScript today ?\n"));
//*Question 3:* Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
var personsName = "Fiza";
console.log(personsName.toLowerCase());
console.log(personsName.toUpperCase());
console.log(personsName.charAt(0).toUpperCase() + personsName.slice(1).toLowerCase());
//charAt => ye method kisi specified character ko return krny k liye use krty hain.
// Hm agr charAt(1) k value 1 store krein gy to it's return [Iza]
//slice => Yeh method string ke specified index se lekar end tak ka portion return karta hai .
// like if we store index slice(1,2) to ye hmy [iz] return krei ga.
// slice(1,2) ===> slice(start,end) 
