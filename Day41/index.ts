//*Question 121:* Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for(let i = 1 ; i <= 10 ; i ++){
    if(i === 5){
        continue;
    }
    console.log(i);
    
}

console.log("\n***********************************\n");

//*Question 122:* Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

let count : number = 10 ;

while(count > 0){
    if(count === 5){
        break;
    }
    console.log(count);
    count --;
}

console.log("\n***********************************\n");

//*Question 123:* Create a loop that iterates through a string and stops when it finds the first vowel.

function firstVowel(words : string):void{
       const vowels = "aeiouAEIOU"
       for(const char of words){
        if(vowels.includes(char)){
            console.log(`First Vowel Found : ${char}`);
            break; 
        }
        console.log(char);
       }
}
firstVowel('Fiza Rafakat')

console.log("\n***********************************\n");