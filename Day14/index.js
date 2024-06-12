//*Question 40:* Album: Create objects for music albums.
console.log("\n********************************************\n");
function Album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(Album("Artist One", "Album One"));
console.log(Album("Artist Two", "Album Two"));
console.log(Album("Artist Three", "Album Three", 20));
console.log("\n********************************************\n");
//*Question 41:* Magicians: Display magician names from an array.
var magician = ["Alice", "David", "Chris"];
function Magicians(magician) {
    magician.forEach(function (magicians) { return console.log(magicians); });
}
Magicians(magician);
console.log("\n********************************************\n");
//*Question 42:* Great Magicians: Add "the Great" to magician names.
function greatMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
greatMagicians(magician);
console.log("\n********************************************\n");
