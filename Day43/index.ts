//*Question 127:* Convert a traditional function expression to an arrow function.

const traditionalFunction = function(a , b){
    return a + b;
}

const arrowFunction = (a,b)=> a + b ;

console.log(traditionalFunction(9,67));
console.log(arrowFunction(67,45));

console.log("\n*********************************");

//*Question 128:* Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multipleParameters = (...numbers : number[]) =>
    numbers.reduce((total , number)=>total * number,1)

console.log(multipleParameters(6,5));

console.log("\n*********************************");

//*Question 129:* Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
    value : "Difference in Traditional VS Arrow Function ....." ,
    traditional : function(){
           console.log("Traditional Function :",this.value);    
    },
    arrowFunction :() => {
        console.log("Arrow Function :",this.value); 
    }
};

traditionalVsArrow.traditional()
traditionalVsArrow.arrowFunction()

console.log("\n*********************************");