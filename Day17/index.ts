//*Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.

function logHobbies(...hobbies : string[]){
            hobbies.forEach((hobby =>
             console.log(`I Enjoy ${hobby}.`)
                ))}
logHobbies("Reading","Playing","Cooking","Coding","Sleeping")

console.log("\n*******************************************\n");

//*Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

let myIdealDay = `My Ideal Day would involve :
                    1) Wake up Early and Going for Job.
                    2) Working on my personal Project.
                    3) Outing ......... `

              console.log(myIdealDay);

 console.log("\n*******************************************\n");
                    
//*Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


//Simple Function 
function areaOfRectangle(width : number , height : number):number{
           return width * height
}
//Arrow Function 
let calculateArea = (width : number , height : number) : number => width * height ;

console.log(areaOfRectangle(7 , 9));
console.log(calculateArea(8 , 8));

