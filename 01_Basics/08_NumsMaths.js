
let age = 19
console.log(age)

let newAge = new Number(69.876)
console.log(newAge.toFixed(2)) // Fixed upto 2 points

let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
console.log(max, min)


// ++++++++++++++++++ MATHS ++++++++++++++++++

console.log(Math.abs(-10)) // Convert (-ve) to (+ve)
console.log(Math.round(4.98)) // Round off to the nearest
console.log(Math.floor(4.8)) // Round off to lowest
console.log(Math.ceil(4.8)) // Round off to highest


console.log(Math.random()) // Value 0-1
console.log(Math.random()*10) // To acheive 0-9
console.log((Math.random()*10)+1) // To ignore 0
console.log(Math.floor((Math.random()*10)+1)) // To Round off

let low = 5
let high = 10

console.log(Math.floor(Math.random()*(high-low+1)+low))
// To get only values between low and high numbers