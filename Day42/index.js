//*Question 124:* Create a function inside an object that returns the object's own name property using the this keyword.
var author = {
    name: "Fiza",
    getName: function () {
        return this.name;
    }
};
console.log(author.getName());
//*Question 125:* Modify a method in an object to use the this keyword to access another property in the same object.
var areaOfRectangle = {
    width: 5,
    height: 6,
    area: function () {
        return this.width * this.height;
    }
};
console.log(areaOfRectangle.area());
//*Question 126:* Explain how the this keyword changes its value when used inside a nested function within a method.
var myObject = {
    property: "value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
myObject.outerMethod();
