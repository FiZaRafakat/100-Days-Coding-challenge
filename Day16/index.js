//*Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2024,
    describe: function () {
        console.log("This laptop is a ".concat(this.make, " and a model ").concat(this.model, ", I bought this in Year ").concat(this.year));
    }
};
laptop.describe();
//*Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2024 },
    { make: "Apple", model: "MacBook Pro", year: 2021 },
    { make: "HP", model: "Spectre *360", year: 2023 }
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop3);
console.log(laptop2);
//*Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var priceAppleSet = [120000, 250000, 1800000];
var priceDellSet = [75000, 300000, 150000];
var priceHPSet = [90000, 150000, 400000];
var combinedPrices = __spreadArray(__spreadArray(__spreadArray([], priceAppleSet, true), priceDellSet, true), priceHPSet, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
