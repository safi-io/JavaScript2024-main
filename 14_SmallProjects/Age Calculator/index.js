let dateData = document.querySelector("#date");
dateData.max = new Date().toISOString().split("T")[0]; // Setting attribute for maximum Date

let button = document.querySelector("#btn");
let paragraph = document.querySelector("#age");

let userYear, userMonth, userDate;

button.addEventListener("click", () => {

    if(dateData.value==="") {
        alert("Please input DOB...");
        return;
    }
    let userAge = dateData.value;
    // Getting User input
    userYear = Number(userAge.substring(0,4));
    userMonth = Number(userAge.substring(5,7));
    userDate = Number(userAge.substring(8,10));

    ageCalc();
})

// Getting Present Date
let date = new Date();

let presentYear = date.getFullYear();
let presentMonth = date.getMonth()+1;
let presentDate = date.getDate();

function ageCalc() {
    // Calculating Diffrences
    let year, month, date;
    year = presentYear-userYear;

    if(presentMonth >= userMonth) {
        month = presentMonth - userMonth;
    }else {
        year--;
        month = 12+(presentMonth - userMonth);
    }

    if(presentDate >= userDate) {
        date = presentDate - userDate;
    }else {
        month--;
        date = daysInMonth(userYear, userMonth) + (presentDate - userDate);
    }

    paragraph.innerHTML = `You are ${year} years, ${month} months, and ${date} days old.`;
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate(); // Returning Last Date of Month
}