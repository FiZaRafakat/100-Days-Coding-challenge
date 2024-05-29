//*Question 34:* Pizzas: Share your favorite pizzas and express your love for them.
var pizzas = ["Chicken Tika", "Malai Cheese", "Fajita"];
pizzas.forEach(function (pizza) {
    console.log("I Like ".concat(pizza, " pizza."));
});
console.log("I Really Love pizzas");
//*Question 35:* Animals: Highlight animals with a common trait.
var animals = [" Eagle", " Bat", " Butterfly"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var flyAnimals = animals_1[_i];
    console.log("".concat(flyAnimals, " is capable of flight."));
}
console.log("".concat(animals, " are all capable of flight."));
//*Question 36:* T-Shirt: Create a function for customizing t-shirts.
function T_Shirts(size, message) {
    console.log("Making a ".concat(size, " size T-Shirt with the message ").concat(message, " printed on it."));
}
T_Shirts("Small", "Code is life");
T_Shirts("Large", "Coding !!!!!!!!");
T_Shirts("Medium", "TypeScript");
