// Immediately Invoked Function Expressions +++ Called Implicity
// It maintains a clean global scope

// IIFE as a normal Function
(function addNums(num1,num2) {
    console.log(num1+num2)
})(1,2); // Semi-colon is preffered

// IIFE as a arrow Function
((num1,num2) => {
    console.log(num1+num2)
})(5,6);
