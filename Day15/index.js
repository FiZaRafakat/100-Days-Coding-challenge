//*Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magician = ["Alice", "David", "Chris"];
function Magician(magician) {
    magician.forEach(function (magicians) { return console.log(magicians); });
}
function makeGreat(magician) {
    return magician.map(function (magicians) { return "The Great ".concat(magicians, " ."); });
}
var copyGreatMagician = makeGreat(magician.slice());
Magician(magician);
console.log("*********************************");
Magician(copyGreatMagician);
console.log("*********************************");
//*Question 44:* Sandwiches: Summarize sandwich orders with varying ingredients.
function Sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwich with the following items : ");
    items.forEach(function (element) { return console.log(element); });
    console.log("Enjoy Sandwich :) ");
}
Sandwiches("Cheese", "Butter", 'Beef');
console.log("*********************************");
Sandwiches("Bread", "Chicken", "Mayo", "Egg", "Cheese");
console.log("*********************************");
Sandwiches("avocado", "sprouts", "mustard", "mayo");
//*Question 45:* Cars: Create detailed car objects with flexible properties.
function makeCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(makeCar("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(makeCar("Ford", "Feista", ["color", "blue"]));
