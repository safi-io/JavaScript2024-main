// Basic Comparison Operators
console.log(2>1); // expected true
console.log(2>=1); // expected true

console.log(2<1); // expected false
console.log(2<=1); // expected false

console.log(2==1); // expected false
console.log(2!=1); // expected true

/*
Avoid to use comparison between
diffrent data types, as they
will create confusion
*/

// Strict check
console.log("2" == 2); // expected true
console.log("2" === 2); // expected false