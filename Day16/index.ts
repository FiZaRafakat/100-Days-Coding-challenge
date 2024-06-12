//*Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
     make :   "Dell",
     model :  "XPS 15",
     year :    2024 ,
     describe : function(){
        console.log(`This laptop is a ${this.make} and a model ${this.model}, I bought this in Year ${this.year}`)
     }
}

laptop.describe()

//*Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops = [
    {make : "Dell",model : "XPS 15", year : 2024} ,
    {make : "Apple", model : "MacBook Pro", year : 2021} ,
    {make : "HP" , model : "Spectre *360" , year : 2023}
]

let [laptop1 , laptop2,laptop3] = laptops

console.log(laptop1);
console.log(laptop3);
console.log(laptop2);

//*Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let priceAppleSet = [120000 , 250000 , 1800000] 
let priceDellSet = [75000, 300000, 150000]
let priceHPSet = [90000 , 150000 , 400000]

let combinedPrices = [...priceAppleSet,...priceDellSet,...priceHPSet].sort((a,b)=> a-b);
console.log(combinedPrices);
