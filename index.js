var cc, year, month, dayOfMonth, dayOfBirth, day, gender, genderval;
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
var DD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

function myInput() {
    cc = parseInt(document.getElementById("cc").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("day-of-month").value);
}

function calculateDay() {
    myInput();
    dayOfBirth = (((cc / 4) - 2 * cc - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7;
    dayOfBirth -= 1;
    return (Math.floor(dayOfBirth));
    Console.log(dayOfBirth);
}
