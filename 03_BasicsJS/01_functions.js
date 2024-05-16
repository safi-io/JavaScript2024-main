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

    // Rest Operator in JS

function returnNums(num1, ...nums) { // ... is used when we are unaware of how many arguments are being passed
    return nums;
}

let result3 = returnNums(5,4,5,3); // First argument will go in num1 and other in nums.

    // Passing Objects in Functions

const new_laptop = {
    model : "HP",
    price : 999
}

function objectHandler(anyObj) {
    return `Model of the Laptop is ${anyObj.model} and Price of the laptop is ${anyObj.price}`
}

let result4 = objectHandler(new_laptop)