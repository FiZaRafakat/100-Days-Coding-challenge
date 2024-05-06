
//*Question 13:* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


let  transportationMode : string[] =["Lamborighni","BMW","Ferrarri","Audi","Land Cruiser","Buggati"]
transportationMode.map((items)=> console.log(`I would like to own a ${items} `))
console.log("*******************************************");

//method 2
transportationMode.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
console.log("*******************************************");