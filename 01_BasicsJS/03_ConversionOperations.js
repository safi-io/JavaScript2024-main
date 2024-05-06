    // Conversion being done from STRING TO NUMBER
let val = "1", val2 = "9";
let valInInt = Number(val);

    // Conversion being done from NUMBER TO BOOLEAN
let loggedIn = 0;
let BoolLoggedIn = Boolean(loggedIn);

    // Conversion being done from NUMBER TO STRING
let num = 1;
let stringNum = String(num);

let nums = (1+2+2) // expected output 5
let nums2 = ("1"+2+2) // expected output 122 (If first string, then there will be no operations perfomed on numbers).

let nums3 = (1+2+"2") // expected output 32 (If first numbers, then there will be operations performed on numbers).

// console.table([nums, nums2, nums3])

let gameCounter = 1;
console.log(gameCounter++); // Post-increment

console.log(++gameCounter); // Post-increment