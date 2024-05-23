// a for...in loop in JavaScript lets you loop through all the properties
// inside an object one by one.

const new_laptop = {
    price : 40,
    color : "White",
    company : "Apple"
}

for (const key in new_laptop) {
   console.log(`Key is ${key} and value is ${new_laptop[key]}`)
}