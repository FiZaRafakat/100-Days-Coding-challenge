//*Question 4:* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
//"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

console.log(`\nQuaid-e-Azam once said , "I don't believe in taking right decisions, I take decision and make them right."\n`);

//*Question 5:* Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.


let famousPerson = "Quaid-e-Azam";
let message = `\n${famousPerson} once said , "I don't believe in taking right decisions, I take decisions and make them right."`
console.log(message);

//*Question 3:* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Use "\t" (tab) and "\n" (new line) at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let myName = "\n\t       Fiza     "
console.log(myName);
console.log(myName.trim());

//trim() ==> This method removes whitespace from the beginning and ends of a string. 
//This includes spaces, tabs, and newline characters. 
//It does not alter the original string but returns a new string with the whitespace removed


