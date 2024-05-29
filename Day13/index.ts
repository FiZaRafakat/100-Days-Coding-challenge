//*Question 37:* Large Shirts: Default values in make_shirt().

console.log("\n****************************************\n");

function T_Shirts( size : string = "Large", message : string = "Love : Code journey"){
       console.log(`Make a ${size} size shirts with a message ${message} printed on it.`);       
}
T_Shirts()
T_Shirts("Medium")
T_Shirts(undefined,"Zeal _ Code Venture")
T_Shirts("Small","Passion _ Code Explore")

console.log("\n****************************************\n");

// *Question 38:* Cities: Describing cities with a function.

function Cities(city : string , country : string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
Cities("Karachi")
Cities("Lahore")
Cities("Tokyo","Japan")
Cities("Delhi","India")

console.log("\n****************************************\n");

//*Question 39:* City Names: Formatting city-country pairs.

function City_Country(City : string , country : string){
        return `${City}, ${country}`
}

console.log(City_Country("Karachi","Pakistan"));
console.log(City_Country("Lahore","Pakistan"));
console.log(City_Country("Delhi","India"));
console.log(City_Country("Tokyo","Japan"));
console.log(City_Country("Paris","France"));

console.log("\n****************************************\n");