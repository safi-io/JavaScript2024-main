// Falsy
    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy
    // "0", 'false', " ", [], {}, function(){}  ... (All others are also Truthy)


// Nullish Coalescing Operator

let val1 = undefined ?? 10
let val2 = null ?? 100 // This operator will avoid Null and undefined values
console.log(val1, val2)

// Terniary Operator

// condition ? true : false

false == 0 ? console.log("Hello") : console.log("Bye")

