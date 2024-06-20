//*Question 118:* Write a loop that logs numbers from 1 to 10 to the console.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
//* Create a while loop that logs "Hello, World!" 5 times.
var count = 0;
while (count < 5) {
    console.log("Hello World !!!!");
    count++;
}
//*Question 120:* Use a for...of loop to iterate through an array of your favorite movies and log each one.
var favMovies = ["Interception", "Kuch Kuch Hota hai", "Dilwaly"];
for (var _i = 0, favMovies_1 = favMovies; _i < favMovies_1.length; _i++) {
    var movies = favMovies_1[_i];
    console.log(movies);
}
