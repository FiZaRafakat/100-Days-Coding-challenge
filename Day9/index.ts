//*Question 25:* Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

let alien_color = "Green"

if(alien_color === "Green"){
console.log(`Alien Color is Green. You earned 5 Points.`);
}

//*Question 26:* Alien Colors #2: Choose a color for an alien, then write an if-else chain.

alien_color = "red"
if(alien_color === "Green"){
    console.log("You Earned 5 Points.");   
}else {
console.log("You Earned 10 Points.");
}

//*Question 27:* Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

// 1st version

let Alien_Color = "Red" 

if(Alien_Color == "Green"){
    console.log("You earned 5 points..");
    
} else if (Alien_Color == "Yellow"){
    console.log("You earned 10 points..");
    
} else if (Alien_Color == "Red"){
    console.log("You earned 15 points..");
    
}
//2nd version

Alien_Color = "Green" 

if(Alien_Color == "Green"){
    console.log("You earned 5 points..");
    
} else if (Alien_Color == "Yellow"){
    console.log("You earned 10 points..");
    
} else if (Alien_Color == "Red"){
    console.log("You earned 15 points..");
    
}
//3rd version

Alien_Color = "Yellow" 

if(Alien_Color == "Green"){
    console.log("You earned 5 points..");
    
} else if (Alien_Color == "Yellow"){
    console.log("You earned 10 points..");
    
} else if (Alien_Color == "Red"){
    console.log("You earned 15 points..");
    
}

