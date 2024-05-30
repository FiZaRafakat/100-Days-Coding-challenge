//*Question 40:* Album: Create objects for music albums.

console.log("\n********************************************\n");

function Album(artist : string , title : string , tracks? : number ){
     let album = { artist , title };
          if(tracks){
            album["tracks"] = tracks ;
          }
          return album ;
     }

     console.log(Album("Artist One","Album One"));
     console.log(Album("Artist Two","Album Two"));
     console.log(Album("Artist Three","Album Three",20));

     console.log("\n********************************************\n");
       
//*Question 41:* Magicians: Display magician names from an array.

let magician = ["Alice","David","Chris"]

function Magicians(){
    magician.forEach(magicians => console.log(magicians))
}
Magicians()

console.log("\n********************************************\n");

//*Question 42:* Great Magicians: Add "the Great" to magician names.

function Great_Magicians(){
    magician.forEach(magicians => console.log(`The Great ${magicians}`))
}
Great_Magicians()

console.log("\n********************************************\n");
