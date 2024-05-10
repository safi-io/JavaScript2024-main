// // Methods to Initiliaze Arrys
const Arr = [1, 2, 3, 4, 5, "true", "safi"]
const Arr2 = new Array("Pakistan", "India", "China")

// Arrays Methods
Arr.push(69) // Adds Elements to end of arr
Arr.pop() // Removes Elements from end of arr

Arr.unshift(123) // Adds Elements to start of arr
Arr.shift() // Removes Elemets from start of arr

console.log(Arr.includes("safi")); // Returns 1 if element is available

console.log(Arr.indexOf("safi")) // Returns Index of given data

const Arr3 = Arr.join(); // Converts Arryas into Strings

// Slice and Splice

let na1 = Arr.slice(0,2); // 2nd parameter element will be exculded and original arr will stay same
console.table([Arr, na1]);

let na2 = Arr.splice(5,2); // Original arr will be of remaning elements and first arg. will be starting, and second arg, will tel how many elemets to be removed.
console.table([Arr, na2]);