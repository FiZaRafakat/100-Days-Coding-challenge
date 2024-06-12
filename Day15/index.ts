//*Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magician = ["Alice","David","Chris"]

function Magician(magician : string[]){
   magician.forEach((magicians) => console.log(magicians))
}

function makeGreat(magician : string[]){
   return magician.map(magicians => `The Great ${magicians} .` )
}

let copyGreatMagician = makeGreat(magician.slice())

Magician(magician)
console.log("*********************************");
Magician(copyGreatMagician)
console.log("*********************************");

//*Question 44:* Sandwiches: Summarize sandwich orders with varying ingredients.

function Sandwiches(...items : string[]){
   console.log("Making a Sandwich with the following items : ");
   items.forEach(element => console.log(element))
   console.log("Enjoy Sandwich :) ");
   
}

Sandwiches("Cheese","Butter",'Beef')
console.log("*********************************");
Sandwiches("Bread","Chicken","Mayo","Egg","Cheese")
console.log("*********************************");
Sandwiches("avocado", "sprouts", "mustard", "mayo")

//*Question 45:* Cars: Create detailed car objects with flexible properties.

function makeCar(manufacturer : string , model : string , ...options : [string ,any][]) {
       let car = { manufacturer , model }
       options.forEach(([key , value])=>
      car [key] = value )
      return car 
      }

      console.log("*********************************");
      console.log(makeCar("Toyota","Corolla",["color","red"],["year",2020]));
      console.log("*********************************");
      console.log(makeCar("Ford","Feista",["color","blue"]));   