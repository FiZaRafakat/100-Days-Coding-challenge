"use strict";
//*Question 130:* Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(5, 90));
//*Question 131:* Create two modules; one that exports a class, and another that imports the class and creates an instance.
var person_1 = require("./person");
var name = new person_1.Person("Fiza");
console.log(name);
