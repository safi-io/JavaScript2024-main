{
    // Block Scope
    let a = 10
    const b = 20
    var c = 30 // Deprecated due to its scope issue
}

    // Understanding Scope through Nested Functions

function helloWorld() {
    let text = "WORLD";
    function helloEarth() {
        let context = "EARTH";
        console.log(text) // Will work, due to Global scope
    }
    // console.log(context) // Will not work, due to Local scope
    helloEarth();
}

helloWorld(); // Calling Main function..

    // Again Understanding Scope through Nested If-else

if(true) {
    let name = "safi"
    if(true) {
        let name2 = "Khan"
        console.log(name)
    }
    // console.log(name2) // Same as above
}

//+++++++++++++++++++++++++++++HOISTING+++++++++++++++++++++++++

isLoggedIn(); // It will work

function isLoggedIn() {
    console.log("Logged in FUNC 1")
}

isSignedUp(); // It will not work

let isSignedUp = function () {
    console.log("Signed up from FUNC 2")
}