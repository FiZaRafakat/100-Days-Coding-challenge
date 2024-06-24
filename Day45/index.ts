//*Question 133:* Write a JavaScript object and convert it into a JSON string.

const person = {
    name : "Fiza",
    age : 20 ,
    city : "Karachi"
}

const jsonString = JSON.stringify(person)

console.log(jsonString);
console.log(person);

//*Question 134:* Take a JSON string and parse it into a JavaScript object.

const json_string = `{"name" : "Fiza" , "age" : 30 , "city" : "Karachi" }`
const parseJson =JSON.parse(json_string)
console.log(jsonString);

//*Question 135:* Explain how you can format a JSON string with proper indentation for readability.

const jsonFormat = JSON.stringify(person,null,2)

console.log(jsonFormat);
