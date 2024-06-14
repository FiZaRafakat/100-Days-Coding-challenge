//*Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["cars"] = 0] = "cars";
    vehicleType[vehicleType["trucks"] = 1] = "trucks";
    vehicleType[vehicleType["motorcycles"] = 2] = "motorcycles";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.trucks);
console.log("\n************************");
var studentData = {
    name: "Fiza",
    age: 20,
    classes: ["TypeScript", "Python", "Java"]
};
console.log(studentData);
console.log("\n************************");
var circle = {
    kind: "circle",
    radius: 7
};
var rectangle = {
    kind: "rectangle",
    width: 4,
    height: 3,
};
console.log(circle);
console.log("\n************************");
console.log(rectangle);
console.log("\n************************");
