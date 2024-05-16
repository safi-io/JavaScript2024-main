    // Making a function program that accepts two parameters and calculates their sum!
let num1 = 20, num2 = 30;
function add(num1, num2) { // Parameters
    return num1+num2;
}
let result = add() // Arguments..Func can be initlized to a Variable


    // Making a login Function

function isLoggedIn(username) { // Default Value can be username = "user"
    if(username === undefined) {
        console.log("Write a username :: ")
        return;
    }
    return `${username} just logged in`;
}

let result2 = isLoggedIn("safi")
