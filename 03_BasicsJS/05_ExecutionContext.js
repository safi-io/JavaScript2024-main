    //  Execution context is concept that holds information about the environment within which the current code is being executed. It determines the scope, the value of this, and other variables that the code can access at any given point in time.

    // Types
        // 1. Global Execution Context
        // 2. Function / Functional Exeuction Context
        // 3. Eval Execution Context
    
    // Phases
        // 1. Memory Creation Phase (All variables are undefined, and function have a defination)
        // 2. Execution Phase (All Operations are being performed)

    // Every Function in JS, creates a new box (new Variable Environment) + thread, performs
    // creation and execution phase, then delete that when the work is complete!


//++++++++++++++++++++++++++++++++++++++++++++CALL STACK++++++++++++++++++++++++++++++++++++++++++
    // Call Stacks works on the LIFO princple (Last in, First Out)

function one() {
    console.log("one");
    two();
}
function two() {
    console.log("two");
    three();
}
function three() {
    console.log("three");
}

one();
two();
three();

// http://latentflip.com/loupe (Can be used to see working of Call Stack of Above Program)
