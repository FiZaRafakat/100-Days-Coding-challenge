"use strict";
//*Question 97:* Write a function that returns the current date in the format "DD-MM-YYYY".
function currentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(currentDate());
//*Question 98:* Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysLeftInNewyear() {
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    const diff = nextYear.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return daysLeft;
}
console.log("Days Left In New Year : ", daysLeftInNewyear());
//*Question 99:* Generate a date object representing your next birthday and log it to the console.
//*Explain & TIP:* When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
function nextBirthday(month, date) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthday = new Date(currentYear, month - 1, date);
    if (birthday < today) {
        birthday.setFullYear(currentYear + 1);
    }
    return birthday;
}
console.log(nextBirthday(4, 11).toLocaleDateString());
