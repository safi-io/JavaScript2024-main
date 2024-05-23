
    // For Of is used with iterables like arrays to iterate over values.

let numbers = [1,2,3,4,4,5];

for(let num of numbers) {
    // console.log(`The value is ${num}`)
}

let greetings = "Hello World!";

for(let greet of greetings) {
    // if(greet == " ") {
    //     continue;
    // }
    // console.log(greet)
}

    // Map

const fruits = new Map(); // Maps are also iterable through for Of
// They have uniques keys and remember their order

fruits.set("apples", 500);
fruits.set("bananas", 400);
fruits.set("mangos", 300);

for(let [fruit, values] of fruits) {
    console.log(fruit, ":" , values)
}