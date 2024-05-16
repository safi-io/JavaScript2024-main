//  This Keyword

const new_laptop = {
    username : "SAFI",
    welcome : function() {
        console.log(`${this.username} :- Thanks for buying this device`);
    }
}

console.log(new_laptop.welcome());
new_laptop.username = "ASAD" // It will change due to this keyword
console.log(new_laptop.welcome());


//  +++++++++++++++++++++   Arrow Function   +++++++++++++++++++++

let addNums = (num1,num2) => {
    return num1+num2; // Explicit Return
}

let addNums2 = (num1,num2) => num1+num2 // Implicit Return Type 1
let addNums3 = (num1,num2) => (num1+num2) // Implicit Return Type 2
    // Paranthese are also used to pass an object in an function


console.log(addNums(1,2))
console.log(addNums2(1,4))
console.log(addNums3(3,4))