let asia_countries = ["Pakistan", "India", "China", "Bangladesh"]
let eur_countries = ["Germany","Netherlands", "Spain", "France"]

// CONCAT
console.log(asia_countries.concat(eur_countries)) // It will normally join two arrays

asia_countries.push(eur_countries) // It will add full array as single element
console.log(asia_countries[4][3]) // Expected Output:- France

// Spread Operator

let globe = [...asia_countries, ...eur_countries];
console.log(globe);

// Flat Method

console.log(asia_countries.flat(Infinity)) // Returns all sub-elements, infinity means to every level.

// IS Array Method
console.log(Array.isArray(asia_countries)) // Returns True if Argument is Array

// From Array Method
let greet = "morning"
let total = Array.from(greet); // Basically Converting String into a array
console.log(total)

// OF Arr Method
let fnlarr = Array.of(globe, greet, total) // Creates Arrays from Diffrent DataTypes
console.log(fnlarr)