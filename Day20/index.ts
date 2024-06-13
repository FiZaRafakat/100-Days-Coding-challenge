//*Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function avgScoreCalculator(...score : number[]):number{
       let total = score.reduce((sum , score) => sum + score,0)
       return total/ score.length
}

console.log(avgScoreCalculator(7,9,4,3,2,1,10,12))

console.log("\n*********************************\n");

//*Question 59 : *  Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAder(valueToAdd : number): (number) => number{
 return function (number : number):number{
       return number + valueToAdd
 }          
}

let add100 = makeAder(100)
console.log(add100(50));

console.log("\n*********************************\n");

//*Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = (function(){
       let defaultName = "Fiza";
       let defaultAge = 20 ;

    return { 
       displayinfo : function(name = defaultName , age = defaultAge ){
              console.log(`Profile Info :
                                 Name : ${name}
                                 Age  : ${age}.`);
              
       }
    }
})()

userProfile.displayinfo()
console.log("\n*********************************\n");
userProfile.displayinfo("Maheen",19)
console.log("\n*********************************\n");
