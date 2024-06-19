//*Question 112:* Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

const countries = new Map<string , string>()

countries.set("Pakistan","Islamabad")
countries.set("Japan","Tokyo")
countries.set("France","Paris")

console.log(countries);

//*Question 113:* Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function logCapitalOfCanada(countries : Map<string,string>):void{
     if(countries.has("Canada")){
        console.log(`The Capital Of Canada is ${countries.get("Canada")}`);   
     } else {
        console.log("Canada is not in the Map"); 
     }
}

logCapitalOfCanada(countries)

//*Question 114:* Iterate over a Map of student IDs and names, and log each pair to the console.

const students = new Map<number,string>();
students.set(1,"Fiza")
students.set(2,"Maheen")
students.set(3,"Hassan")
students.set(4,"Usman")
students.set(5,"Shiza")
students.set(6,"Laiba")
students.set(7,"Samina")
students.set(8,"Anaya")
students.set(9, "Anabya")


students.forEach((name , id)=>{
    console.log(`StudentID : ${id}  ,  Name : ${name} `);  
})