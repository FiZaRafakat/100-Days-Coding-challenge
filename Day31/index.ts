//*Question 91:* Create an array of your three favorite fruits and add a new fruit to the end of the array.

let favFruits : string[] = ["Mango","Apple","Grapes","Pomegranate"]

favFruits.push("Banana")
console.log(favFruits);

//*Question 92:* Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(array : T[]) : T | undefined{ // here <T> is a generic type => resusable content that work with variety of types.

            return array.pop()

}
removeLastElement(favFruits)
console.log(favFruits);

//*Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".


function replaceFruits(array : string[]):void{
            const index = array.indexOf("Grapes")

            if(index !== -1)array[index] = "Strawberry"
}

replaceFruits(favFruits)
console.log(favFruits);


