//*Question 34:* Pizzas: Share your favorite pizzas and express your love for them.

let pizzas = ["Chicken Tika","Malai Cheese" ,"Fajita"]

pizzas.forEach(pizza =>{
    console.log(`I Like ${pizza} pizza.`);
})
console.log("I Really Love pizzas");

//*Question 35:* Animals: Highlight animals with a common trait.

let animals = [" Eagle"," Bat"," Butterfly"]

for (let flyAnimals of animals){
    console.log(`${flyAnimals} is capable of flight.`);
}
console.log(`${animals} are all capable of flight.`);

//*Question 36:* T-Shirt: Create a function for customizing t-shirts.

function T_Shirts(size : string , message : string){
    
    console.log(`Making a ${size} size T-Shirt with the message ${message} printed on it.`);

}
T_Shirts("Small","Code is life")
T_Shirts("Large","Coding !!!!!!!!")
T_Shirts("Medium","TypeScript")