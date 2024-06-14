//*Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum vehicleType {
       cars,
       trucks,
       motorcycles
}

console.log(vehicleType.trucks);

console.log("\n************************");

//*Question 62:* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student{
    name : string,
    age : number,
    classes : string[]
}
let studentData : Student = {
       name : "Fiza",
       age : 20 ,
       classes : ["TypeScript","Python","Java"]
}

console.log(studentData);

console.log("\n************************");

//*Question 63:* Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shapes = {
    kind : "circle" | "rectangle",
    radius? : number ,
    width? : number,
    height? : number 
}

let circle : Shapes = {
     kind : "circle",
     radius : 7
}

let rectangle : Shapes = {
    kind : "rectangle",
    width : 4 ,
    height : 3,
}

console.log(circle);
console.log("\n************************");
console.log(rectangle);
console.log("\n************************");
