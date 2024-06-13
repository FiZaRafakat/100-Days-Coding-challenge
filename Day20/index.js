//*Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function avgScoreCalculator() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (sum, score) { return sum + score; }, 0);
    return total / score.length;
}
console.log(avgScoreCalculator(7, 9, 4, 3, 2, 1, 10, 12));
console.log("\n*********************************\n");
//*Question 59 : *  Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var add100 = makeAder(100);
console.log(add100(50));
console.log("\n*********************************\n");
//*Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var defaultName = "Fiza";
    var defaultAge = 20;
    return {
        displayinfo: function (name, age) {
            if (name === void 0) { name = defaultName; }
            if (age === void 0) { age = defaultAge; }
            console.log("Profile Info :\n                                 Name : ".concat(name, "\n                                 Age  : ").concat(age, "."));
        }
    };
})();
userProfile.displayinfo();
console.log("\n*********************************\n");
userProfile.displayinfo("Maheen", 19);
console.log("\n*********************************\n");
