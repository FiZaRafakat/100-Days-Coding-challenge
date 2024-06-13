//*Question 52:* Make a Smartphone Object : Create a simple way to keep track of smartphone's details.
// Include it's brand, model, and other key features like how much storage it has, the size of it's screen, and how long it's battery lasts.
var smartphone = {
    brand: "Samsung",
    model: "galaxy S21",
    features: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};
console.log(smartphone);
console.log("\n**********************************\n");
//*Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages,tools, and software frameworks.
//Find a way to get three specific skills from this list and show them.
//A list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "Python", "TypeScript"],
    frameworks: ["ReactJs", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
//Getting specific skills from the list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
//Showing a skills from each category 
console.log("Language : ".concat(languages[0], " , Framework : ").concat(frameworks[0], " , Tools : ").concat(tools[0]));
console.log("\n**********************************\n");
console.log("language : ".concat(languages[2], " Framework :  ").concat(frameworks[1], " , Tools : ").concat(tools[1]));
console.log("\n**********************************\n");
//*Question 54:* Making Flexible Object keys : Learn how to set up a list where you can change the home of each section based on what you need at that moment, like adjusting labels based on user choices.
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {}; // Setting up a section in the list with changeable name 
    dynamicObject[key] = value; // for set a user input in this order  
    return dynamicObject;
}
console.log(createObjectWithDynamicKey("Theme", "Dark"));
console.log("\n**********************************\n");
console.log(createObjectWithDynamicKey("Color", "Blue"));
console.log("\n**********************************\n");
