//*Question 130:* Explain how to export a function from one JavaScript file and import it into another file.

import {add} from "./mathFunction"

console.log(add(5, 90));

//*Question 131:* Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./person";

const name = new Person("FIZA")

console.log(name);

//*Question 132:* Discuss the difference between default and named exports in JavaScript modules.

import Calculator from "./calculator";

import {utilOne , utilTwo } from "./utils"

