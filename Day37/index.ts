//*Question 109:* Write an if statement that logs "Good Morning" if the current time is before 12 PM.

const currentTime = new Date()

if(currentTime.getHours() > 12){
    console.log("Good Morning"); 
}

//*Question 110:* Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grades(score : number):string{
 if(score >= 90){
    return "A"
 }else if(score >= 80){
    return "B"
 }else if(score >= 70){
    return "C"
 }else if(score >= 60){
    return "D"
 }else {
    return "F"
 }
}

console.log(grades(89));

//*Question 111:* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function categorizeAgeGroups(age : number):string{
    if(age < 13){
        return "Child"
    }else if (age < 19){
        return "Teenager"
    }else {
        return "Adult"
    }
}

console.log(categorizeAgeGroups(34));
console.log(categorizeAgeGroups(11));
console.log(categorizeAgeGroups(18));
