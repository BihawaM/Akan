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

function check() {
    var genderval = document.getElementsByName("optradio");
    if (genderval[0].checked == true) {
        gender = "male";
    } else if (genderval[1].checked == true) {
        gender = "female";
    } else {
        // console.log("radios are check");
    }
    switch (gender) {
        case gender = "male":
            if (day == 0) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[0] + " Your name is " + maleName[0];
            } else if (day == 1) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[1] + " Your name is " + maleName[1];
            } else if (day == 2) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[2] + " Your name is " + maleName[2];
            } else if (day == 3) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[3] + " Your name is " + maleName[3];
            } else if (day == 4) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[4] + " Your name is " + maleName[4];
            } else if (day == 5) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[5] + " Your name is " + maleName[5];
            } else if (day == 6) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[6] + " Your name is " + maleName[6];
            } else {
                // console.log("pass");
            }
            break;
        case gender = "female":
            if (day == 0) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[0] + " Your name is " + femaleName[0];
            } else if (day == 1) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[1] + " Your name is " + femaleName[1];
            } else if (day == 2) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[2] + " Your name is " + femaleName[2];
            } else if (day == 3) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[3] + " Your name is " + femaleName[3];
            } else if (day == 4) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[4] + " Your name is " + femaleName[4];
            } else if (day == 5) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[5] + " Your name is " + femaleName[5];
            } else if (day == 6) {
                document.getElementById("result").innerHTML = " Since you were born on " + DD[6] + " Your name is " + femaleName[6];
            } else {
                // alert("pass");
            }
            break;
        default:
            // console.log("go");

    }
}

