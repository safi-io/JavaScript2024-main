    // Way to Initilize String
let val1 = "  Hel-lo", val2 = "World"

    // Template Literals
let final = `I am saying you ${val1} and also ${val2}.`

    // Using constructor to initlize String
let strings = new String("Safi Khan")

//----String Methods

    // 1. Upper Case
    console.log(strings.toUpperCase());

    // 2. Lower Case
    console.log(strings.toLowerCase());

    // 3. Find Length
    console.log(strings.length)

    // 4. Finding Index
    console.log(strings.charAt(5))

    // 5. Finding Character
    console.log(strings.indexOf("K"))

    // 6. Substring
    console.log(strings.substring(0,4))
    // First argument is the starting, and second is ending, Second in not included
    // and substring can't accept (-) values.

    // 7. Slice (Same as substring, but can accept (-) values.)
    console.log(strings.slice(-7,-2))
    // If the value is negative, then start of slice, will be from end of string.

    // 8. Trim (Remove white spaces from back and start)
    console.log(val1.trim());

    // 9. Replace
    let url = "https://google.com/picture%20safi.png";
    console.log(url.replace('%20', '-'));

    // 10. Includes
    console.log(url.includes('google')) // (Returns true if the portion is available in the string)

    // 11. Split
    let pro = val1.split('-'); // It will change string into arrays.
    console.log(typeof pro); // It will return object becuase it has been changed into array..