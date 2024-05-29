//*Question 19:* Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
var guests = ["Fiza", "Maheen", "Nazia", "Ansa", "Sana", "Anaya", "Anabya", "Shiza", "Hafsa"];
console.log("\nI am inviting ".concat(guests.length, " guests in dinner."));
console.log("\n------------------------------------------------------------------\n");
//*Question 20:* Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.
var countries = ["Pakistan", "Turkey", "Japan", "Switzerland", "Canada"];
console.log("Countries I'd like to visit : ", countries);
console.log("\n------------------------------------------------------------------\n");
//*Question 21:* Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    title: "Rich Dad and Poor Dad",
    authors: "Robert T.Kiyosaki and Sharon Lechter",
    yearPublished: 1997
};
console.log("\n".concat(book.title, " is a ").concat(book.yearPublished, " book written by ").concat(book.authors, ".\n"));
console.log("It advoctes the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.");
console.log("\n------------------------------------------------------------------\n");
