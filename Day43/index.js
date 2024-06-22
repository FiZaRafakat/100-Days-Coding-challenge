//*Question 127:* Convert a traditional function expression to an arrow function.
var _this = this;
var traditionalFunction = function (a, b) {
    return a + b;
};
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(9, 67));
console.log(arrowFunction(67, 45));
console.log("\n*********************************");
//*Question 128:* Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multipleParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multipleParameters(6, 5));
console.log("\n*********************************");
//*Question 129:* Explain how this behaves differently in arrow functions compared to traditional functions.
var traditionalVsArrow = {
    value: "Difference in Traditional VS Arrow Function .....",
    traditional: function () {
        console.log("Traditional Function :", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow Function :", _this.value);
    }
};
traditionalVsArrow.traditional();
traditionalVsArrow.arrowFunction();
console.log("\n*********************************");
