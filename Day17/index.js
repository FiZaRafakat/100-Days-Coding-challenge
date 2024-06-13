//*Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach((function (hobby) {
        return console.log("I Enjoy ".concat(hobby, "."));
    }));
}
logHobbies("Reading", "Playing", "Cooking", "Coding", "Sleeping");
console.log("\n*******************************************\n");
//*Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
var myIdealDay = "My Ideal Day would involve :\n                    1) Wake up Early and Going for Job.\n                    2) Working on my personal Project.\n                    3) Outing ......... ";
console.log(myIdealDay);
console.log("\n*******************************************\n");
//*Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//Simple Function 
function areaOfRectangle(width, height) {
    return width * height;
}
//Arrow Function 
var calculateArea = function (width, height) { return width * height; };
console.log(areaOfRectangle(7, 9));
console.log(calculateArea(8, 8));
