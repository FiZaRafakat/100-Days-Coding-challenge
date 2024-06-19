//*Question 103:* Write a function that returns a random boolean value, true or false.

function getRandomBoolean(): boolean{
    return Math.random()>0.5
}
console.log(getRandomBoolean());

//*Question 104:* Create a function that generates a random hexadecimal color code.

function getRandomHexademicalColor():string{
    const color = "#"+ Math.floor(Math.random()*0xffff).toString(16).padStart(6,"0")
    return color
}

console.log(getRandomHexademicalColor());

//*Question 105:* Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function rollingDice():number{
        return Math.floor(Math.random()*6)+1
}

console.log(rollingDice());